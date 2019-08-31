const Discord = require("discord.js")

module.exports = async (client, channel) => {
    let sChannel = channel.guild.channels.find("name", "logs")
    sChannel.send(`**Le salon ${channel.name} à été supprimé**`)
}