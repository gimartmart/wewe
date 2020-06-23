let config = require("../../botconfig.json");
module.exports.run = async (bot,message,args) => {
   let userid = config.userid
        if ((!message.member.hasPermission("MANAGE_MESSAGES")) && !userid.includes(message.author.id))
            return message.channel.send("__**У вас нет прав!**__").then(msg => msg.delete(5*1000));
(!args[0] && !message.mentions.members.first())?message.reply('Ошибка, укажите пользователя'):
(!args[1]) ? message.reply('Ошибка, вы забыли указать никнейм'):
(message.reply(`Никнейм для ${message.mentions.users.first().username} установлен на ${args.slice(1).join(' ')}`),message.mentions.members.first().setNickname(args.slice(1).join(' ')))
}
module.exports.help = {
  aliases: [],
  name: 'setnick',
  category: "admin"
}