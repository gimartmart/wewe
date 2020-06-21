const Discord = require('discord.js');
let config = require("../../botconfig.json");
module.exports.run = async (bot, message, args) => {
     let userid = config.userid
     if (!message.member.hasPermission("ADMINISTRATOR") && !userid.includes(message.author.id))return message.channel.send("**__У вас нeт прав!__**");

    try {
     // message.channel.send("Приватные каналы были успешно созданы!").then(msg => msg.delete(5*1000));
      //  message.channel.send(new Discord.RichEmbed().setImage('https://i.fiery.me/5CSve.png').setTitle('Напишите в следущен сообщении айди категории').setDescription('Если у вас нет кнопки `Copy ID` или `Скопировать ID` перейдите в настройки пользователя -> Внешний вид -> Режим разработчика, Включите эту опцию').setColor('RANDOM'));
        if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.channel.send( 'Мне нужно право `Управление каналами` для выполнения этой команды!');
        let category = await message.guild.createChannel('Приватные каналы', { type: 'category' });
        let creation_channel = await message.guild.createChannel('Создать канал', { type: 'voice', parent: category });
        await creation_channel.setUserLimit(3);
        bot.privates.set(message.guild.id, {category: category.id, channel: creation_channel.id})
    } catch (err) {
        console.log(err)
    }
};
module.exports.help = {
    name: 'rooms',
    aliases: [],
    category: "admin"
}; 
