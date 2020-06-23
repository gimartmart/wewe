const Discord = module.require('discord.js');
const ms = require('ms');
let config = require("../../botconfig.json");
module.exports.run = async (bot, message, args) => {
   let userid = config.userid
        if ((!message.member.hasPermission("MANAGE_MESSAGES")) && !userid.includes(message.author.id))
            return message.channel.send("__**У вас нет прав!**__").then(msg => msg.delete(5*1000));
  let Timer = args[0];

  if(!args[0]){
    return message.channel.send(
      new Discord.RichEmbed()
      .setColor('FF0000')
      .setTitle('⚠️ | Укажите время на которое вы хотите поставить таймер!')
      .addField('**Пример:**', '**timer 10m**')
    );
  }

  if(args[0] <= 0){
    return message.channel.send(
      new Discord.RichEmbed()
      .setColor('FF0000')
      .setTitle('⚠️ | Укажите верное время!')
      .addField('**Пример:**', '**timer 10m**')
    );
  }

  message.channel.send(
    new Discord.RichEmbed()
    .setColor('00FF00')
    .setTitle('Таймер')
    .setDescription(`Таймер запущен на ${ms(ms(Timer), {long: true})}`)
    .setFooter('Запустил: ' + message.author.username, message.author.avatarURL)
  )


  setTimeout(function(){
    message.channel.send(
      new Discord.RichEmbed()
      .setColor('00FF00')
      .setTitle('Таймер')
      .setDescription(message.author + ', ваш таймер на нуле!')
      .setFooter('Таймер был запущен ' + ms(ms(Timer), {long: true}) + ' назад')
    )
    /*
    message.author.send(
      new Discord.RichEmbed()
      .setColor('00FF00')
      .setTitle('Таймер')
      .setDescription(message.author + ', ваш таймер на нуле!')
      .setFooter('Таймер был запущен ' + ms(ms(Timer), {long: true}) + ' назад')
    )
*/
  }, ms(Timer));

};
module.exports.help = {
	aliases: [],
    name: "timer",
    category: "admin"
}