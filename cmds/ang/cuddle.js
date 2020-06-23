const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot,message,args) => {
    
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let a = message.author;

    var hug = ['https://media.tenor.com/images/aab83bd3725feeaccb9929f8ca964db9/tenor.gif', 'http://33.media.tumblr.com/680b69563aceba3df48b4483d007bce3/tumblr_mxre7hEX4h1sc1kfto1_500.gif', 'https://66.media.tumblr.com/18fdf4adcb5ad89f5469a91e860f80ba/tumblr_oltayyHynP1sy5k7wo1_400.gif' ,'https://media.tenor.com/images/0abe1090ab9874c62c4baaac18f0994d/tenor.gif', 'https://thumbs.gfycat.com/ShowyObedientCrane-max-1mb.gif' ,'https://media1.tenor.com/images/8f8ba3baeecdf28f3e0fa7d4ce1a8586/tenor.gif?itemid=12668750' ,'http://mrwgifs.com/wp-content/uploads/2013/04/Snuggling-Cuddling-Anime-Girls-Gif-.gif', 'https://i.kym-cdn.com/photos/images/original/001/094/799/80e.gif'];
    var gif = Math.floor((Math.random() * hug.length));
    if(!rUser) {
        
        const embed = new Discord.RichEmbed()
        .setColor("#ff00ff")
       // .addField("Действие <a:11:684059113780412436>")
        .setDescription("<@557958160514547717>" + "  **успокаивает**  " + `${message.author} <a:11:684059113780412436>`)
        .setImage(hug[gif])
        bot.send(embed);
        message.delete().catch(O_o => {});
        
    }else {
        
        const embed = new Discord.RichEmbed()
        .setColor("#ff00ff")
        .setDescription(`${message.author}` + "  **успокаивает**  " + `${rUser} <a:11:684059113780412436>`)
        .setImage(hug[gif])
        bot.send(embed);
        message.delete().catch(O_o => {});
        
    }
};
module.exports.help = {
	aliases: [],
    name: "cuddle",
    category: "ang"
};