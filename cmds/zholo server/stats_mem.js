const Discord = require('discord.js');
const os = require("os");
const fs = require("fs");
const strftime = require("strftime");
module.exports.run = async (bot, message, args) => {
  
setInterval(() => {
const vremya_po_msk = strftime.timezone(180) 
bot.channels.get("649395464554151951").fetchMessage("701751469623214100").then(msg => {
msg.edit(`**Server status**`,new Discord.RichEmbed().setAuthor(`${bot.user.username}`, `${bot.user.avatarURL}`)
.setColor("RANDOM")
.setThumbnail(`${bot.user.avatarURL}`)
.setTimestamp()
.addField("**• Boost server**", `**${bot.guilds.get('643389876053475348').premiumSubscriptionCount}**`, false)
.addField("**• Voice Online**", `**${bot.guilds.get('643389876053475348').members.filter(m => m.voiceChannel).size}**`, false)
.addField("**• Time**", `**${vremya_po_msk('%H:%M:%S', new Date())} по МСК**`, false)
.addField("**• User/Bots**", `${bot.guilds.get('643389876053475348').members.size}`, false)
.addField("**• User**", `**${bot.guilds.get('643389876053475348').members.filter(mem => !mem.user.bot === true).size}**`, false)
.addField("**• Bots**", `**${bot.guilds.get('643389876053475348').members.filter(mem => mem.user.bot === true).size}**`, false)
.addField("**• Online** ", `**${bot.guilds.get('643389876053475348').members.filter(m => ["online"].includes(m.presence.status)).size}**`, false)
.addField("**• Not active** ", `**${bot.guilds.get('643389876053475348').members.filter(m => ["idle"].includes(m.presence.status)).size}**`, false)
.addField("**• Do not disturb** ", `**${bot.guilds.get('643389876053475348').members.filter(m => ["dnd"].includes(m.presence.status)).size}**`, false)
.addField("**• Offline** ", `**${bot.guilds.get('643389876053475348').members.filter(m => m.presence.status === "offline").size}**`)
.addField("**• Voice/Chat/Category**", `**${bot.guilds.get('643389876053475348').channels.size}**\n**Category:${bot.guilds.get('643389876053475348').channels.filter(m => m.type === 'category').size}**\n**Chat:${bot.guilds.get('643389876053475348').channels.filter(m => m.type === 'text').size}**\n**Voice:${bot.guilds.get('643389876053475348').channels.filter(m => m.type === 'voice').size}**`, false)
.addField("**• Developer** ", `**${bot.guilds.get('643389876053475348').owner.user.tag}**`, false)
.addField("**• Verification level** ", `**${bot.guilds.get('643389876053475348').verificationLevel}**`, false)
.addField("**• Server Region** ", `**${bot.guilds.get('643389876053475348').region}**`, false)
  
  
)

})
      },10000)
}
module.exports.help = {
    name: 'sta',
    aliases: []
}; 
