const Discord = require('discord.js');
const ascii = require('figlet');

exports.run = function(client, message, args) {

    var yazi = args.slice(0).join(' ');
    if (yazi.length < 1) return message.reply("Напиши текст, который ты хочешь .")
    if (yazi.length > 8) return message.reply("Я не могу написать больше 8!")

    ascii(yazi, {
            font: 'Dancing Font',
            horizontalLayout: 'fitted',
            verticalLayout: 'fitted'
        },
        function(err, data) {
            if (err) {
                message.reply('Тут типа ошибка.... \n**Ошибка:** `' + err + '`')
                console.error(err)
            }

            message.channel.send('```css\n' + data + '\n```');


        })

};




module.exports.help = {
	aliases: [],
    name: 'dansetext',
    category: "fun"

};
