//const settings = require("./0your_settings.json")
const Discord = module.require("discord.js");
let config = require("../../botconfig.json");
module.exports.run = async (bot,message,args) => {
 let settings = config
  let serverid = config.serverid
  var member = message.member;
     let userid = config.userid
if(!serverid.includes(member.guild.id)&& !userid.includes(message.author.id)) return message.channel.send("**__Купите premium!__**");
  if ((!message.member.hasPermission("ADMINISTRATOR")) && !userid.includes(message.author.id))
        return message.channel.send('**__У вас нeт прав!__**')
    setTimeout(function () {
        process.exit()
         }, 1000);
        
                    message.channel.send(settings.messageresponse.rainbowstop).catch(err=> message.channel.send("No response"))
};
module.exports.help = {
	aliases: [],
    name: "sp",
    category: "admin"
};