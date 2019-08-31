const Discord = require("discord.js");

module.exports.run = async (client, message, ops, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("**Tu n'a pas la permission d'uilitise cette commande ! :x:**");
   let AFKrole = message.guild.roles.find(r => r.name === "afk")
   if(!AFKrole) return message.channel.send("**Veuillez crée un rôle ``afk`` ! ** :x:")
   message.member.removeRole(AFKrole.id).catch(console.error)
    message.channel.send(`**${message.author.username} vous êtes n'êtes plus AFK ! :white_check_mark:**`)
}          


module.exports.help = {
    name: 'unafk'
};