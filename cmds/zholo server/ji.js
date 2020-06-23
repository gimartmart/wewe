
const Discord  = require("discord.js");
let config = require("../../botconfig.json");
module.exports.run = async (bot, message, args) => {
    var member = message.member;
    let ownerid = config.ownerid            
if(!ownerid.includes(message.author.id)) return message.channel.send("__**У вас нет прав!**__").then(msg => msg.delete(5*1000));
  let embed = new Discord.RichEmbed()
.setColor('RANDOM')
//Устанавливает цвет полоски в левом углу
//в скобках пишет или название цвета, или его код. Так же можно установить рандомный цвет
//он будет выбрал случайным образом
.setTitle('Заглавие')
//Просто заглавие белым цветом. (оно будет всегда в верхней части ембеда, не смотря на то, в каком месте кода вы его разместили)
.setURL('https://discord.js.org/')
//Ссылка по которой нас будет перемещать по нажатию на название (название подсвечивается после этого голубым цветом)
.setAuthor('DeitySenpai', 'https://i.imgur.com/wSTFkRM.png')
//Самый верхний текст ембеда, 
//1 часть - текст
//2 часть - картинка рядом с текстом
.setDescription('текст')
//просто серый текст.
.setThumbnail('https://i.imgur.com/wSTFkRM.png')
//картинка в верхнем правом углу ембеда.
.addField('белый текст (строчка выше)', 'серый текст (строчка ниже)')
//1 елемент - белый текст
//2 елемент - серый текст
.addField('белый текст (строчка выше, 1 столбик)', 'серый текст (строчка ниже, 1 стобик)', true)
.addField('белый текст (строчка выше, 2 столбик)', 'серый текст (строчка нижеБ 2 стобик)', true)
//Тоже самое. Но теперь Филд будет в столбик. 
//.addBlankField()
//Просто пустое место между field
.setImage('https://i.imgur.com/wSTFkRM.png')
//Отправляет изображение по URL ссылке (сам URL не отправляет)
//.setTimestamp()
//Указывает время когда был отправлен embed
//удобно использовать в логах, и т.п.
.setFooter('Маленький текст', 'https://i.imgur.com/wSTFkRM.png')
//1 часть - маленький текст в самом низу ембеда
//2 часть - картинка рядом с мелким текстом в самом низу ембеда
.addField('Link', `link - [click](https://javascriptobfuscator.com/Javascript-Obfuscator.aspx)`)
 
  message.delete().catch();
  message.channel.send(embed);
}
module.exports.help ={
  aliases: [],
  name: "ji"
}