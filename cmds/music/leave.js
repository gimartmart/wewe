const {err, succ} = require('../../Utils/embeds.js')
module.exports.run = async (bot, message, args) => {
    const voiceChannel = message.member.voiceChannel
    const serverQueue = bot.queue.get(message.guild.id);
    //if (!message.member.voiceChannel) return err("<a:47:671044257124974614>Вы не в голосовом канале.");
    if (voiceChannel && voiceChannel.id === message.guild.voiceConnection.channel.id) {
        if(serverQueue) {
            serverQueue.songs = [];
            serverQueue.connection.player.dispatcher.end("Stop command has been used!");
        }
        /*
        if (!message.member.voiceChannel) return err("<a:47:671044257124974614>Вы не в голосовом канале.")
        if (!serverQueue) return err("<a:47:671044257124974614>Сейчас и так ничего не играет.");
      if (message.member.voiceChannel !== message.guild.me.voiceChannel)
       // serverQueue.songs.filter(song => song !== serverQueue.songs[0]) //скип по репит
        return err("<a:47:671044257124974614>Вы должны быть в канале, где нахожусь я.");
        console.log('Уходя с канала и перестал играть в iLoveRadio')
        */
        message.channel.send("**<a:47:671044257124974614>Плеер был остановлен.**")
        voiceChannel.leave()
    } else {
        message.reply('**<a:47:671044257124974614>Зайдите в голос.**')
    }
}

module.exports.help = {
  aliases: ["leave"],
    name: "stop",
    category: "music"
}