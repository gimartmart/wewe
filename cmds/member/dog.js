const Discord = require('discord.js')
const sa = require('superagent')
module.exports.run = async (client, message, args) => {
    var {body} = await sa.get(`https://random.dog/woof.json`)
    var dog = new Discord.RichEmbed()
    .setColor(client.color)
    .setImage(body.url)
    message.channel.send(dog)
}
module.exports.help = {
	aliases: [],
    name: "dog",
    category: "bdc"
};