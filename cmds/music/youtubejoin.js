const {err, succ} = require('../../Utils/embeds')
const {playMusic} = require('../../Utils/play')
module.exports.run = async (bot, message, args) => {
    message.channel.send("**<a:47:671044257124974614>YouTube list был включён.**")
    const channel = message.member.voiceChannel
    if (!channel) return
    const connection = await channel.join()
    playMusic(connection)
}

module.exports.help = {
  aliases: ["playlist"],
    name: "youtubelist",
    category: "music"
}