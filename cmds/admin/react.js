const discordEmoji = require('discord-emoji');
const Discord = require('discord.js')
let config = require("../../botconfig.json");
const emoji = {};
//if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("__**У вас нет прав!**__").then(msg => msg.delete(5*1000));
module.exports.run = (bot, msg, args, message) => {
 // if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("__**У вас нет прав!**__").then(msg => msg.delete(5*1000));
    Object.values(discordEmoji).forEach(value => {
        Object.keys(value).forEach(key => {
            emoji[key] = value[key];
        //  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("__**У вас нет прав!**__").then(msg => msg.delete(5*1000));
        });
    });

    const mappings = {
        'a': [':regional_indicator_a:', ':a:'],
        'b': [':regional_indicator_b:', ':b:'],
        'c': [':regional_indicator_c:'],
        'd': [':regional_indicator_d:'],
        'e': [':regional_indicator_e:'],
        'f': [':regional_indicator_f:'],
        'g': [':regional_indicator_g:', ':compression:'],
        'h': [':regional_indicator_h:'],
        'i': [':regional_indicator_i:', ':information_source:'],
        'j': [':regional_indicator_j:'],
        'k': [':regional_indicator_k:'],
        'l': [':regional_indicator_l:'],
        'm': [':regional_indicator_m:', ':m:'],
        'n': [':regional_indicator_n:'],
        'o': [':regional_indicator_o:', ':o2:', ':o:'],
        'p': [':regional_indicator_p:', ':parking:'],
        'q': [':regional_indicator_q:'],
        'r': [':regional_indicator_r:'],
        's': [':regional_indicator_s:'],
        't': [':regional_indicator_t:', ':cross:'],
        'u': [':regional_indicator_u:'],
        'v': [':regional_indicator_v:'],
        'w': [':regional_indicator_w:'],
        'x': [':regional_indicator_x:', ':heavy_multiplication_x:', ':x:', ':negative_squared_cross_mark:'],
        'y': [':regional_indicator_y:'],
        'z': [':regional_indicator_z:'],
        '0': [':zero:'],
        '1': [':one:'],
        '2': [':two:'],
        '3': [':three:'],
        '4': [':four:'],
        '5': [':five:'],
        '6': [':six:'],
        '7': [':seven:'],
        '8': [':eight:'],
        '9': [':nine:'],
        '!': [':exclamation:', ':grey_exclamation:'],
        '?': [':question:', ':grey_question:'],
        '*': [':asterisk:', ':eight_spoked_asterisk:'],
        '#': [':hash:'],
        '$': [':heavy_dollar_sign:']
    };

    function clone(object) {
        const newObject = {};
//if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("__**У вас нет прав!**__").then(msg => msg.delete(5*1000));
        Object.keys(object).forEach(key => {
            if (object[key] instanceof Array) {
                newObject[key] = new Array(...object[key]);
            } else {
                newObject[key] = object[key];
            }
        });

        return newObject;
    }


    function emojiToUnicode(input) {
        if (/^:regional_indicator_[a-z]:$/.test(input)) {
            return String.fromCharCode(55356) + String.fromCharCode(56806 + input.substr(20, 1).charCodeAt(0) - 97);
        }
        return emoji[input.slice(1, -1)];
    }


    function react(message, remaining, allowedMappings) {
        if (remaining.length < 1) {
            // We're out of stuff
            return;
        }
         let userid = config.userid
        if ((!message.member.hasPermission("ADMINISTRATOR")) && !userid.includes(message.author.id))
            return message.channel.send("__**У вас нет прав!**__").then(msg => msg.delete(5*1000));
        if (remaining.length < 1) return message.channel.send("Напиши текст, который ты хочешь .")
        if (!react) return message.channel.send("Напиши текст, который ты хочешь .")
        const char = remaining.shift().toLowerCase();

        if (!char) {
            return;
        }

        if (!allowedMappings[char]) {
            // Not a usable char
            return;
        }

        const next = allowedMappings[char].shift();
        if (!next) {
            // We have no more mappings available
            return;
        }

        message.react(emojiToUnicode(next)).then(() => {
            react(message, remaining, allowedMappings);
        });
    }




    const fetchOptions = { limit: 1 };
    if (args[1]) {
        if (!/\d{18}/.test(args[1])) {
            return message.channel.send(`${args[1]} Не найдено message ID!`);
        }

        fetchOptions.around = args[1];
    } else {
        fetchOptions.before = msg.id;
    }

    msg.channel.fetchMessages(fetchOptions).then(messages => {
        if (messages.length < 1) {
            return message.channel.send('Ошибка поиска сообщения.');


        }

        const target = messages.first();
        const allowedMappings = clone(mappings);

        // Remove current reactions from allowed emojis
        target.reactions.forEach(reaction => {
            const emoji = reaction.toString();
            for (const key in allowedMappings) {
                const index = allowedMappings[key].indexOf(emoji);
                if (index > -1) {
                    allowedMappings[key].splice(index, 1);
                }
            }
        });

        msg.delete();
        if (!react) return message.channel.send("Напиши текст, который ты хочешь .")
        react(target, args[0].split(''), allowedMappings);
    }).catch(msg.error);

};

module.exports.help = {
	aliases: [],
    name: 'react',
    category: "admin"
};
