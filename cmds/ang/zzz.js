const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot,message,args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let a = message.author;

    var hug = 
    [
'https://pa1.narvii.com/6841/4e99586d20caf2b8e319f1decc7507f7014f562f_00.gif',
'https://i.gifer.com/Bfjr.gif',
'https://cs.pikabu.ru/post_img/big/2013/03/05/1/1362437855_1408486437.gif',
'https://acegif.com/wp-content/uploads/gifki-spokoinoi-nochi-79.gif',
'https://u.kanobu.ru/editor/images/31/0adaf4d3-5f77-430e-8c6c-4581f3580412.gif',
'https://i.gifer.com/PliT.gif',
'https://pa1.narvii.com/6500/2654ece48d49922070bb023ba466f404008117f4_hq.gif'
    ];
    var gif = Math.floor((Math.random() * hug.length));
    if(!rUser) {
        
        const embed = new Discord.RichEmbed()
        .setColor("#ff00ff")
        .setDescription("**<@557958160514547717>**" + "  **пожелал(-а) спокойной ночи**  " + `${message.author}`)
        .setImage(hug[gif])
        bot.send(embed);
        message.delete().catch(O_o => {});
    }else {
        
        const embed = new Discord.RichEmbed()
        .setColor("#ff00ff")
        .setDescription(`${message.author}` + " **пожелал(-а) спокойной ночи**  " + `${rUser}`)
        .setImage(hug[gif])
        bot.send(embed);
        message.delete().catch(O_o => {});
    }
};
module.exports.help = {
	aliases: [],
    name: "zzz",
    category: "ang"
};