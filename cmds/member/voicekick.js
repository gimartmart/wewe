const Discord = module.require("discord.js");
const fs = require("fs");
let config = require("../../botconfig.json");
module.exports.run = async (bot, message, args) => {
  try {
    const reason = args.slice(1).join(" ");
    let rUser = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );
    if (!args[0]) return message.channel.send("Вы не указали пользователя!");
    if (!reason) return message.channel.send("Вы не указали причину!");
    if (!rUser) return message.channel.send("Укажите существующего пользователя!");
    if (!rUser.voiceChannelID) return message.channel.send("Он не в войсе");
    let embed = new Discord.RichEmbed()
      .setDescription("Кик")
      .setColor("#e22216")
      .addField("Учасник", message.author.username)
      .addField("Кикнул", `${rUser.user.username}`)
      .addField("Причина", `${reason.length === 0 ? "Нету" : reason}`, false);
    rUser.edit({
      channel: null
    }).catch(e => {})
    message.channel.send(embed);
  } catch (err) {
    console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
  }
};
module.exports.help = {
  aliases: [],
  name: "voicekick",
  category: "info"
};
