const Discord = require('discord.js');
let config = require("../../botconfig.json");
module.exports.run = async (bot,message,args) => {
let userid = config.userid
        if ((!message.member.hasPermission("MANAGE_ROLES")) && !userid.includes(message.author.id))
            return message.channel.send("__**У вас нет прав!**__").then(msg => msg.delete(5*1000));

var role = message.mentions.roles.first();
var member = message.mentions.members.first();
var arg = new Array()
arg[0] = member
arg[1] = role
let embed = new Discord.RichEmbed()
    .setColor('#800080')
    .setDescription("**Укажите участника которому хотите забрать роль!**")
if(!arg[0]) return message.channel.send(embed)
let embedik = new Discord.RichEmbed()
    .setColor('#800080')
    .setDescription("**Укажите роль которую хотите забрать у участника!**")
if(!arg[1])return message.channel.send(embedik)
member.removeRole(role)
let ember = new Discord.RichEmbed()
    .setColor('#800080')
    .addField('**Забрал роль**', message.author)
    .addField("**Участнику**", member.user)
    .addField("**Забрана роль**", role)
message.channel.send(ember)
}
module.exports.help = {
	aliases: [],
    name: 'removerole',
    category: "admin"
};
