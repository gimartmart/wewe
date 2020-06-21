const Discord = require("discord.js");
let config = require("../../botconfig.json");
module.exports.run = async (bot, message, args) => {
  let userid = config.userid
  if ((!message.member.hasPermission("MANAGE_MESSAGES")) && !userid.includes(message.author.id))
    return message.channel.send("__**У вас нет прав!**__").then(msg => msg.delete(5*1000));
  if (!args[0]) return bot.send("Задайте вопрос");
  let question = args.slice(0).join(" ");
  const embed = new Discord.RichEmbed()
    .setDescription(`${question}`)
    .setColor("#1b87e5")
    .setFooter(`Автор: ${message.author.username}`, `${message.author.avatarURL}`)
  message.delete();
  message.channel.send({ embed })
    .then(msg => {
      msg.react('✅')
      msg.react('❌')
      msg.react('🤔')
    })
    .catch(() => console.error('Emoji failed to react.'));
}
module.exports.help = {
  aliases: [],
  name: "poll",
  category: "admin"
};