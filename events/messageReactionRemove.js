module.exports = (client, messageReaction, user) => {
    const message = messageReaction.message;
    const member = message.guild.members.get(user.id)
    const channel = message.guild.channels.find(c => c.name === "rôle-notifications");
    if (member.user.bot) return;

    const annoRole = message.guild.roles.get("598551107001647114")
    const nouvRole = message.guild.roles.get("598551282130878465")
    const sonRole = message.guild.roles.get("598551626348757000")
    const parRole = message.guild.roles.get("598551753935290388")
         
      if (["📄", "🗞", "📊", "🗂"].includes(messageReaction.emoji.name) && message.channel.id === channel.id) {
          switch (messageReaction.emoji.name) {
              case "📄":
                  member.removeRole(annoRole);
                  member.send(`Le rôle **Notification Annonce** à été enlevé avec succès !`)
                  break;
              case "🗞":
                  member.removeRole(nouvRole);
                  member.send(`Le rôle **Notification Nouveauté** à été enlevé avec succès !`)
                  break;
              case "📊":
                  member.removeRole(sonRole);
                  member.send(`Le rôle **Notification Sondage** à été enlevé avec succès !`)
                  break;
              case "🗂":
                   member.removeRole(parRole);
                  member.send(`Le rôle **Notification Partenariat** à été enlevé avec succès !`)
                   break;  
                }
      }

}