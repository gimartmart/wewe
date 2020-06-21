const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
    message.channel.send('Вы привлекаете рыбу ..').then(message => {
        var baliklar = ['``Вы получили карпа!`` :fish:', '``Акулу можно за хорошие деньги продать`` :D', '``Вы получили скумбрию!`` :fish:', '``Вы получили окуня!`` :) :fish:', '``Вы не планируете есть золотую рыбку?``', '``Вы получили анчоусы!`` :fish:', '``У тебя есть морской окунь!`` :fish:', '``Вы не могли ничего удержать Извините!!`` :wastebasket:', '``У тебя есть форель!`` :fish:', '``К сожалению, рыба убежала!`` :wastebasket:', '``Вы получили ската!`` :fish:'];
        var balik = baliklar[Math.floor(Math.random() * baliklar.length)];
        message.edit(`${balik}`);
    });
}



module.exports.help = {
	aliases: [],
    name: 'fishing',
    category: "fun"
};
