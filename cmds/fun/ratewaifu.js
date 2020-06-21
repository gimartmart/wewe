const Discord = require('discord.js')
const { RichEmbed } = require("discord.js");
module.exports.run = async(bot, message, args) => {
    var result = Math.floor(Math.random() * 100)
    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!hugUser) {
        message.channel.send(
            new RichEmbed().setColor(0xffffff).setTitle(`Я оцениваю этого пользователя  ${message.author.username} как вайфу на ${result}/100`)
        )
    } else {
        message.channel.send(
            new RichEmbed().setColor(0xffffff).setTitle(`Я оцениваю этого пользователя ${message.mentions.members.first().displayName} как вайфу на ${result}/100  `)
        )
    }
}

module.exports.help = {
	aliases: [],
    name: 'ratewaifu',
    category: "fun"
}
