const rm = require("discord.js-reaction-menu")
const { RichEmbed } = module.require("discord.js");
  let Colors = "#10c7e2";
  let GIF = "https://discordemoji.com/assets/emoji/3995_Lulu.gif";
module.exports.run = async (bot, message, args) => {

  new rm.menu(message.channel, message.author.id, [`embed1`,`embed2`,`embed3`], 60000);
  
  
        let embed1 = new RichEmbed()
    .setFooter()
  .setDescription("Hee")
    .setColor(Colors)
    .setTimestamp()
    .setThumbnail(GIF)
           .addField(
      "<a:50:686551581277159424>Administration<a:13:686552279972708362>",
      `${bot.commands
        .filter(cmds => cmds.help.category === "admin")
        .map(cmds => `\`${cmds.help.name}\`,`)
        .join(" ")}`
    );
  
          let embed2 = new RichEmbed()
    .setFooter()
  .setDescription("ee")
    .setColor(Colors)
    .setTimestamp()
    .setThumbnail(GIF)
          .addField(
      "**<a:01:636503288447107072>Действие<a:29:637652979138428959>**",
      `${bot.commands
        .filter(cmds => cmds.help.category === "ang")
        .map(cmds => `\`${cmds.help.name}\`,`)
        .join(" ")}`
    );
          let embed3 = new RichEmbed()
    .setFooter()
  .setDescription("rr")
    .setColor(Colors)
    .setTimestamp()
    .setThumbnail(GIF)
    .addField(
      "<a:47:671044257124974614>Mузыка<a:24:636624537970016297>",
      `${bot.commands
        .filter(cmds => cmds.help.category === "music")
        .map(cmds => `\`${cmds.help.name}\`,`)
        .join(" ")}`
    );
          
  

};
module.exports.help = {
  aliases: [],
  name: "help-info",
  category: "info",
  description: "info"
};



/*
  let Colors = "#10c7e2";
  let GIF = "https://discordemoji.com/assets/emoji/3995_Lulu.gif";
  let page = 1;
  let Страниц = 9;


      let embed1 = new RichEmbed()
    .setFooter(`Страница ${page} из ${Страниц}`)
  .setDescription("")
    .setColor(Colors)
    .setTimestamp()
    .setThumbnail(GIF)
        .addField()
*/