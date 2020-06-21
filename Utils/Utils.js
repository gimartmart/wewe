const fs = require("fs");
const path = require("path");
const { RichEmbed } = require("discord.js");

class Utils {
  /**
   * @description Read a directory recursively to get all files
   * @param {string} directory - The directory to read
   * @returns {Array<string>} All the paths to the files
   */
  static readdirSyncRecursive(directory) {
    let files = [];

    fs.readdirSync(directory).forEach(file => {
      const location = path.join(directory, file);

      // If the file is a directory read it recursively
      if (fs.lstatSync(location).isDirectory()) {
        files = files.concat(Utils.readdirSyncRecursive(location));
      } else {
        files.push(location);
      }
    });

    return files;
  }

  /**
   * @description Makes a boolean object Yes or No.
   * @param {boolean} bool - The boolean to stringify.
   * @returns {string} Boolean as Yes or No, accordingly.
   */
  static boolToString(bool) {
    if (typeof bool === "boolean") {
      return bool ? "Yes" : "No";
    }
    return String(bool);
  }
  static async createGame(bot, data, guild, time) {
    const cd = new Set();
    let last = data.last;
    const filter = m => m.channel.id === data.channel;
    try {
      const collector = await guild.channels
        .get(data.channel)
        .createCollector(filter, {
          time: time
        });
      collector.on("collect", async m => {
        if (m.id === bot.user.id) return;
        if (m.author.bot) return m.delete();
        if (isNaN(m.content)) return m.delete();
        if (cd.has(m.author.id)) return m.delete();
        const answer = parseInt(m.content);
        if (answer - last === 1) {
          last = answer;
          bot.games.set(guild.id, last, "last");
          bot.answers.ensure(m.guild.id, {});
          bot.answers.ensure(
            m.guild.id,
            {
              id: m.author.id,
              count: 1,
              tag: m.author.tag
            },
            m.author.id
          );
          bot.answers.inc(m.guild.id, `${m.author.id}.count`);
          cd.add(m.author.id);
          setTimeout(() => {
            cd.delete(m.author.id);
          }, 1000 * data.cooldown);
        } else m.delete();
      });
      collector.on("end", async () => {
        try {
          const channel = guild.channels.get(data.channel);
          const embed = new RichEmbed()
            .setTitle("Игра окончена")
            .setDescription(
              Array.from(Object.values(bot.answers.get(guild.id)))
                .sort((a, b) => b.count - a.count)
                .map(u => `${guild.members.get(u.id).toString()}: ${u.count}`)
                .join("\n")
            );

          channel.send(embed);
          channel.send(
            `Победил: ${
              Array.from(Object.values(bot.answers.get(guild.id))).sort(
                (a, b) => b.count - a.count
              )[0].tag
            }`
          );
          let role = guild.roles.get(data.role) || guild.roles.find(r => r.name === "Counting Winner");
          if (!role)
            role = await guild.createRole({
              name: "Counting Winner",
              color: "BLUE"
            });
            bot.games.set(guild.id, role.id, "role")
          const member = guild.members.get(
            Array.from(Object.values(bot.answers.get(guild.id))).sort(
              (a, b) => b.count - a.count
            )[0].id
          );
          if (member && !member.roles.has(role.id)) {
            member.addRole(role).then(() => {
              setTimeout(() => {
                member.removeRole(role);
              }, 60000 * 60);
            });
          } else if (member && member.roles.has(role.id)) {
            setTimeout(() => {
              member.removeRole(role);
            }, 60000 * 60);
          }
        } catch (e) {
        } finally {
          try {
            bot.answers.delete(guild.id);
          } catch (e) {}
        }
      });
    } catch (e) {}
  }
}

module.exports = Utils;
