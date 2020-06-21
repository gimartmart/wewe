const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot,message,args) => {
    
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let a = message.author;

    var hug = [
        'https://images.app.goo.gl/eCaHXQ1HxaQQSa877',
        'https://media1.tenor.com/images/99c6105e9bf7a3f814f9d23db6ae601a/tenor.gif?itemid=12434221',
        'https://i.pinimg.com/originals/38/d2/14/38d214c232f7cc550d15bb915a3af406.gif',
        'https://steamuserimages-a.akamaihd.net/ugc/958612594706186411/A1B6E92B4E7861AEEFF0EE1CC1614FDA9CF5B4E7/',
        'https://media1.tenor.com/images/6b6530029b919eacb788d052f727797c/tenor.gif?itemid=4749194',
        'https://steamuserimages-a.akamaihd.net/ugc/941708079545320427/BD3DA519D3566564F4D051959D7D297B54F0C53E/',
        'https://steamusercontent-a.akamaihd.net/ugc/939446829393379715/1CCE6BF0EB030D08698D17FAC18EC7412E05C260/?interpolation=lanczos-none&output-format=jpeg&output-quality=95&fit=inside%7C506%3A*',
        'https://i.kym-cdn.com/photos/images/original/000/999/369/b5c.gif',
        'https://media1.tenor.com/images/cd2fc14c09bd8b735f86a9090196a4f2/tenor.gif?itemid=6007793'
    ];
    var gif = Math.floor((Math.random() * hug.length));
    if(!rUser) {
        
        const embed = new Discord.RichEmbed()
        .setColor("#800000")
        .setDescription("**<@557958160514547717>**" + " **press F** " + `${message.author}`)
        .setImage(hug[gif])
        bot.send(embed)
        message.delete().catch(O_o => {});
        
    }else {
        
        const embed = new Discord.RichEmbed()
        .setColor("#800000")
        .setDescription(`${message.author}` + "**press F**" + `${rUser}`)
        .setImage(hug[gif])
        bot.send(embed);
        message.delete().catch(O_o => {});
        
    }
};
module.exports.help = {
	aliases: [],
    name: "pressf",
    category: "ang"
};