const Discord = require("discord.js");
let config = require("../../botconfig.json");
module.exports.run = async (bot,message,args) => {
    var member = message.member;
    let ownerid = config.ownerid            
if(!ownerid.includes(message.author.id)) return message.channel.send("__**У вас нет прав!**__").then(msg => msg.delete(5*1000));
let guild = bot.guilds.get(args[0]);

if (!guild) return message.reply("Бот не находится на сервере с указанным ID.");
 guild.fetchInvites()
        .then(invites => message.channel.send('Найдено приглашений:\n ' + 'https://discordapp.com/invite/'+ invites.map(invite => invite.code).join('\n')))
        .catch(console.error);
}

module.exports.help = {
	aliases: [],
    name: 'r',
}