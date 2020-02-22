//Завершено

const Discord = module.require(`discord.js`);
const ms = require('ms');

module.exports.run = async (bot, message, args) => {
    try {
        let bk = require('../botconfig.json');
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let res = args[1];
        let reason = args.slice(2).join(` `);
        let lang = require(`../lang_${bot.lang}.json`);
        let otherlang = require(`../lang_${bot.lang}.json`);
        let bb = lang.mute.split('<>')
        let rekl = eval('`' + lang.rekl + '`');
        let embed = new Discord.RichEmbed()
            .setTitle(`**${bb[0]}**`)
            .setFooter(rekl, message.author.avatarURL)
            .setColor('#e22216')
            .setThumbnail('https://discordemoji.com/assets/emoji/1414_FeelsAbdulMan.gif');
        let noUser = lang.noUser;
        if (!rUser) { embed.setDescription(noUser); return bot.send(embed); }
        if (!res) { embed.setDescription(`${bb[2]}\n${bb[1]}`); return bot.send(embed); }
        let olang = otherlang.casino.split('<>');
        let evaled = eval('`' + lang.mute + '`');
        let noNum = lang.noNum;
        let noPerm = lang.noPerm;
        let hBal = lang.hBanals;
        let errz = lang.err;
        let err = errz.split('<>');
        let reaso = lang.reason;
        let reasonz = reaso.split('<>')
        let msgs = evaled.split('<>');
        let actions = lang.actions.split('<>')
        let admin = lang.admin.split('<>')
        let noMoney = lang.noMoney;
        function isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }

        if (!message.member.hasPermission(`MANAGE_MESSAGES`)) { embed.setDescription(noPerm); return bot.send(embed); }
        if (!args[0]) { embed.setDescription(`**${noUser}**\n${msgs[1]}`); return bot.send(embed); }
        if (!rUser) { embed.setDescription(noUser); return bot.send(embed); }
        if (!res) { embed.setDescription(`${msgs[2]}\n${msgs[1]}`); return bot.send(embed); }
        if (!reason) { reason = reasonz[1] }
        if (!isNumeric(ms(res))) { embed.setDescription(`${msgs[2]}\n${msgs[1]}`); return bot.send(embed); }
        if (ms(res) < 1000) { embed.setDescription(`${msgs[2]}\n${msgs[1]}`); return bot.send(embed); }
        let role = message.guild.roles.find(r => r.name === bk.muteRole);

        if (!role) {
            role = await message.guild.createRole({
                name: bk.muteRole,
                permissions: []
            });
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(role, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        };

        if (rUser.roles.has(role.id)) { embed.setDescription(msgs[3]); return bot.send(embed); }

        bot.mutes.set(`guild_${rUser.id}`, rUser.guild.id);
        bot.mutes.set(`time_${rUser.id}`, Date.now() + ms(res));

        rUser.addRole(role);
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
        embed.setColor('#1bcf84'); embed.setDescription(msgs[4]); embed.addField(reasonz[0], reason); bot.send(embed); rUser.send(embed)
        logschannel.send(embed)
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
    name: `mute`,
    aliases: [`муте`, 'мут', 'мьют', 'затычка', 'закрытьрот', 'заткнуть', 'убитьчтобыслетеласосальня']
};