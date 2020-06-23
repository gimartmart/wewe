const {err, succ} = require('../../Utils/embeds')
const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
    //if(message.guild.id !== config.serverid) return message.channel.send("Оформите premium");
    const serverQueue = bot.queue.get(message.guild.id);
    if (!serverQueue) return message.channel.send(err("<a:47:671044257124974614>Сейчас ничего не играет."));
    if (serverQueue.size > 8) return message.channel.send(err("<a:47:671044257124974614>В очереди слишком много треков!"));
    const embed = new Discord.RichEmbed()
        .setTitle("<a:47:671044257124974614>Все треки:")
        .setDescription(
            `
    ${serverQueue.songs.map(song => `**->** ${song.title}`).join("\n")}
    \n<a:47:671044257124974614>**Сейчас играет:** ${
                serverQueue.songs[0].title
            }`
        )
        .setColor("RANDOM")
        .setFooter("Holo music 2020", bot.user.avatarURL)
        .setThumbnail("https://i.pinimg.com/originals/d9/d4/40/d9d4406eda8b13a30a6a0de486f93402.gif")
        .setTimestamp();
    return message.channel.send(embed);
}
module.exports.help = {
  aliases: [],
    name: "ql",
    category: "music"
}