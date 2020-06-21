const Discord = require('discord.js')

module.exports.run = async(client, message, args) => {
    let member = message.guild.member(message.mentions.users.array()[0] || message.guild.members.get(args[0]))
    let member2 = message.guild.member(message.mentions.users.array()[1] || message.guild.members.get(args[1]))
    var s = message.author
    if (member2) {
        var s = member2.user
    }
    if (!member) {
        const embed = new Discord.RichEmbed()
            .setDescription(`Отметьте кого-то, чтобы измерить`)
            .setColor("RANDOM")
            .setTimestamp()
        message.channel.send({ embed })
        return
    }

    var anasonuc = Math.floor(Math.random() * 101)
    var kalp = ''
    var akalp = ''
    if (Math.floor(Math.round(anasonuc / 10) * 10) >= 10) {
        var c = 0
        for (var i = 0; i < Math.floor(Math.round(anasonuc / 10)); i++) {
            kalp += '❤️'
            c++
        }
        for (var x = c; x < 10; x++) {
            akalp += `🖤`
        }
    } else {
        var kalp = '🖤'
        var akalp = '🖤🖤🖤🖤🖤🖤🖤🖤🖤'
    }
    var yorum = `Давай поженимся <3`
    if (anasonuc < 80) {
        var yorum = 'Вы можете начать встечаться :)'
    }
    if (anasonuc < 60) {
        var yorum = 'Ну немного как то там,любви'
    }
    if (anasonuc < 40) {
        var yorum = 'Он  что-то чувствует к тебе :)'
    }
    if (anasonuc < 20) {
        var yorum = 'Забудь об этом!'
    }
    const embed = new Discord.RichEmbed()
        .setAuthor(`${member.user.tag} | ${s.tag}`)
        .setDescription(` Любовь: ${anasonuc}%\n${kalp}${akalp}\n\n${yorum}`)
        .setColor("RANDOM")
        .setTimestamp()
    message.channel.send({ embed })
}


module.exports.help = {
	aliases: [],
    name: "love",
    category: "ang"
};