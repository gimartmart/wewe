
const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {           
        let userChoice;
                if (!args[0]) {
                    return bot.send("Вы забыли указать к/н/б !")
                }
                else if (['камень', 'rock', 'r', 'к'].includes(args[0].toLowerCase())) {
                    userChoice = 'камень';
                }
                else if (['бумагу', 'бумага', 'paper', 'p', 'б'].includes(args[0].toLowerCase())) {
                    userChoice = 'бумагу';
                }
                else if (['scissors', 'ножницы', 's', 'н'].includes(args[0].toLowerCase())) {
                    userChoice = 'ножницы';
                } else {
                    userChoice = 'Incorrect';
                }
                let computerChoice = Math.random();
                if (computerChoice < 0.34) {
                    computerChoice = "камень";
                } else if(computerChoice <= 0.67) {
                    computerChoice = "бумагу";
                } else {
                    computerChoice = "ножницы";
                }
                function rspCW(userChoice, computerChoice) {
                    let award = Math.floor(Math.random() * 3) + 1;
                    if (userChoice === computerChoice) {
                        return "**Ничья!**😀";
                    }
                    else if(userChoice === "камень") {
                        if(computerChoice === "ножницы") {
                            return "**Ты выиграл(а)!** 😢";
                        }
                        else if (computerChoice === "бумагу") {
                            return "**Ты проиграл(а).** 😎";
                        }
                    }
                    else if(userChoice === "бумагу") {
                        if(computerChoice === "камень") {
                            return "**Ты выиграл(а)!** 😢";
                        } else if (computerChoice === "ножницы") {
                            return "**Ты проиграл(а).** 😎";
                        }
                    }
                    else if(userChoice === "ножницы") {
                        if(computerChoice === "бумагу") {
                            return "**Ты выиграл(а)!** 😢";
                        } else if (computerChoice === "камень") {
                            return "**Ты проиграл(а).** 😎";
                        }
                    }
                    else if (userChoice === 'Incorrect') {
                        return " **Ты не выбрал ни камень, ни ножницы, ни бумагу**";
                    }
                }
                if (userChoice === 'Incorrect') {
                    message.channel.send(message.author + rspCW(userChoice, computerChoice))
                }
                else {
                const embed = new Discord.RichEmbed()
                .setTitle(rspCW(userChoice, computerChoice))
                .setColor('RANDOM')
                .addField("**Бот выбрал**", computerChoice, true)
                .addField("**Ты выбрал(a)**", userChoice, true)
                //.setFooter(server_name)
                .setTimestamp();
                message.channel.send({embed})
                message.delete();
            }
    }

module.exports.help = {
	aliases: [],
  name:"rsp",
  category: "fun"
}