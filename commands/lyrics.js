const { MessageEmbed } = require("discord.js");
const lyricsFinder = require("lyrics-finder");

module.exports = {
  name: "lyrics",
  //aliases: ["ly"],
  //description: "Получить текст для текущей песни.",
  async execute(message, args, lang) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send(lang.voice()).catch(console.error);

    let lyrics = null;

    try {
      lyrics = await lyricsFinder(queue.songs[0].title);
      if (!lyrics) lyrics = lang.text()` ${queue.songs[0].title}.`;
    } catch (error) {
      lyrics = lang.text()` ${queue.songs[0].title}.`;
    }

    let lyricsEmbed = new MessageEmbed()
      .setTitle("Lyrics")
      .setDescription(lyrics)
      .setColor("#Ffffff")
      .setTimestamp();

    if (lyricsEmbed.description.length >= 2048)
      lyricsEmbed.description = `${lyricsEmbed.description.substr(0, 2045)}...`;
      //message.delete().catch(O_o => {});
    return message.channel.send(lyricsEmbed).catch(console.error);
  }
};
