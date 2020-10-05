const { MessageEmbed, splitMessage, escapeMarkdown } = require("discord.js");

module.exports = {
  name: "queue",
  //aliases: ["q"],
  //description: "Показать музыкальную очередь.",
  execute(message,args,lang) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply(lang.voice1()).catch(console.error);

    const description = queue.songs.map((song, index) => `${index + 1}. ${escapeMarkdown(song.title)}`);

    let queueEmbed = new MessageEmbed()
      .setTitle(lang.voice2())
      .setDescription(description)
      .setColor("#ffffff");

    const splitDescription = splitMessage(description, {
      maxLength: 2048,
      char: "\n",
      prepend: "",
      append: ""
    });

    splitDescription.forEach(async (m) => {
      queueEmbed.setDescription(m);
      message.channel.send(queueEmbed);
    });
  }
};
