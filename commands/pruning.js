const fs = require("fs");
require("dotenv").config();
const config = process.env;

module.exports = {
  name: "pruning",
  //description: "Включить удаление сообщений бота.",
  execute(message,args,lang) {
    config.PRUNING = !config.PRUNING;

    let ownerid = config.ownerid            


    if(!ownerid.includes(message.author.id)){
      message.channel.send(lang.default.ownerid());
      return;
    }

    fs.writeFile("./c.json", JSON.stringify(config, null, 2), (err) => {
      if (err) {
        console.log(err);
        return message.channel.send(lang.u1()).catch(console.error);
      }

      return message.channel
        .send(lang.u2() + ` ${config.PRUNING ? "**on**" : "**off**"}`)
        .catch(console.error);
    });
  }
};
