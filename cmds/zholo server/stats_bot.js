const Discord = require('discord.js');
const os = require("os");
const fs = require("fs");
const strftime = require("strftime");
module.exports.run = async (bot, message, args) => {

setInterval(() => {
        bot.guilds.get('643389876053475348').channels.get("649395464554151951").fetchMessage("705872365393019002").then(msg => {
                      const top = bot.guilds.sort((a, b) => a.memberCount - b.memberCount).array().reverse()
                       msg.edit(`**Global bot status**`,new Discord.RichEmbed().setAuthor(`${bot.user.username}`, `${bot.user.avatarURL}`)
             // msg.edit(`**Последнее обновление: ${moment(Date()).format(`DD.MM.YYYY`)}**`//,new Discord.RichEmbed().setAuthor(`${bot.user.username}`, `${bot.user.avatarURL}`)
            .setColor("RANDOM")
            .setThumbnail(`${bot.user.avatarURL}`)
            .setTimestamp()
                .addField("**• Mem Usage**", `**${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB**`, false)
                .addField("**• Users**", `**${bot.users.size.toLocaleString()}**`, false)
              .addField("**• Emojis**", `**${bot.emojis.size}**`, false)
                .addField("**• Servers**", `**${bot.guilds.size.toLocaleString()}**`, false)
                .addField("**• Channels** ", `**${bot.channels.size.toLocaleString()}**`, false)
                .addField("**• CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``,false)
                .addField("**• ping**", `**${bot.ping}**`, false)
                .addField("**• Время работы:**",` **${Math.round(bot.uptime / (1000 * 60 * 60 * 24))} d, ${Math.round(bot.uptime / (1000 * 60 * 60))} h, ${Math.round(bot.uptime / (1000 * 60)) % 60} m, ${Math.round(bot.uptime / 1000) % 60} s**`, false)
               .addField(`**ТОП СЕРВЕРОВ БОТА**`, `1. **${top[0].name}**: ${top[0].memberCount}\n2. **${top[1].name}**: ${top[1].memberCount}\n3. **${top[2].name}**: ${top[2].memberCount}\n4. **${top[3].name}**: Участников ${top[3].memberCount}\n5. **${top[4].name}**: Участников ${top[4].memberCount}\n6. **${top[5].name}**: Участников ${top[5].memberCount}\n7. **${top[6].name}**: Участников ${top[6].memberCount}\n8. **${top[7].name}**: Участников ${top[7].memberCount}\n9. **${top[8].name}**: Участников ${top[8].memberCount}\n10. **${top[9].name}**: Участников ${top[9].memberCount}`, false))
        })
      },10000) 
}
module.exports.help = {
    name: 'sta_bot',
    aliases: []
}; 