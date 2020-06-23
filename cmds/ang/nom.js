const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot,message,args) => {
    
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let a = message.author;

    var hug = ['https://cdn.discordapp.com/attachments/649703016160821250/649712073357525003/1488475457_kobayashi-san-chi-no-maid-dragon-anime-kanna-kamui-anime-gifka-3695938.gif',
              'https://cdn.discordapp.com/attachments/649703016160821250/649712082689720320/1372501357_7dd854cd3bed6123b41549c60371dd5f.gif',
              'https://cdn.discordapp.com/attachments/649703016160821250/649712094647681064/99px_ru_avatar_165621_devochka_est_buterbrod.gif',
              'https://cdn.discordapp.com/attachments/649703016160821250/649712108606324778/171021_4223.gif',
              'https://cdn.discordapp.com/attachments/649703016160821250/649712127069782076/giphy.gif',
              'https://cdn.discordapp.com/attachments/649703016160821250/649712147269550110/Q3p.gif',
              'https://cdn.discordapp.com/attachments/649703016160821250/649712319559106561/orig.gif',
            'https://media1.tenor.com/images/916365a978bf89eefec364b18df48fec/tenor.gif?itemid=9903017'];
    var gif = Math.floor((Math.random() * hug.length));
    if(!rUser) {
        
        const embed = new Discord.RichEmbed()
        .setColor("#800000")
        .setDescription("**<@557958160514547717>**" + " **покормил(-a)** " + `${message.author}`)
        .setImage(hug[gif])
        bot.send(embed);
        message.delete().catch(O_o => {});
        
    }else {
        
        const embed = new Discord.RichEmbed()
        .setColor("#800000")
        .setDescription(`${message.author}` + "**покормил(-a)**" + `${rUser}`)
        .setImage(hug[gif])
        bot.send(embed);
        message.delete().catch(O_o => {});
        
    }
};
module.exports.help = {
	aliases: [],
    name: "nom",
    category: "ang"
};