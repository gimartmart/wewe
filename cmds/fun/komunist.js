const Discord = require("discord.js");
var Jimp = require('jimp');

module.exports.run = async(client, message, args) => {
    var user = message.mentions.users.first() || message.author;
    if (!message.guild) user = message.author;

    message.channel.send(`:timer: |Обработка фото, пожалуйста, подождите.`).then(m => m.delete(1000));

    Jimp.read(user.avatarURL, (err, image) => {
        image.resize(310, 325)
            //image.greyscale()// 
            // image.gaussian(3) //можете вкл Тип эфекты Блюр
        Jimp.read("https://cdn.discordapp.com/attachments/642428016718512128/653657513191014432/1200px-Hammer_and_sickle.svg.png", (err, avatar) => {
            avatar.resize(310, 325)
            image.composite(avatar, 1, 0).write(`./img/snip/${client.user.id}-${user.id}.png`);
            setTimeout(function() {
                message.channel.send(new Discord.Attachment(`./img/snip/${client.user.id}-${user.id}.png`));
            }, 1000);
        });

    });
}


module.exports.help = {
	aliases: [],
    name: "komunist",
    category: "fun"
};