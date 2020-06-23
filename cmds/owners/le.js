const Discord = require('discord.js');
let config = require("../../botconfig.json");
module.exports.run = async(bot, message, args) => {
    var member = message.member;
    let ownerid = config.ownerid            
if(!ownerid.includes(message.author.id)) return message.member.send("__**У вас нет прав!**__").then(msg => msg.delete(5*1000));
        let g = args.join(" ")
        if(!g) return message.reply('а где ID...')
        if(!bot.guilds.get(g)) return message.reply("таких не знаем...")
        bot.guilds.get(g).leave().then(() => {
            message.member.send('-сервер с ID:' + ` ${g} `)
        })
}
module.exports.help = {
	aliases: [],
    name: "le"
};