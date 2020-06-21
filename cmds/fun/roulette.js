module.exports.run = async (bot, message, args) => {
   let randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
    // console.log(randomNumber);
    if(randomNumber==2){
        message.reply("Умер! 💀");
    }else{
        message.reply("Выжил! 😃");
    }
}

module.exports.help = {
	aliases: [],
  name:"roulette",
  category: "fun"
}