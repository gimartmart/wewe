const Discord = module.require("discord.js");
const superagent = require("superagent");
module.exports.run = async(client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    if(!message.channel.nsfw) return bot.send('Перейдите на NSFW канал')
    let { body } = await superagent
        .get("https://nekos.life/api/v2/img/wallpaper");

    let embed = new Discord.RichEmbed()
   // .setDescription(`**${message.author.username} wallpaper for you!** `)
        .setImage(body.url)
        .setColor("RANDOM")
    message.delete().catch();
    message.channel.send(embed);
}
module.exports.help = {
	aliases: [],
    name: 'wallpaper',
    category: "nsfw"
};