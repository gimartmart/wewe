const Discord = require("discord.js");
let config = require("../../botconfig.json");
module.exports.run = async (bot, message, args) => {
 let userid = config.userid
        if ((!message.member.hasPermission("ADMINISTRATOR")) && !userid.includes(message.author.id))
            return message.channel.send("__**У вас нет прав!**__").then(msg => msg.delete(5*1000));
  if(!args[0] || args[0 == "help"]) return message.reply("Выберете один из пунктов channel или user!");
    let random = new Discord.RichEmbed()
    .setColor("#33353C")
    if(args[0] == "channel"){
        var channel = message.guild.channels.random();
         random.setDescription(`**Канал:** ${channel}\n**ID Канала:** ${channel.id}`)
         bot.send(random)
    } else if(args[0] == "user"){
var user = message.guild.members.random();
random.setDescription(`**Пользователь: ${user.user}**\n**ID Пользователя:**${user.id}`)
         bot.send(random)
    }

}
module.exports.help = {
	aliases: [],
  name: "user-chat",
  category: "admin"
}