const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot,message,args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let a = message.author;

    var hug = ['https://cdn.discordapp.com/attachments/649703016160821250/649703799501619223/giphy.gif',
               'https://cdn.discordapp.com/attachments/649703016160821250/649703831701159976/FaroffMistyBackswimmer-small.gif',
               'https://cdn.discordapp.com/attachments/649703016160821250/649703871991644161/d6eio74-deeaaa45-7558-455f-b647-a51feda6e7f6.gif',
              'https://cdn.discordapp.com/attachments/649703016160821250/649703932213329920/3251723044_1_5_ujp15gLs.gif',
              'https://cdn.discordapp.com/attachments/649703016160821250/649704995544891394/1498118663_tumblr_n8zr22QCfj1r0wlweo1_500.gif',
              'https://cdn.discordapp.com/attachments/649703016160821250/649705025458667550/749925299808a876fa6d57f3a6acc301119330a5_hq.gif',
              'https://cdn.discordapp.com/attachments/649703016160821250/649707493081088010/1520776749_felyaneko.gif'];
    var gif = Math.floor((Math.random() * hug.length));
    if(!rUser) {
        
        const embed = new Discord.RichEmbed()
        .setColor("#ff00ff")
        .setDescription( `${message.author}` + " **расплакался(-ась)😭** ")
        .setImage(hug[gif])
        bot.send(embed);
        message.delete().catch(O_o => {});}
        
};
module.exports.help = {
	aliases: [],
    name: "cry",
    category: "ang"
};