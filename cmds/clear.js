//Завершено

const Discord = module.require(`discord.js`);

module.exports.run = async (bot, message, args) => {
    try {
        let bk = require('../botconfig.json');
        let lang = require(`../lang_${bot.lang}.json`);
        let evaled = eval('`' + lang.clear + '`');
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
            .setTitle(`**${msgs[0]}**`)
            .setColor('#e22216')
        if (!message.member.hasPermission(`MANAGE_MESSAGES`)) { embed.setDescription(noPerm); return bot.send(embed); }
        if (!args[0]) { embed.setDescription(msgs[1]); return bot.send(embed); }
        function isNumeric(n) {

            return !isNaN(parseFloat(n)) && isFinite(n);

        }
        if (!isNumeric(args[0])) { embed.setDescription(msgs[1]); return bot.send(embed); }



        Math.floor(args[0]);
        if (args[0] > 100) { embed.setDescription(msgs[1]); return bot.send(embed); }

        if (args[0] < 1) { embed.setDescription(msgs[1]); return bot.send(embed); }
        let logsname = 'logs'
        let logschannel = message.guild.channels.get(bot.guild.fetch(`logsChannel_${message.guild.id}`));
        if (!logschannel) {
            await message.guild.createChannel(logsname, { type: 'text' }).then(channel => {

                bot.guild.set(`logsChannel_${message.guild.id}`, channel.id);
                channel.overwritePermissions(message.guild.defaultRole, {
                    VIEW_CHANNEL: false,
                });
            });
        }
        message.channel.bulkDelete(Math.floor(args[0])).then(() => {
            embed.setColor('#ffd8bd')
            embed.setDescription(`${message.author} | ${args[0]} `)
            logschannel.send(embed)
            bot.send(embed).then(msg => msg.delete(15 * 1000));

        }).catch(err => {
            if (err.message == 'You can only bulk delete messages that are under 14 days old.') {
                embed.setColor('#e22216');
                embed.setDescription(msgs[2]);
                bot.send(embed)
            }
        });
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
    name: `clear`,
    aliases: [`чистка`]
};