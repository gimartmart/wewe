const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot,message,args) => {
    
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let a = message.author;

    var hug = ['https://cdn.discordapp.com/attachments/649703016160821250/649715663744532480/source.gif',
              'https://cdn.discordapp.com/attachments/649703016160821250/649715630383038496/EquatorialGleefulArabianhorse-size_restricted.gif',
              'https://cdn.discordapp.com/attachments/649703016160821250/649715616470663178/F5Ai.gif',
              'https://cdn.discordapp.com/attachments/649703016160821250/649715593670426655/2ad6e18ae3213a95e001e4feba249cc8.gif'];
    var gif = Math.floor((Math.random() * hug.length));
    if(!rUser) {
        
        const embed = new Discord.RichEmbed()
        .setColor("#800000")
        .setDescription(`${message.author}` + "**совершил(-а) самоубийство!!!**")
        .setImage(hug[gif])
        bot.send(embed);
        message.delete().catch(O_o => {});
    }
};
module.exports.help = {
	aliases: [],
    name: "suicide",
    category: "ang"
};