const { RichEmbed } = require('discord.js');

module.exports.run = (bot, msg, args) => {
    let user = msg.mentions.users.first() || msg.author;
    let arr = [`https://cdn.discordapp.com/attachments/521307265777532932/652266039161389106/Screenshot_20191116-004545_PS_Touch.jpg`, `https://cdn.discordapp.com/attachments/521307265777532932/650758454922838027/Screenshot_20191006-042041.png`, `https://cdn.discordapp.com/attachments/521307265777532932/650758776726618124/Screenshot_20190915-190507.png`, `https://cdn.discordapp.com/attachments/578326175282233346/650759925630500925/Screenshot_20191201-210627.png`, `https://cdn.discordapp.com/attachments/578326175282233346/650759925630500924/Screenshot_20191201-210557.png`];
    msg.channel.send({
        embed: {
            color: 16777215,
            description: (`**LoL!?** ${user.tag}`),
            image: {
                url: `${arr[Math.floor(Math.random() * arr.length)]}`
              
                

            }
            

        }
      
    })
    

}

module.exports.help = {
	aliases: [],
    name: 'loli',
    category: "ang"
}
