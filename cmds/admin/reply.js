const Discord = module.require('discord.js');
let config = require("../../botconfig.json");
module.exports.run = async (bot, message, args) => {
    try {
         let userid = config.userid
        if ((!message.member.hasPermission("ADMINISTRATOR")) && !userid.includes(message.author.id))
            return message.channel.send("__**У вас нет прав!**__").then(msg => msg.delete(5*1000));
        let rUser = message.guild.member(message.mentions.users.first() || bot.users.get(args[0]) || message.guild.members.get(args[0]));
    //  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("__**У вас нет прав!**__").then(msg => msg.delete(5*1000));
        let embed = new Discord.RichEmbed()
            .setTitle(`Ответ Администратора`)
            .setColor('RANDOM');
        if (!args[0] || !rUser) { bot.sendErrEmbed(embed, 'Пользователь не ответил на приглашение!', true, message); }
        let ot = args.slice(1).join(" ");
        embed.setDescription(`**${ot}**`);
        await rUser.send(embed);
        embed.setDescription(`**Сообщение доставлено ${rUser.user.tag}**`);
        await message.channel.send(embed);
    } catch {

    }
};
module.exports.help = {
	aliases: [],
    name: 'reply',
    category: "admin"
}; 