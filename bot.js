
const http = require("http"),
  express = require("express"),
app = express();

app.get("/", (request, response) => {
  console.log(Date.now() + " пинг получен");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const Utils = require("./Utils/Utils.js");
const path = require("path");
const os = require("os");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.queue = new Map();
const fs = require("fs");
const strftime = require("strftime");
let config = require("./botconfig.json");
let Constants = require("discord.js/src/util/Constants.js");
Constants.DefaultOptions.ws.properties.$browser = "Discord iOS";
let prefix = config.prefix;
bot.prefix = prefix;
let client = bot;
require("./Utils/databases")(bot);
bot.filter = new Map();

bot.on("ready", async () => {
  client1.setAutoPost(bot);
  const now = Date.now();
  const games = Array.from(bot.games.entries());
  for (let [k, v] of games) {
    Utils.createGame(
      bot,
      v,
      bot.guilds.get(k),
      now > v.ends ? 1000 : v.ends - now
    );
  }

  const privates = Array.from(bot.privates.entries());
  for (let [g, data] of privates) {
    const guild = bot.guilds.get(g);
    const entries = Array.from(Object.entries(data)).filter(
      e => e[0] !== "channel" && e[0] !== "category"
    );
    for (let [u, c] of entries) {
      const channel = guild.channels.get(c);
      if (channel) {
        if (channel.members.size === 0) {
          channel.delete();
          bot.privates.remove(g, u);
        }
      } else {
        bot.privates.remove(g, u);
      }
    }
  }
  const giveaways = Array.from(bot.giveaways.entries());
  for (let [g, data] of giveaways) {
    const guild = bot.guilds.get(g);
    const entries = Array.from(Object.entries(data));
    for (let [embedID, info] of entries) {
      const channel = guild.channels.get(info.channel);
      if (!channel) return bot.giveaways.remove(guild.id, embedID);
      const msg = await channel.fetchMessage(embedID).catch(e => {});
      if (!msg) return bot.giveaways.remove(guild.id, embedID);
      const embed = msg.embeds[0];
      setTimeout(async function() {
        const peopleReacted = msg.reactions.get("🎉").users.filter(r => !r.bot);
        let win = new Discord.RichEmbed()
          .setTitle("💥 Розыгрыш завершён! ")
          .setColor(bot.color)
          .setDescription(
            `**Выиграл(и): ${peopleReacted
              .random(info.count)
              .join(" ")} \nПриз: ${info.item}**`
          );
        channel.send(win); //мне нужно главное сообщение, едитировать на Embed
        bot.giveaways.remove(guild.id, embedID);
      }, embed.timestamp - Date.now());
    }
  }
});
bot.on("voiceStateUpdate", async (olds, news) => {
  const guild = olds.guild ? olds.guild : news.guild;
  const check = bot.privates.has(guild.id);
  if (olds.voiceChannel && news.voiceChannel) {
    if (olds.voiceChannel.id === news.voiceChannel.id) return;
  }
  if (!olds.voiceChannel && !news.voiceChannel) return;
  if (news.voiceChannel) {
    if (check) {
      const data = bot.privates.get(guild.id);
      if (news.voiceChannel.id === data.channel) {
        const category = guild.channels.get(data.category);
        if (!category) return;
        const vcheck = data[olds.id];
        const member = guild.members.get(olds.id);
        if (vcheck) {
          const voice = guild.channels.get(data[olds.id]);
          if (voice) {
            return member.edit({
              channel: voice
            });
          }
        }
        const voice = await guild.createChannel(olds.user.username, {
          permissionOverwrites: [
            { id: member, allow: ["MOVE_MEMBERS", "MANAGE_CHANNELS"] }
          ],
          type: "voice",
          userLimit: 6,
          parent: category
        });
        member.edit({
          channel: voice
        });
        bot.privates.set(guild.id, voice.id, olds.id);
      }
    }
  }
  if (olds.voiceChannel) {
    if (check) {
      const data = bot.privates.get(guild.id);
      const entries = Array.from(Object.entries(data)).filter(
        e => e[0] !== "channel" && e[0] !== "category"
      );
      if (entries.some(e => e[1] === olds.voiceChannel.id)) {
        if (olds.voiceChannel.members.size === 0) {
          setTimeout(() => {
            const voice = guild.channels.get(olds.voiceChannel.id);
            if (voice.members.size === 0) {
              bot.privates.remove(guild.id, olds.id);
              voice.delete();
            }
          }, 5000);
        }
      }
    }
  }

  const data = bot.settings.get(guild.id);
  //hello
  if (data) {
    const role = guild.roles.get(data.voiceRole);
    if (role) {
      if (!olds.voiceChannel && news.voiceChannel) {
        news.addRole(role);
      } else if (olds.voiceChannel && !news.voiceChannel) {
        news.removeRole(role);
      }
    }
  }
});

bot.on("ready", async () => {
  console.log(`Запустился бот ${bot.user.username}`);
  bot.generateInvite(["ADMINISTRATOR"]).then(link => {
    console.log(link);

    let svs;
    if (bot.guilds.array().length < 3) {
      svs = "сервер";
    } else {
      svs = "серверов";
    }
    let statuses = [
      `${prefix}help || ${prefix}invite`,
      `${bot.guilds.array().length} ${svs} || ${
        bot.users.array().length
      } участников`,
      `by !Мандаринка🍊#7448`
    ];
    setInterval(function() {
      let acitvestatus = statuses[Math.floor(Math.random() * statuses.length)];
      client.user.setPresence({
        game: { name: acitvestatus, status: "online", type: "WATCHING" }
      });
    }, 7000);
    //(PLAYING, - играть) (WATCHING, - смотреть) (LISTENING - слушать) (STREAMING - стрим) (STREAMING,url: 'https://twitch.tv/twitch')
  });

  setInterval(() => {
    const entries = Array.from(bot.mutes.entries());
    for (const [id, mute] of entries) {
      const time = mute.time;
      const guildId = mute.guild;
      const guild = bot.guilds.get(guildId);
      if (!guild) continue;
      const member = guild.members.get(id);
      if (!member) {
        if (Date.now() < time) continue;
        else return bot.mutes.delete(id);
      }
      const mutedRole = guild.roles.find(mR => mR.name === "Muted");
      if (member && !member.roles.has(mutedRole.id)) member.addRole(mutedRole);
      if (!mutedRole) {
        mutedRole = guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions: []
        });
        guild.channels.forEach(async (channel, id) => {
          channel.overwritePermissions(mutedRole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }

      if (Date.now() > time) {
        //  message.channel.reply.send("Вы больше не в муте.").catch(err => {});
        member.send("Вы больше не в муте.").catch(err => {});
        member.removeRole(mutedRole);
        bot.mutes.delete(id);
      }
    }
  }, 3000);
});

bot.on("guildMemberAdd", async member => {
  const mutes = Array.from(bot.mutes.entries());
  if (mutes.some(m => m[0] === member.id)) {
    let muterole = member.guild.roles.find(r => r.name === "Muted");
    member.addRole(muterole.id);
  }
  const data = bot.settings.get(member.guild.id);
  if (data) {
    const roles = data.autoRoles.map(id => member.guild.roles.get(id));
    member.addRoles(roles);
  }
});

bot.on("messageReactionAdd", async (r, user) => {
  if (user.bot) return;
  const guild = r.message.guild;
  const data = bot.settings.get(guild.id);
  if (!data) return;
  const channel = guild.channels.get(data.channel);
  if (!channel) return;
  if (r.message.id !== data.msg) return;
  if (r.emoji.name === "✅") {
    const member = guild.members.get(user.id);
    const role = guild.roles.get(data.role);
    if (!role) return;
    member.addRole(role);
  }
});

Utils.readdirSyncRecursive(path.join(__dirname, "./cmds"))
  .filter(file => file.endsWith(".js"))
  .forEach(file => {
    let props = require(file);
    console.log(
      `[cmds] ${file.split("/")[3] ? `[${file.split("/")[3]}]` : ""} ${
        props.help.name
      }`
    );
    bot.commands.set(props.help.name, props);
    if (!props.help.description) {
      props.help.description = "Это секрет даже для разработчика";
    }
    if (!props.help.category) {
      props.help.category = "Не сортированая команда";
    }
    if (!props.help.owneronly) {
      props.help.owneronly = false;
    }
    props.help.aliases.forEach(alias => {
      if (alias.length === 0) return;
      if (!props.help.name) return console.log(`в файле ${file} нет help.name`);
      bot.aliases.set(alias, props.help.name);
    });
  });
bot.on("message", message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") {
    bot.channels.get("681538145749041174").send(
      new Discord.RichEmbed()
        .setTitle(
          "Сообщение от" + message.author.tag + ` [${message.author.id}]`
        )
        .setDescription(message.content)
        .setTimestamp()
        .setColor("ff6600")
    );
  }
});
bot.on("guildCreate", async guild => {
  let Invite = await guild.channels.find(c => c.type === "text").createInvite();
  let nserv = new Discord.RichEmbed()
    .setColor("FFA947")
    .setThumbnail(guild.iconURL)
    .setTitle("**Новый сервер**")
    .addField("**Название**", `\`${guild.name}\``)
    .addField("**Сервера ID**", `\`${guild.id}\``)
    .addField("Invite", `[Ссылка](${Invite.url})`)
    .addField("**Создатель**", `\`${guild.owner.user.tag}\``)
    .addField("**Создатель ID**", `\`${guild.owner.id}\``)
    .addField("**Пользователей**", `\`${guild.memberCount}\``)
    .addField("**Ролей**", `\`${guild.roles.size}\``)
    .addField("**Это наш**", `\`${bot.guilds.size}\``);
  bot.channels.get("692765973341536296").send(nserv);
});

bot.on("guildDelete", async guild => {
  let rserv = new Discord.RichEmbed()
    .setColor("FFA947")
    .setThumbnail(guild.iconURL)
    .setTitle("**Удалили с сервера**")
    .addField("**Название**", `\`${guild.name}\``)
    .addField("**Сервера ID**", `\`${guild.id}\``)
    .addField("**Создатель**", `\`${guild.owner.user.tag}\``)
    .addField("**Создатель ID**", `\`${guild.owner.id}\``)
    .addField("**Пользователей**", `\`${guild.memberCount}\``);

  bot.channels.get("692765973341536296").send(rserv);
});

bot.on("message", message => {
  if (
    message.mentions.users.size > 0 &&
    message.mentions.users.first().id === client.user.id
  ) {
    message.reply(`если вам нужна моя помощь, напишите в чат ${prefix}help.`);
  }
});

bot.on("message", message => {
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;
  if (
    bot.blacklist.has(message.author.id) &&
    message.author.id !== "521315512504811520"
  )
    return;

  let prefix = bot.prefixes.ensure(message.guild.id, "*");

  if (!message.content.startsWith(prefix)) {
    if (
      message.content.match(
        /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite)\/.+[a-z]/g
      )
    )
      return message.delete();
    else return;
  }
  if (config.blok)
    return message.channel
      .send("Команды бота заблокированы! Тех.работы!")
      .then(message => message.delete(15 * 1000));
  let msgArr = message.content.split(" ");
  let command = msgArr[0].toLowerCase();
  let args = msgArr.slice(1);
  bot.send = msg => message.channel.send(msg);
  if (!message.content.startsWith(prefix)) return;
  let cmds = bot.commands.get(command.slice(prefix.length));
  if (!cmds)
    cmds = bot.commands.get(bot.aliases.get(command.slice(prefix.length)));
  if (cmds) {
    cmds.run(bot, message, args);
    if (bot.filter.has(message.author.id)) {
      if (cmds.help.name === bot.filter.get(message.author.id).last) {
        bot.filter.set(message.author.id, {
          count: bot.filter.get(message.author.id).count + 1,
          last: cmds.help.name
        });
      } else {
        bot.filter.set(message.author.id, { count: 1, last: cmds.help.name });
      }
    } else {
      bot.filter.set(message.author.id, { count: 1, last: cmds.help.name });
    }
    if (bot.filter.has(message.author.id)) {
      if (bot.filter.get(message.author.id).count > 6) {
        bot.blacklist.set(message.author.id, true);
        bot.filter.delete(message.author.id);
      } else if (bot.filter.get(message.author.id).count < 2) {
        setTimeout(() => {
          try {
            bot.filter.delete(message.author.id);
          } catch (error) {}
        }, 10000);
      }
    }
    console.log(
      message.guild.name,
      message.author.tag,
      bot.blacklist.size,
      bot.filter.get(message.author.id).count,
      message.content
    );
  }
});
try {
  if (process.version.slice(1).split(".")[0] < 8) {
    throw new Error(
      "Требуется узел 8.0.0 или выше. Пожалуйста, обновите / обновите Node.js на вашем компьютере / сервере."
    );
  }
} catch (e) {
  console.error(e.stack);
  console.error("Текущая версия Node.js:" + process.version);
  console.error(
    "Если вы не установили какой-либо необходимый модуль:  nПожалуйста, запустите 'npm install' и убедитесь, что он проходит без ошибок!"
  );
  process.exit();
}

