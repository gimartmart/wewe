const { canModifyQueue } = require("../util/neiUtill");

module.exports = {
  name: "volume",
  //aliases: ["v"],
 // description: "Изменить громкость музыки.",
  execute(message, args, lang) {
    const queue = message.client.queue.get(message.guild.id);

    if (!queue) return message.reply(lang.vl1()).catch(console.error);
    if (!canModifyQueue(message.member))
      return message.reply(lang.vl2()).catch(console.error);

    if (!args[0]) return message.reply(lang.vl3() + ` **${queue.volume}%**`).catch(console.error);
    if (isNaN(args[0])) return message.reply(lang.vl4()).catch(console.error);
    if (parseInt(args[0]) > 200 || parseInt(args[0]) < 0)
      return message.reply(lang.vl5()).catch(console.error);

    queue.volume = args[0];
    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 200);

    return queue.textChannel.send(lang.vl6() + ` **${args[0]}%**`).catch(console.error);
  }
};
