const Discord = module.require("discord.js");
const fs = require("fs");
let config = require("../../botconfig.json");
module.exports.run = async (bot, message, args) => {
  try {
    const reason = args.slice(1).join(" ");
    let userid = config.userid;
    if (
      !message.member.hasPermission("KICK_MEMBERS") &&
      !userid.includes(message.author.id)
    )
      return message.channel
        .send("__**У вас нет прав!**__")
        .then(msg => msg.delete(5 * 1000));
    let rUser = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );
    if (!args[0]) return bot.send("Вы не указали пользователя!");
    //if (!reason) return bot.send("Вы не указали причину!");
    if (!rUser) return bot.send("Укажите существующего пользователя!");
    let embed = new Discord.RichEmbed()
      .setDescription("Кик")
      .setColor("#e22216")
      .addField("Администратор", message.author.username)
      .addField("Кикнул", `${rUser.user.username}`)
      .addField("Причина", `${reason.length === 0 ? "Нету" : reason}`, false);
    message.guild.member(rUser).kick("Кик");
    message.channel.send(embed);
  } catch (err) {
    console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
  }
};
module.exports.help = {
  aliases: [],
  name: "kick",
  category: "admin"
};
