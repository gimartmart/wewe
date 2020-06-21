const Discord = module.require("discord.js");
let config = require("../../botconfig.json");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
   let userid = config.userid
        if ((!message.member.hasPermission("MANAGE_MESSAGES")) && !userid.includes(message.author.id))
            return message.channel.send("__**У вас нет прав!**__").then(msg => msg.delete(5*1000));
    let botmessage = args.join(" ");
    message.delete().catch();
    bot.send(botmessage);
};
module.exports.help = {
	aliases: [],
    name: "say",
    category: "admin"
};