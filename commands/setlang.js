module.exports = {
  name: "setlang",
  aliases: ["lang"],
  description: "Смена языка ru-en.",
  async execute(message, [ language = '"не указан"' ], lang) {
    if(!message.member.permissions.has(8)){
      message.channel.send(lang.default.perm('ADMINISTRATOR', this.name));
      return;
    }
    if(!lang.ALL.includes(language)){
      message.channel.send(lang.language(language, lang.ALL.join('\n')));
      return;
    }
    message.guild.setLang(language);
    message.channel.send(lang.success(language));
  }
};
