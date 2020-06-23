const {err, succ} = require('../../Utils/embeds')
const radio = require('../../modules/radio')
module.exports.run = async (bot, message, args) => {
    if (args[0] === undefined) {
        radio.playRadio(message.member.voiceChannel, message, 'Russian Mix', 'http://air.radiorecord.ru:8102/rus_320')
    }

    // Kiss 100 - Web radio
    if (args[0] === '1') {
        radio.playRadio(message.member.voiceChannel, message, 'Record Trap', 'http://air.radiorecord.ru:8102/trap_320')
    }

    // Heart FM - Web radio
    if (args[0] === '2') {
        radio.playRadio(message.member.voiceChannel, message, 'Аниме', 'http://pool.anison.fm:9000/AniSonFM(320)?nocache=0.98')
    }

    // Drum N Bass FM - Web radio
    if (args[0] === '3') {
        radio.playRadio(message.member.voiceChannel, message, 'Russian Radio', 'http://play.russianradio.eu/stream')
    }

    // SynthWave FM - Web radio
    if (args[0] === '4') {
        radio.playRadio(message.member.voiceChannel, message, 'Europa Plus', 'http://eptop128server.streamr.ru:8033/eptop128')
    }
  if (args[0] === '5') {
        radio.playRadio(message.member.voiceChannel, message, 'Radio Record', 'http://air.radiorecord.ru:8101/rr_320')
    }

    // Drum N Bass FM - Web radio
    if (args[0] === '6') {
        radio.playRadio(message.member.voiceChannel, message, 'NewRadio', 'https://icecast-newradio.cdnvideo.ru/newradio3')
    }

    // SynthWave FM - Web radio
    if (args[0] === '7') {
        radio.playRadio(message.member.voiceChannel, message, 'Радио Шансон', 'http://chanson.hostingradio.ru:8041/chanson256.mp3')
    }
  if (args[0] === '8') {
        radio.playRadio(message.member.voiceChannel, message, 'АвтоРадио', 'https://pub0201.101.ru/stream/reg/mp3/128/region_avto_122?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpcCI6IjEwOS4xNzQuMzYuMjciLCJ1c2VyYWdlbnQiOiJNb3ppbGxhXC81LjAgKFdpbmRvd3MgTlQgNi4xOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdFwvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lXC84MS4wLjQwNDQuMTI5IFNhZmFyaVwvNTM3LjM2IiwidWlkX2NoYW5uZWwiOiIxMDAiLCJ0eXBlX2NoYW5uZWwiOiJjaGFubmVsIiwiZXhwIjoxNTg4ODcwNzk0fQ.BMr2MyCfJC9nNcjchodezAQt7ZJp44Z8ovou1QMbhw4')
    }

    // Drum N Bass FM - Web radio
    if (args[0] === '9') {
        radio.playRadio(message.member.voiceChannel, message, 'ChillOut', 'https://air2.radiorecord.ru:9003/chil_320')
    }

    // SynthWave FM - Web radio
    if (args[0] === '10') {
        radio.playRadio(message.member.voiceChannel, message, 'EDM', 'https://air2.radiorecord.ru:9003/club_320')
    }
  if (args[0] === '11') {
        radio.playRadio(message.member.voiceChannel, message, 'Радио Шансон без цензуры', 'http://chanson.hostingradio.ru:8041/chanson-uncensored128.mp3')
    }
}

module.exports.help = {
  aliases: [],
    name: "radio",
    category: "music"
}