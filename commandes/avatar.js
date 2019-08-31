const Discord = require("discord.js");

module.exports.run = (client, message, ops, args) => {
    message.delete()
    const user = message.mentions.users.first()
    message.delete()

    var ErrorMentionUser = new Discord.RichEmbed()
    .setColor("#cb4b16")
    .setDescription('Syntaxe : .avatar @user :x:')


    if(!user) return message.channel.send(ErrorMentionUser)

        var EmbedAvatarResult = new Discord.RichEmbed()
        .setColor("#cb4b16")
        .setDescription(`Avatar de ${user.tag}`)
        .setImage(user.avatarURL)
        .setFooter("Prefix : . | Dev: Prixan#0001", message.author.avatarURL)
        message.channel.send(EmbedAvatarResult)
        console.log(`Commande avatar exécuté par ${message.author.username}`)

    }


module.exports.help = {
    name: 'avatar'
};
