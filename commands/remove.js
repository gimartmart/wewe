const { canModifyQueue } = require("../util/neiUtill");

module.exports = {
  name: "remove",
  //description: "Удалить песню из очереди.",
  execute(message, args, lang) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send(lang.ow()).catch(console.error);
    if (!canModifyQueue(message.member)) return;
    
    if (!args.length) return message.reply(lang.pre() + ` ${message.client.prefix}`+ lang.voi());
    if (isNaN(args[0])) return message.reply(lang.pre() + `${message.client.prefix}`+ lang.voi());

    const song = queue.songs.splice(args[0] - 1, 1);
    queue.textChannel.send(`${message.author}`+ lang.del()  +`**${song[0].title}**` + lang.og() );
  }
};
