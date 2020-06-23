const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot,message,args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let a = message.author;

    var hug = ['https://media1.tenor.com/images/7b1f06eac73c36721912edcaacddf666/tenor.gif?itemid=10559431', 'https://media1.tenor.com/images/561c7697f4ec8ba0fd2fc8fb3ff85506/tenor.gif?itemid=5262259', 'https://thumbs.gfycat.com/DirtyFlashyAlleycat-small.gif' ,'https://i.pinimg.com/originals/17/0b/2d/170b2d511efc778b86d58fa12d66c0cb.gif', 'https://i.gifer.com/B0aW.gif' ,'https://media2.giphy.com/media/9wZybot8h5Nte/giphy.gif' ,'https://media.giphy.com/media/ytwDCqIwBkiaHgDM1q/giphy.gif'];
    var gif = Math.floor((Math.random() * hug.length));
    if(!rUser) {
        
        const embed = new Discord.RichEmbed()
        .setColor("#66ccff")
        .setDescription("**<@557958160514547717>**" + "**дал(-a) пять**" + `${message.author}`)
        .setImage(hug[gif])
        bot.send(embed);
        message.delete().catch(O_o => {});
        
    }else {
        
        const embed = new Discord.RichEmbed()
        .setColor("#66ccff")
        .setDescription(`${message.author}` +  "**дал(-a) пять**" + `${rUser}`)
        .setImage(hug[gif])
        bot.send(embed);
        message.delete().catch(O_o => {});
        
    }
};
module.exports.help = {
	aliases: [],
    name: "highfive",
    category: "ang"
};