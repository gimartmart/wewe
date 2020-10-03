const { canModifyQueue } = require("../util/neiUtill");

module.exports = {
  name: "resume",
  aliases: ["r"],
  description: "Возобновить воспроизведение музыки.",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("Ничего не играет.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (!queue.playing) {
      queue.playing = true;
      queue.connection.dispatcher.resume();
      return queue.textChannel.send(`${message.author} ▶ возобновил музыку!`).catch(console.error);
    }

    return message.reply("Очередь не приостановлена.").catch(console.error);
  }
};
