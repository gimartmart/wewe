const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot, message, args) => {     
    let Info = new Discord.RichEmbed()    
    .setColor('#ff000')
    .addField("Информация ", "\`*art\` \`<Клеток по горизонтали (макс 30)>\` \`<Клеток по вертикали (макс 30)>\`");
    let err = new Discord.RichEmbed()    
    .setColor('#ff0000')
    .addField("Ошибка ", "Слишком много клеток");
    let err1 = new Discord.RichEmbed()    
    .setColor('#ff0000')
    .addField("Ошибка ", "Введи нормальное число");
    if(!args[0]) return message.channel.send(Info);
    let x = 0; 
    let y = 0;
    if(parseInt(args[0]) < 1) {
        return message.channel.send(err1);
    }else if(args[0] == "full" && !args[1]){
        x = 30
        y = 30;
    }else{
        x = parseInt(args[0]);
    }
    if(args[1]){
        if(parseInt(args[1]) < 1) return message.channel.send(err1);
        y = parseInt(args[1]);
    }else{
        y = 1;
    }
    if(x > 30 || y > 30) return message.channel.send(err); 
    let simvol = "||⬜||" //24 символа
    let stroka = "";
    let text = "";    
    for(i = 0;i < x;i++){
        stroka += simvol;
    }

    let str_in_msg = parseInt(2000 / stroka.length);
    let times = str_in_msg;
    for(j = 0; j < y / str_in_msg;){
        if(y < times){
            times = y;
        }
        for(i = 0;i < times;i++){
            text += stroka + "\n";
            y--
        }
        message.channel.send(text);
        text = "";        
    }       

}
module.exports.help = {
	aliases: [],
    name: "art",
    category: "fun"
};