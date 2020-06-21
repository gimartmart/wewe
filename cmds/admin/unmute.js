const Discord = require("discord.js");
const ms = require("ms");
let config = require("../../botconfig.json");
module.exports.run = async (bot, message, args) => {
  let userid = config.userid
  if ((!message.member.hasPermission("MANAGE_MESSAGES")) && !userid.includes(message.author.id))
      return message.channel.send("__**У вас нет прав!**__").then(msg => msg.delete(5*1000));
  // const modlog = message.guild.channels.find(channel => channel.name === 'logs');
  const mod = message.author;
  const user = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  if (!user) return message.channel.send("Вы не указали пользователя!");
  if (!user.roles.find(r => r.name === "Muted"))
    return message.channel.send("Данный пользователь не находится в муте!");
  let muterole = message.guild.roles.find(r => r.name === "Muted");
  if (args[0] == "help") {
    message.reply("Usage: *unmute <user>");
    return;
  }
  //  let muteChannel = message.guild.channels.find(`name`, "logs");
  //  if (!muteChannel) return message.channel.send('**Please create a channel with the name `logs`**')

  if (!muterole) {
    try {
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#000000",
        permissions: []
      });
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    } catch (e) {
      console.log(e.stack);
    }
  }

  if (!bot.mutes.has(user.id)) return message.channel.send("Он не в муте");
  else bot.mutes.delete(user.id);
  user.removeRole(muterole.id);
  const muteembed2 = new Discord.RichEmbed()
    .setAuthor(
      "UnMute",
      `https://images-ext-2.discordapp.net/external/wKCsnOcnlBoNk-__BXsd6BrO6YddfUB-MtmaoaMxeHc/https/lh3.googleusercontent.com/Z5yhBQBJTSJVe5veJgaK-9p29hXm7Kv8LKF2oN0hDnsToj4wTcQbirR94XVpH4Lt5a5d%3Dw300`
    )
    .addField("Администратор", `${mod}`)
    .addField("Размутил", `<@${user.id}>`)
    .setColor("#0d05ff");
  message.channel.send(muteembed2);
};

module.exports.help = {
  aliases: [],
  name: "unmute",
  category: "admin"
};
