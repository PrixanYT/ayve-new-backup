const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    message.delete()
      var serverinfo = new Discord.RichEmbed()
      .setDescription("**Ceci est une description**")
      .setColor("RANDOM")
      .setTitle("Ceci est un title")
      .addBlankField()
      .setTimestamp()
      .setThumbnail(message.author.avatarURL)
      .setImage(message.author.avatarURL)
      .addField("Ceci est un embed !", `[Clique ici pour allez sur Hardfight !](https://hardfight.fr)`, true)
      .setFooter(`Commande demandé par ${message.author.username}`, message.author.avatarURL)
  message.channel.send(serverinfo)
  console.log(`Commande embed exécuté par ${message.author.username}`)
  }

  module.exports.help = {
    name: 'embed'
};
