const {play} = require('./play')
const Util = require('discord.js')
const Discord = require('discord.js')
module.exports = {
    handleVideo: async function handleVideo(bot, video, message, voiceChannel, playlist = false) {
        const serverQueue = bot.queue.get(message.guild.id);
        const song = {
            id: video.id,
            title: Util.escapeMarkdown(video.title),
            url: `https://www.youtube.com/watch?v=${video.id}`
        };
        if (!serverQueue) {
            const queueConstruct = {
                textChannel: message.channel,
                voiceChannel: voiceChannel,
                connection: null,
                songs: [],
                volume: 0.5,
                playing: true,
                repeating: false
            };
            bot.queue.set(message.guild.id, queueConstruct);

            queueConstruct.songs.push(song);

            try {
                queueConstruct.connection = await voiceChannel.join();
                play(bot, message.guild, queueConstruct.songs[0]);
            } catch (error) {
                console.error(`Я не могу подключится в голосовой канал: ${error}`);
                bot.queue.delete(message.guild.id);
            }
        } else {
            serverQueue.songs.push(song);
            if (playlist) return undefined;
            else
                return message.channel.send(
                    new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setThumbnail("https://i.pinimg.com/originals/d9/d4/40/d9d4406eda8b13a30a6a0de486f93402.gif")
                        .setDescription(
                            `<a:47:671044257124974614>**${song.title}** добавлена в очередь!`
                        )
                );
        }
    }
}