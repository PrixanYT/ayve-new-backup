const Discord = require("discord.js");

module.exports.run = (client, message, ops, args) => {
    message.delete()
    if(!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("**Vous n'avez pas la permission !** :x:")
    if (!args[0])
    return message.reply("**Syntaxe: .clear <nombre de message> (100 MESSAGE MAX) :x:**")

    message.channel.bulkDelete(args[0]).then(() => {
      message.channel.send(`**${args[0]} message supprimé !** :white_check_mark:`).then(message => message.delete(5000));
    })
    console.log(`Commande clear exécuté par ${message.author.username}`)
}
      
module.exports.help = {
        name: 'clear'
};
