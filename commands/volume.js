const { canModifyQueue } = require("../util/neiUtill");

module.exports = {
  name: "volume",
  aliases: ["v"],
  description: "Изменить громкость музыки.",
  execute(message, args) {
    const queue = message.client.queue.get(message.guild.id);

    if (!queue) return message.reply("Ничего не играет.").catch(console.error);
    if (!canModifyQueue(message.member))
      return message.reply("Сначала вам нужно присоединиться к голосовому каналу!").catch(console.error);

    if (!args[0]) return message.reply(`🔊 Текущий звук: **${queue.volume}%**`).catch(console.error);
    if (isNaN(args[0])) return message.reply("Пожалуйста, используйте номер для установки громкости.").catch(console.error);
    if (parseInt(args[0]) > 200 || parseInt(args[0]) < 0)
      return message.reply("Пожалуйста, используйте число между 0 - 200.").catch(console.error);

    queue.volume = args[0];
    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 200);

    return queue.textChannel.send(`Звук установлен на: **${args[0]}%**`).catch(console.error);
  }
};
