const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!args[0]) return bot.send("**Вы не указали пользователя**");
  let rUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  if (!rUser) return message.channel.send("**Не удалось найти пользователя.**");
  let rreason = args.slice(1).join(" ");
  // if (!rpchannel) return message.channel.send('**Создайте канал `report`**')
  // const rpchannel = message.guild.channels.find(channel => channel.name === 'report');
  if (!rreason) return message.channel.send("**Введите причину**");
  let em = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField("📕Жалоба на", `${rUser} ID: ${rUser.id}`)
    .addField("📝Жалоба от", `${message.author} ID: ${message.author.id}`)
    .addField("📢Канал", message.channel)
    .addField("📄Причина", rreason);
  message.delete().catch(O_o => {});
  const data = bot.settings.get(message.guild.id);
  console.log(bot.settings);
  if (!data)
    return message.channel.send(
      "В базе нет гильдии, используйте команду sreport"
    );
  const reportChannel = message.guild.channels.get(data.report);
  if (!reportChannel)
    return message.channel.send("На сервере нет указанного канала");
  let okaydm = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField(
      `Совсем скоро администрация нашего сервера, рассмотрит жалобу на`,
      `${rUser.user.tag}`
    );
  message.channel.send(okaydm).then(msg => msg.delete(8 * 1000));
  reportChannel.send(em);
};

module.exports.help = {
  name: "report",
  aliases: [],
  category: "info"
};
