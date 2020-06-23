const Discord = require("discord.js");

module.exports.run = (bot, message, args, discord) => {
        let afk1 = "https://i.imgur.com/7nGkaFk.gif"
        
        message.delete().catch(O_o=>{});
        let embed = new Discord.RichEmbed ()
        .setTitle(`**${message.member.displayName}**` + " отошел(a), скоро вернётся!")
        .setColor("ffd500")
       // .setFooter(server_name)
        .setThumbnail(afk1)
        .setTimestamp();
        message.channel.send({embed}).then(sentMessage => {   
            sentMessage.react('💤')
        });
    }
module.exports.help = {
	aliases: [],
name: "afk",
category: "ang"
}