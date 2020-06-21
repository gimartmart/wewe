const Discord = require('discord.js')
module.exports = {
    err: function err(text, perms) {
        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setDescription(`**${text}**`);

        if (perms) embed.setDescription(`**У вас нет права "${perms}"**`);
        return embed;
    },

    succ: function succ(text) {
        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setDescription(`**${text}**`);
        if (text === "") embed.setDescription(``);
        return embed;
    }
}