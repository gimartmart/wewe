//const settings = require("./0your_settings.json")
const Discord = module.require("discord.js");
let config = require("../../botconfig.json");
//let serverid = config.serverid
//let serverid = config.serverid
module.exports.run = async (bot,message,args) => {
  let settings = config
  let serverid = config.serverid
  var member = message.member;
     let userid = config.userid
if(!serverid.includes(member.guild.id)&& !userid.includes(message.author.id)) return message.channel.send("**__Купите premium!__**");
  if ((!message.member.hasPermission("ADMINISTRATOR")) && !userid.includes(message.author.id))
        return message.channel.send('**__У вас нeт прав!__**')
    const rolez = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args [0])
    if(!rolez) return message.channel.send(settings.messageresponse.rolenotfound).catch(err=> message.channel.send("No response"))
    if(!message.guild.member(bot.user.id).hasPermission("MANAGE_ROLES")) return message.channel.send(settings.messageresponse.missingperm).catch(err=> message.channel.send("no response"))
    var colors = settings.rainbowrole
    var rolestart = setInterval(function() {
        var colorsz = colors[Math.floor(Math.random() * colors.length)];
        rolez.setColor(colorsz)
    }, settings.rainbowdelay); 
        message.channel.send(settings.messageresponse.success).catch(err=> message.channel.send("No response"))
};
module.exports.help = {
	aliases: [],
    name: "rainbow",
    category: "admin"
};