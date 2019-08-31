const Discord = require("discord.js");

module.exports.run = (client, message, ops, args) => {
    message.delete()
       if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("**Vous n'avez pas la permission d'utiliser cette commande :x:**")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("**Veuillez mentionner un utilisateur :x:**")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("**Vous ne pouvez pas kick cet utilisateur :x:**")
       if (!member.kickable) return message.channel.send("**Je ne peux pas exclure cet utilisateur :x:**")
       let reason = args.slice(2).join(' ')
       member.kick()
       message.channel.send("**" + member.user.username + ' à été kick du serveur :white_check_mark:**')
       console.log('Le membre'+ member.user.username + '  Kick par: ' + message.author.username)
  
    }

    
    module.exports.help = {
        name: 'kick'
    };
