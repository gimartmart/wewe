const Discord = require('discord.js')
const ytdl = require("ytdl-core");
const fs = require('fs')
const queue = fs.readFileSync('./data/queue.txt').toString().split('\n');
const queueLength = queue.length;
module.exports = {
    play: function play(bot, guild, song) {
        const serverQueue = bot.queue.get(guild.id);

        if (!song) {
            serverQueue.voiceChannel.leave();
            bot.queue.delete(guild.id);
            return;
        }

        const dispatcher = serverQueue.connection
            .playStream(ytdl(song.url))
            .on("end", reason => {
                const now = serverQueue.songs.shift()
                if (serverQueue.repeating)
                    serverQueue.songs.push(now)
                play(bot, guild, serverQueue.songs[0]);
            })
            .on("error", error => console.error(error));
        dispatcher.setVolumeLogarithmic(0.5);

        serverQueue.textChannel.send(
            new Discord.RichEmbed()
                .setColor("RANDOM")
                .setThumbnail("https://i.pinimg.com/originals/d9/d4/40/d9d4406eda8b13a30a6a0de486f93402.gif")
                .setDescription(
                    `<a:47:671044257124974614>Началось воспроизведение: **${song.title}**`
                )
        );
    },
    playMusic: async function playMusic(conn, entry = 0) {
        const song = queue[entry];

        try {
            const stream = ytdl(song, {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            });

            const dispatcher = await conn.playStream(stream);

            dispatcher.on('end', (reason) => {
                if (reason !== "stop") {
                    if (entry === queueLength - 1) playMusic(conn);
                    else playMusic(conn, entry + 1);
                }
            })

            dispatcher.on('error', err => {
                if (entry === queueLength - 1) playMusic(conn);
                else playMusic(conn, entry + 1);
            });
        } catch (err) {
            if (entry === queueLength - 1) playMusic(conn);
            else playMusic(conn, entry + 1);
        }
    }
}