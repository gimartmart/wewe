const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
function randomIntInc(low, high) {
            return Math.floor(Math.random() * (high - low + 1) + low);
        }
        let user = message.mentions.users.first() || message.author;
let a = randomIntInc(0, 100)
       let embed = new Discord.RichEmbed()
       .addField("❤ Рейтинг сэксуальности ❤", `${user.username} сексуален на ${a} / 100%`)
       .setColor("#ff91a9")
        .setThumbnail(user.displayAvatarURL)

       message.channel.send(embed);
}
module.exports.help = {
	aliases: [],
    name: "sexuality",
    category: "ang"
}