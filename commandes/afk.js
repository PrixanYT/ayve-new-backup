const Discord = require("discord.js");

module.exports.run = async (client, message, ops, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("**Tu n'a pas la permission d'uilitise cette commande ! :x:**");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
   if (!args[0]) return message.reply("**Entrez votre raison d'afk !** :x:")
   let afkMsg = args.slice(0).join(" ");
   let AFKrole = message.guild.roles.find(r => r.name === "afk")
   if(!AFKrole) return message.channel.send("**Veuillez crée un rôle ``afk`` ! ** :x:")
   message.member.addRole(AFKrole.id).catch(console.error)
    message.channel.send(`**${message.author.username}` + " vous êtes à présent AFK: ``"  + afkMsg + "`` !** :white_check_mark:")
}          


module.exports.help = {
    name: 'afk'
};
