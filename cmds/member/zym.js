const Discord = require("discord.js");
module.exports.run = (bot, message, args) => {
 // if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("__**У вас нет прав!**__").then(msg => msg.delete(5*1000));
  //if(message.author.id !== '521315512504811520')return message.channel.send("__**У вас нет прав!**__").then(msg => msg.delete(5*1000));
    let onef = Math.round((Math.random() * (5 - 1) + 1))
    let twof = Math.round((Math.random() * (15 - 10) + 10))
    let threef = Math.round((Math.random() * (25 - 20) + 20))
    let nef = Math.round((Math.random() * (35 - 30) + 32))
    let znef = Math.round((Math.random() * (45 - 40) + 40))
    let xnef = Math.round((Math.random() * (55 - 50) + 50))
    let cnef = Math.round((Math.random() * (65 - 60) + 60))
    let vnef = Math.round((Math.random() * (75 - 70) + 70))
    let bnef = Math.round((Math.random() * (85 - 80) + 80))
    let nnef = Math.round((Math.random() * (94 - 90) + 90))
    let mnef = Math.round((Math.random() * (99 - 95) + 94))
    let lnef = Math.round((Math.random() * (100 - 100) + 100))
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let a = message.author;
    let ddos = args.join(" ")
    bot.send(`Начинаем взлом на ${ddos}`);
    setTimeout(bot.send, 1000, `Loading…[][][][][][][][][][]${onef}%`)
    setTimeout(bot.send, 5000, `Loading…█[][][][][][][][][]${twof}%`)
    setTimeout(bot.send, 10000,`Loading…██[][][][][][][][]${threef}%`)
    setTimeout(bot.send, 15000,  `Loading…███[][][][][][][]${znef}%`)
    setTimeout(bot.send, 20000, `Loading…████[][][][][][]${xnef}%`)
    setTimeout(bot.send, 22000, `Loading…█████[][][][][]${cnef}%`)
    setTimeout(bot.send, 26000, `Loading…██████[][][][]${vnef}%`)
    setTimeout(bot.send, 30000, `Loading…███████[][][]${bnef}%`)
    setTimeout(bot.send, 35000, `Loading…████████[][]${nnef}%`)
    setTimeout(bot.send, 40000, `Loading…█████████[]${mnef}%`)
    setTimeout(bot.send, 50000, `Loading…██████████${lnef}%`)
  let embed = new Discord.RichEmbed()
.setDescription(`Скачать данные▶[Ссылка](https://cdn.discordapp.com/attachments/612996492956925989/639871563084070913/tumblr_nhtg6xaPbv1sk6x9qo1_500.gif)`);
setTimeout(bot.send, 55000, embed)
}
module.exports.help = {
	aliases: [],
    name: "zym",
    category: "info"
};