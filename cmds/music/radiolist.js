const {err, succ} = require('../../Utils/embeds')
module.exports.run = async (bot, message, args) => {
    message.channel.send({
        embed: {
            color: 3447003,
            title: 'Список радио -> Radio list ',
            fields: [
                {
                    name: bot.prefix + 'radio',
                    value: 'Radio: **Russian Mix**'
                },
                {
                    name: bot.prefix + 'radio 1',
                    value: 'Radio: **Record Trap**'
                },
                {
                    name: bot.prefix + 'radio 2',
                    value: 'Radio: **Аниме**'
                },
                {
                    name: bot.prefix + 'radio 3',
                    value: 'Radio: **Russian Radio**'
                },
                {
                    name: bot.prefix + 'radio 4',
                    value: 'Radio: **Europa Plus**'
                },
                        {
                    name: bot.prefix + 'radio 5',
                    value: 'Radio: **Radio Record**'
                },
                {
                    name: bot.prefix + 'radio 6',
                    value: 'Radio: **NewRadio**'
                },
                                   {
                    name: bot.prefix + 'radio 7',
                    value: 'Radio: **Радио Шансон**'
                },
                {
                    name: bot.prefix + 'radio 8',
                    value: 'Radio: **АвтоРадио**'
                },
          {
                    name: bot.prefix + 'radio 9',
                    value: 'Radio: **ChillOut**'
                },
                {
                    name: bot.prefix + 'radio 10',
                    value: 'Radio: **EDM**'
                },
          {
                    name: bot.prefix + 'radio 11',
                    value: 'Radio: **Радио Шансон без цензуры**'
                }
            ],
            timestamp: new Date()
        }
    })
}

module.exports.help = {
  aliases: ["list"],
    name: "radiolist",
    category: "music"
}