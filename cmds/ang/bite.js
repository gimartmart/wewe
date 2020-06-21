const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  let rUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  let a = message.author;

  var hug = [
    "https://media1.tenor.com/images/c22a247affcf4cd02c7d17f5a432cd95/tenor.gif?itemid=8259627",
    "https://media1.tenor.com/images/c4ff310ed4399ebe2c85ffc52ad5eeab/tenor.gif?itemid=11674205",
    "https://media1.tenor.com/images/7b9575ccf2a5b33f97d0eaa053e1892c/tenor.gif?itemid=12180198",
    "https://media1.tenor.com/images/f308e2fe3f1b3a41754727f8629e5b56/tenor.gif?itemid=12390216",
    "https://data.whicdn.com/images/279560594/original.gif",
    "http://3.bp.blogspot.com/--CW8idmxYKY/UebxiYZ3aTI/AAAAAAAAAGg/4MfxuWentew/s1600/4c92059276e690_full.gif",
    "https://media.giphy.com/media/OqQOwXiCyJAmA/giphy.gif"
  ];
  var gif = Math.floor(Math.random() * hug.length);
  if (!rUser) {
    const embed = new Discord.RichEmbed()
      .setColor("#ff00ff")
      .setDescription("<@557958160514547717>" + "**укусил(-a)**" + `${message.author}`)
      .setImage(hug[gif]);
    bot.send(embed);
    message.delete().catch(O_o => {});
  } else {
    const embed = new Discord.RichEmbed()
      .setColor("#ff00ff")
      .setDescription(`${message.author}` + "**укусил(-a)**" +`${rUser}`)
      .setImage(hug[gif]);
    bot.send(embed);
    message.delete().catch(O_o => {});
  }
};
module.exports.help = {
	aliases: [],
  name: "bite",
  category: "ang"
};
