const request = require('node-superfetch');
const Discord = require('discord.js');



module.exports.run = async(bot, message, args) => {
    const query = args.join(' ');

    try {
        const { text } = await request
            .get('https://kitsu.io/api/edge/anime')
            .query({ 'filter[text]': query });
        const body = JSON.parse(text);
        if (!body.data.length) return message.reply('Не удалось найти никаких результатов.');
        const data = body.data[0].attributes;
        const embed = new Discord.RichEmbed()
            .setColor(0xF75239)
            .setAuthor('Kitsu.io', 'https://i.imgur.com/lVqooyd.png', 'https://kitsu.io/explore/anime')
            .setURL(`https://kitsu.io/anime/${data.slug}`)
            .setThumbnail(data.posterImage ? data.posterImage.original : null)
            .setTitle(data.canonicalTitle)
            .setDescription((data.synopsis))
            .addField('❯ Тип', `${data.showType} - ${data.status}`, true)
            .addField('❯ Эпизоды', data.episodeCount || '???', true)
            .addField('❯ Дата начала', data.startDate ? new Date(data.startDate).toDateString() : '???', true)
            .addField('❯ Дата окончания', data.endDate ? new Date(data.endDate).toDateString() : '???', true);
        return message.channel.send(embed);
    return  message.delete().catch();
    } catch (err) {
        return message.reply(`О нет, произошла ошибка: \`${err.message}\`.  Попробуйте позже!`);
    }


};
module.exports.help = {
	aliases: [],
    name: "anime",
    category: "anime"
}
