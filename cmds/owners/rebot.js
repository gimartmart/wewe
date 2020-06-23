const Discord = require('discord.js');
const moment = require('moment');
let config = require("../../botconfig.json");
module.exports.run = (client, message, args) => {
    var member = message.member;
    let ownerid = config.ownerid            
if(!ownerid.includes(message.author.id)) return message.channel.send("__**У вас нет прав!**__").then(msg => msg.delete(5*1000));

    message.channel.send(' ```Если вы согласны перезапустить ботa, введите yes в течение 30 секунд.``` ')
        .then(() => {
            message.channel.awaitMessages(response => response.content === ["да","yes"], {
                    max: 1,
                    time: 30000,
                    errors: ['time'],
                })
                .then((collected) => {
                    message.channel.send(`**Перезапуск бота ...**`).then(message => {
                        console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Перезапуск бота ...`)
                        process.exit(1);
                    }).catch(console.error)
                })
                .catch(() => {
                    message.channel.send('```Операция перезапуска отменена.```');
                });
        });
    message.delete().catch();
};



module.exports.help = {
    name: 'rebot',
    aliases: ["бот"],
};
