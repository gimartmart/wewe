const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  let rUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  let a = message.author;

  var hug = [
"https://cdn.discordapp.com/attachments/649703016160821250/697939899118256208/tumblr_md77r28k7l1ra3h5lo4_1280.gif",
"https://cdn.discordapp.com/attachments/649703016160821250/697939899835482142/LGA.gif",
"https://cdn.discordapp.com/attachments/649703016160821250/697939900539863100/74bcb529ca7bd8b4cb772d71c4f429a1.gif",
"https://cdn.discordapp.com/attachments/649703016160821250/697939901022470176/Anime-Anime--Tari-Tari-miyamoto-konatsu-1168354.gif",
"https://cdn.discordapp.com/attachments/649703016160821250/697939993951469650/Anime-anime-loli-2230446.gif",
"https://cdn.discordapp.com/attachments/649703016160821250/697939994769358968/85cc5ccbgy1ffo78yri7fg20ip08y1kx.gif",
"https://cdn.discordapp.com/attachments/649703016160821250/697940138386391130/Anime-Anime--Tari-Tari-miyamoto-konatsu-1070234.gif", 
"https://cdn.discordapp.com/attachments/649703016160821250/697940138810015914/79f6934e6c33fa4c83e139bd83bf39db.gif",
"https://cdn.discordapp.com/attachments/649703016160821250/697940240496721970/CHDV.gif",
"https://cdn.discordapp.com/attachments/649703016160821250/697940240895049738/image_10907120917239012852.gif",
"https://cdn.discordapp.com/attachments/649703016160821250/697940241348165763/----451025.gif",
"https://cdn.discordapp.com/attachments/649703016160821250/697940414618927114/18393ce75fb50857c9305760f4026fd8_h-44016.gif",
"https://cdn.discordapp.com/attachments/649703016160821250/697940414866522142/SFP0daa.gif",
"https://cdn.discordapp.com/attachments/649703016160821250/697940415198003270/15d204536a801fec0706730c2e10800a.gif",
"https://cdn.discordapp.com/attachments/649703016160821250/697940683964678174/anime-gif-Anime-Hibike-Euphonium-2169751.gif",
"https://cdn.discordapp.com/attachments/649703016160821250/697940685311180910/SmackDat.gif",
"https://cdn.discordapp.com/attachments/649703016160821250/697940685629947994/2330cd77bca3ff3698c4c313d8527ab0.gif",
"https://cdn.discordapp.com/attachments/649703016160821250/697940820476821624/7938774bfd544832c29748f0d44e679d.gif",
"https://cdn.discordapp.com/attachments/649703016160821250/697940821185658960/SoggyGlamorousFruitfly-size_restricted.gif",
"https://cdn.discordapp.com/attachments/649703016160821250/697942003367018537/20200410_015126.gif",
'https://i.gifer.com/Cwyc.gif'
    
    
  ];
  var gif = Math.floor(Math.random() * hug.length);
  if (!rUser) {
    const embed = new Discord.RichEmbed()
      .setColor("#ff00ff")
      .setDescription("<@557958160514547717>" + "**ударил(-а) по попе**" + ` ${message.author}`)
      .setImage(hug[gif]);
    bot.send(embed);
    message.delete().catch(O_o => {});
    
  } else {
    const embed = new Discord.RichEmbed()
      .setColor("#ff00ff")
      .setDescription(`${message.author}` + "**ударил(-а) по попе**" +` ${rUser}`)
      .setImage(hug[gif]);
    bot.send(embed);
    message.delete().catch(O_o => {});
    
  }
};
module.exports.help = {
	aliases: [],
  name: "slappope",
  category: "ang"
};
 