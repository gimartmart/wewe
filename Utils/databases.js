const Enmap = require("enmap");
module.exports = bot => {
  bot.games = new Enmap({
    name: "games",
    fetchAll: true,
    cloneLevel: "deep"
  });
  bot.answers = new Enmap({
    name: "gameAnswers",
    cloneLevel: "deep"
  });
  bot.prefixes = new Enmap({
    name: "prefixes",
    cloneLevel: "deep"
  });
  bot.mutes = new Enmap({
    name: "mutes",
    cloneLevel: "deep",
    fetchAll: true
  });
  bot.blacklist = new Enmap({
    name: "blacklist",
    cloneLevel: "deep"
  });
  bot.privates = new Enmap({
    name: "privates",
    cloneLevel: "deep"
  });
  bot.verified = new Enmap({
    name: "verified",
    cloneLevel: "deep"
  });
  bot.giveaways = new Enmap({
    name: "giveaways",
    cloneLevel: "deep",
    fetchAll: true
  });
  bot.settings = new Enmap({
    name: "settings",
    cloneLevel: "deep",
    fetchAll: true
  });

  return bot;
};
