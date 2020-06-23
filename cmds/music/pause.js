const {err, succ} = require('../../Utils/embeds')
module.exports.run = async (bot, message, args) => {
    const serverQueue = bot.queue.get(message.guild.id);
    // if(message.guild.id !== config.serverid) return message.channel.send("Оформите premium");
    if (!message.member.voiceChannel) return message.channel.send(err("<a:47:671044257124974614>Вы не в голосовом канале."))
    if (serverQueue && serverQueue.playing) {
        serverQueue.playing = false;
        serverQueue.connection.player.dispatcher.pause();
        return message.channel.send(succ("<a:47:671044257124974614>Плеер поставлен на паузу."))
    }
    if(!serverQueue) return message.channel.send(err("<a:47:671044257124974614>Сейчас ничего не играет."))
    if (message.member.voiceChannel !== message.guild.me.voiceChannel)
        return message.channel.send(err("<a:47:671044257124974614>Вы должны быть в канале, где нахожусь я."))
}
module.exports.help = {
  aliases: [],
    name: "pause",
    category: "music"
}