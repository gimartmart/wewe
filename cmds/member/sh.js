const Discord = module.require('discord.js');
const request = module.require('request-promise');
const isgd = require('isgd');
module.exports.run = async (bot, message, args) => {
    try {
    
        let errEmbed = new Discord.RichEmbed()
        let website = args[0];
        if(!website){
          // bot.sendErrEmbed(errEmbed, "Необходимо указать сайт!");
            return message.channel.send("Необходимо указать сайт!")
         // message.delete().catch(O_o => {})
        }
        
        var my_msg = await message.channel.send(new Discord.RichEmbed().setTitle('Делаем запрос, ожидайте'))
        isgd.shorten(website, async function(res){
            let shEmbed = new Discord.RichEmbed()
            .setTitle(res)
            .setColor('RANDOM');
            await my_msg.edit(shEmbed)
        });
message.delete().catch()

    } catch (err) {
        bot.logsErr(err)
    }
};
module.exports.help = {
    name: 'sh',
    aliases: [],
    category: "info"
    
}; 
