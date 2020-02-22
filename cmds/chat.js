//Завершено

const Discord = require('discord.js')
let line1 = '', line2 = '', line3 = '', line4 = '', line5 = '', line6 = '', line7 = '', line8 = '', line9 = '', line10 = ''

exports.run = async (bot, message, args) => {
    let bk = require('../botconfig.json');
    let msg = `**Chat**\n\n${line10}\n${line9}\n${line8}\n${line7}\n${line6}\n${line5}\n${line4}\n${line3}\n${line2}\n${line1}`
    if (!args[0]) {
        return bot.send(msg)
    } else {
        let am = args.join(" ");
        if (am.length > 120) return;
        line10 = line9
        line9 = line8
        line8 = line7
        line7 = line6
        line6 = line5
        line5 = line4
        line4 = line3
        line3 = line2
        line2 = line1
        line1 = `\`\`[A] | ${am}\`\``
        console.log(`\`\`[${message.author.tag}] | ${am}\`\``)
        message.delete();
        bot.send(`**Chat**\n\n\n${line10}\n${line9}\n${line8}\n${line7}\n${line6}\n${line5}\n${line4}\n${line3}\n${line2}\n\`\`[A] | ${am}\`\``)

    };


}
exports.help = {
    name: 'chat',
    aliases: ["ch", 'чат']
}