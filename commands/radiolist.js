//const radio = require('../include/radio.js')
var list = require('../include/radio_list.json')
var {PREFIX} = require('../config.json')
module.exports = {
    name: "radiolist",
    aliases: ["list"],
    description: "radiolist",
    execute(message, args) {
message.channel.send({
    embed: {
        color: 3447003,
        title: 'Список радио -> Radio list ',
        fields: [
            {
                name: PREFIX + 'radio 1',
                value: list.a1.name
            },
            {
                name: PREFIX + 'radio 2',
                value: list.a2.name
            },
            {
                name: PREFIX + 'radio 3',
                value: list.a3.name
            },
            {
                name: PREFIX + 'radio 4',
                value: list.a4.name
            },
            {
                name: PREFIX + 'radio 5',
                value: list.a5.name
            },
            {
                name: PREFIX + 'radio 6',
                value: list.a6.name
            },
            {
                name: PREFIX + 'radio 7',
                value: list.a7.name
            },
            {
                name: PREFIX + 'radio 8',
                value: list.a8.name
            },
            {
                name: PREFIX + 'radio 9',
                value: list.a9.name
            },
            {
                name: PREFIX + 'radio 10',
                value: list.a10.name
            },
            {
                name: PREFIX + 'radio 11',
                value: list.a11.name
            },
            {
                name: PREFIX + 'radio 12',
                value: list.a12.name
            },
            {
                name: PREFIX + 'radio 13',
                value: list.a13.name
            },
            {
                name: PREFIX + 'radio 14',
                value: list.a14.name
            },
            {
                name: PREFIX + 'radio 15',
                value: list.a15.name
            },
            {
                name: PREFIX + 'radio 16',
                value: list.a16.name
            },
            {
                name: PREFIX + 'radio 17',
                value: list.a17.name
            }
        ],
        timestamp: new Date()
    }
})
}
}