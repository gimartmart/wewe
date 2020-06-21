const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  let rUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  let a = message.author;

  var hug = [
    "https://media1.tenor.com/images/02538cc7a29825f68aaac43d169c5e48/tenor.gif?itemid=9676298",
    "https://media1.tenor.com/images/c37a46e540e7385caf207878b6c09a4a/tenor.gif?itemid=11913034",
    "https://image.myanimelist.net/ui/QzJltUafnxLxbKsmE376ODA9kHBW5wBAg6ACDMwXsuu77_UQLnpz1bhqr9-1CquaqszUE36b1TatrEsVA-RcQdllhaxCPBj7FBD-kpNBy5tPYqu0IdeOxOGsXya_9TAe",
    "https://media.giphy.com/media/HBC14sogC1JZK/giphy.gif",
    "https://media1.tenor.com/images/84e8c1ff61ac0e86697639aeb24cb4b4/tenor.gif?itemid=12792503",
    "https://i.imgur.com/tQqSQEs.jpg",
    "https://image.myanimelist.net/ui/RQIGwS1SgkM5WIkxiTCl-zsp0cG_DmACfytradJgFODkNUH1ieDrUuf3UgCxKem94nGI2_I2Bhjt2W2v_CRKFk1p7NduchWx7o42FGJgGAzxF_Co4c5HEcTY0eUQ3CD571dY79KuHLuED_xype5f5tZ_xxyOQt8fDqfq4QmQBniiYWty9b0_m5MHloTiByM57VWoY1iWNb3U9RnUfe9vb39ZS-I9aOXe2et7mNQaiun1kJFGFk81Q_DXFYtaCazp"
  ];
  var gif = Math.floor(Math.random() * hug.length);
  if (!rUser) {
    const embed = new Discord.RichEmbed()
      .setColor("#4dff4d")
      .setDescription(`${message.author}` + "  **?????** ")
      .setImage(hug[gif]);
    bot.send(embed);
    message.delete().catch(O_o => {});
  } else {
    const embed = new Discord.RichEmbed()
      .setColor("#4dff4d")
      .setDescription(`${message.author}` + "**?????**" +`${rUser}`)
      .setImage(hug[gif]);
    bot.send(embed);
    message.delete().catch(O_o => {});
  }
};
module.exports.help = {
	aliases: [],
  name: "ask",
  category: "ang"
};
