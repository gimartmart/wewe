const ms = require("ms");
let config = require("../../botconfig.json");
module.exports.run = async(bot, message, args) => {
   let userid = config.userid
        if ((!message.member.hasPermission("MANAGE_MESSAGES")) && !userid.includes(message.author.id))
            return message.channel.send("__**У вас нет прав!**__").then(msg => msg.delete(5*1000));

if (!bot.lockit) bot.lockit = [];

const time = args.join(" ");

const validUnlocks = ["release", "unlock"];

if (!time) return message.reply("Укажите время на которое вы хотите заблокировать канал");

if (validUnlocks.includes(time)) {

message.channel.overwritePermissions(message.guild.id, {

SEND_MESSAGES: null

}).then(() => {

message.channel.send("🚨 | Lockdown ended!");

clearTimeout(bot.lockit[message.channel.id]);

delete bot.lockit[message.channel.id];

}).catch(error => {

console.log(error);

});

} else {

message.channel.overwritePermissions(message.guild.id, { SEND_MESSAGES: false }).then(() => {

message.channel.send(`🔒 | Канал закрыт на ${ms(ms(time), { long:true })}`).then(() => {

bot.lockit[message.channel.id] = setTimeout(() => {

message.channel.overwritePermissions(message.guild.id, {

SEND_MESSAGES: null

}).then(message.channel.send("🚨 | Lockdown ended!")).catch(console.error);

delete bot.lockit[message.channel.id];

}, ms(time));

}).catch(error => {

console.log(error);

});

});

}

};

module.exports.help = {
	aliases: [],
name: "lockdown",
category: "admin"
}