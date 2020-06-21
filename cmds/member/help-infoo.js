const { RichEmbed } = module.require("discord.js");
const fs = require("fs");
let config = require("../../botconfig.json");
let prefix = config.prefix;

module.exports.run = (bot, message, args) => {
  var member = message.member;
  let ownerid = config.ownerid            
if(!ownerid.includes(message.author.id)) return message.member.send("**Временно недоступна, ведутся технические работы.**");
  message.delete().catch(console.error);
  let Colors = "#10c7e2";
  let GIF = "https://discordemoji.com/assets/emoji/3995_Lulu.gif";
  let page = 1;
  let Страниц = 9; //Количество страниц.
  let embed = new RichEmbed()
    .setFooter(`Страница ${page} из ${Страниц}`)
  .setTitle("**<a:12:636618561275691010>command-info<a:12:636618561275691010>**")
  .setDescription("**<a:02:636617968012230667><@557958160514547717>**\n<a:40:637697693514203157>**Создатель: <@521315512504811520><a:34:637653299088064523>**")
    .setColor(Colors)
    .setTimestamp()
    .setThumbnail(GIF)
    .addField(`**${prefix}userinfo**`,"`Информация о тебе.`")
    .addField(`**${prefix}serverinfo**`,"`Информация о сервере.`")
    .addField(`**${prefix}roleinfo**`,"`Информация о ролях.`")
  .addField(`**${prefix}help**`,"`Список команд.`")
    .addField(`**${prefix}stats**`,"`Статистика.`")
    .addField(`**${prefix}ping**`,"`Задержка(пинг).`")
  //.addField(`**${prefix}command-admin**`,"`Админские команды.`")
    .addField(`**${prefix}ah**`,"`Команды создателя.`")
    .addField(`**${prefix}invite**`,"`Пригласить бота.`")
  .addField(`**${prefix}translate**`,"`Переводчик(ru),(en).`")
  .addField(`**${prefix}prefix**`,"`Смена префикса.`")
  .addField(`**${prefix}ip**`,"`Информация об IP адресе или домене.`")
 // .addField (`**${prefix}top10**`,"`Топ 10 серверов где есть бот.`")
  //.addField(`**${prefix}roles**`,"`Список ролей на сервере.`");
  
      let embed1 = new RichEmbed()
    .setFooter(`Страница ${page} из ${Страниц}`)
  .setDescription("**___Администрация___**")
    .setColor(Colors)
    .setTimestamp()
    .setThumbnail(GIF)
        .addField(`**${prefix}poll**`,"`Задать опрос.`")
        .addField(`**${prefix}setnick**`,"`Сменить ник.`")
       // .addField(`**${prefix}color**`,"`Сменить цвет роли.`")
        .addField(`**${prefix}say**`,"`Писать от имени бота.`")
        .addField(`**${prefix}toggle**`,"`Переделать канал в NSFW.`")
        .addField(`**${prefix}kick**`,"`Кикнуть.`")
        .addField(`**${prefix}ban**`,"`Забанить.`")
        .addField(`**${prefix}unban**`,"`Разбанить.`")
        .addField(`**${prefix}clear**`,"`Очистка чата.`")
        .addField(`**${prefix}reply*`,"`Писать в лс от имени бота.`")
        .addField(`**${prefix}react**`,"`Бот добавляет эмоции под текст.`")
        .addField(`**${prefix}addrole**`,"`Выдать роль.`")
        .addField(`**${prefix}removerole**`,"`Забрать роль.`")
        .addField(`**${prefix}giveaway**`,"`Сделать конкурс,giveaway <сколько должно быть победителей> <время указывать в минутах> <приз>.`")
        .addField(`**${prefix}lockdown**`,"`Заблокировать канал на определённое время.` \n __Например__ `(Закрыть чат на тех. работы).`")
        .addField(`**${prefix}timer**`,"`Таймер.`")
       .addField(`**${prefix}counting**`,"`Игра цифры, счётает цифры в чате.`")
        .addField(`**${prefix}roles**`,"`Список ролей на сервере.`")
        .addField(`**${prefix}user-chat**`,"`Рандомный победитель чате или категория.`")
       .addField(`**${prefix}mute**`,"`Выдать мут.`")
       .addField(`**${prefix}unmute**`,"`Снять мут.`");
  
  let embed2 = new RichEmbed()
    .setFooter(`Страница ${page} из ${Страниц}`)
  .setDescription("**___Животные___**")
    .setColor(Colors)
    .setTimestamp()
    .setThumbnail(GIF)
.addField(`**${prefix}dog**`,"`Рандомная картинка собаки.`")
  .addField( `**${prefix}bunny**`,"`Рандомная картинка кролика.`")
  .addField(`**${prefix}cat**`,"`Рандомная картинка котика.`")
  .addField(`**${prefix}fox**`,"`Рандомная картинка лисицы.`");



  let embed3 = new RichEmbed()
    .setFooter(`Страница ${page} из ${Страниц}`)
  .setDescription("**___Действие___**")
    .setColor(Colors)
    .setTimestamp()
    .setThumbnail(GIF)
    .addField(`**${prefix}cuddle**`,"`Успокоить.`")
    .addField(`**${prefix}bite**`,"`Укусить.`")
  .addField(`**${prefix}glare**`,"`Злиться.`")
  .addField(`**${prefix}highfive**`,"`Дать пять.`")
  .addField(`**${prefix}pat**`,"`Погладить.`")
  .addField(`**${prefix}hug**`,"`Обнять.`")
  .addField(`**${prefix}kiss**`,"`Поцеловать.`")
  .addField(`**${prefix}lick**`,"`Лизнуть.`")
  .addField(`**${prefix}slap**`,"`Пощёчина.`")
  .addField(`**${prefix}punch**`,"`Ударить.`")
  .addField(`**${prefix}poke**`,"`Тыкать.`")
  .addField(`**${prefix}ask**`,"`Вопросик??`")
  .addField(`**${prefix}shoot**`,"`Стрелять.`")
  .addField(`**${prefix}love**`,"`Любовь.`")
  .addField(`**${prefix}sexuality**`,"`Статистика сексуальности.`")
  .addField(`**${prefix}sex**`,"`Секс.`")
  .addField(`**${prefix}cry**`,"`Плакать.`")
  .addField(`**${prefix}nom**`,"`Покушать.`")
  .addField(`**${prefix}tickle**`,"`Пощекотать.`")
  .addField(`**${prefix}suicide**`,"`Суицид.`")
  .addField(`**${prefix}wasted**`,"`Убить.`")
  .addField(`**${prefix}slappope**`,"Ударить по попе.")
  .addField(`**${prefix}loli**`,"`Лол.`")
  .addField(`**${prefix}gay**`,"`Тест на гея.`")
 .addField(`**${prefix}ship**`,"`Проверка любви.`");
  
  let embed4 = new RichEmbed()
    .setFooter(`Страница ${page} из ${Страниц}`)
  .setDescription("**___Действие2___**")
    .setColor(Colors)
    .setTimestamp()
    .setThumbnail(GIF)
  .addField(`**${prefix}smug**`,"`Улыбнуться.`");
  
    let embed5 = new RichEmbed()
    .setFooter(`Страница ${page} из ${Страниц}`)
  .setDescription("**___Развлечения___**")
    .setColor(Colors)
    .setTimestamp()
    .setThumbnail(GIF)
    .addField(`**${prefix}roulette**`,"`Русская рулетка.`")
    .addField(`**${prefix}8ball**`,"`Балл(ответ на любой вопрос).`")
    .addField(`**${prefix}avatar**`,"`Ваше фото(других).`")
    .addField(`**${prefix}zym**`,"`Взлом @user.`")
    .addField(`**${prefix}art**`,"`Поле для рисования.`")
    .addField(`**${prefix}randomcolor**`,"`Рандомный цвет.`")
    .addField(`**${prefix}minesweeper**`,"`Сапёр.`")
    .addField(`**${prefix}reverse**`,"`Текст зад на перёд.`")
  .addField(`**${prefix}youtube**`,"`Поиск на YouTube.`")
    .addField(`**${prefix}ttt**`,"`Крестики нолики.`")
   .addField(`**${prefix}memes**`,"`Мемы.`")
   .addField(`**${prefix}rip**`,"`Умереть.`")
   .addField(`**${prefix}telephone**`,"`Телефон (там оск).`")
  
    
    
    
    
    
    let embed6 = new RichEmbed()
    .setFooter(`Страница ${page} из ${Страниц}`)
  .setDescription("**___Развлечения2___**")
    .setColor(Colors)
    .setTimestamp()
    .setThumbnail(GIF)
    .addField(`**${prefix}uclaim**`,"`Сколько ты стоишь.`")
  .addField(`**${prefix}atam**`,"`Твоя ава с атамом.`")
  .addField(`**${prefix}coin**`,"`Орёл или решка.`")
  .addField(`**${prefix}manga**`,"`Манга.`")
  .addField(`**${prefix}ratewaifu**`,"`Оценить вайфу.`")
  .addField(`**${prefix}zodiac**`,"`Ваш знак зодиака.`")
.addField(`**${prefix}anime**`,"`Аниме.`")
  .addField(`**${prefix}komunist**`,"`Ваша аватарка коммунист.`")
   .addField(`**${prefix}cow**`,"`Корова.`")
  .addField(`**${prefix}hack**`,"`Хак.`")
    .addField(`**${prefix}fishing**`,"`Рыбалка.`")
    .addField(`**${prefix}dansetext**`,"`Бот рисует тот текс который, вы написали.`");
  /*
    let embed5 = new RichEmbed()
    .setFooter(`Страница ${page} из ${Страниц}`)
  .setDescription("**___Anime___**")
    .setColor(Colors)
    .setTimestamp()
    .setThumbnail(GIF)
    .addField(`**${prefix}neko**`,"`Рандомная картинка Неко.`")
    .addField(`**${prefix}ava**`,"`Рандомная аватарка.`")
  .addField(`**${prefix}holo**`,"`Рандомная аватарка holo.`")
    .addField(`**${prefix}girl**`,"`Рандомная картинка, девочки лисы.`");
  
    let embed6 = new RichEmbed()
    .setFooter(`Страница ${page} из ${Страниц}`)
  .setDescription("**___Радуга___**")
    .setColor(Colors)
    .setTimestamp()
    .setThumbnail(GIF)
    .addField(`**${prefix}rainbow**`,"`Радужная роль.`")
    .addField(`**${prefix}sp**`,"`Отключения радуги.`");
  */
    let embed7 = new RichEmbed()
    .setFooter(`Страница ${page} из ${Страниц}`)
  .setDescription("**__Музыка__**")
    .setColor(Colors)
    .setTimestamp()
    .setThumbnail(GIF)
    .addField(`**${prefix}play**`,"`Запуск трека.`")
    .addField(`**${prefix}stop**`,"`Отключить музыку`")
    .addField(`**${prefix}skip**`,"`Скипнуть текущий трек.`")
    .addField(`**${prefix}np**`,"`Посмотреть что сейчас проигрывается.`")
    .addField(`**${prefix}pause**`,"`Пауза трека.`")
    .addField(`**${prefix}resume**`,"`Снять с паузы.`")
    .addField(`**${prefix}volume**`,"`Громкость трека.`")
        .addField(`**${prefix}repeat**`,"`Повторения всех треков.` **В** `ql`")
    .addField(`**${prefix}ql**`,"`Просмотр всех треков.`")
  .addField(`**${prefix}radio**`,"`Радио.`")
  .addField(`**${prefix}radiolist/list**`,"`Список радио.`")
  .addField(`**${prefix}leave**`,"`Отключить радио.`")
    .addField(`**${prefix}youtubelist**`,"`Плейлист ютуб музыки.`");
  
      let embed8 = new RichEmbed()
    .setFooter(`Страница ${page} из ${Страниц}`)
  .setDescription("**РА,ЗДЕЛЫ**")
    .setColor(Colors)
    .setTimestamp()
    .setThumbnail(GIF)
          .addField(`**Anime**`,"`Будет чуть позже.`")
.addField(`**NSFW**`,"`Будет отдельная команда.`");
  
  message.channel.send(embed).then(msg => {
    msg.react("⏪").then(r => {
      msg.react("⏩")
      msg.react("⏹")
      const backwardsFilter = (reaction, user) =>
        reaction.emoji.name === "⏪" && user.id === message.author.id;
      const forwardsFilter = (reaction, user) =>
        reaction.emoji.name === "⏩" && user.id === message.author.id;
      const STOPDelete = (reaction, user) =>
        reaction.emoji.name === "⏹" && user.id === message.author.id;
      const backwards = msg.createReactionCollector(backwardsFilter);
      const forwards = msg.createReactionCollector(forwardsFilter);
      const STOP = msg.createReactionCollector(STOPDelete);
      backwards.on("collect", r => {
        if (message.channel.type !== "dm")
          msg.reactions.forEach(e => e.remove(message.author.id));
        if (page === 1) return;
        page--;
        if (page == 1) {
          embed.setFooter(`Страница ${page} из ${Страниц}`);
          msg.edit(embed);
        }
        if (page == 2) {
          embed1.setFooter(`Страница ${page} из ${Страниц}`);
          msg.edit(embed1);
        }
        if (page == 3) {
          embed2.setFooter(`Страница ${page} из ${Страниц}`);
          msg.edit(embed2);
        }
                if (page == 4) {
          embed3.setFooter(`Страница ${page} из ${Страниц}`);
          msg.edit(embed3);
        }
                  if (page == 5) {
          embed4.setFooter(`Страница ${page} из ${Страниц}`);
          msg.edit(embed4);
        
        }
                if (page == 6) {
          embed5.setFooter(`Страница ${page} из ${Страниц}`);
          msg.edit(embed5);
        }
                        if (page == 7) {
          embed6.setFooter(`Страница ${page} из ${Страниц}`);
          msg.edit(embed6);
        }
        
                if (page == 8) {
          embed7.setFooter(`Страница ${page} из ${Страниц}`);
          msg.edit(embed7);
        }
        
                if (page == 9) {
          embed8.setFooter(`Страница ${page} из ${Страниц}`);
          msg.edit(embed8);
        }
        /*
                if (page == 10) {
          embed7.setFooter(`Страница ${page} из ${Страниц}`);
          msg.edit(embed7);
        }
        */
      });
      forwards.on("collect", r => {
        if (message.channel.type !== "dm")
          msg.reactions.forEach(e => e.remove(message.author.id));
        if (page == Страниц) return;
        page++;
        if (page == 1) {
          embed.setFooter(`Страница ${page} из ${Страниц}`);
          msg.edit(embed);
        }
        if (page == 2) {
          embed1.setFooter(`Страница ${page} из ${Страниц}`);
          msg.edit(embed1);
        }
        if (page == 3) {
          embed2.setFooter(`Страница ${page} из ${Страниц}`);
          msg.edit(embed2);
        }
                if (page == 4) {
          embed3.setFooter(`Страница ${page} из ${Страниц}`);
          msg.edit(embed3);
        }
                  if (page == 5) {
          embed4.setFooter(`Страница ${page} из ${Страниц}`);
          msg.edit(embed4);
        }
                if (page == 6) {
          embed5.setFooter(`Страница ${page} из ${Страниц}`);
          msg.edit(embed5);
        }
                        if (page == 7) {
          embed6.setFooter(`Страница ${page} из ${Страниц}`);
          msg.edit(embed6);
        }
      
                if (page == 8) {
          embed7.setFooter(`Страница ${page} из ${Страниц}`);
          msg.edit(embed7);
        }
        
                if (page == 9) {
          embed8.setFooter(`Страница ${page} из ${Страниц}`);
          msg.edit(embed8);
        }
        /*
                if (page == 10) {
          embed7.setFooter(`Страница ${page} из ${Страниц}`);
          msg.edit(embed7);
        }
        */
      });
      STOP.on("collect", r => {
        msg.clearReactions()
        backwards.stop()
        forwards.stop()
        STOP.stop()
      })
    });
  });
};
module.exports.help = {
	aliases: ["cmd"],
  name: "command-info",
  category: "info"
};