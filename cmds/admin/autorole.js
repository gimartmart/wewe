const Discord = require("discord.js");
let config = require("../../botconfig.json");
let prefix = config.prefix;

module.exports.run = async (bot, message, args) => {
  try {
    let userid = config.userid;
    if (
      !message.member.hasPermission("MANAGE_ROLES") &&
      !userid.includes(message.author.id)
    )
      return message.channel
        .send("__**У вас нет прав!**__")
        .then(msg => msg.delete(5 * 1000));
    let autoroleEmbed = new Discord.RichEmbed()
      .setColor("7FFFD4")
      .setTitle("Автороли");
    if (!args[0]) {
      return message.channel.send(autoroleEmbed);
    }
    let roles = message.mentions.roles;
    if (roles.size === 0) {
      return message.channel.send(autoroleEmbed);
    }
    bot.settings.ensure(message.guild.id, {})
    bot.settings.set(message.guild.id, roles.map(r => r.id ? r.id : null).filter(r => r), "autoRoles")
    autoroleEmbed.addField(
      message.author.tag,
      `**Роль ${roles.map(r => r.name).join(" ")} установлены как автороль**`
    );

    message.channel.send(autoroleEmbed);
  } catch (err) {}
};
module.exports.help = {
  name: "autorole",
  aliases: [],
  category: "admin"
};
