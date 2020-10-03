const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Список команд и их описание.",
  execute(message, args, lang) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setAuthor("holo-music", `https://i.pinimg.com/originals/48/92/82/4892828b0098ac3263f6a211e0cec3aa.jpg`)
      .setTitle("Help")
      .setDescription(lang.hp2())
      .setColor("#ffffff")
      .setThumbnail(`https://thumbs.gfycat.com/HopefulHorribleCow-size_restricted.gif`);
    //  if (message.author.id !== 'ID OF THE USER') return ('You aren\'t an Administrator');
    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        `${cmd.description}`,
        false
        //true
      );
    });
    helpEmbed.setTimestamp();
    message.delete().catch(O_o => {});
    return message.channel.send(helpEmbed).catch(console.error);
    
  }
};
