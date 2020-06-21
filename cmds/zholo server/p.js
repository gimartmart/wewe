const Discord = module.require("discord.js");
let config = require("../../botconfig.json");
module.exports.run = async (bot, message, args) => {
    var member = message.member;
    let ownerid = config.ownerid            
if(!ownerid.includes(message.author.id)) return message.channel.send("__**У вас нет прав!**__").then(msg => msg.delete(5*1000));
    let embed = new Discord.RichEmbed()
        .setDescription("<a:28:637652899425550346>Ведутся технические работы. Приносим свои извинения за неудобства.<a:32:637653122549809152>")
        .setColor('#FF0000')
    message.delete().catch();
    message.channel.send(embed);
};
module.exports.help = {
	aliases: [],
    name: "p"
};