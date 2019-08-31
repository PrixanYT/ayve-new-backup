const Discord = require("discord.js")
exports.run = async (client, message, ops, args) => {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("**Vous n'avez pas la permission d'utilisé cette commande ! :x:**")
    if(!args.length) return message.reply("**Veuillez saisir un nom ! :x:**")
    message.guild.createRole({
        name: `${args}`,
        color: "RANDOM"
    })
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor("Rôle crée avec succès")
    .addField("Nom du rôle", `${args}`)
    .addField(`Crée par`, `${message.author.username}`)
    message.channel.send(embed)

};
  
  exports.help = {
    name: "crole"
  };