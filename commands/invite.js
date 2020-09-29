const { MessageEmbed } = require("discord.js");
const OFFGUILD = "https://discord.gg/TApdfmN";
const OFF = "https://qiwi.me/rainbow-bot";
const inviteLink ="https://discordapp.com/oauth2/authorize?client_id=636604672399900683&scope=bot&permissions=2146958847";
const gg = "http://holobot.xyz/";
module.exports = {
  name: "invite",
  description: "Пригласить бота на свой сервер.",
  execute(message, client) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setColor('A8FF4D')
    //.setFooter(`Всего комманд: ${client.commands.size}`)
   // .addField(`**<a:02:636617968012230667>${bot.username}**`, `**🌐 | Серверов: ${bot.guilds.toLocaleString()}\n👥 | Пользователей: ${bot.users.toLocaleString()}**\n**🗨 | Каналов: ${bot.channels.toLocaleString()}**\n**⚙ | Кол-во команд: ${bot.commands.toLocaleString()}**\n\n***<a:06:636618176758808576>[Пригласить бота](${inviteLink})<a:06:636618176758808576>\n\n<a:21:636622767206432802>[Официальный сервер](${OFFGUILD})<a:20:636622743672193054> \n\n <a:38:637697489629216798>[Голосовать за бота](${gg})<a:35:637653395540279296> \n\n<a:43:639764598139912192>[Поддержка cоздателя](${OFF})<a:46:639767554696675328>***`)
        
   .setDescription(`***<a:06:636618176758808576>[Пригласить бота](${inviteLink})<a:06:636618176758808576>\n\n<a:21:636622767206432802>[Официальный сервер](${OFFGUILD})<a:20:636622743672193054> \n\n <a:38:637697489629216798>[Сайт бота](${gg})<a:35:637653395540279296> \n\n<a:43:639764598139912192>[Поддержка cоздателя](${OFF})<a:46:639767554696675328>***`)
  
    

    helpEmbed.setTimestamp();
    return message.channel.send(helpEmbed).catch(console.error);
  }
};
