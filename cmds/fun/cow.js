const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Напиши что нибудь...');
    message.channel.sendCode("asciidoc", `
  < ${mesaj} >
  --------------------------
          \    ^__^
           \   (00)\_______
              (__)\       )--*
               🔔 ||----w||
                  ||     || `);
};

exports.conf = {
    enabled: true,
    guildOnly: false
};

module.exports.help = {
	aliases: [],
    name: 'cow',
    category: "fun"
};
