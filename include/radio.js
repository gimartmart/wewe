var {PREFIX} = require('../config.json')
exports.playRadio = (voiceChannel, msg, radioType, streamLink) => {
  if(msg.guild.me.voice.connection && msg.member.voice.channel.id === msg.guild.me.voice.channel.id){
    msg.channel.send(`:47:Сейчас играет **${radioType}**! Если я не играю музыку, просто введите команду  \`\`${PREFIX}radio\`\` еще раз.:47:`)
    const dispatcher = msg.guild.me.voice.connection.play(`${streamLink}`)
  } else {
    if (voiceChannel) {
      voiceChannel.join().then(connection => {
        msg.channel.send(`:47:Сейчас играет **${radioType}**! Если я не играю музыку, просто введите команду  \`\`${PREFIX}radio\`\` еще раз.:47:`)
        const dispatcher = msg.guild.me.voice.connection.play(`${streamLink}`)
      }).catch(e => {
        msg.channel.send(`:47:Я не могу присоединиться к вашему каналу. (${e}):47:`)
        console.log(e)
      })
    } else {
      msg.reply(':47:Вы должны сначала присоединиться к голосовому каналу!:47:').catch(e => {
        console.log(`${msg.guild.name} -> Error appeared: ${e}`)
      })
    }

  }
}