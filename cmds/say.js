//Завершено

const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bk = require('../botconfig.json');
    let lang = require(`../lang_${bot.lang}.json`);
    let otherlang = require(`../lang_${bot.lang}.json`);
    let olang = otherlang.casino.split('<>');
    let evaled = eval('`' + lang.say + '`');
    let rekl = eval('`' + lang.rekl + '`');
    let noUser = lang.noUser;
    let noNum = lang.noNum;
    let noPerm = lang.noPerm;
    let hBal = lang.hBanals;
    let errz = lang.err;
    let err = errz.split('<>');
    let reaso = lang.reason;
    let reason = reaso.split('<>')
    let msgs = evaled.split('<>');
    let actions = lang.actions.split('<>')
    let admin = lang.admin.split('<>')
    let noMoney = lang.noMoney;
    let embed = new Discord.RichEmbed()
        .setTitle(msgs[0])
        .setFooter(rekl, message.author.avatarURL)
        .setColor('#e22216')
        .setThumbnail('https://discordemoji.com/assets/emoji/1414_FeelsAbdulMan.gif');
    let botmessage = args.join(" ");
    if (!botmessage) {return}
    message.delete().catch();
    bot.send(botmessage);
};
module.exports.help = {
    name: "say",
    aliases: ["сказать", 'скажи', 'поговори', 'говори']
};