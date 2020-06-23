const Discord = require("discord.js");
const coin = require('flipacoin');
module.exports.run = async(bot, msg, args) => {
    let coinEmbed = new Discord.RichEmbed();
    let res = coin()
    msg.channel.send(
        coinEmbed

        .setColor('#FF0000')
        .setImage(res === 'head' ? 'https://cdn1.savepice.ru/uploads/2019/11/28/cba8500aaa7ba1377210fde2753ee546-full.png' : 'https://cdn1.savepice.ru/uploads/2019/11/28/8435bb389d0bcebd4334473f9cb578d1-full.png')
        .setTitle(`Монетка говорит `)
    )
}


module.exports.help = {
	aliases: [],
    name: 'coin',
    category: "fun"

};
