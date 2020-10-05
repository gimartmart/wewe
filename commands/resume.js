const { canModifyQueue } = require("../util/neiUtill");

module.exports = {
  name: "resume",
  //aliases: ["r"],
  //description: "Возобновить воспроизведение музыки.",
  execute(message,args,lang) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply(lang.voice1()).catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (!queue.playing) {
      queue.playing = true;
      queue.connection.dispatcher.resume();
      return queue.textChannel.send(`${message.author} ` + lang.voice2()).catch(console.error);
    }

    return message.reply(lang.voice3()).catch(console.error);
  }
};
