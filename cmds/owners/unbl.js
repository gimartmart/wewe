const Discord = module.require("discord.js");
let config = require("../../botconfig.json");
module.exports.run = async (bot,message,args) => {
    var member = message.member;
    let ownerid = config.ownerid            
if(!ownerid.includes(message.author.id)) return message.channel.send("__**У вас нет прав!**__").then(msg => msg.delete(5*1000));
    try {
        bot.blacklist.delete(args[0])
    } catch (e) {

    }
};
module.exports.help = {
	aliases: [],
    name: "unbl"
};