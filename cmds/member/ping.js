const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot,message,args) => {

    const m = await message.channel.send("Ping?");
    m.edit("Pong");
    let a = message.author;
    let embed = new Discord.RichEmbed()
    .setColor('#10c7e2')
    .addField("Задержка ответа",`${m.createdTimestamp - message.createdTimestamp}ms.`)
    .addField("Задержка Бота",`${Math.round(bot.ping)}ms`)
    .setFooter("by " + `${a.username}`, a.avatarURL);

    bot.send(embed);
    

};
module.exports.help = {
	aliases: [],
    name: "ping",
    category: "info"
};