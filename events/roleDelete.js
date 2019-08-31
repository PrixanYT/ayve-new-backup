const Discord = require("discord.js")

module.exports = async (client, role) => {
    let logschannel = role.guild.channels.find("name", "logs")
    logschannel.send(`**Le rôle ${role.name} à été supprimé**`)
}