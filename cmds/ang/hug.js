const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot,message,args) => {
    
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let a = message.author;

    var hug = ['https://i.imgur.com/wOmoeF8.gif', 'https://cdn.discordapp.com/attachments/536295141628051497/556801105632165901/f2805f274471676c96aff2bc9fbedd70.gif', 'https://i.imgur.com/nrdYNtL.gif' ,'https://i.imgur.com/BPLqSJC.gif', 'https://i.imgur.com/v47M1S4.gif' ,'https://i.imgur.com/82xVqUg.gif' ,'https://i.imgur.com/4oLIrwj.gif', 'https://i.imgur.com/6qYOUQF.gif'];
    var gif = Math.floor((Math.random() * hug.length));
    if(!rUser) {
        
        const embed = new Discord.RichEmbed()
        .setColor("#ff00ff")
        .setDescription("<@557958160514547717>" + "  **обнял(-a)**  " + `${message.author} 🤗`)
        .setImage(hug[gif])
        bot.send(embed);
        message.delete().catch(O_o => {});
        
    }else {
        
        const embed = new Discord.RichEmbed()
        .setColor("#ff00ff")
        .setDescription(`${message.author}` + " **обнял(-a)** " + `${rUser} 🤗`)
        .setImage(hug[gif])
        bot.send(embed);
        message.delete().catch(O_o => {});
        
    }
};
module.exports.help = {
	aliases: [],
    name: "hug",
    category: "ang"
};