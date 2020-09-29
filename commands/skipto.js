const { canModifyQueue } = require("../util/neiUtill");

module.exports = {
  name: "skipto",
  aliases: ["st"],
  description: "Перейти к выбранному номеру очереди.",
  execute(message, args) {
    if (!args.length) return message.reply(`Применение: ${message.client.prefix}${module.exports.name} <Queue Number>`);

    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("Очереди нет.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.playing = true;
    queue.songs = queue.songs.slice(args[0] - 2);
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏭ пропущено ${args[0] - 1} песни`).catch(console.error);
  }
};
