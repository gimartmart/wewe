const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot,message,args) => {
    
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let a = message.author;

    var hug = ['https://pa1.narvii.com/6893/c9bf4c7b7112d275f0316fa559d4def90b483ac8r1-500-234_hq.gif', 'https://media.giphy.com/media/pWd3gD577gOqs/giphy.gif', 'https://media1.tenor.com/images/fd46d903c4a20a7e82519a78f15b2750/tenor.gif?itemid=8562185' ,'https://media2.giphy.com/media/hdt32CBL7MsOA/source.gif', 'https://media1.tenor.com/images/e8b25e7d069c203ea7f01989f2a0af59/tenor.gif?itemid=12011027' ,'https://i.pinimg.com/originals/9d/25/23/9d25235a88f0fb52c3b72bf9404d2b7e.gif' ,'https://thumbs.gfycat.com/KeyImaginativeBushsqueaker-size_restricted.gif'];
    var gif = Math.floor((Math.random() * hug.length));
    if(!rUser) {
        
        const embed = new Discord.RichEmbed()
        .setColor("#006600")
        .setDescription("**<@557958160514547717>**" + "  **тыкнул(-а) в**  " + `${message.author}`)
        .setImage(hug[gif])
        bot.send(embed);
        message.delete().catch(O_o => {});
    }else {
        
        const embed = new Discord.RichEmbed()
        .setColor("#006600")
        .setDescription(`${message.author}` + "  **тыкнул(-а) в**  " + `${rUser}`)
        .setImage(hug[gif])
        bot.send(embed);
        message.delete().catch(O_o => {});
    }
};
module.exports.help = {
	aliases: [],
    name: "poke",
    category: "ang"
};