// Сделать основной функционал
// Автороль Значки Приветствие
// Антиобход
//Подключение Glitch
var http = require("http")
var express = require('express');
var app = express();
const keepalive = require('express-glitch-keepalive')

app.use(keepalive)

app.get('/', (req, res) => {
    res.json('Бот живет')
})

app.get("/", (request, response) => {
    response.sendStatus(200);
});

app.listen(process.env.PORT);
setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
//--Подключение glitch
//Переменные
const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const db = require('quick.db')
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

let mutes = new db.table('mutes');
bot.mutes = mutes;
let config = require('./botconfig.json');
let prefix = config.prefix;
bot.prefix = prefix;
let adm = config.admin;
bot.cd = config.cooldown;
const active = new Map();
bot.active = active;
/*
const DBL = require('dblapi.js');
const dbl = new DBL('DBLTOKEN');
*/
//--Переменные

//Таблицы
let profile = new db.table('profile');
bot.profile = profile;

let lprofile = new db.table('lprofile');
bot.lprofile = lprofile;

let botstats = new db.table('botstats');
bot.botstats = botstats

let guild_$ = new db.table('guild');
bot.guild = guild_$;

let allclans = new db.table('clan');
bot.clan = allclans;

//--Таблицы
fs.readdir('./cmds/', (err, files) => {

    if (err) console.log(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if (jsfiles.length <= 0) console.log("Нет комманд для загрузки!");
    console.log(`Загружено ${jsfiles.length} комманд`);

    jsfiles.forEach((f, i) => {

        let props = require(`./cmds/${f}`);
        console.log(`${i + 1}.${f} Загружен!`);
        bot.commands.set(props.help.name, props);
        props.help.aliases.forEach(alias => {

            bot.aliases.set(alias, props.help.name);

        })

    });

});

bot.on('ready', () => {
    console.log(`Запустился бот ${bot.user.username}`);

    bot.generateInvite(["ADMINISTRATOR"]).then(link => {
        console.log(link);
    });
    let statuses = [`${prefix}help`, `${bot.guilds.size} серверов`, `${bot.users.size} участников`, `Bot by Kotya`];
    let acitvestatus = statuses[Math.floor(Math.random() * statuses.length)]
    setInterval(function () {
        bot.user.setPresence({ game: { name: acitvestatus, status: 'online', type: "STREAMING", url: "https://www.twitch.tv/kotyaxe" } });
        bot.user.setPresence({ activity: { name: acitvestatus }, status: 'online' });
        dbl.postStats(bot.guilds.size);
    }, 15 * 1000);
    bot.user.setPresence({ game: { name: acitvestatus, status: 'online', type: "STREAMING", url: "https://www.twitch.tv/kotyaxe" } });
    bot.user.setPresence({ activity: { name: acitvestatus }, status: 'online' });
    dbl.postStats(bot.guilds.size);
    bot.setInterval(() => {
        let all = mutes.all();
        for (let i = 0; i < all.length; i++) {
            try {
                let userid = (all[i].ID).replace(/\D/g, '');
                if (!userid) continue;
                let time = mutes.fetch(`time_${userid}`);
                let guildid = mutes.fetch(`guild_${userid}`);
                let guild = bot.guilds.get(guildid);
                let member;
                if (guild) { member = guild.members.get(userid); }
                if (!member) continue;
                let muteRole = member.guild.roles.find(r => r.name === config.muteRole);
                if (!muteRole) continue;

                async function remove() {

                    await member.removeRole(muteRole);
                    mutes.delete(`time_${userid}`);
                    mutes.delete(`guild_${userid}`);
                };
                if (time <= Date.now()) {
                    remove();
                };
            } catch (e) {

            }
        };
    }, 5000);

});


bot.on('message', async message => {
    if(message.author.id == '392332189544480770') return;
    if (!message.guild.me.hasPermission('SEND_MESSAGES')) return;
    if (message.guild.name != 'Discord Bot List') console.log(`${message.author.id} || ${message.guild.id} ||${message.guild.name} | ${message.channel.id} | ${message.channel.name} | [${message.author.tag}] | ${message.content}`)
    let botvmsgs = botstats.fetch(`viewMessages`);
    if (botvmsgs === null) botstats.set(`viewMessages`, 0);
    botvmsgs = null;
    let botsmsgs = botstats.fetch(`viewMessages`);
    if (botsmsgs === null) botstats.set(`sendMessages`, 0);
    botsmsgs = null;
    if (message.author.id == bot.user.id) botstats.add('sendMessages', 1);
    if (message.author.bot) return;
    if (message.channel.type == "dm") return;
    function reset() { }
    let ch = await bot.channels.get(message.channel.id);
    bot.send = async function (msg) {

        await ch.send(msg);

    };
    //Профиль
    bot.sendcur = async function (usr, msg) {
        let usrz = await bot.users.get(`${usr}`)
        if (usrz) await usrz.send(msg);
        usrz = null;
    };

    let userid = message.author.id;
    let guildid = message.guild.id;

    let coins = profile.fetch(`coins_${userid}`);
    if (coins === null) profile.set(`coins_${userid}`, 0);

    let lvl = profile.fetch(`lvl_${userid}`);
    if (lvl === null) profile.set(`lvl_${userid}`, 1);
    let xp = profile.fetch(`xp_${userid}`);
    if (xp === null) profile.set(`xp_${userid}`, 0);

    let bonustime = profile.fetch(`bonustime_${userid}`);
    if (bonustime === null) profile.set(`bonustime_${userid}`, 0);
    bonustime = null

    let rep = profile.fetch(`rep_${userid}`);
    if (rep === null) profile.set(`rep_${userid}`, 0);
    rep = null;

    let messages = profile.fetch(`messages_${userid}`);
    if (messages === null) profile.set(`messages_${userid}`, 0);

    let admin = profile.fetch(`admin_${userid}`);
    if (admin === null) profile.set(`admin_${userid}`, 0);
    admin = null;

    let likes = profile.fetch(`likes_${userid}`);
    if (likes === null) profile.set(`likes_${userid}`, 0);
    likes = null;

    let liked = profile.fetch(`liked_${userid}`);
    if (liked === null) profile.set(`liked_${userid}`, ['']);
    liked = null;
    let marks = profile.fetch(`marks_${userid}`);
    if (marks === null) profile.set(`marks_${userid}`, '🐴');

    let clan = profile.fetch(`clan_${userid}`);
    let partner = profile.fetch(`partner_${userid}`);
    if (userid == adm) profile.set(`admin_${userid}`, 1);
    let work = profile.fetch(`work_${userid}`);
    if (work === null) profile.set(`work_${userid}`, 0);
    work = null;
    let workCooldown = profile.fetch(`workCooldown_${userid}`);
    if (workCooldown === null) profile.set(`workCooldown_${userid}`, 0);
    workCooldown = null;
    let worked = profile.fetch(`worked_${userid}`);
    if (worked === null) profile.set(`worked_${userid}`, 0);
    let voted = profile.fetch(`voted_${userid}`);
    if (voted === null) profile.set(`voted_${userid}`, 0);
    let votes = profile.fetch(`votes_${userid}`);
    if (votes === null) profile.set(`votes_${userid}`, 0);
    worked = null;
    bot.worklist = [{ name: 'Безработный', addCoins: 100, works: 5 }, { name: 'Дворник', addCoins: 500, works: 15 }, { name: 'Строитель', addCoins: 3000, works: 30 }, { name: 'Заправщик', addCoins: 5000, works: 55 }, { name: 'Работник KFC', addCoins: 8500, works: 80 }, { name: 'Продавец', addCoins: 15000, works: 110 }, { name: 'Грузчик', addCoins: 30000, works: 150 }, { name: 'Уборщик в офисе', addCoins: 50000, works: 200 }, { name: 'Работник офиса', addCoins: 120000, works: 290 }, { name: 'Директор', addCoins: 300000, works: 400 }, { name: 'Бизнесмен', addCoins: 500000, works: 600 }, { name: 'Трейдер', addCoins: 750000, works: 1000 }]
    //--Профиль
    let atag = message.author.tag;
    /* Через WebHook Сложна
    dbl.hasVoted(`${message.author.id}`).then(async voteds => {
        if (voteds) {
            if (voted <= Date.now()) {
                console.log(`${atag} проголосовал`)
                let random1 = Math.floor(Math.random() * (30000 - 10000) + 10000)
                let random2 = Math.floor(Math.random() * (30000 - 10000) + 10000)
                let userzid = userid;
                let guildid = '496338755456598016'
                let coins = bot.profile.fetch(`coins_${userid}`);
                if (coins === null) await bot.profile.set(`coins_${userzid}`, 0);
                let lcoins = bot.lprofile.fetch(`coins_${userzid}_${guildid}`);
                if (lcoins === null) await bot.lprofile.set(`coins_${userzid}_${guildid}`, 1);
                let msg = `:tada: **${atag}** :tada:\n\n**:heart_eyes: Спасибо что проголосовал за моего ботика! ♡**\n:exclamation: Ты получил на свой глобальный баланс:**${random1}**\n:moneybag: А так же на свой локальный баланс на моем сервере:**${random2}**\n:hear_no_evil: Но это еще не все ты получил 1 репутацию!\n\n\n***Огромное спасибо что поддерживаешь моего бота, ты можешь проголосовать снова через 12 часов***\n\n\n:tada: **${atag}** :tada:\n\n**:heart_eyes: Thank you for voting for my bot! ♡**\n:exclamation: You got to your global balance:**${random1}**\n:moneybag: And also to your local balance on my server:**${random2}**\n:hear_no_evil: But that's not all you got 1 reputation!\n\n\n***Thank you so Much for supporting my bot, you can vote again in 12 hours***`
                bot.lprofile.add(`coins_${userzid}_${guildid}`, random2);
                bot.profile.add(`coins_${userzid}`, random1);
                bot.profile.add(`rep_${userzid}`, 1);
                bot.profile.add(`votes_${userzid}`, 1);
                bot.profile.set(`voted_${userzid}`, Date.now() + 1000 * 60 * 60 * 12);
                bot.sendcur(`${userzid}`, msg);
            }
        }
    });
    */
    //Локальный профиль

    let lcoins = lprofile.fetch(`coins_${userid}_${guildid}`);
    if (lcoins === null) lprofile.set(`coins_${userid}_${guildid}`, 1);
    lcoins = null;

    let lwarns = lprofile.fetch(`warns_${userid}_${guildid}`);
    if (lwarns === null) lprofile.set(`warns_${userid}_${guildid}`, 0);
    lwarns = null;
    bot.profile.add(`coins_${userid}`, 1);
    bot.lprofile.add(`coins_${userid}_${guildid}`, 1);
    bot.profile.add(`xp_${userid}`, 1);
    bot.profile.add(`messages_${userid}`, 1);
    bot.botstats.add('viewMessages', 1);
    if (clan != null) bot.clan.add(`${clan}_messages`, 1)
    clan = null;
    if (xp > (Math.floor(lvl * 3.4))) {
        profile.set(`xp_${userid}`, 0);
        profile.add(`lvl_${userid}`, 1);
    }
    xp = null
    //--Локальный профиль

    //Сервера
    let cmdchannel = guild_$.fetch(`cmdchannel_${guildid}`);
    let blockInvites = guild_$.fetch(`blockInvites_${guildid}`);
    let lang = guild_$.fetch(`lang_${guildid}`);
    bot.lang = lang;

    //Значки
    if (marks) {
        function addMark(mark) {
            bot.profile.set(`marks_${message.author.id}`, `${marks} ${mark}`);
            let mm = new Discord.RichEmbed()
                .setTitle('**Значки**')
                .setColor('RANDOM')
                .setDescription(`${message.author} Вы получили значок ${mark}`)
            bot.send(mm);
        }
        if (!marks.includes('🦄') && lvl >= 100) await addMark('🦄');
        if (!marks.includes('🙉') && lvl >= 999) await addMark('🙉');
        if (!marks.includes('🗞') && messages >= 1000) await addMark('🗞');
        if (!marks.includes('📨') && messages >= 25000) await addMark('📨');
        if (!marks.includes('💵') && coins >= 25000) await addMark('💵');
        if (!marks.includes('💴') && coins >= 100000) await addMark('💴');
        if (!marks.includes('💰') && coins >= 25000000) await addMark('💰');
        if (!marks.includes('💳') && coins >= 1000000000) await addMark('💳');
        if (!marks.includes('💎') && coins < 0) addMark('💎');
        if (!marks.includes('💒') && partner) addMark('💒');
        if (!marks.includes('🏳️‍🌈') && message.content.toLowerCase() == 'я гей') addMark('🏳️‍🌈');
        if (!marks.includes('💥') && message.content.toLowerCase() == 'котя я тебя люблю') addMark('💥');
        if (marks.indexOf('undefined') != -1) { bot.profile.delete(`marks_${message.author.id}`) }
        let mm = null;
        //--Значки
    }
    marks = null;
    coins = null;
    lvl = null;
    messages = null;
    partner = null;
    if (blockInvites == true) {
        let logschannel = message.guild.channels.get(bot.guild.fetch(`logsChannel_${message.guild.id}`));
        if (!logschannel) {
            await message.guild.createChannel('logs', 'text').then(channel => {
                bot.guild.set(`logsChannel_${message.guild.id}`, channel.id);
                channel.overwritePermissions(message.guild.defaultRole, {
                    VIEW_CHANNEL: false,
                });
            });
        }
        let role = message.guild.roles.find(r => r.name === config.muteRole);

        if (!role) {
            role = await message.guild.createRole({
                name: config.muteRole,
                permissions: []
            });
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(role, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        };
        if (message.content.indexOf('discord.gg') != -1 || message.content.indexOf('discordapp.com/invite') != -1) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) {
                message.delete().then(() => {
                    let embed = new Discord.RichEmbed()
                        .setTitle('**Анти-Реклама**')
                        .setDescription(`${message.author}\n${message.content}`)
                        .setFooter(`${message.author.tag} получил mute на 15 часов`);
                    bot.mutes.set(`guild_${message.author.id}`, message.guild.id);
                    bot.mutes.set(`time_${message.author.id}`, Date.now() + 1000 * 60 * 60 * 15);
                    message.member.addRole(role);
                    role = null;
                    logschannel.send(embed)
                    logschannel = null;
                    embed = null;
                })
            }
        }
    }
    blockInvites = null;



    let messageArray = message.content.split(" ");
    let command = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);

    if (!message.content.startsWith(prefix)) return;
    let cmdch = bot.channels.get(cmdchannel);
    if (cmdch) {
        if (message.member) {
            if (!message.member.hasPermission('MANAGE_MESSAGES')) {
                let embed = new Discord.RichEmbed()
                    .setColor('#e22216')
                if (message.channel != cmdch) { message.delete(3 * 1000); embed.setDescription(`Использование команд только в <#${cmdchannel}>`); return message.channel.send(embed).then(msg => msg.delete(5 * 1000));; }
                cmdch = null;
                embed = null;
            }
        }
    }
    if (lang === null) {
        let emb = new Discord.RichEmbed()
            .setColor('#ff0033')
            .setDescription(`:flag_ru: Используйте: ${prefix}lang ru\n:flag_gb: Use ${prefix}lang en`)
        if (command != `${prefix}lang`) {
            return bot.send(emb)
        } else {
            if(!message.member.hasPermission('ADMINISTRATOR')){emb.setDescription('Вам нужны права администратора\nYou need administrator rights');return bot.send(emb)};
            if (args[0].toLowerCase() == 'ru') {
                guild_$.set(`lang_${guildid}`, 'ru');
                emb.setDescription('Теперь бот будет работать на **Русском** языке')
                return bot.send(emb)
            } else if (args[0].toLowerCase() == 'en') {
                guild_$.set(`lang_${guildid}`, 'en');
                emb.setDescription('Now the bot will work in **English** language')
                return bot.send(emb)
            } else {
                return bot.send(emb)
            }
        }
    }
    cmdch = null
    userid = null;
    botvmsgs = null;
    botsmsgs = null;
    guildid = null;

    let cmd = bot.commands.get(command.slice(prefix.length)) || bot.commands.get(bot.aliases.get(command.slice(prefix.length)));
    if (cmd) cmd.run(bot, message, args);
});


