const Discord = require("discord.js");
//const botconfig = require("../config.json");

function randomIntInc(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
module.exports.run = async (client, message, args) => {
    var rnd = randomIntInc(1, 5);
    if (rnd === 1) {
        const embed1 = new Discord.RichEmbed()
            .setDescription(':8ball: 8ball')
            .setColor('RANDOM')
            .addField(args.join(" "), 'Нет.')
        message.channel.send(embed1);
    } else if (rnd === 2) {
        const embed2 = new Discord.RichEmbed()
            .setDescription(':8ball: 8ball')
            .setColor('RANDOM')
            .addField(args.join(" "), 'Попробуйте еще раз!')
        message.channel.send(embed2);
    } else if (rnd === 3) {
        const embed3 = new Discord.RichEmbed()
            .setDescription(':8ball: 8ball')
            .setColor('RANDOM')
            .addField(args.join(" "), 'Я согласна свами:)')
        message.channel.send(embed3);
    } else if (rnd === 4) {
        const embed3 = new Discord.RichEmbed()
            .setDescription(':8ball: 8ball')
            .setColor('RANDOM')
            .addField(args.join(" "), 'Я сделаю вид, что не видела этого!')
        message.channel.send(embed3);
    } else if (rnd === 5) {
        const embed3 = new Discord.RichEmbed()
            .setDescription(':8ball: 8ball')
            .setColor('RANDOM')
            .addField(args.join(" "), 'Да.')
        message.channel.send(embed3);
    }

}
module.exports.help = {
	aliases: [],
    name: "8ball",
    category: "fun"
};