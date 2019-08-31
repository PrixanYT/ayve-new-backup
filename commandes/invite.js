const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

    message.delete()
    message.reply('**Voici le lien pour invité le bot: https://discordapp.com/api/oauth2/authorize?client_id=581548203317657610&permissions=8&scope=bot**')
console.log(`Commande invite exécuté par ${message.author.username}`)

}

module.exports.help = {
    name: 'invite'
};
