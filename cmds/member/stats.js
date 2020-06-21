const { version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const os = require("os");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        const duration = moment.duration(bot.uptime).format(" D [day], H [hrs], m [mins], s [secs]");
        const embed = new Discord.RichEmbed()
            .setColor("#6f24e4")
                .setAuthor("Показатели бота")
        .setThumbnail('https://discordemoji.com/assets/emoji/6680_intslTomCowboy.gif')
        .addField("**• Ram**", `**${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB**`, false)
        .addField("**• Users**", `**${bot.users.size.toLocaleString()}**`, false)
        .addField("**• Emojis**", `**${bot.emojis.size}**`, false)
        .addField("**• Servers**", `**${bot.guilds.size.toLocaleString()}**`, false)
        .addField("**• Channels** ", `**${bot.channels.size.toLocaleString()}**`, false)
        .addField("**• CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``,false)
        .addField("**• ping**", `**${bot.ping}**`, false)
        .addField("**• Время работы:**",` **${Math.round(bot.uptime / (1000 * 60 * 60 * 24))} d, ${Math.round(bot.uptime / (1000 * 60 * 60))} h, ${Math.round(bot.uptime / (1000 * 60)) % 60} m, ${Math.round(bot.uptime / 1000) % 60} s**`, false)
        .addField("**• Кол-во команд:**", `\`${bot.commands.size.toLocaleString()}\``, false)
        .addField("**• Discord.js:**", `\`v${version}\``, false)
        .addField("**• Node:**", `\`${process.version}\``, false)
        .addField("**• Оперционная система:**",`\`Ubuntu 16.04 LTS\``, false)
        .addField("**• Бот создан:**", `\`${bot.user.createdAt}\``, false)
        .addField("**• Создатель бота:**", `<@521315512504811520>,<@449187950190919680>`, false)
        .addField("**• Server bot:**","[Инвайт](https://discord.gg/rGHfAxj)", false)
        .addField("**• Библеотека:**","[discord.js](https://discord.js.org/#/)", false)
        .addField("**• Редактор кода:**","[Visual Studio Code](https://code.visualstudio.com/download)", false)
         //   .addField("**Редактор кода:**","[sublimetext](https://www.sublimetext.com/3)", true)
        message.channel.send(embed);
        message.delete();
}
module.exports.help = {
	aliases: [],
    name: 'stats',
    category: "info"
}