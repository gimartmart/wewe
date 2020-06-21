const Discord = module.require("discord.js");
const superagent = require("superagent");


module.exports.run = async(client, message, args) => {
    let user = message.mentions.users.first() || message.author;


    let { body } = await superagent
        .get("https://meme-api.herokuapp.com/gimme");

    let embed = new Discord.RichEmbed()
        .setImage(body.url)
        .setColor("RANDOM")
    message.delete().catch();
    message.channel.send(embed);
}


module.exports.help = {
	aliases: [],
    name: 'memes',
    category: "fun"
};