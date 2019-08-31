const Discord = require("discord.js");

module.exports.run = async (client, message, ops, args) => {
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("**Vous n'avez pas la permission d'utiliser cette commande :x:**")
    message.guild.createChannel('Status', {
        type: 'voice',
        permissionsOverwrites: [{
          id: message.guild.id,
          allow: []
        }]
      }).then(e => {
        setInterval(() => {
          var online = message.guild.members.filter(o => o.presence.status === 'online').size;
          var idle = message.guild.members.filter(i => i.presence.status === 'idle').size;
          var dnd = message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size;
          var streaming = message.guild.members.filter(s => s.presence.status === 'streaming').size;
          var offline = message.guild.members.filter(s => s.presence.status === 'offline').size;
          var memberOnline = Math.floor(online + idle + dnd + streaming);
          var memberTotal = Math.floor(online + idle + dnd + streaming + offline)
          e.setName(`En ligne ${memberOnline}`);
        }, 5000);
      }).catch(console.error);

      message.guild.createChannel('Status', {
        type: 'voice',
        permissionsOverwrites: [{
          id: message.guild.id,
          allow: []
        }]
      }).then(e => {
        setInterval(() => {
          var online = message.guild.members.filter(o => o.presence.status === 'online').size;
          var idle = message.guild.members.filter(i => i.presence.status === 'idle').size;
          var dnd = message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size;
          var streaming = message.guild.members.filter(s => s.presence.status === 'streaming').size;
          var offline = message.guild.members.filter(s => s.presence.status === 'offline').size;
          var memberOnline = Math.floor(online + idle + dnd + streaming);
          var memberTotal = Math.floor(online + idle + dnd + streaming + offline)
          e.setName(`Déconnecté ${offline}`);
        }, 5000);
      }).catch(console.error);

      message.guild.createChannel('Status', {
        type: 'voice',
        permissionsOverwrites: [{
          id: message.guild.id,
          allow: []
        }]
      }).then(e => {
        setInterval(() => {
          var online = message.guild.members.filter(o => o.presence.status === 'online').size;
          var idle = message.guild.members.filter(i => i.presence.status === 'idle').size;
          var dnd = message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size;
          var streaming = message.guild.members.filter(s => s.presence.status === 'streaming').size;
          var offline = message.guild.members.filter(s => s.presence.status === 'offline').size;
          var memberOnline = Math.floor(online + idle + dnd + streaming);
          var memberTotal = Math.floor(online + idle + dnd + streaming + offline)
          e.setName(`Member total ${memberTotal}`);
        }, 5000);
      }).catch(console.error);
      message.channel.send("**Salon crée avec succès ! :white_check_mark:**")
    }

module.exports.help = {
  name: "memberc"
}