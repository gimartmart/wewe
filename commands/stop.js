module.exports = {
  name: "stop",
  description: "Отключения музыкию.",
  execute(message) {
    if (message.guild.me.voice.channel !== undefined) {
      message.guild.me.voice.channel.leave();
      message.reply("зайди"); //I have successfully left the voice channel!
    } else {
      message.reply("уйди");//I'm not connected to a voice channel!
    }
}
}