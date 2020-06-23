const Discord = require('discord.js')
const sa = require('superagent')
module.exports.run = async (client, message, args) => {
    var {body} = await sa.get(`https://some-random-api.ml/pikachuimg`)
    var dog = new Discord.RichEmbed()
    .setColor(client.color)
    .setImage(body.link)
    message.channel.send(dog)
}
module.exports.help = {
	aliases: [],
    name: "pika",
   // category: "bdc"
};