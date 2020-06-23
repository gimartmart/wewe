const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot,message,args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let a = message.author;

    var hug = ["https://i.gifer.com/Ls.gif","https://media.tenor.com/images/bc493788b867de6f4d64d5742d319ce8/tenor.gif","https://media1.tenor.com/images/e9c914be61acb8f2033f2327605c5562/tenor.gif?itemid=8118409","https://media1.tenor.com/images/23bbd39e04e1e931cd3aa3d66b7b7319/tenor.gif?itemid=9945876"];
    var gif = Math.floor((Math.random() * hug.length));
    if(!rUser) {
        
        const embed = new Discord.RichEmbed()
        .setColor("#ff00ff")
        .setDescription("**<@557958160514547717>**" + "  **выстрелил(-a)**  " + `${message.author}`)
        .setImage(hug[gif])
        bot.send(embed);
        message.delete().catch(O_o => {});
    }else {
        
        const embed = new Discord.RichEmbed()
        .setColor("#ff00ff")
        .setDescription(`${message.author}` + " **выстрелил(-a)**  " + `${rUser}`)
        .setImage(hug[gif])
        bot.send(embed);
        message.delete().catch(O_o => {});
    }
};
module.exports.help = {
	aliases: [],
    name: "shoot",
    category: "ang"
};