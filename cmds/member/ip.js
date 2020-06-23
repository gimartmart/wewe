
const { RichEmbed } = require("discord.js") 

module.exports.run = async (bot, message, args) => {
!eval 
let fetch = require("node-fetch");
fetch(`http://ip-api.com/json/${args[0]}?fields=33292287&lang=ru`)
    .then(res => res.json())
    .then(json => {
if(!json.zip) json.zip = "-"
if(!json.org) json.org = "-"
if(json.status !== "success") return message.channel.send("Укажите ip или Домен!")
message.channel.send(new RichEmbed()
.setTitle(json.query)
.addField("Континент", `${json.continent} (${json.continentCode})`,true)

.addField("Страна", `${json.country} (${json.countryCode})`,true)

.addField("Регион", `${json.regionName} (${json.region})`,true)

.addField("Город", json.city,true)
.addField("Индекс", json.zip,true)
.addField("Координаты", `${json.lat}/${json.lon}`,true)

.addField("Часовой пояс", json.timezone,true)
.addField("Валюта", json.currency,true)
.addField("Провайдер", json.isp,true)
.addField("Организация", json.org,true)

.addField("Мобильная связь", json. mobile,true)
.addField("PROXY", json.proxy,true)
 .addField("HOSTING", json.hosting,true)
.setColor("RANDOM")

)});
};
module.exports.help = {
  name: "ip",
aliases: [],
category: "info"
};
