const { canModifyQueue } = require("../util/neiUtill");

module.exports = {
  name: "repeat",
  //aliases: ['rep'],
  //description: "Переключить музыкальный цикл.",
  execute(message,args,lang) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply(lang.voice1()).catch(console.error);
    if (!canModifyQueue(message.member)) return;

    // toggle from false to true and reverse
    queue.loop = !queue.loop;
    return queue.textChannel
      .send(lang.voice2() + ` ${queue.loop ? "**on**" : "**off**"}`)
      .catch(console.error);
  }
};
