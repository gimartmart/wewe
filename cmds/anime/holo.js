const superagent = require("superagent")
const Discord = require("discord.js")


module.exports.run = async (bot,message,args) => {
    let msg = await message.channel.send("Загрузка...")
    let { body } = await superagent
        .get('https://nekos.life/api/v2/img/holo')
    if (!{ body }) return message.channel.send("Ой,тут какая-то ошибка.Может попробуешь ещё раз?^^")

    let hEmbed = new Discord.RichEmbed()
        .setImage(body.url)

    message.channel.send({ embed: hEmbed })
message.delete().catch();
    msg.delete();
}


module.exports.help = {
	aliases: [],
    name: "holo",
    category: "anime"
}