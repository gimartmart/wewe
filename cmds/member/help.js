const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
//    .setColor("RANDOM")
    .setColor('#03ffae')
    .setTitle("**<a:41:637697785004818449>help<a:26:636624686956019742>**")
    .setFooter(`Всего комманд: ${bot.commands.size}`)
   .setDescription("**<a:02:636617968012230667><@557958160514547717>**\n<a:39:637697619904299066>**Version bot: __20.0__**<a:40:637697693514203157>")
    .addField(
      "**<a:28:637652899425550346>Информация<a:37:637697316932812816>**",
      `${bot.commands
        .filter(cmds => cmds.help.category === "info")
        .map(cmds => `\`${cmds.help.name}\`,`)
        .join(" ")}`
    )
    .addField(
      "<a:50:686551581277159424>Administration<a:13:686552279972708362>",
      `${bot.commands
        .filter(cmds => cmds.help.category === "admin")
        .map(cmds => `\`${cmds.help.name}\`,`)
        .join(" ")}`
    )
    .addField(
      "**<a:05:636618077731160064>Животные<a:03:636618020822712331>**",
      `${bot.commands
        .filter(cmds => cmds.help.category === "bdc")
        .map(cmds => `\`${cmds.help.name}\`,`)
        .join(" ")}`
    )
    .addField(
      "**<a:01:636503288447107072>Действие<a:29:637652979138428959>**",
      `${bot.commands
        .filter(cmds => cmds.help.category === "ang")
        .map(cmds => `\`${cmds.help.name}\`,`)
        .join(" ")}`
    )
    .addField(
      "**<a:16:636622189159907350>Развлечения<a:42:637697820400549892>**",
      `${bot.commands
        .filter(cmds => cmds.help.category === "fun")
        .map(cmds => `\`${cmds.help.name}\`,`)
        .join(" ")}`
    )
    .addField(
      "**<a:04:636618043878932482>NSFW<a:23:636622851838836757>**",
      `${bot.commands
        .filter(cmds => cmds.help.category === "nsfw")
        .map(cmds => `\`${cmds.help.name}\`,`)
        .join(" ")}`
    )
    .addField(
      "**<a:32:637653122549809152>Anime<a:13:636621487406579712>**",
      `${bot.commands
        .filter(cmds => cmds.help.category === "anime")
        .map(cmds => `\`${cmds.help.name}\`,`)
        .join(" ")}`
    )
    .addField(
      "<a:47:671044257124974614>Mузыка<a:24:636624537970016297>",
      `${bot.commands
        .filter(cmds => cmds.help.category === "music")
        .map(cmds => `\`${cmds.help.name}\`,`)
        .join(" ")}`
    )
    .setThumbnail('https://discordemoji.com/assets/emoji/5878_ponGif.gif','https://discordemoji.com/assets/emoji/6680_intslTomCowboy.gif','https://discordemoji.com/assets/emoji/3265_hugheart.gif')
    .addField("**<a:36:637663144247951360>Наш сайт:**","**В процесе!**")
    //.addField("**<:103:637653337445236768>Группа VK:**","**В процесе!**")
    .addField("**<:104:637653363416104980>Наш YouTube:**","[Holo Bots](https://www.youtube.com/channel/UCrKFHtFqITOmQLUsizhudpQ)")
//.addField("**<a:39:637697619904299066>Подробная информация о командах!!!**","**<a:31:637653092749410304>command-info/cmd<a:30:637653060726030337>**");
    message.delete().catch()
    let admin =  message.author.id  == '521315512504811520' ?message.author.id == '521315512504811520' : 'NET'
  if (admin == 1)embed.setDescription(`**Вы мой разработчик!!!!**`)
  message.channel.send(embed);
};
module.exports.help = {
  name: "help",
  aliases: [],
  category: "info"
};
