const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot,message,args) => {
    
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let a = message.author;

    var hug = ['https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif?itemid=10426943', 'https://media1.tenor.com/images/f9f121a46229ea904209a07cae362b3e/tenor.gif?itemid=7859254', 'https://i.kym-cdn.com/photos/images/newsfeed/001/093/848/033.25067' ,'https://media1.tenor.com/images/7437caf9fb0bea289a5bb163b90163c7/tenor.gif?itemid=13595529', 'https://media1.tenor.com/images/85722c3e51d390e11a0493696f32fb69/tenor.gif?itemid=5463215' ,'https://media.giphy.com/media/jLeyZWgtwgr2U/giphy.gif' ,'https://a.disquscdn.com/get?url=https%3A%2F%2F31.media.tumblr.com%2Fdd5d751f86002fd4a544dcef7a9763d6%2Ftumblr_inline_mya9hsvLZA1rbb2hd.gif&key=rO3ODUOrc2K-QUZIk2fDvw', 'https://i.imgur.com/Agwwaj6.gif'];
    var gif = Math.floor((Math.random() * hug.length));
    if(!rUser) {
        
        const embed = new Discord.RichEmbed()
        .setColor("#ff6600")
        .setDescription("**<@557958160514547717>**" + "  **дал(-a) пощечину**  " + `${message.author}`)
        .setImage(hug[gif])
        bot.send(embed);
        message.delete().catch(O_o => {});
    }else {
        
        const embed = new Discord.RichEmbed()
        .setColor("#ff6600")
        .setDescription(`${message.author}` + " **дал(-a) пощечину**  " + `${rUser}`)
        .setImage(hug[gif])
        bot.send(embed);
        message.delete().catch(O_o => {});
    }
};
module.exports.help = {
	aliases: [],
    name: "slap",
    category: "ang"
};