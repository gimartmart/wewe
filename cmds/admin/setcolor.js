let config = require("../../botconfig.json");
let prefix = config.prefix;

module.exports.run = async (bot, message, args) => {
  let userid = config.userid
  if ((!message.member.hasPermission("MANAGE_MESSAGES")) && !userid.includes(message.author.id))
      return message.channel.send("__**У вас нет прав!**__").then(msg => msg.delete(5*1000));
  !args[0] && !message.mentions.roles.first()
    ? message.reply("Ошибка, укажите роль")
    : !args[1]
    ? message.reply("Ошибка, вы не указали цвет")
    : (message.mentions.roles.first().setColor(args.slice(1).join(" ")),
      message.reply(
        `Цвет для роли ${message.mentions.roles.first().name} установлен на ${args.slice(1).join(" ")}`
      ));
};
module.exports.help = {
  aliases: [],
  name: "setcolor",
  category: "admin"
};
