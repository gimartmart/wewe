const Discord = require("discord.js");
const ms = require("ms");
let config = require("../../botconfig.json");
module.exports.run = async (bot, message, args) => {
  //!tempmute @user 1s/m/h/d

  const tomute = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  if (!tomute) return message.reply("Вы не указали пользователя!");
  const reason = args.slice(2).join(" ");
  // if(!args[0]) return bot.send("Вы не указали пользователя!");
  if (!tomute)
    return message.channel.send("Укажите существующего пользователя!");
  const mod = message.author;
  let userid = config.userid;
  if (
    !message.member.hasPermission("MANAGE_ROLES") &&
    !userid.includes(message.author.id)
  )
    return message.channel
      .send("__**У вас нет прав!**__")
      .then(msg => msg.delete(5 * 1000));
  //if(tomute.hasPermission("ADMINISTRATOR")) return message.channel.send("У данного пользователя есть права администратора");
  // const modlog = message.guild.channels.find(channel => channel.name === 'logs');
  let muterole = message.guild.roles.find(r => r.name === "Muted");
  //start of create role
  //let muteChannel = message.guild.channels.find(`name`, "logs");
  //if (!muteChannel) return message.channel.send('**Please create a channel with the name `logs`**')
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
  //end of create role
  let mutetime = args[1];
  if (!mutetime) return message.reply("Вы не указали время! <1s 2m 3h 4d>");

  await tomute.addRole(muterole.id);
  bot.mutes.set(tomute.id, {
    guild: message.guild.id,
    time: Date.now() + ms(mutetime)
  });

  const muteembed = new Discord.RichEmbed()
    .setAuthor(
      "Mute",
      `https://images-ext-2.discordapp.net/external/Wms63jAyNOxNHtfUpS1EpRAQer2UT0nOsFaWlnDdR3M/https/image.flaticon.com/icons/png/128/148/148757.png`
    )
    .addField("Администратор", `${mod}`)
    .addField("Замутил", `<@${tomute.id}>`)
    .addField("Время", `${ms(ms(mutetime))}`)
    .addField("Причина", `${reason.length === 0 ? "Нету" : reason}`)
    .setColor("#0d05ff");
  //  .setFooter("Made By Flasink", "https://cdn.discordapp.com/avatars/453870812311584779/72734a7ab1876a3d63e565e70f378fc2.png?size=2048")
  message.channel.send(muteembed);
};

module.exports.help = {
  aliases: [],
  name: "mute",
  category: "admin"
};
