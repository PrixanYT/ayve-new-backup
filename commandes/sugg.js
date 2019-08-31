const Discord = require("discord.js");

module.exports.run = async (client, message, ops, args) => {
    message.delete()
    if (!args[0]) return message.channel.send("**Syntaxe: .sugg (Suggestion) ! :x:**")
    
    const pollEmbed = new Discord.RichEmbed()
    .setTitle(`Suggestions crée par ${message.author.username}`)
    .setColor("RANDOM")
    .setFooter("Appuyez sur les réactions ci-dessous")
    .setDescription(args.join(' '));

    let msg = await message.channel.send(pollEmbed);
    await msg.react('✅')
    await msg.react('❌')
    console.log(`Commande sugg exécuté par ${message.author.username}`)
}

module.exports.help = {
    name: 'sugg'
};
