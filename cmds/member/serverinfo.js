
const Discord = require('discord.js')
const config = require('../../botconfig.json')
let token = config.token;
const fs = require("fs");
let prefix = config.prefix;
module.exports.run = async(bot, message, args) => {
  try {
    
/*
        async function regionToString() {
            //console.log(message.guild.region)
            regions = {
                'russia': "Россия",
                'europe': 'Европа',
                'brazil': 'Бразилия',
                'hongkong': 'Хонг Конг',
                'india': 'Индия',
                'japan': 'Япония',
                'singapore': 'Сигнапор',
                'southafrica': 'Западная африка',
                'sydney': 'Сидней',
                'us-central': 'США(центарльная)',
                'us-east': 'США(восточная)',
                'us-south': 'США(южная)',
                'us-west': 'США(западная)'
            }

            return regions[message.guild.region]
        }
    */
    let verifilv = ['Отсутствует', 'Низкий', 'Средний', 'Высокий', 'Очень высокий']
 //   let region = await regionToString()
        let creation = message.guild.createdAt;
        let joinedAt = message.guild.joinedAt;
    let embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .addField('Владелец', message.guild.owner, false)
        .addField('ID', message.guild.id, false)
       .addField('Регион', message.guild.region, false)
        .addField('Участники', `${message.guild.presences.size} в сети\n${message.guild.memberCount} всего`, false)
        .addField('Каналы', ` ${message.guild.channels.filter(m => m.type === 'category').size} категории \n ${message.guild.channels.filter(c => c.type == 'text').size} текстовые\n${message.guild.channels.filter(c => c.type == 'voice').size} голосовые`, false)
        .addField('Уровень проверки', verifilv[message.guild.verificationLevel], false)
        .addField('Сервер большой?', message.guild.large ? '**Да**' : '**Нет**', false)
        .addField('Количество ботов', `**${message.guild.members.filter(m => m.user.bot === true).size}**`, false)
        .addField('AFK Канал', message.guild.afkChannel, false)
        .addField('Ролей', message.guild.roles.size, false)
        .addField('Смайликов', message.guild.emojis.size, false)
        .setFooter('Сервер создан')
        .setTimestamp(new Date(message.guild.createdTimestamp))
        .setColor(0x32d160)
   // .addField('Регион', `**${region}**`, false);

        await message.channel.send(embed);
    } catch (err) {
        bot.logsErr(err)
    }
};

module.exports.help = {
	aliases: [],
    name: "serverinfo",
    category: "info"
}