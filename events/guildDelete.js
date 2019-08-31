
const Discord = require("discord.js")

module.exports = async (client, guild) => {
    const embed = new Discord.RichEmbed()
    .setTitle(`Le bot à été retiré d'un serveur !`)
    .addField("Nom du serveur", guild.name)
    .addField("ID du serveur", guild.id)
    .addField("Owner", guild.owner.user.tag)
    .addField("ID du owner", guild.owner.id)
    .addField("Membre au total", guild.memberCount)
    .setFooter(`Tu a retiré le bot de ton serveur ! :(`)
    .setColor("RANDOM")
     return client.channels.get("606530682348371968").send(embed)
}

