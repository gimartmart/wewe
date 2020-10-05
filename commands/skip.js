const { canModifyQueue } = require("../util/neiUtill");

module.exports = {
  name: "skip",
  //aliases: ["sp"],
  //description: "Пропустить музыку.",
  execute(message,args,lang) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue)
      return message.reply(lang.sk()).catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.playing = true;
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ` + lang.sk1()).catch(console.error);
  }
};
