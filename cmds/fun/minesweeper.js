const Minesweeper = require('discord.js-minesweeper'),
      Discord = require('discord.js');
  module.exports.run= async (bot, message, args) => {
    const rows = parseInt(args[0]);
    const columns = parseInt(args[1]);
    const mines = parseInt(args[2]);
 
    if (!rows) return message.channel.send('Пожалуйста, скажется кол-во строк.');
    
 
    if (!columns) return message.channel.send('Пожалуйста, укажете кол-во столбцов.');
   
 
    if (!mines)  return message.channel.send('Пожалуйста, укажите кол-во мин.');
 
    const minesweeper = new Minesweeper({ rows, columns, mines });
    const matrix = minesweeper.start();
    let embed = new Discord.RichEmbed()
    .setColor(bot.color) 
    .setAuthor(`Сапёр был создан.`)
    .setDescription(matrix)
    return matrix
      ? message.channel.send(embed)
      : message.channel.send('Вы предоставили неверные данные.');

 }
module.exports.help = {
	aliases: [],
  name: "minesweeper",
  category: "fun"
};