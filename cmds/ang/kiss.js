const Discord = require("discord.js");
const superagent = require("superagent");
module.exports.run = async (bot, message, args) => {
          let member = message.mentions.members.first() || message.member;
      let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
   if (message.author.bot)return
    if (!hugUser) return message.channel.send("*kiss @имя").then(msg => msg.delete(5 * 1000));
    let embed = new Discord.RichEmbed()
        .setDescription(`**${hugUser}** вас хочет поцеловать **${message.author.username}** вы согласны?`)
        .setColor("RANDOM")
    message.delete()
 message.channel.send(embed).then(msg => {
          msg.react("✅").then(r => {
            msg.react("⛔");
            const backwardsFilter = (reaction, user) =>
              reaction.emoji.name === "✅" && user.id === hugUser.id;
            const forwardsFilter = (reaction, user) =>
              reaction.emoji.name === "⛔" && user.id === hugUser.id;
            const backwards = msg.createReactionCollector(backwardsFilter);
            const forwards = msg.createReactionCollector(forwardsFilter);
            backwards.on("collect", async r => {
const { body } = await superagent
        .get(`https://nekos.life/api/v2/img/kiss`);
let embed1 = new Discord.RichEmbed()
                          .setDescription(`${message.author}` + "  **поцеловал(-а)**  " + `${hugUser}`)
    .setImage(body.url)
        .setColor("RANDOM")
            msg.edit(embed1).then(msg => {
 msg.clearReactions()
})
backwards.stop()
forwards.stop()
})
forwards.on("collect", async r => {
const { body } = await superagent
        .get(`https://nekos.life/api/v2/img/slap`);
let embed2 = new Discord.RichEmbed()
.setDescription(`${hugUser} **отказался(-ась)**`)
    .setImage(body.url)
        .setColor("RANDOM")
            msg.edit(embed2).then(msg => {
 msg.clearReactions()
})
backwards.stop()
forwards.stop()
})
})
})
 }
module.exports.help = {
	aliases: [],
    name: "kiss",
    category: "ang"
};