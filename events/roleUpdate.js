const Discord = require("discord.js")

module.exports = async (client, oldRole, newRole) => {
    let logschannel = newRole.guild.channels.find("name", "logs")
    logschannel.send(`**Le rôle ${oldRole.name} à été renomé en ${newRole} !**`)
}
