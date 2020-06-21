var Jimp = require("jimp");
module.exports.run = async(bot, message, args) => {



    var Jimp = require("jimp");
    const Discord = require('discord.js');
    let img = Jimp.read(message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL),
        moldura = Jimp.read("https://cdn.discordapp.com/attachments/521307265777532932/653689292761202749/png.png");
    Promise.all([img, moldura]).then(imgs => {
        let moldura = imgs[0],
            img = imgs[1];
        moldura.resize(34, 63);
        img.resize(369, 240)
        img.composite(moldura, 150, 104).getBuffer(Jimp.MIME_PNG, (err, buffer) => { // X-Y-Z
            if (!err)
                message.channel.send(new Discord.Attachment(buffer));
        });
    });
}
module.exports.help = {
	aliases: [],
    name: 'telephone',
    category: "fun"
}