const {err, succ} = require('../../Utils/embeds')
const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {
    //if(message.guild.id !== config.serverid) return message.channel.send("Оформите premium");
    const serverQueue = bot.queue.get(message.guild.id);
    new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setFooter("Holo music 2020", bot.user.avatarURL)
        .setThumbnail("https://i.pinimg.com/originals/d9/d4/40/d9d4406eda8b13a30a6a0de486f93402.gif")
        .setTimestamp()

    if (!message.member.voiceChannel) return message.channel.send(err("<a:47:671044257124974614>Вы не в голосовом канале"));
    if (!serverQueue) return message.channel.send(err("<a:47:671044257124974614>Сейчас ничего не играет"));
    if (!args[0]) return message.channel.send(succ(`<a:47:671044257124974614>Громкость: ${serverQueue.volume}`));
    if (args[0] > 4) return message.channel.send(err("<a:47:671044257124974614>Я не хочу чтобы вы оглохли, ладно?"));
    if (args[0] < 0.5) return message.channel.send(err("<a:47:671044257124974614>Вам точно всё слышно?"));
    serverQueue.volume = args[0];
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);
    return message.channel.send(succ(
        `<a:47:671044257124974614>Теперь громкость равна: ${args[0]}`
    ))
}

module.exports.help = {
  aliases: [],
    name: "volume",
    category: "music"
}