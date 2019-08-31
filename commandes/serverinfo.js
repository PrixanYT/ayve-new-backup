const Discord = require("discord.js");
const moment = require("moment")
module.exports.run = (client, message, args) => {
      var serverinfo = new Discord.RichEmbed()
      .setDescription("**Informations sur le serveur**")
      .setColor("RANDOM")
      .addField("Nom du serveur", message.guild.name)
      .addField("Serveur crée le", moment.utc(message.guild.createdAt).format("LLL"))
      .addField("Fondateur du serveur", message.guild.owner)
      .addField(`Prefix du serveur`,`.`)
      .addField("Nombre total de membre", message.guild.memberCount)
      .addField("Rôles dans le serveur", message.guild.roles.size)
      .addField("Channel dans le serveur", message.guild.channels.size)
      .addField("ID du serveur", message.guild.id)
      .setFooter(`Commande demandé par ${message.author.username}`, message.author.avatarURL)
  message.channel.sendEmbed(serverinfo)
  console.log(`Commande serverinfo exécuté par ${message.author.username}`)
  }
  
  module.exports.help = {
    name: 'serverinfo'
};
