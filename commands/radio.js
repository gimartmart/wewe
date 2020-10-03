const radio = require('../include/radio.js')
var list = require('../include/radio_list.json')
var {PREFIX} = require('../config.json')
module.exports = {
    name: "radio",
    description: "radio",
    execute(message, args) {
    if (args[0] === undefined) {
        message.channel.send(`Укажите радио станцию из списка. \n**${PREFIX}radiolist/list**`)
    }
    if (args[0] === '1') {
        radio.playRadio(message.member.voice.channel, message, list.a1.name, list.a1.link)
    }
    if (args[0] === '2') {
        radio.playRadio(message.member.voice.channel, message, list.a2.name, list.a2.link)
    }
    if (args[0] === '3') {
        radio.playRadio(message.member.voice.channel, message, list.a3.name, list.a3.link)
    }
    if (args[0] === '4') {
        radio.playRadio(message.member.voice.channel, message, list.a4.name, list.a4.link)
    }
    if (args[0] === '5') {
        radio.playRadio(message.member.voice.channel, message, list.a5.name, list.a5.link)
    }
    if (args[0] === '6') {
        radio.playRadio(message.member.voice.channel, message, list.a6.name, list.a6.link)
    }
    if (args[0] === '7') {
        radio.playRadio(message.member.voice.channel, message, list.a7.name, list.a7.link)
    }
    if (args[0] === '8') {
        radio.playRadio(message.member.voice.channel, message, list.a8.name, list.a8.link)
    }
    if (args[0] === '9') {
        radio.playRadio(message.member.voice.channel, message, list.a9.name, list.a9.link)
    }
    if (args[0] === '10') {
        radio.playRadio(message.member.voice.channel, message, list.a10.name, list.a10.link)
    }
    if (args[0] === '11') {
        radio.playRadio(message.member.voice.channel, message, list.a11.name, list.a11.link)
    }
    if (args[0] === '12') {
        radio.playRadio(message.member.voice.channel, message, list.a12.name, list.a12.link)
    }
    if (args[0] === '13') {
        radio.playRadio(message.member.voice.channel, message, list.a13.name, list.a13.link)
    }
    if (args[0] === '14') {
        radio.playRadio(message.member.voice.channel, message, list.a14.name, list.a14.link)
    }
    if (args[0] === '15') {
        radio.playRadio(message.member.voice.channel, message, list.a15.name, list.a15.link)
    }
    if (args[0] === '16') {
        radio.playRadio(message.member.voice.channel, message, list.a16.name, list.a16.link)
    }
    if (args[0] === '17') {
        radio.playRadio(message.member.voice.channel, message, list.a17.name, list.a17.link)
    }
}
}
