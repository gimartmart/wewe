var {prefix} = require('./../botconfig.json')
exports.playRadio = (voiceChannel, msg, radioType, streamLink) => {
  if(msg.guild.voiceConnection && msg.member.voiceChannel.id === msg.guild.voiceConnection.channel.id){
    msg.channel.send(`<a:47:671044257124974614>Сейчас играет **${radioType}**! Если я не играю музыку, просто введите команду  \`\`${prefix}radio\`\` еще раз.<a:47:671044257124974614>`)
    const dispatcher = msg.guild.voiceConnection.playStream(`${streamLink}`)
  }else {
    if (voiceChannel) {
      voiceChannel.join().then(connection => {
        msg.channel.send(`<a:47:671044257124974614>Сейчас играет **${radioType}**! Если я не играю музыку, просто введите команду  \`\`${prefix}radio\`\` еще раз.<a:47:671044257124974614>`)
        const dispatcher = msg.guild.voiceConnection.playStream(`${streamLink}`)
      }).catch(e => {
        msg.channel.send(`<a:47:671044257124974614>Я не могу присоединиться к вашему каналу. (${e})<a:47:671044257124974614>`)
        console.log(e)
      })
    } else {
      msg.reply('<a:47:671044257124974614>Вы должны сначала присоединиться к голосовому каналу!<a:47:671044257124974614>').catch(e => {
        console.log(`${msg.guild.name} -> Error appeared: ${e}`)
      })
    }

  }

}
