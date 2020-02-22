
const Discord = module.require("discord.js");
module.exports.run = async (bot, message, args) => {
    try {
        let bk = require('../botconfig.json');
        let lang = require(`../lang_${bot.lang}.json`);
        let evaled = eval('`' + lang.bitcoin + '`');
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
        let Exchange = module.require('oip-exchange-rate');

        var exchange = new Exchange();

        exchange.getExchangeRate("bitcoin", "usd").then((rate) => {
            let emb = new Discord.RichEmbed()
            .setTitle(msgs[0])
            .setColor('RANDOM')
            .setDescription(`${msgs[0]}: **${rate}$**`)
            .setTimestamp();
        bot.send(emb);
        })
        

    } catch (err) {
        let bk = require('../botconfig.json');
        let a = bot.users.get(bk.admin)
        let errEmb = new Discord.RichEmbed()
            .setTitle(`${err[0]}`)
            .setColor('#ff2400')
            .addField(`**${err.name}**`, `**${err.message}**`)
            .setFooter(`${err[1]} ${a.tag}`, bot.user.avatarURL)
            .setTimestamp();
        bot.send(errEmb);
        console.log(err.stack);
    }
};
module.exports.help = {
    name: "bitcoin",
    aliases: ["bitcoen"]
};