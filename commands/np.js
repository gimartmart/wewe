const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "np",
  description: "Просмотреть какая сейчас проигруется песня.",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("Ничего не играет.").catch(console.error);
    const song = queue.songs[0];

    let nowPlaying = new MessageEmbed()
      .setTitle("Сейчас играет")
      .setDescription(`**${songs[0].title}**\n[Ссылка на музыку](${song.url})`)
      .setColor("#ffffff")
      //.setAuthor("nei-music")
      .setTimestamp();

    if (song.duration > 0) nowPlaying.setFooter(new Date(song.duration * 1000).toISOString().substr(11, 8));

    return message.channel.send(nowPlaying);
  }
};
