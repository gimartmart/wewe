const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot,message,args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let a = message.author;

    var hug = [
        "https://cdn.weeb.sh/images/BJO2j1Fv-.gif",
        "https://i.pinimg.com/originals/ff/2d/cd/ff2dcd44504000e320c21ae5682b5369.gif",
        "https://media3.giphy.com/media/BFL20NiE18A2A/source.gif",
        "https://i.gifer.com/8bDm.gif",
        "https://i.chzbgr.com/full/8442235648/h5122C918/",
        "https://media.tenor.com/images/fe89919039e43c4c681bdb46358a502f/tenor.gif",
        "https://image.myanimelist.net/ui/OK6W_koKDTOqqqLDbIoPAiYPUQ2uVnKCJNrR1bKf4kw",
        "https://giffiles.alphacoders.com/128/128132.gif",
        "https://i.kym-cdn.com/photos/images/newsfeed/001/208/163/5e8.gif",
        "https://i.imgur.com/ouX2mV6.gif?noredirect",
        "https://thumbs.gfycat.com/ViciousFirsthandBeetle-size_restricted.gif",
        "https://i.kym-cdn.com/photos/images/newsfeed/001/160/891/6d2.gif"




];
    var gif = Math.floor((Math.random() * hug.length));
    if(!rUser) {
        
        const embed = new Discord.RichEmbed()
        .setColor("#ff00ff")
        .setDescription("**<@557958160514547717>**" + "  **убил(-a)**  " + `${message.author}`)
        .setImage(hug[gif])
        bot.send(embed);
        message.delete().catch(O_o => {});
    }else {
        
        const embed = new Discord.RichEmbed()
        .setColor("#ff00ff")
        .setDescription(`${message.author}` + " **убил(-a)**  " + `${rUser}`)
        .setImage(hug[gif])
        bot.send(embed);
        message.delete().catch(O_o => {});
    }
};
module.exports.help = {
	aliases: [],
    name: "wasted",
    category: "ang"
};