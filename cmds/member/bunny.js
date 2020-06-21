const sa = require("superagent");
const { RichEmbed } = require("discord.js")
module.exports.run = async (client, message, args) => {
let colors = "RED"
  try {
    var result = Math.floor(Math.random() * 164);
    message.channel.send(
      new RichEmbed()
        .setColor(colors)
        .setImage(`https://bunnies.media/poster/${result}.png`)
    );
  } catch (err) {
    message.channel.send(
      new RichEmbed().setColor("RED").addField("Ошибка", err.message)
    );
    console.log(err.stack);
  }
};
module.exports.help = {
	aliases: [],
    name: "bunny",
    category: "bdc"
};