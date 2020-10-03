const { canModifyQueue } = require("../util/neiUtill");

module.exports = {
  name: "skip",
  aliases: ["sp"],
  description: "Пропустить музыку.",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue)
      return message.reply("Нет ничего, что я мога бы пропустить для вас.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.playing = true;
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏭ текущая музыка была пропущена.`).catch(console.error);
  }
};
