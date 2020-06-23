const { RichEmbed } = require('discord.js');
exports.run = (client, message, args) => {
    // Tries to get the first mentioned role or a role ID or a role name (role names are case sensitive)
    let role = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(role => role.name === args[0]);

    // If we can't find any role, then just default to the author's highest role
    if (!role) role = message.member.highestRole;


    // Define our embed
    const embed = new RichEmbed()
        .setColor(role.hexColor)
        .setTitle(`Роль: ${role.name}`)
        .addField('Учасников', role.members.size, false)
        .addField('цвет', role.hexColor, false)
        .addField('Дата создания', role.createdAt.toDateString(), false)
        .addField('Редактирование', role.editable.toString(), false)
        .addField('Managed', role.managed.toString(), false)
        .addField('ID', role.id, false);
    return message.channel.send({
        embed: embed
    });
};
module.exports.help = {
	aliases: [],
    name: "roleinfo",
    category: "info"
};