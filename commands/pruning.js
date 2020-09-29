const fs = require("fs");
require("dotenv").config();
const config = process.env;

module.exports = {
  name: "pruning",
  description: "Включить удаление сообщений бота.",
  execute(message) {
    config.PRUNING = !config.PRUNING;

    fs.writeFile("./c.json", JSON.stringify(config, null, 2), (err) => {
      if (err) {
        console.log(err);
        return message.channel.send("При записи в файл произошла ошибка.").catch(console.error);
      }

      return message.channel
        .send(`Удаление сообщений ${config.PRUNING ? "**включен**" : "**отключен**"}`)
        .catch(console.error);
    });
  }
};
