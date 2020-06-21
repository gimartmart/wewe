const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot,message,args) => {
    
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let a = message.author;

    var hug = ['https://media1.tenor.com/images/2ba945abd8db5c6da04944e154f17640/tenor.gif?itemid=13458008', 'https://thumbs.gfycat.com/SkeletalPaltryBarracuda-small.gif', 'https://thumbs.gfycat.com/SevereGoldenAustralianfreshwatercrocodile-size_restricted.gif' ,'https://i.gifer.com/CP3I.gif', 'https://gifimage.net/wp-content/uploads/2017/09/anime-glare-gif-11.gif' ,'https://media.tenor.com/images/92959037ca9e6d9aa2ed63c083df74c8/tenor.gif' ,'https://i.gifer.com/N0v9.gif', 'https://i.pinimg.com/originals/05/71/73/05717388b2478a3a4576ea2ade984ded.gif'];
    var gif = Math.floor((Math.random() * hug.length));
    if(!rUser) {
        
        const embed = new Discord.RichEmbed()
        .setColor("#800000")
        .setDescription("**<@557958160514547717>**" + "  **злиться на**  " + `${message.author}`)
        .setImage(hug[gif])
        bot.send(embed);
        message.delete().catch(O_o => {});
        
    }else {
        
        const embed = new Discord.RichEmbed()
        .setColor("#800000")
        .setDescription(`${message.author}` + "  **злиться на**  " + `${rUser}`)
        .setImage(hug[gif])
        bot.send(embed);
        message.delete().catch(O_o => {});
        
    }
};
module.exports.help = {
	aliases: [],
    name: "glare",
    category: "ang"
};