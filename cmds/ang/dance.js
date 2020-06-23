const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot,message,args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let a = message.author;

    var hug = [
        'https://i.gifer.com/8UYb.gif',
        'https://99px.ru/sstorage/86/2016/05/image_860505160035215572315.gif',
        'https://i.pinimg.com/originals/b3/20/cb/b320cb6237a70e09910d38741f567302.gif',
        'https://thumbs.gfycat.com/EvenBreakableLamprey-size_restricted.gif',
        'https://pa1.narvii.com/6389/7c67709810eb7f80b5c41f84c14fabd7c8e2aa78_hq.gif',
        'https://cs.pikabu.ru/post_img/2013/08/16/10/1376668882_1285698268.gif',
        'https://thumbs.gfycat.com/AgreeableEsteemedBuck-size_restricted.gif',
        'https://avatars.mds.yandex.net/get-pdb/231404/e447025a-aa34-438c-9c0b-7e0416719388/orig',
        'https://pa1.narvii.com/6389/7e96396e4b599e0f873ce76ce0bd01b5c2986d0b_hq.gif',
        'https://i.pinimg.com/originals/16/43/1d/16431d64069d0aa6280b874cdb9869d8.gif',
        'https://thumbs.gfycat.com/FavoriteSharpAntbear-size_restricted.gif',
        'https://static.wixstatic.com/media/833463_b04d40b6bb74495e9baf980c79195a92.gif',
        'https://avatars.mds.yandex.net/get-pdb/776003/417bc21c-febe-43b0-b091-234c9b0f24c1/orig',
        'https://i.pinimg.com/originals/6a/07/d3/6a07d32363e88e9fa41def63ee19091b.gif',
        'https://i.gifer.com/RE1y.gif',
        'https://animehub.cc/wp-content/uploads/2019/08/Anime-Danmachi-Hestia-Danmachi-Aiz-Wallenstein2.gif',
        'https://avatars.mds.yandex.net/get-pdb/1531580/0286bf5c-5b82-46ec-892a-093851de9ac4/orig',
        'https://i.gifer.com/Afdv.gif',
        'https://thumbs.gfycat.com/BlondThisBison-small.gif',
        'https://avatars.mds.yandex.net/get-pdb/477388/6f9ffbf0-f71e-48e8-9978-677793073686/orig',
        'https://anime-chan.me/uploads/posts/2015-08/1440088799_tumblr_nt8y978XGM1t0p1pao4_400.gif',
        'https://pa1.narvii.com/6569/ee0f0922e4c0b4f67bfc3e299afff40caa531c65_hq.gif',
        'https://media.tenor.com/images/fe3826b59f80f5e6c7cc04eb474fb44d/tenor.gif'
    ];
    var gif = Math.floor((Math.random() * hug.length));
    if(!rUser) {
        
        const embed = new Discord.RichEmbed()
        .setColor("#ff00ff")
        .setDescription( `${message.author}` + " **теперь танцуй!** ")
        .setImage(hug[gif])
        bot.send(embed);
        message.delete().catch(O_o => {});}
        
};
module.exports.help = {
	aliases: [],
  name: "dance",
  category: "ang"
};
