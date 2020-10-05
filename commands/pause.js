const { canModifyQueue } = require("../util/neiUtill");

module.exports = {
  name: "pause",
  //description: "Приостановить проигрываемую музыку.",
  execute(message,args, lang) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply(lang.voice()).catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (queue.playing) {
      queue.playing = false;
      queue.connection.dispatcher.pause(true);
      return queue.textChannel.send(`${message.author} `+lang.int()).catch(console.error);
    }
  }
};
