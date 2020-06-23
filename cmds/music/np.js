const {err, succ} = require('../../Utils/embeds')
module.exports.run = async (bot, message, args) => {
    const serverQueue = bot.queue.get(message.guild.id);
    //if(message.guild.id !== config.serverid) return message.channel.send("Оформите premium");
    if (!serverQueue) return message.channel.send(err("<a:47:671044257124974614>Сейчас ничего не играет."))
    return message.channel.send(
        `Сейчас проигрывается: **${serverQueue.songs[0].title}**`)
}

module.exports.help = {
  aliases: [],
    name: "np",
    category: "music"
}