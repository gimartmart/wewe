//Завершено

const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
    let bk = require('../botconfig.json');
        let lang = require(`../lang_${bot.lang}.json`);
        let evaled = eval('`' + lang.invite + '`');
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
    let emb = new Discord.RichEmbed()
        .setDescription(msgs[0])
        .setColor('#10e250')
        .addField(msgs[1], 'https://discord.gg/Z9Tepy3')
        .addField(msgs[2], 'https://discordapp.com/oauth2/authorize?client_id=526513788611198987&permissions=8&scope=bot')
        .addField(msgs[3],'https://discordbots.org/bot/526513788611198987')
    bot.send(emb)
}
exports.help = {
    name: 'invite',
    aliases: ["in", 'пригласить', 'приглашение', 'приглашающий', 'приглашения']
}
