//const {config} = require("../config.json");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "p",
  //aliases: ["p"],
  //description: "Список команд и их описание.",
  execute(message, args, lang) {
  //  if (config.blok)return message.channel.send("<a:03:636618020822712331>Приносим свои извинения,команды были отключены на технические работы.<a:44:639764661486485524>")
    let helpEmbed = new MessageEmbed()
        .addField('Значок',`${message.author.flags.toArray()}`,false) 
        .setColor('#FF0000')
    message.delete().catch();
    message.channel.send(helpEmbed)
  }
}