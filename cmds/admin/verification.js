const Discord = module.require("discord.js");
let config = require("../../botconfig.json");
let prefix = config.prefix;

module.exports.run = async (bot, message, args) => {
  try {
    let userid = config.userid
    if ((!message.member.hasPermission("ADMINISTRATOR")) && !userid.includes(message.author.id))
        return message.channel.send("__**У вас нет прав!**__").then(msg => msg.delete(5*1000));
    message.guild.channels.forEach(async channel => {
      channel.overwritePermissions(message.guild.defaultRole, {
        VIEW_CHANNEL: false
      });
    });
    message.channel.overwritePermissions(message.guild.defaultRole, {
      VIEW_CHANNEL: true,
      SEND_MESSAGES: false
    });
    let verifyRole = await message.guild.createRole({
      name: "Verified",
      color: "#000000"
    });
    message.guild.channels.forEach(async (channel, id) => {
      await channel.overwritePermissions(verifyRole, {
        VIEW_CHANNEL: true
      });
    });
    message.channel.overwritePermissions(verifyRole, {
      VIEW_CHANNEL: false
    });
    const verMessage = await message.channel.send(
      new Discord.RichEmbed()
        .setColor("2CE871")
        .setTitle(
          `Добро пожаловать на ${message.guild.name}\nДля доступа на сервер нажмите ✅`
        )
    );
    verMessage.react("✅")
    bot.settings.ensure(message.guild.id, {})
    bot.settings.set(message.guild.id, {channel: message.channel.id, role: verifyRole.id, msg: verMessage.id})
  } catch (err) {}
};
module.exports.help = {
  name: "verification",
  aliases: [],
  category: "admin"
};