app.get('/', (req, res) => {
    // ...
});

bot.on("presenceUpdate", async (oldMember, newMember) => {
    try {
        if (!newMember.guild.me.hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return;
        if (newMember.user.bot) return;
        async function ifGame(name, roleName, color) {
            if (newMember.presence.game) {
                if (newMember.presence.game.name.toLowerCase().indexOf(name.toLowerCase()) != -1) {
                    let role = newMember.guild.roles.find(r => r.name === roleName)
                    if (role) {
                        if (!newMember.roles.has(role)) {
                            await newMember.addRole(role);
                        }
                    } else {
                        role = await newMember.guild.createRole({
                            name: roleName,
                            color: color,
                            mentionable: true,
                            permissions: []
                        });
                        if (!newMember.roles.has(role)) {
                            await newMember.addRole(role);
                        }

                    }

                }
            }
        }

        ifGame('dota 2', 'Dota 2', '#A52A2A')
        ifGame('PLAYERUNKNOWN\'S BATTLEGROUNDS', 'PUBG', '#e7a200');
        ifGame('minecraft', 'Minecraft', '90ee90');
        ifGame('payday', 'Pay Day 2', '#339df8');
        ifGame('fortnite', 'Fortnite', '#da7feb');
        ifGame('osu', 'Osu!', '#ffffff');
        ifGame('rocket league', 'Rocket League', '#3399cc');
        ifGame('Grand Theft Auto', 'Grand Theft Auto', '#febe5b');
        ifGame('terraria', 'Terraria', '90ee90');
        ifGame('Counter-Strike: Global Offensive', 'CS:GO', '#fdac24');
        ifGame('League of legend', 'League Of Legends', '#fce252');
        ifGame('Garry\'s Mod', 'Garry\'s mod', '#1294f1');
        ifGame('overwatch', 'Overwatch', '#fa9c21');
        ifGame('portal 2', 'Portal 2', '#00ace6');
        ifGame('don\'t starve', 'Don\'t Starve', '#983a17');
        ifGame('sublime text', 'Code', '#35a6f0');
        ifGame('visual studio', 'Code', '#35a6f0');
        ifGame('notepad++', 'Code', '#35a6f0');
        ifGame('vimeworld.ru', 'Minecraft', '90ee90');
        ifGame('roblox', 'Roblox', '#e2221a');
        ifGame('pubg lite', 'PUBG', '#e7a200');
        ifGame('witcher', 'Witcher', '#91192e');
        ifGame('fallout', 'Fallout', '#9b9c55');
        ifGame('trove', 'Trove', '#ffe106');
        ifGame('team fortress', 'Team Fortress', '#c7913b');
        ifGame('arma', 'Arma', '#495b3f');
        ifGame('starcraft', 'StarCraft', '#063e72');
        ifGame('apex', 'Apex', '#cf3134');
        ifGame('half-life', 'Half-Life', '#fd7302');
        newMember = null;
        oldMember = null;
    } catch (error) {
        error = null;
    }

});
bot.on('guildMemberAdd', (member) => {

    if (!member.guild.me.hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return;
    let guildid = member.guild.id
    let ejoin = new Discord.RichEmbed()
        .setTitle(`**Новый участник**`)
        .setDescription(`**${member.user.tag}** присоединился на сервер! Добро пожаловать!`)
        .setColor('#77dd77')
        .setFooter(`Кол-во участников сервера ${member.guild.memberCount}`);
    let joinChannel = bot.channels.get(bot.guild.fetch(`joinleave_${guildid}`))
    if (joinChannel) joinChannel.send(ejoin)

    let role = member.guild.roles.get(bot.guild.fetch(`autorole_${guildid}`));
    let muteRole = member.guild.roles.find(r => r.name === config.muteRole);
    let muted = bot.mutes.fetch(`guild_${member.id}`);
    if (muted && muteRole) member.addRole(muteRole);
    if (member.id == "533951944033697794") return;

    let wmsg = bot.guild.fetch(`welcomemessage_${guildid}`);
    if (wmsg) member.send(wmsg);
    if (role) member.addRole(role);

    let totalUsers = guild_$.fetch(`totalUsers_${guildid}`);
    let totalBots = guild_$.fetch(`totalBots_${guildid}`);
    let users = bot.channels.get(totalUsers);
    let bots = bot.channels.get(totalBots);
    if (users && bots) {
        users.setName(`🤹 Кол-во юзеров: ${member.guild.memberCount}`).catch(err => { if (err) { member.guild.defaultChannel.send(`Произошла ошибка в SERVERSTATS.\nНапшите комманду **${prefix}stats** для устранения оишбки!`) } })
        bots.setName(`🤖 Всего ботов: ${member.guild.members.filter(m => m.user.bot).size}`).catch(err => { if (err) { member.guild.defaultChannel.send(`Произошла ошибка в SERVERSTATS.\nНапшите комманду **${prefix}stats** для устранения оишбки!`) } })
    }
    guildid, ejoin, joinChannel, role, muteRole, muted, wmsg, totalUsers, totalBots, users, bots = null;
});
bot.on('guildMemberRemove', (member) => {
    if (!member.guild.me.hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return;
    if (member.id == "533951944033697794") return;
    let guildid = member.guild.id
    let ejoin = new Discord.RichEmbed()
        .setTitle(`**Удаление участника **`)
        .setDescription(`**${member.user.tag}** покинул наш сервер!`)
        .setColor('#e22216')
        .setFooter(`Кол-во участников сервера ${member.guild.memberCount}`);
    let joinChannel = bot.channels.get(bot.guild.fetch(`joinleave_${guildid}`))
    if (joinChannel) joinChannel.send(ejoin)
    let totalUsers = guild_$.fetch(`totalUsers_${guildid}`);
    let totalBots = guild_$.fetch(`totalBots_${guildid}`);
    let users = bot.channels.get(totalUsers);
    let bots = bot.channels.get(totalBots);
    if (users && bots) {
        users.setName(`🤹 Кол-во юзеров: ${member.guild.memberCount}`).catch(err => { if (err) { member.guild.defaultChannel.send(`Произошла ошибка в SERVERSTATS.\nНапшите комманду **${prefix}stats** для устранения оишбки!`) } })
        bots.setName(`🤖 Всего ботов: ${member.guild.members.filter(m => m.user.bot).size}`).catch(err => { if (err) { member.guild.defaultChannel.send(`Произошла ошибка в SERVERSTATS.\nНапшите комманду **${prefix}stats** для устранения оишбки!`) } })
    }
    guildid, ejoin, joinChannel, totalUsers, totalBots, users, bots = null;
});
bot.on("voiceStateUpdate", (oldMember, newMember) => {
    if (!newMember.guild.me.hasPermission('MANAGE_CHANNELS')) return;
    let newUserChannel = newMember.voiceChannel
    let oldUserChannel = oldMember.voiceChannel

    let guildid = newMember.guild.id || oldMember.guild.id
    let vOnlineId = guild_$.fetch(`voiceOnline_${guildid}`);
    let vOnlineText = guild_$.fetch(`voiceOnlineText_${guildid}`);
    let chv = bot.channels.get(vOnlineId);
    if (chv) {
        if (newUserChannel && !oldUserChannel) {
            chv.setName(`${vOnlineText} ${newMember.guild.members.filter(m => m.voiceChannel).size}`).catch(err => err);
        };
        if (!newUserChannel && oldUserChannel) {
            chv.setName(`${vOnlineText} ${newMember.guild.members.filter(m => m.voiceChannel).size}`).catch(err => err);
        };
    }
    let bb = bot.guild.fetch(`roomCreator_${guildid}`)
    bot.bb = bb;
    let ch = bot.channels.get(bot.guild.fetch(`roomCreator_${guildid}`))
    bot.ch = ch;
    if (newMember.voiceChannel && ch && newMember.voiceChannel.id == ch.id) {
        newMember.guild.createChannel(`${newMember.displayName} Room`, { type: 'voice' }).catch(error => error)
            .then(channel => {
                deleteEmptyChannelAfterDelay(channel);
                channel.setParent(ch.parentID)
                    .catch(error => error);
                newMember.setVoiceChannel(channel)
                    .catch(error => error);
                channel.setUserLimit(5)
                    .catch(error => error);
                channel.overwritePermissions(newMember, {
                    MANAGE_CHANNELS: true
                })
            });
        if (!ch.parentID) ch.delete();
    }
    deleteEmptyChannelAfterDelay(oldMember.voiceChannel);
    newUserChannel = oldUserChannel = guildid = vOnlineId = vOnlineText = chv = null;
    return null;
});

function deleteEmptyChannelAfterDelay(voiceChannel, delay = 300) {
    if (!voiceChannel) return;
    if (!voiceChannel.health) voiceChannel.health = 0;
    voiceChannel.health += 1;
    setTimeout(function () {
        if (!voiceChannel) return;
        if (voiceChannel.members.first()) return;
        if (voiceChannel.health >= 2) voiceChannel.health = 1;
        if (bot.bb === null) return;
        voiceChannel.health -= 1;
        if (voiceChannel.health > 0) return;
        if (!bot.ch) return;
        if (bot.ch && voiceChannel.id == bot.ch.id) return;
        if (bot.ch && voiceChannel.parentID != bot.ch.parentID) return;
        voiceChannel.delete()
            .catch(error => error);
    }, delay)

}
bot.login(process.env.TOKEN);