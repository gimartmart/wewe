const {err, succ} = require('../../Utils/embeds')
module.exports.run = async (bot, message, args) => {
    const serverQueue = bot.queue.get(message.guild.id);
    //if(message.guild.id !== config.serverid) return message.channel.send("Оформите premium");
    if (!message.member.voiceChannel) return message.channel.send(err("<a:47:671044257124974614>Вы не в голосовом канале."))
    if (!serverQueue) return message.channel.send(err("<a:47:671044257124974614>Сейчас и так ничего не играет."))
    if (message.member.voiceChannel !== message.guild.me.voiceChannel)
        // serverQueue.songs.filter(song => song !== serverQueue.songs[0]) //скип по репит
        return message.channel.send(err("<a:47:671044257124974614>Вы должны быть в канале, где нахожусь я."))
    serverQueue.connection.player.dispatcher.end("Skip command has been used!");
    serverQueue.songs.filter(song => song !== serverQueue.songs[0])
    message.channel.send(succ("<a:47:671044257124974614>Текущая песня была пропущена!"))
}

module.exports.help = {
  aliases: [],
    name: "skip",
    category: "music"
}