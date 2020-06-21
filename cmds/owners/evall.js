const Discord = module.require("discord.js");
let config = require("../../botconfig.json");
module.exports.run = async(bot, message, args) => {
    var member = message.member;
    let ownerid = config.ownerid            
if(!ownerid.includes(message.author.id)) return message.channel.send("__**У вас нет прав!**__").then(msg => msg.delete(5*1000));
        try {
            let codein = args.join(" ");
            let code = eval(codein);

            if (typeof code !== 'string')
                code = require('util').inspect(code, { depth: 0 });
            let embed = new Discord.RichEmbed()
                .setAuthor('Eval')
                .setColor('RANDOM')
                .addField(':inbox_tray: До', `\`\`\`js\n${codein}\`\`\``)
                .addField(':outbox_tray: После', `\`\`\`js\n${code}\n\`\`\``)
            message.channel.send(embed)
        } catch (e) {
            message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
        }
        const chalk = require('chalk');
        const GreenStyle = chalk.green; //Зелёный
        const GrayStyle = chalk.gray; // серый
/*
        console.log(GrayStyle(`
╔═══════════════════════log═════════════════════════
║${message.author.tag} - использовал команду: ${GreenStyle(`eval`)} 
║Канал: ${message.channel.name}  
║Сервер: ${message.guild.name}                  
╚═══════════════════════════════════════════════════
`))

*/

    
}

module.exports.help = {
	aliases: [],
    name: 'eval'
}
