const Discord = require("discord.js");
let config = require("../../botconfig.json");
let prefix = config.prefix;
//let serverid = config.serverid
exports.run = async (bot, message, args) => {
  let serverid = config.serverid
  let member = message.member;
  let userid = config.userid
  //if (!serverid.includes(member.guild.id) && !userid.includes(message.author.id)) return message.channel.send("Оформите premium");
  if ((!message.member.hasPermission("ADMINISTRATOR")) && !userid.includes(message.author.id))
    return message.channel.send('У вас нeт прав!')
//  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("__**У вас нет прав!**__").then(msg => msg.delete(5*1000));
  if (!args[0] || args[0 == "help"]) return message.reply("Чтобы изменить тип префикса: " + `${prefix}` + "prefix ; (например ;)");

  bot.prefixes.set(message.guild.id, args[0])

  let sEmbed = new Discord.RichEmbed()
    .setColor("36393e")
    .setDescription(" ``Ваш новый префикс:``" + ` **${args[0]}**`)
  //.setTitle("``Ваш префикс``" + ` **${args[0]}**`+ " ``изменен на:``" + ` **${prefix}**`);

  message.channel.send(sEmbed);

}

module.exports.help = {
  aliases: [],
  name: "setprefix",
  category: "admin"
};