client.on("warn", console.warn);

client.on("error", console.error);

client.on("ready", async () => {
  console.log(
    "Starting Bot...\nNode version: " +
      process.version +
      "\nDiscord.js version: " +
      Discord.version +
      "\n"
  );
  // console.log("This Bot is online! Running on version ");
});

let owner = undefined;
let set = new Set();

client.on("ready", () => {
  //client.fetchUser(config.owner_id).then(user => (owner = user));
  // console.log("ready")
});

client.on("voiceStateUpdate", (oldState, newState) => {
  const oldChannel = oldState.voiceChannelID;
  const newChannel = newState.voiceChannelID;
  if (oldChannel === newChannel) return;
  const botc = client.voiceConnections.first();
  if (!botc) return;
  if (oldChannel === botc.channel.id) {
    if (botc.channel.members.filter(m => m.id !== client.user.id).size === 0) {
      set.add(botc.channel.guild.id);
      setTimeout(() => {
        if (set.has(botc.channel.guild.id)) {
          try {
            set.delete(botc.channel.guild.id);
            botc.dispatcher.end("stop");
            botc.disconnect();
          } catch (e) {}
        }
      }, 5000);
    }
  }
  if (newChannel === botc.channel.id) {
    set.delete(botc.channel.guild.id);
  }
});
const Canvas = require("canvas");
const snekfetch = require("snekfetch");
const applyText = (canvas, text) => {
  const ctx = canvas.getContext("2d");
  let fontSize = 70;

  do {
    ctx.font = `${(fontSize -= 10)}px sans-serif`;
  } while (ctx.measureText(text).width > canvas.width - 300);

  return ctx.font;
};
//require('dotenv').config();
//const createCaptcha = require('./modules/captcha');
client.on("guildMemberAdd", async member => {
  /*
  const captcha = await createCaptcha();
    try {
    const msg = member.guild.channels.get("650479365066326049");
        const msg = member.guild.channels.get('У вас есть 60 секунд, чтобы решить капчу!', {
            files: [{
                attachment: `${__dirname}/captchas/${captcha}.png`,
                name: `${captcha}.png`
            }]
        });
        try {
            const filter = m => {
                if(m.author.bot) return;
                if(m.author.id === member.id && m.content === captcha) return true;
                else {
                    m.channel.send('Вы ввели капчу неправильно.');
                    return false;
                }
            };
            const response = await msg.channel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time']});
            if(response) {
                await msg.channel.send('Вы проверили себя!');
                await member.roles.add('650427571049201684');
                await fs.unlink(`${__dirname}/captchas/${captcha}.png`)
                    .catch(err => console.log(err));
            }
        }
        catch(err) {
            console.log(err);
            await msg.channel.send('Вы не решили правильно капчу вовремя.');
            await member.kick();
            await fs.unlink(`${__dirname}/captchas/${captcha}.png`)
                    .catch(err => console.log(err));
        }
    }
    catch(err) {
        console.log(err);
    }
    */
  // const channel = member.guild.channels.find(channel => channel.name === 'welcome');
  // member.guild.channels.get("650479365066326049").send(`${member}`+ "  присоеденился!");
  const channel = member.guild.channels.get("650479365066326049"); //.send(`${member}`+ "  присоеденился!");
  if (!channel) return;

  const canvas = Canvas.createCanvas(700, 250);
  const ctx = canvas.getContext("2d");

  const background = await Canvas.loadImage("./fols/ytr.jpg");
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#74037b";
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  // Slightly smaller text placed above the member's display name
  ctx.font = "28px sans-serif";
  ctx.fillStyle = "#ffffff";
  ctx.fillText(
    "Присоединился на сервер!",
    canvas.width / 2.5,
    canvas.height / 3.5
  );

  // Add an exclamation point here and below
  ctx.font = applyText(canvas, `${member.displayName}!`);
  ctx.fillStyle = "#ffffff";
  ctx.fillText(
    `${member.displayName}!`,
    canvas.width / 2.5,
    canvas.height / 1.8
  );

  ctx.beginPath();
  ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.clip();

  const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
  ctx.drawImage(avatar, 25, 25, 200, 200);

  channel.send({
    files: [
      {
        name: "welcome.png",
        attachment: canvas.toBuffer()
      }
    ]
  });
});
client.on("guildMemberRemove", async member => {
  //const channel = member.guild.channels.find(channel => channel.name === 'welcome');
  // member.guild.channels.get("650479365066326049").send(`${member}`+ "  присоеденился!");
  const channel = member.guild.channels.get("650479365066326049"); //.send(`${member}`+ "  присоеденился!");
  if (!channel) return;

  const canvas = Canvas.createCanvas(700, 250);
  const ctx = canvas.getContext("2d");

  const background = await Canvas.loadImage("./fols/ytr.jpg");
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#74037b";
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  // Slightly smaller text placed above the member's display name
  ctx.font = "28px sans-serif";
  ctx.fillStyle = "#ffffff";
  ctx.fillText("Покинул сервер!", canvas.width / 2.5, canvas.height / 3.5);

  // Add an exclamation point here and below
  ctx.font = applyText(canvas, `${member.displayName}!`);
  ctx.fillStyle = "#ffffff";
  ctx.fillText(
    `${member.displayName}!`,
    canvas.width / 2.5,
    canvas.height / 1.8
  );

  ctx.beginPath();
  ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.clip();

  const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
  ctx.drawImage(avatar, 25, 25, 200, 200);

  channel.send({
    files: [
      {
        name: "welcome.png",
        attachment: canvas.toBuffer()
      }
    ]
  });
});

let apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU1Nzk1ODE2MDUxNDU0NzcxNyIsInBlcm1zIjowLCJpYXQiOjE1OTE1NDUwMjJ9.DNd76g3peFGLDfkBFx32S4ep420_ZJY3IPjdQYNtt84";
const SDC = require("@megavasiliy007/sdc-api");
const client1 = new SDC(apiKey);
bot.login(process.env.TOKEN);
