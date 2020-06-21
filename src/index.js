const http = require("http"),
  express = require("express"),
  app = express();

app.get("/", (request, response) => {
  console.log(Date.now() + " пинг получен");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);



const Discord = require("discord.js");
const { Collection, Client, RichEmbed } = require('discord.js');
let { token, reacts } = require('./config.json');
const client = new Client();
let bot = client;

reacts = new Collection(reacts.map(i => {
	i[1].reactions = new Collection(i[1].reactions)
	return i
}))

client.login(process.env.TOKEN)
client.on('ready', async() => {
	console.log('Bot online')
	await reacts.forEach(async (obj, id) => {
		let [channelid, msgid] = id.split('.');
		let channel = client.channels.get(channelid);
		if(!channel){
			reacts.delete(id)
			console.error('Channel with id', channelid, 'undefined')
			return;
		}
		try{
			let message = await channel.fetchMessage(msgid);
			obj.reactions.forEach((roleid, emoji, reactions) => {
				let role = getRole(roleid);
				if(!role){
					reactions.delete(emoji)
					console.log('Role with id', roleid, 'undefined')
					return;
				}
				console.log('add Collector')
				createCollector(message, emoji, role, obj.limit)
			})
		}catch(err){
			reacts.delete(id)
			console.error('Msg with id', msgid, 'undefined')
			console.error(err)
			return;
		}
	})
})

function getRole(id){
	let guild = client.guilds.find(i => i.roles.has(id));
	if(!guild)return undefined;
	return guild.roles.get(id)
}

function createCollector(message, emoji, role, limit){
	message.react(emoji)
	let filter = (reaction, user) => emoji == reaction.emoji.name || emoji == reaction.emoji.toString() || emoji == reaction.emoji.id
	let collector = message.createReactionCollector(filter);
	collector.on('collect', async r => {
		let { emoji, message, users } = r;
		let member = message.guild.members.get(users.last().id);
		if(member.user.bot)return;
		r.remove(member.user);
		let memberRoles = reacts.get(message.channel.id+'.'+message.id).reactions.filter(i => member.roles.has(i))
		if(memberRoles.size+1 > limit && !member.roles.has(role.id)){
			try{
				await sendLimit(member, limit);
			}catch(err){
				console.error(err)
			}
			return;
		}
		if(member.roles.has(role.id)) member.removeRole(role.id);
		else member.addRole(role.id)
	})
}
async function sendLimit(member, limit){
	if(!member.lastMessageID)return;
	member.lastMessage.channel.send(member.toString(), {
		embed: new RichEmbed()
		.setColor('DARK')
		.setTitle('Roles Limit')
		.setDescription('Вы достигли лимита ролей. ' + limit + '\nЧто бы получить новую роль, избавтесь от старых' )
		.setAuthor(member.user.username, member.user.avatarURL)
		.setTimestamp()
	}).then(i => i.delete(10000))
}
/*

bot.on("message", async message => {
  if(message.author.id !== "521315512504811520") return;
    if(message.content.startsWith("Пройдите небольшую регистрацию, нажмите на эмоцию ниже.")) await message.react("☑️");
});
bot.on("raw", async event => {
  var events = {
    MESSAGE_REACTION_ADD: "messageReactionAdd",
    MESSAGE_REACTION_REMOVE: "messageReactionRemove"
  };

  if (!events.hasOwnProperty(event.t)) return;

  const { d: data } = event;
  const user = bot.users.get(data.user_id);
  const channel = bot.channels.get(data.channel_id);

  const message = await channel.fetchMessage(data.message_id);
  const member = message.guild.members.get(user.id);

  const emojiKey = data.emoji.id
    ? `${data.emoji.name}:${data.emoji.id}`
    : data.emoji.name;
  const reaction = message.reactions.get(emojiKey);

  if (member.id !== bot.user.id) {
    if (
      reaction.emoji.name === "☑️" &&
      reaction.message.author.id == "521315512504811520" &&
      reaction.message.content.startsWith(
        "Пройдите небольшую регистрацию, нажмите на эмоцию ниже.")
    ) {
      if (event.t === "MESSAGE_REACTION_ADD") {
        let role21 = member.guild.roles.find(r =>
          r.name.includes("Посетитель")
        );
        member.addRole(role21);
        return;
      } else {
        let role21 = member.guild.roles.find(r =>
          r.name.includes("Посетитель")
        );
        member.removeRole(role21);
        return;
      }
    } 
  }
});

client.on("guildMemberRemove", async member => {
    if(!member.bot){
        member.guild.channels.get("650479365066326049").send(`${member.user.username}` + "  ушел !");
    }
})
client.on("guildMemberAdd", async member => {
    if(!member.bot){
        member.guild.channels.get("650479365066326049").send(`${member}`+ "  присоеденился!");
    }
    const Welcome = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(`Добро пожаловать на сервер __**Hola**__`)
    .setDescription("Пройдите небольшую регистрацию! - <#643390161547296778>")
    .setImage('https://cdn.discordapp.com/attachments/647888275029360640/702161717383266344/kto-prochital-tot-gay2-2.gif')

    member.send(Welcome);
    
})
*/
bot.on('ready', () => {
    console.log(`Запустился бот ${bot.user.username}`);
    bot.generateInvite(["ADMINISTRATOR"]).then(link =>{
        console.log(link);
        let svs;
        let statuses = [`Server Holo.`,`Мандаринку`] // Статусы!
        setInterval(function(){
            let acitvestatus = statuses[Math.floor(Math.random()*statuses.length)]
            bot.user.setPresence({game: {name:acitvestatus,status:'online',type:"PLAYING"}});
            bot.user.setPresence({activity:{name:acitvestatus},status:'online'});
        },50000);
    })
})