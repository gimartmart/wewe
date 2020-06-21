const Discord = require('discord.js');
let config = require("../../botconfig.json");
module.exports.run = async (bot, message, args) => {
let userid = config.userid
        if ((!message.member.hasPermission("BAN_MEMBERS")) && !userid.includes(message.author.id))
            return message.channel.send("__**У вас нет прав!**__").then(msg => msg.delete(5*1000));
let member = args.join(" ");
if(!member) return message.channel.send(`Вы не указали ID пользователя которого нужно разбанить!`);
if(member) {
    message.guild.unban(member);
    return message.channel.send(`Вы успешно разбанили пользователя с ID ${member}!`);
}
};
module.exports.help = {
  aliases: [],
    name: "unban",
    category: "admin"
};