const Discord = require("discord.js")
const superagent = require("superagent")


module.exports.run = async (bot,message,args) => {
    if(!message.channel.nsfw) return bot.send('Перейдите на NSFW канал')
    let msg = await message.channel.send("Загрузка...")
    let { body } = await superagent
        .get('https://nekos.life/api/v2/img/trap')
    if (!{ body }) return message.channel.send("Ой,тут какая-то ошибка.Может попробуешь ещё раз?^^")

    let hEmbed = new Discord.RichEmbed()
        .setImage(body.url)

    message.channel.send({ embed: hEmbed })

    msg.delete();
}


module.exports.help = {
	aliases: [],
    name: "trap",
    category: "nsfw"
}