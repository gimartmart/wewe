
//Завершено

const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    try {
        let bk = require('../botconfig.json');
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let getRole = message.mentions.roles.first() || message.guild.roles.find(r => r.id === args[1]);
        let roles = bot.guild.fetch(`shop_${message.guild.id}`);
        let prices = bot.guild.fetch(`prices_${message.guild.id}`);
        let lang = require(`../lang_${bot.lang}.json`);
        let otherlang = require(`../lang_${bot.lang}.json`);
        let olang = otherlang.casino.split('<>');
        let evaled = eval('`' + lang.unmute + '`');
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
            .setTitle('Unmute')
            .setColor('#d82d08')
            .setFooter(rekl, message.author.avatarURL)
            .setThumbnail('https://discordemoji.com/assets/emoji/1132_Ricardo.gif');
        if (!message.member.hasPermission("MANAGE_MESSAGES")) { embed.setDescription(noPerm); return bot.send(embed); };
        if (!args[0]) { embed.setDescription(noUser); return bot.send(embed); }
        if (!rUser) { embed.setDescription(noUser); return bot.send(embed); }
        let role = message.guild.roles.find(r => r.name === bk.muteRole);
        if (!rUser.roles.has(role.id)) { embed.setDescription(msgs[0]); return bot.send(embed); };
        if (!role) {
            role = await message.guild.createRole({
                name: bk.muterole,
                permissions: []
            });
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(role, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        };
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
        rUser.removeRole(role);
        bot.mutes.delete(`time_${rUser.id}`);
        bot.mutes.delete(`guild_${rUser.id}`);

        embed.addField(msgs[1], `${rUser}`); 
        logschannel.send(embed);
        return bot.send(embed).then(msg => msg.delete(60*1000));
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
    name: "unmute",
    aliases: ["снятьмут"]
};