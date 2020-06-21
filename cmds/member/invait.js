const Discord = module.require("discord.js");
const OFFGUILD = "https://discord.gg/JGbnF7v";
const OFF = "https://qiwi.me/rainbow-bot";
const inviteLink ="https://discordapp.com/oauth2/authorize?client_id=557958160514547717&scope=bot&permissions=2146958847";
const gg = "https://bots.server-discord.com/557958160514547717";
module.exports.run = async (bot, message, args) => {

        let inviteEmbed = new Discord.RichEmbed()
            .setColor('A8FF4D')
.addField(`**<a:02:636617968012230667>${bot.user.username}**`, `**🌐 | Серверов: ${bot.guilds.size.toLocaleString()}\n👥 | Пользователей: ${bot.users.size.toLocaleString()}**\n**🗨 | Каналов: ${bot.channels.size.toLocaleString()}**\n**⚙ | Кол-во команд: ${bot.commands.size.toLocaleString()}**\n\n***<a:06:636618176758808576>[Пригласить бота](${inviteLink})<a:06:636618176758808576>\n\n<a:21:636622767206432802>[Официальный сервер](${OFFGUILD})<a:20:636622743672193054> \n\n <a:38:637697489629216798>[Голосовать за бота](${gg})<a:35:637653395540279296> \n\n<a:43:639764598139912192>[Поддержка cоздателя](${OFF})<a:46:639767554696675328>***`)
        message.channel.send(inviteEmbed)
};
/*
<a:45:639764768021938176>
<a:38:637697489629216798>
<a:35:637653395540279296>
<a:16:636622189159907350>
*/
module.exports.help = {
  aliases: [],
    name: 'invite',
    category: "info"
}; 
