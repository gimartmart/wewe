let config = require("../../botconfig.json");
let prefix = config.prefix;

module.exports.run = async (bot, message, args) => {
  let userid = config.userid
  if ((!message.member.hasPermission("MANAGE_MESSAGES")) && !userid.includes(message.author.id))
      return message.channel.send("__**У вас нет прав!**__").then(msg => msg.delete(5*1000));
  const channel = message.mentions.channels
    .filter(c => c.type === "text")
    .first();
  if (!channel) return message.channel.send("Вы не указали канал");
  bot.settings.ensure(message.guild.id, {});
  bot.settings.set(message.guild.id, channel.id, "report");
  message.channel.send("Канал установлен")
};
module.exports.help = {
  aliases: [],
  name: "sreport",
  category: "admin"
};
