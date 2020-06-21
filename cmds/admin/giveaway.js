const Discord = require("discord.js");
let config = require("../../botconfig.json");
module.exports.run = async (bot, message, args) => {
  let userid = config.userid;
  if (
    !message.member.hasPermission("ADMINISTRATOR") &&
    !userid.includes(message.author.id)
  )
    return message.channel.send("**__У вас нeт прав!__**");
  //if (!message.member.hasPermission("ADMINISTRATOR")) && message.member.id !== "482238279698350081") return message.channel.send("__**У вас нет прав!**__").then(msg => msg.delete(5*1000));

  const count = parseInt(args[0]);
  const time = parseInt(args[1]);
  const item = args.slice(2).join(" ");
  if (!count) return bot.send("Укажите количество победителей!");
  if (!time) return bot.send("Укажите врямя [`10 = 10 минут`]!");
  if (!item) return bot.send("Вы не указали приз!");
  let giveEmbed = new Discord.RichEmbed()
    .setTitle("🎉 Розыгрыш ")
    .setDescription(
      `**Победителей: ${count} человек(-а)**\n**Время: ${time} min**\n**Приз: ${item}**\n\n**Создал розыгрыш: ${message.author}**`
    )
    .setTimestamp(Date.now() + time * 1000 * 60);
  let embedSent = await message.channel.send(giveEmbed);
  bot.giveaways.ensure(message.guild.id, {});
  bot.giveaways.set(message.guild.id, {
    channel: message.channel.id,
    count: count,
    item: item
  }, embedSent.id);
  embedSent.react("🎉");
  setTimeout(async function() {
    const peopleReacted = embedSent.reactions
      .get("🎉")
      .users.filter(r => !r.bot);
    let win = new Discord.RichEmbed()
      .setTitle("💥 Розыгрыш завершён! ")
      .setColor(bot.color)
      .setDescription(
        `**Выиграл(и): ${peopleReacted
          .random(count)
          .join(" ")} \nПриз: ${item}**`
      );
    message.channel.send(win); //мне нужно главное сообщение, едитировать на Embed
    bot.giveaways.remove(message.guild.id, embedSent.id);
  }, time * 1000 * 60);
};

module.exports.help = {
  aliases: [],
  name: "giveaway",
  category: "admin"
};
