const Discord = require("discord.js");

module.exports.run = async (client, message, ops, args) => {
    message.delete()
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("**Vous n'avez pas la permission d'utiliser cette commande :x:**")
    if (!args[0]) return message.channel.send("**Syntaxe: .poll (Question) ! :x:**")
    
    const pollEmbed = new Discord.RichEmbed()
    .setTitle(`Sondage crée par ${message.author.username}`)
    .setColor("RANDOM")
    .setFooter("Appuyez sur les réactions ci-dessous")
    .setDescription(args.join(' '));

    let msg = await message.channel.send(pollEmbed);
    await msg.react('✅')
    await msg.react('❌')
    console.log(`Commande poll exécuté par ${message.author.username}`)
}

module.exports.help = {
    name: 'poll'
};