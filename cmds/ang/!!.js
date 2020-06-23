module.exports.run = async (bot,message,args) => {
    message.delete();
       let arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
       let otv = arr[Math.floor(Math.random()*arr.length)]
       message.channel.send('**( ͡° ͜ʖ ͡°)╭∩╮**', {files:[`./photos/${otv}.jpg`]})
   }
   module.exports.help = {
       aliases: [],
   name: "a",
   category: "ang"
   };