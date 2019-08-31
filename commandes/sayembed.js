const Discord = require("discord.js");

module.exports.run = (client, message, ops, args) => {
    var argresult = message.content.split(' ').slice(1).join(' ');
    message.delete()
    client.user.send()
    var say = new Discord.RichEmbed()
    .setColor("#cb4b16")
    .setTitle(`${message.author.username} dit:`)
    .setDescription(`${argresult}`)
    message.channel.sendEmbed(say)
    console.log(`Commande sayembed exécuté par ${message.author.username}`)

      }

    module.exports.help = {
        name: 'sayembed'
};