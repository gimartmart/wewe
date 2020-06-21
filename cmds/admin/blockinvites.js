const Discord = require('discord.js');
let config = require("../../botconfig.json");
let prefix = config.prefix;

module.exports.run = async (bot, message, args) => {
  let userid = config.userid
  if ((!message.member.hasPermission("MANAGE_MESSAGES")) && !userid.includes(message.author.id))
      return message.channel.send("__**У вас нет прав!**__").then(msg => msg.delete(5*1000));;
  //(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite)\/.+[a-z]/g
  if(args.length === 0) return message.channel.send("Укажи вкл или выкл")
  if(!["вкл", "выкл"].includes(args[0].toLowerCase())) return message.channel.send("Укажи вкл или выкл")
  bot.settings.ensure(message.guild.id, {})
  if(args[0].toLowerCase() === "вкл") {
    bot.settings.set(message.guild.id, true, "anti")
  } else {
    bot.settings.set(message.guild.id, false, "anti")
  }
}
module.exports.help = {
    name: 'blockinvites',
    aliases: [],
    category: "admin"
}
