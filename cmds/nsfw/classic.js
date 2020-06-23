const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (bot, message, args) => {
    try {
        if(!message.channel.nsfw) return bot.send('Перейдите на NSFW канал')
        let msg = await message.channel.send("Загрузка...")
        const { body } = await superagent
            .get("https://nekos.life/api/v2/img/classic");
            if (!{ body }) return message.channel.send("Ой,тут какая-то ошибка.Может попробуешь ещё раз?^^")
        const embed = new Discord.RichEmbed()
            .setColor("#FF30A2")
            .setImage(body.url)
        message.channel.send(embed)
    } catch (err) {
        bot.logsErr(err)
    }
};



module.exports.help = {
	aliases: [],
    name: 'classic',
    category: "nsfw"
}; 