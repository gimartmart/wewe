const {err, succ} = require('../../Utils/embeds')
const {handleVideo} = require('../../Utils/handleVideo')
const Discord = require('discord.js')
//const moment = require("moment");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyAF5FXrhc0l_sguYL1sc_jNakCYt3C9UJU");
module.exports.run = async (bot, message, args) => {

    //if(message.guild.id !== config.server) return message.channel.send("Оформите premium");
    const searchString = args.join(" ");
    const url = args[0] ? args[0].replace(/<(.+)>/g, "$1") : "";
    if (!args[0]) return message.channel.send(err("<a:47:671044257124974614>Напишите название трека или URL видео."))
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.channel.send(err("<a:47:671044257124974614>Вы должны быть в голосовом канале!"))
    //if(!message.guild.me.voiceChannel)
    //if(message.member.voiceChannel != message.guild.me.voiceChannel) return err('Вы должны быть в канале, где нахожусь я.')
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT")) {
        return message.channel.send(err("<a:47:671044257124974614>Я не могу подключиться к этому каналу!"))
    }
    if (!permissions.has("SPEAK")) {
        return message.channel.send(err("<a:47:671044257124974614>Я не могу говорить в этом канале!"))
    }
    if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
        const playlist = await youtube.getPlaylist(url);
        const videos = await playlist.getVideos();
        for (const video of Object.values(videos)) {
            const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
            await handleVideo(bot, video2, message, voiceChannel, true); // eslint-disable-line no-await-in-loop
        }
        return message.channel.send(
            `<a:47:671044257124974614>Плейлист: **${playlist.title}** | Добавлен: ${message.author.tag} был добавлен в очередь!`
        )
    } else {
        let video;
        try {
            video = await youtube.getVideo(url);
        } catch (error) {
            try {
                let videos = await youtube.searchVideos(searchString, 10);
                let index = 0;
                const embed = new Discord.RichEmbed()
                    .setTitle("<a:47:671044257124974614>Выберете композицию")

                    .setDescription(
                        `
                    ${videos
                            .map(video2 => `**${++index}:** ${video2.title}`)
                            .join("\n")}
                    \nНапишите цифру от 1 до 10 в чат для выбора трека.`
                    )
                    .setColor("RANDOM")
                    .setFooter("Holo music 2020", bot.user.avatarURL)
                    .setThumbnail("https://i.pinimg.com/originals/d9/d4/40/d9d4406eda8b13a30a6a0de486f93402.gif")
                    .setTimestamp();
                message.channel.send(embed);
                // eslint-disable-next-line max-depth
                let response
                try {
                    response = await message.channel.awaitMessages(
                        message2 => message2.content > 0 && message2.content < 11,
                        {
                            maxMatches: 1,
                            time: 60000,
                            errors: ["time"]
                        }
                    );
                } catch (err) {
                    return message.channel.send(
                        "<a:47:671044257124974614>Не найдена цифра выбора трека. Отменяю поиск.."
                    )
                }
                const videoIndex = parseInt(response.first().content);
                if(videoIndex === NaN) return message.channel.send("Не правильно указан номер")
                video = await youtube.getVideoByID(videos[videoIndex - 1].id);
            } catch (error) {
                console.error(error);
                return message.channel.send(err("<a:47:671044257124974614>Произошла ошибка YouTube API. Повторите попытку позже."))
            }
        }
        return handleVideo(bot, video, message, voiceChannel);
    }

}
module.exports.help = {
  aliases: [],
    name: "play",
    category: "music"
};