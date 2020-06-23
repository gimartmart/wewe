const Discord = require('discord.js')
const { RichEmbed } = require("discord.js");
module.exports.run = async(bot, message, args) => {
    var result = Math.floor(-100 + Math.random() * (200))
    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!hugUser) {
        
        message.channel.send(
            new RichEmbed().setColor(0xffffff).setTitle(` На сколько гей?`).setDescription(`${message.author.username} на ${result}/100 гей! `)
            
        )
    } else {
        
        message.channel.send(
            new RichEmbed().setColor(0xffffff).setTitle(` На сколько гей?`).setDescription(` ${message.mentions.members.first().displayName} на ${result}/100 гей!  `)
        )
    }
  message.delete().catch(O_o => {});
}

module.exports.help = {
	aliases: [],
    name: 'gay',
    category: "ang"
}