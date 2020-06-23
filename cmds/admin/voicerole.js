const Discord = require("discord.js");
let config = require("../../botconfig.json");
let prefix = config.prefix;

module.exports.run = async (bot, message, args) => {
  let userid = config.userid
  if ((!message.member.hasPermission("ADMINISTRATOR")) && !userid.includes(message.author.id))
      return message.channel.send("__**У вас нет прав!**__").then(msg => msg.delete(5*1000));
  const role = message.mentions.roles.first()
  if(!role) return message.channel.send("Вы не указали роль")
  bot.settings.ensure(message.guild.id, {})
  bot.settings.set(message.guild.id, role.id, "voiceRole")
};

module.exports.help = {
  name: "voicerole",
  aliases: [],
  category: "admin"
};
