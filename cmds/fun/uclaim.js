const Discord = module.require("discord.js");


module.exports.run = async(bot, message, args) => {
    function randomIntInc(low, high) {
        return Math.floor(Math.random() * (high - low + 1) + low);
    }
    let user = message.mentions.users.first() || message.author;
    let a = randomIntInc(-100, 5000)
    let embed = new Discord.RichEmbed()
        .addField("ᅠᅠᅠ", `Этот пользователь  ${user.username} стоит ${a} доларов `)
        .setColor("#ff91a9")
        .setThumbnail(user.displayAvatarURL)

    message.channel.send(embed);
}

module.exports.help = {
	aliases: [],
    name: "uclaim",
    category: "fun"
}
