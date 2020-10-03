require('./prtotype.js');
const { Client, Collection, Discord } = require("discord.js");
const { readdirSync, fs } = require("fs");
const { join } = require("path");
const { clearLine } = require("readline");
const Language = require('./util/Language.js');

const { TOKEN, PREFIX, config} = require("./config.json");
//const Constants = require('discord.js/src/util/Constants.js');
//Constants.DefaultOptions.ws.properties.$browser = `Discord Android` //or Discord iOS
const client = new Client({ disableMentions: "everyone" });
/*
		"": "",
		"": "",
		"": "",
		"": "",
		"": ""
*/
client.login(TOKEN);
client.commands = new Collection();
client.prefix = PREFIX;
client.queue = new Map();
const cooldowns = new Collection();

/**
 * Client Events
 */

 
client.on("ready", () => {
  console.log(`Запустился бот ${client.user.username}`);
  client.user.setPresence({ activity: { name: `${PREFIX}help` , type: 'LISTENING'}, status: 'idle' })
  //(PLAYING, - играть) (WATCHING, - смотреть) (LISTENING - слушать) (STREAMING - стрим) (STREAMING,url: 'https://twitch.tv/twitch')
});

client.on("warn", (info) => console.log(info));
client.on("error", console.error);

/**
 * Import all commands
 */
const commandFiles = readdirSync(join(__dirname, "commands")).filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(join(__dirname, "commands", `${file}`));
  client.commands.set(command.name, command);
  
}

client.on("message", async (message) => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(PREFIX))return;
  const args = message.content.slice(PREFIX.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command = client.commands.get(commandName) || client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) return;

  if (!cooldowns.has(command.name)) cooldowns.set(command.name, new Collection());

  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 1) * 1000;
  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
    

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.reply(
        `please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`
      );
    }
  }

  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
  const lang = new Language(message.guild.lang, commandName);
  try {
    command.execute(message, args, lang);
  } catch (error) {
    console.error(error);
    message.reply("При выполнении этой команды произошла ошибка.").catch(console.error);
  }
})
.on("message", message => {
  if (
    message.mentions.users.size > 0 &&
    message.mentions.users.first().id === client.user.id
  ) {
    message.reply(`приветик<a:26:636624686956019742>, если тебе нужна моя помощь, напиши в чате **${PREFIX}help.**`);
  }
});