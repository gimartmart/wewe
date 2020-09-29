const { canModifyQueue } = require("../util/neiUtill");


module.exports = {
  name: "stop",
  description: "Отключения музыкию.",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    
    if (!queue) return message.reply("Ничего не играет.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.songs = [];
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏹ музыка была остановлина.`).catch(console.error);
  }
};
