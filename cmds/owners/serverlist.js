const Discord = require("discord.js")
let config = require("../../botconfig.json");
module.exports.run = async(bot, message, args) => {
    var member = message.member;
    let ownerid = config.ownerid            
if(!ownerid.includes(message.author.id)) return message.channel.send("__**У вас нет прав!**__").then(msg => msg.delete(5*1000));
    const embed = require('discord.js').RichEmbed;

    function chunk(array, chunkSize) {
        const temp = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            temp.push(array.slice(i, i + chunkSize));
        }
        return temp;
        return;
    }
    let guild = bot.guilds.get(args[1]);
    if (!guild) guild = message.guild
    let guild1 = bot.guilds.get(args[0]);
    if (!guild1) guild1 = message.guild
    let number = ("Сервера:", bot.guilds.map(x => `| **NAME: ${x.name}**| \n| MEMBERS: ${x.memberCount} \\|\n| ID: ${x.id}|\n`))
    number = chunk(number, 10);

    let index = 0;
    const ge = new embed()
        .setColor("RED")
        .setAuthor(`Бот находится на ${ bot.guilds.size } серверах!`, bot.user.displayAvatarURL)
        .setDescription(number[index].join('\n'))
        .setFooter(`Page ${ index + 1 } of ${ number.length }`)
    const m = await message.channel.send(ge);
    await m.react('⬅');
    await m.react('⏹️');
    await m.react('➡');
    async function awaitReaction() {
        const filter = (rect, usr) => ['⬅', '⏹️', '➡'].includes(rect.emoji.name) && usr.id === message.author.id
        const response = await m.awaitReactions(filter, {
            max: 1,
            time: 300000
        });
        if (!response.size) {
            return undefined;
        }
        const emoji = response.first().emoji.name;
        if (emoji === '⬅') index--;
        if (emoji === '⏹️') m.delete();
        if (emoji === '➡') index++;

        index = ((index % number.length) + number.length) % number.length;
        ge.setDescription(number[index].join('\n'))
        ge.setFooter(`Page ${ index + 1 } of ${ number.length }`)
        await m.edit(ge);
        return awaitReaction();
    }
    return awaitReaction();

    message.delete().catch();
}
module.exports.help = {
	aliases: [],
    name: "serverlist"

};
