const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  let rUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  let a = message.author;

  let hug = ['1', '2', '3', '4', '5', '6', '7', '8', '9','10','11','12'];;
  let gif = hug[Math.floor(Math.random()*hug.length)]

  if (!rUser) {
    const embed = new Discord.RichEmbed()
      .setColor("#4dff4d")
      .setDescription(`${message.author}` + "  **?????** ")
      .setImage({files:[`./modules/gif/ask/${gif}.gif`]});
    bot.send(embed);
    message.delete().catch(O_o => {});
  } else {
    const embed = new Discord.RichEmbed()
      .setColor("#4dff4d")
      .setDescription(`${message.author}` + "**?????**" +`${rUser}`)
      .setImage({files:[`./modules/gif/ask/${gif}.gif`]});
    bot.send(embed);
    message.delete().catch(O_o => {});
  }
};
module.exports.help = {
	aliases: [],
  name: "ask",
  category: "ang"
};
