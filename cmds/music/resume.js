const {err, succ} = require('../../Utils/embeds')
module.exports.run = async (bot, message, args) => {
    const serverQueue = bot.queue.get(message.guild.id);
    if (!message.member.voiceChannel) return message.channel.send(err("<a:47:671044257124974614>Вы не в голосовом канале."))
    if (serverQueue && !serverQueue.playing) {
        serverQueue.playing = true;
        serverQueue.connection.player.dispatcher.resume();
        return message.channel.send(succ("<a:47:671044257124974614>Плеер снят с паузы."))
    }
    if (serverQueue.playing) return message.channel.send(err("<a:47:671044257124974614>Плеер сейчас не на паузе."));
    if (message.member.voiceChannel !== message.guild.me.voiceChannel)
        return message.channel.send(err("<a:47:671044257124974614>Вы должны быть в канале, где нахожусь я."))
}

module.exports.help = {
  aliases: [],
    name: "resume",
    category: "music"
}