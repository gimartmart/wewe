module.exports = {
  name: "stop",
  //description: "Отключения музыкию.",
  execute(message,args,lang) {
    if (message.guild.me.voice.channel !== undefined) {
      message.guild.me.voice.channel.leave();
      message.reply(lang.sp1()); //I have successfully left the voice channel!
    } else {
      message.reply(lang.sp2());//I'm not connected to a voice channel!
    }
}
}