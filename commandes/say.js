const Discord = require("discord.js");

module.exports.run = (client, message, ops, args) => {
    var argresult = message.content.split(' ').slice(1).join(' ');
    message.delete()
    client.user.send()
    message.channel.send((`${message.author.username} dit: ${argresult}`))
    console.log(`Commande say exécuté par ${message.author.username}`)

      }

    module.exports.help = {
        name: 'say'
};