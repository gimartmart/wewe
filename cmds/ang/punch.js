const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot,message,args) => {
    
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let a = message.author;

    var hug = ['https://i.imgur.com/7jErgl1.gif', 'https://i.imgur.com/WamlMnP.gif', 'https://i.imgur.com/g91XPGA.gif' ,'https://i.imgur.com/GsMjksq.gif', 'https://thumbs.gfycat.com/BitesizedEnragedAfricanaugurbuzzard-max-1mb.gif' ,'http://67.media.tumblr.com/7d58e35bef43e61530296224e619695f/tumblr_ogk36k1tT71son3fpo2_500.gif' ,'http://pa1.narvii.com/6403/e055cc280384a62f5d73da12bf699ada40b45012_00.gif'];
    var gif = Math.floor((Math.random() * hug.length));
    if(!rUser) {
        
        const embed = new Discord.RichEmbed()
        .setColor("#ff0000")
        .setDescription("**<@557958160514547717>**" + "  **ударил(-a)**  " + `${message.author}`)
        .setImage(hug[gif])
        bot.send(embed);
        message.delete().catch(O_o => {});
        
    }else {
        
        const embed = new Discord.RichEmbed()
        .setColor("#ff0000")
        .setDescription(`${message.author}` + "  **ударил(-a)**  " + `${rUser}`)
        .setImage(hug[gif])
        bot.send(embed);
        message.delete().catch(O_o => {});
    }
};
module.exports.help = {
	aliases: [],
    name: "punch",
    category: "ang"
};