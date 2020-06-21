const {err, succ} = require('../../Utils/embeds')
module.exports.run = async (bot, message, args) => {
    const serverQueue = bot.queue.get(message.guild.id);
    if (!serverQueue) return message.channel.send(err("<a:47:671044257124974614>Сейчас ничего не играет"))
    serverQueue.repeating = !serverQueue.repeating
 return message.channel.send(succ(`<a:47:671044257124974614>Повтор: ${serverQueue.repeating ? "включен" : "выключен"}`))
}

module.exports.help = {
  aliases: [],
    name: "repeat",
    category: "music"
}