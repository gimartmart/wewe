const Discord = require("discord.js");
let config = require("../../botconfig.json");
module.exports.run = async (bot, message, args) => {
  try {
    let userid = config.userid
    if ((!message.member.hasPermission("MANAGE_MESSAGES")) && !userid.includes(message.author.id))
        return message.channel.send("__**У вас нет прав!**__").then(msg => msg.delete(5*1000));;
    if (parseInt(args[0]) > 100) return bot.send("Укажите значение меньше 100");
    if (parseInt(args[0]) < 1) return bot.send("Укажите значение больше 1");
    if (args[1]) {
      const member = message.mentions.members.first();
      if (!member) {
        message.channel.bulkDelete(args[0]).then(() => {
          message.channel
            .send(`Удалено ${args[0]} сообщений`)
            .then(msg => msg.delete(5 * 1000));
        });
      } else {
        const messages = await message.channel.fetchMessages({
          limit: parseInt(args[0])
        });
        const memberMessages = messages.filter(m => m.author.id === member.id);
        message.channel.bulkDelete(memberMessages).then(() => {
          message.channel
            .send(`Сообщения ${member} удалены в количестве ${args[0]}! `)
            .then(msg => msg.delete(5 * 1000));
        });
      }
    } else {
      message.channel.bulkDelete(args[0]).then(() => {
        message.channel
          .send(`Удалено ${args[0]} сообщений`)
          .then(msg => msg.delete(5 * 1000));
      });
    }
  } catch (err) {
    console.log(
      `Произошла ошибка\n\n\n:${err.name}\n\n\n:${err.message}\n\n\n:${err.stack}`
    );
  }
};

module.exports.help = {
  aliases: [],
  name: "clear",
  category: "admin"
};
