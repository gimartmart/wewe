const { RichEmbed } = module.require("discord.js");
const Enmap = require("enmap");
let config = require("../../botconfig.json");
const Utils = require("../../Utils/Utils.js")

module.exports.run = async (bot, message, args) => {
  if (message.author.bot) return;
  let userid = config.userid;
  if (
    !message.member.hasPermission("ADMINISTRATOR") &&
    !userid.includes(message.author.id)
  )
    return message.channel.send("**__У вас нeт прав!__**");
  // if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("__**У вас нет прав!**__").then(msg => msg.delete(5*1000));
  const data = bot.games.ensure(message.guild.id, {
    channel: "",
    last: 0,
    cooldown: 4,
    ends: 0,
    role: ""
  });
  const option = args[0] ? args[0].toLowerCase() : "none";

  switch (option) {
    case "role":
      const role = message.mentions.roles.first()
      if(!role) return message.channel.send("Укажи роль")
      bot.games.set(message.guild.id, role.id, "role")
      break
    case "add":
      const channel = message.mentions.channels.first();
      if (!channel) return message.channel.send("Пинг канал");
      bot.games.set(message.guild.id, channel.id, "channel");
      message.channel.send("Канал установлен");
      break;
    case "remove":
      if (data.channel.length === 0)
        return message.channel.send("Канал не установлен");
      bot.games.set(message.guild.id, "", "channel");
      message.channel.send("Канал был сброшен");
      break;
    case "start":
      if (message.channel.id !== data.channel)
        return message.channel.send("Я не могу начать в этом канале");
      if (isNaN(args[1]))
        return message.channel.send("Укажи корректное время в минутах");
      const embed = new RichEmbed()
        .setTitle("Игра начинается")
        .addField("Последнее число", data.last)
        .addField("Задержка[seс]", data.cooldown)
        .addField("Время [min]", args[1]);
      await message.channel.send(embed);
      bot.games.set(message.guild.id, Date.now() + 1000 * 60 * parseInt(args[1]), "ends")
      Utils.createGame(bot, data, message.guild, 1000 * 60 * parseInt(args[1]))
      break;
    default:
      message.channel.send("Укажи действие: add, remove, start");
      break;
  }
};

module.exports.help = {
  name: "counting",
  aliases: [],
  category: "admin"
};
