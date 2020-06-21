const Discord = require('discord.js')
const sa = require('superagent')
module.exports.run = async (client, message, args) => {
    var {body} = await sa.get(`https://randomfox.ca/floof/`)
    var fox = new Discord.RichEmbed()
    .setColor(client.color)
    .setImage(body.image)
    message.channel.send(fox)
}
module.exports.help = {
	aliases: [],
    name: "fox",
    category: "bdc"
};
