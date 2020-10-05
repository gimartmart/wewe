const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "np",
 // description: "Просмотреть какая сейчас проигруется песня.",
  execute(message, args, lang) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply(lang.voice()).catch(console.error);
    const song = queue.songs[0];

    let nowPlaying = new MessageEmbed()
      .setTitle(lang.intext())
      .setDescription(lang.inotext()` **${song.title}**`)
      .setColor("#ffffff")
      .setFooter(`${song.url}`)
      //.setAuthor("nei-music")
      .setTimestamp();

    if (song.duration > 0) nowPlaying.setFooter(new Date(song.duration * 1000).toISOString().substr(11, 8));
    message.delete().catch(O_o => {});
    return message.channel.send(nowPlaying);
  }
};
