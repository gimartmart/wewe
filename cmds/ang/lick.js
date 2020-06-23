const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot,message,args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let a = message.author;

    var hug = ['https://i.imgur.com/QDpVqHe.gif', 'https://i.imgur.com/uALJJV2.gif', 'https://media1.tenor.com/images/5ca31fd724f6baca41e366db4258a1e6/tenor.gif?itemid=12141726' ,'https://thumbs.gfycat.com/SomberUnderstatedAnophelesmosquito-size_restricted.gif', 'https://media1.giphy.com/media/8GiREm7aqMwN2/200.gif' ,'https://media1.tenor.com/images/0ce34500facf2ada86307bb740a03dfd/tenor.gif?itemid=5567738' ,'https://i.kym-cdn.com/photos/images/original/000/995/417/60f.gif'];
    var gif = Math.floor((Math.random() * hug.length));
    if(!rUser) {
        
        const embed = new Discord.RichEmbed()
        .setColor("#ff00ff")
        .setDescription("**<@557958160514547717>**" + "  **лизнул(-a)**  " + `${message.author}`)
        .setImage(hug[gif])
        bot.send(embed);
        message.delete().catch(O_o => {});
        
    }else {
        
        const embed = new Discord.RichEmbed()
        .setColor("#ff00ff")
        .setDescription(`${message.author}` + "  **лизнул(-a)** " +  `${rUser}`)
        .setImage(hug[gif])
        bot.send(embed);
        message.delete().catch(O_o => {});
        
    }
};
module.exports.help = {
	aliases: [],
    name: "lick",
    category: "ang"
};