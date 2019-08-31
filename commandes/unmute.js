const Discord = require("discord.js");

module.exports.run = (client, message, ops, args) => {
message.delete()
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("**Vous n'avez pas la permission d'utiliser cette commande :x:**")
  let member = message.mentions.members.first()
  if (!member) return message.channel.send("**Membre introuvable :x:**")
  if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("**Vous ne pouvez pas unmute ce membre**")
  if (member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send("**Je ne peux pas unmute ce membre**")
  let reason = args.slice(2).join(' ')
  if (!reason) return message.channel.send("**Veuillez inscire une raison :x:**")
  let muterole = message.guild.roles.find(role => role.name === 'Muted')
  if (muterole) {
      member.removeRole(muterole)
      message.channel.send("**" + member + ' a été unmute pour ' + reason +  ':white_check_mark:**')
      console.log(`Commande unmute exécuté par ${message.author.username}`)
  
      }
    }

    module.exports.help = {
        name: 'unmute'
    };
