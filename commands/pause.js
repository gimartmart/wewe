const { canModifyQueue } = require("../util/neiUtill");

module.exports = {
  name: "pause",
  description: "Приостановить проигрываемую музыку.",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("Ничего не играет.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (queue.playing) {
      queue.playing = false;
      queue.connection.dispatcher.pause(true);
      return queue.textChannel.send(`${message.author} ⏸ музыка приостановлена.`).catch(console.error);
    }
  }
};
