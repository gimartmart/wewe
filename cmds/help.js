//Завершено

const Discord = module.require(`discord.js`);

module.exports.run = async (bot, message, args) => {
    try {
        let bk = require('../botconfig.json');
        let lang = require(`../lang_${bot.lang}.json`);
        let evaled = eval('`' + lang.help + '`');
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
            .setDescription(`Help`)
            .setColor('#f646ff')
            .addField(`**:dollar: ${msgs[0]}**`, '``add`` ``bonus`` ``casino`` ``clan`` ``pay`` ``profile`` ``shop`` ``set`` ``marks`` ``work`` ``groll`` ``lroll``')
            .addField(`**:gun: ${msgs[1]}**`, '``ban`` ``clear`` ``kick`` ``say`` ``mute`` ``unmute`` ``warn`` ``unwarn`` ``report`` ``autorole`` ``welcomemessage`` ``createstats`` ``roomcreator`` ``cmdchannel`` ``sh`` ``voiceonline`` ``blockinvites`` ``joinleave`` ``bug`` ``ot``')
            .addField(`**:desktop: ${msgs[2]}**`, '``avatar`` ``help`` ``info`` ``ping`` ``invite`` ``userinfo`` ``serverinfo`` ``createstats`` ``botstats``')
            .addField(`**:tada: ${msgs[3]}**`, '``cat`` ``dog`` ``fox`` ``kiss`` ``slap`` ``roll`` ``ms`` ``marry`` ``like`` ``chat`` ``textfilp`` ``play``')
            .setFooter(`${msgs[4]}`)
            .setThumbnail('https://discordemoji.com/assets/emoji/6406_thonk_tree.gif');
        bot.send(emb)

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
    name: `help`,
    aliases: [`h`, `помощь`, 'хелп', 'хэлп', 'помогите', 'помогающий', 'помогатор', 'помогитехристаради', 'помощник', 'помогать', 'спасите', 'нупомогите']
};