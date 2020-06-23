const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot,message,args) => {
    
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let a = message.author;

    var hug = ['https://i.imgur.com/2lacG7l.gif', 'https://i.imgur.com/UWbKpx8.gif', 'https://i.imgur.com/4ssddEQ.gif' ,'https://i.imgur.com/2k0MFIr.gif', 'https://i.imgur.com/LUypjw3.gif' ,'https://i.imgur.com/F3cjr3n.gif' ,'https://i.imgur.com/NNOz81F.gif'];
    var gif = Math.floor((Math.random() * hug.length));
    if(!rUser) {
        
        const embed = new Discord.RichEmbed()
        .setColor("#00ff00")
        .setDescription("**<@557958160514547717>**" + "  **погладил(-а)**  " + `${message.author}`)
        .setImage(hug[gif])
        bot.send(embed);
        message.delete().catch(O_o => {});
        
    }else {
        
        const embed = new Discord.RichEmbed()
        .setColor("#00ff00")
        .setDescription(`${message.author}` + "  **погладил(-а)**  " + `${rUser}`)
        .setImage(hug[gif])
        bot.send(embed);
        message.delete().catch(O_o => {});
        
    }
};
module.exports.help = {
	aliases: [],
    name: "pat",
    category: "ang"
};