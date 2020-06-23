   const Discord = require('discord.js');
   const superagent = require('superagent');
   
   module.exports.run = async (bot, message, args) => {
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let a = message.author;
        const { body } = await superagent
        .get("https://some-random-api.ml/animu/wink");
        if(!rUser) {

            const embed = new Discord.RichEmbed()
            .setDescription("**<@557958160514547717>**" + "  **подмигнул(-а)** " + `${message.author}`)
            .setImage(body.link)
            .setColor("RANDOM")
            bot.send(embed);
        message.delete().catch(O_o => {});
        } else {
        const embed = new Discord.RichEmbed()
            .setColor("#FF30A2")
            .setDescription(`${message.author} **подмигнул(-а)** ${rUser}`)
            .setImage(body.link)
        bot.send(embed)
        message.delete().catch(O_o => {});
        }
};
   
   
   
   module.exports.help = {
	aliases: [],
       name: 'wink',
       category: "ang"
   }; 