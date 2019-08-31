const Discord = require("discord.js")
module.exports = async (client, member, message) => {
member.guild.channels.get("608064322114945081").send(`**${member.user} à quitté le serveur Discord, nous somme maintenant ${member.guild.memberCount}**`)
}