let config = require("../../botconfig.json");
module.exports.run = async(bot, message, args) => {
    var member = message.member;
    let ownerid = config.ownerid            
if(!ownerid.includes(message.author.id)) return message.channel.send("__**У вас нет прав!**__").then(msg => msg.delete(5*1000));
const status = args.join(' ');
if(!status) return message.channel.send('Укажи новый статус!');
bot.user.setActivity(status, {type: 'LISTENING'}); // можно поставить любой тип статуса из PLAYING, WATCHING, LISTENING и STREAMING (в случае с типом STREAMING к объекту надо дописать свойство - url: 'https://twitch.tv/twitch'), иначе же будет показываться тип статуса по умолчаию - PLAYING. 
message.channel.send(`Статус успешно изменён на **${status}**!`);
};
module.exports.help = {
	aliases: [],
name: 'setstatus'
};
