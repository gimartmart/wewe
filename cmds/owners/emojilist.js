let config = require("../../botconfig.json");
module.exports.run = async(bot, message, args) => {
    var member = message.member;
    let ownerid = config.ownerid            
if(!ownerid.includes(message.author.id)) return message.channel.send("__**У вас нет прав!**__").then(msg => msg.delete(5*1000));
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



    const WxArtzEmbedBiarSyantik = require('discord.js').RichEmbed;

    let number = guild.emojis.array().map((x, i) => `${i+1} - ${x} (${x.id}) (${x.name})`)
    number = chunk(number, 10);

    if (!number) return message.channel.send("Sorry, this server not have emoji")

    let index = 0;
    const ge = new WxArtzEmbedBiarSyantik()
        .setColor("RED")
        .setAuthor(`| Server Emote List`, guild.iconURL)
        .addField(`${guild.owner.user.tag}`, `(${guild.ownerID})`)
        .setDescription(number[index].join('\n'))
        .setFooter(`Page ${index+1} of ${number.length}`)
    const m = await message.channel.send(ge);
    await m.react('⬅');
    await m.react('🔴');
    await m.react('➡');
    async function awaitReaction() {
        const filter = (rect, usr) => ['⬅', '🔴', '➡'].includes(rect.emoji.name) && usr.id === message.author.id
        const response = await m.awaitReactions(filter, {
            max: 1,
            time: 30000
        });
        if (!response.size) {
            return undefined;
        }
        const emoji = response.first().emoji.name;
        if (emoji === '⬅') index--;
        if (emoji === '🔴') m.delete();
        if (emoji === '➡') index++;

        index = ((index % number.length) + number.length) % number.length;
        ge.setDescription(number[index].join('\n'))
        ge.setFooter(`Page ${index+1} of ${number.length}`)
        await m.edit(ge);
        return awaitReaction();
    }
    return awaitReaction();
}
module.exports.help = {
	aliases: [],
    name: "emojilist"

}
