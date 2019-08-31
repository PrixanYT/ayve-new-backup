const Discord = require("discord.js");

module.exports.run = (client, message, ops, args) => {
      if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("**Vous n'avez pas la permission d'utiliser cette commande :x:**")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("**Veuillez mentionner un utilisateur :x:**")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas ban cet utilisateur :x:")
       if (!member.kickable) return message.channel.send("**Je ne peux pas ban cet utilisateur :x:**")
       member.ban()
       let reason = args.slice(2).join(' ')
       if (!reason) return message.channel.send('**Vous devez inscrire une raison ! :x:**')
       message.channel.send("**"+member.user.username + 'a été ban :white_check_mark:**')
       console.log(member + member.user.username + ' a été banni par : ' + message.author.username)
    }

    module.exports.help = {
        name: 'ban'
    };
