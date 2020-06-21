const Discord = require("discord.js");
const superagent = require('superagent')


module.exports.run = async (bot, message, args, level) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let a = message.author;
    if(!rUser) rUser = a;

  let {body} = await superagent
  .get(`https://nekos.life/api/v2/img/meow`)

  let catem = new Discord.RichEmbed()
  .setColor("#00ffff")
  .setImage(body.url)
  //.setFooter("requested by " + `${a.username}`, a.avatarURL);

  bot.send(catem);

}


module.exports.help = {
	aliases: [],
    name: "cat",
    category: "bdc"
};