const { canModifyQueue } = require("../util/neiUtill");

module.exports = {
  name: "repeat",
  aliases: ['rep'],
  description: "Переключить музыкальный цикл.",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("Ничего не играет.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    // toggle from false to true and reverse
    queue.loop = !queue.loop;
    return queue.textChannel
      .send(`Повторение музыки: ${queue.loop ? "**on**" : "**off**"}`)
      .catch(console.error);
  }
};
