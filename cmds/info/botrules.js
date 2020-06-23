const Discord = module.require("discord.js");
let config = require("../../botconfig.json");
module.exports.run = async (bot, message, args) => {
    var member = message.member;
    let ownerid = config.ownerid            
if(!ownerid.includes(message.author.id)) return message.channel.send("__**У вас нет прав!**__").then(msg => msg.delete(5*1000));
  let embed = new Discord.RichEmbed()
    .setDescription(`
1)Администрация бота имеет полное право зайди к вам на сервер в целях проверки!
2)

`)
 // .setImage('https://is.gd/yKJYAm')
    .setColor("#FF0000");
  message.delete().catch();
  message.channel.send(embed);
};
module.exports.help = {
	aliases: [],
  name: "botrules"
};
