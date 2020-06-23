const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {



    let youtube = args.slice(0).join('+');

        let link = `https://www.youtube.com/results?search_query=` + youtube;
        if(!youtube)return message.reply(`Пожалуйста, введите текст!!!`)
        if(!link)return message.reply("Console error")
        let embed = new Discord.RichEmbed()
 
         
     .setColor("RONDOM")
         
          .setTimestamp()
        
          .addField('Действие:', 'Поиск на YouTube')

          .addField("Текст:", `${args.slice(0).join(' ')}`)

          .addField('Ссылка:', `${link}`)
         
          .setFooter("Твой аватар", message.author.avatarURL);
          
              message.channel.send(embed);
              message.channel.send(`Вы искали ${link} в ${ message.guild.name}`);

        
    
}



module.exports.help = {
	aliases: [],
    name: "youtube",
    category: "info"
}