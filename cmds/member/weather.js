const { RichEmbed } = require("discord.js");
const weather = require("weather-js");

function weatherFind(components) {
  return new Promise((res, rej) => {
    return weather.find(
      {
        search: encodeURIComponent(components),
        degreeType: "C"
      },
      function(err, result) {
        if (err) {
          rej(err);
        }
        res({
          result,
          current: result[0] && result[0].current,
          location: result[0] && result[0].location
        });
      }
    );
  });
}
module.exports.run = async (bot, message, args) => {
  try {
    if (!args[0]) {
      message.channel.send("Вы не указали город");
      return;
    }

    const { current, location, result } = await weatherFind(args.join(" "));

    if (!result.length) {
      message.channel.send("Город не найден");
      return;
    }

    message.channel.send(
      new RichEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Weather of ${current.observationpoint}`)
        .setThumbnail(`${current.imageUrl}`)
        .setColor("RANDOM")
        .addField("Часовой пояс", `UTC${location.timezone}`, true)
        .addField("Тип", location.degreetype, true)
        .addField("Температура", `${current.temperature} Degrees`, true)
        .addField("Ощущается как", `${current.feelslike} degress`, true)
        .addField("Ветер", current.winddisplay, true)
        .addField("Влажность", `${current.humidity}`, true)
    );
  } catch (err) {
    console.error(err.message);
    message.channel.send(err.message);
  }
};
module.exports.help = {
  name: "weather",
  category: 'info',
  aliases: []
};
