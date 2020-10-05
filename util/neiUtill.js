module.exports = {
  canModifyQueue(member,args,lang) {
    const { channel } = member.voice;
    const botChannel = member.guild.me.voice.channel;

    if (channel !== botChannel) {
      channel.send("Сначала вам нужно подключиться к голосовому каналу!").catch(console.error);
      return false;
    }

    return true;
  }
};
