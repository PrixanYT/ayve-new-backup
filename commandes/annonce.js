const Discord = require("discord.js");

module.exports.run = (client, message, ops, args) => {
    var argresult = message.content.split(' ').slice(1).join(' ');
    message.delete()
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("**Vous n'avez pas la permission d'utiliser cette commande :x:**")
    if (!args[0]) return message.reply("**Entrez un message !** :x:")
    client.user.send()
    var say = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(`Annonce`)
    .setDescription(`${argresult}`)
    message.channel.sendEmbed(say)
    console.log(`Commande annonce exécuté par ${message.author.username}`)

      }

    module.exports.help = {
        name: 'annonce'
};