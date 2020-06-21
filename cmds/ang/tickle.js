   const Discord = require('discord.js');
   const superagent = require('superagent');
   
   module.exports.run = async (bot, message, args) => {
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let a = message.author;
        const { body } = await superagent
        .get("https://nekos.life/api/v2/img/tickle");
        if(!rUser) {

            const embed = new Discord.RichEmbed()
            .setDescription("**<@557958160514547717>**" + "  **пощекотал(-а)** " + `${message.author}`)
            .setImage(body.url)
            .setColor("RANDOM")
            bot.send(embed);
        message.delete().catch(O_o => {});
        } else {
        const embed = new Discord.RichEmbed()
            .setColor("#FF30A2")
            .setDescription(`${message.author} **пощекотал(-а)** ${rUser}`)
            .setImage(body.url)
        bot.send(embed)
        message.delete().catch(O_o => {});
        }
};
   
   
   
   module.exports.help = {
	aliases: [],
       name: 'tickle',
       category: "ang"
   }; 