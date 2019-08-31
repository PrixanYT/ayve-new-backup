const Discord = require("discord.js");

module.exports.run = (client, message, ops, args) => {
    message.delete()
	
	if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("**Vous n'avez pas la permission d'utiliser cette commande ! :x:**")

        let member = message.mentions.members.first()

        if (!member) return message.channel.send("**Membre introuvable ! :x:**")

        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("**Vous ne pouvez pas mute ce membre !** :x:")

        if (member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send("**Je ne peux pas mute ce membre ! :x:**")

        let muterole = message.guild.roles.find(role => role.name === 'Muted')

        if (muterole) {

            member.addRole(muterole)

            message.channel.send(member + '** a ete mute !** :white_check_mark:')

        }

        else {

            message.guild.createRole({name: 'Muted', permissions: 0}).then((role) => {

                message.guild.channels.filter(channel => channel.type === 'text').forEach(channel => {

                    channel.overwritePermissions(role, {

                        SEND_MESSAGES: false

                    })

                })

                member.addRole(role)

            })

        }

}

 module.exports.help = {
        name: 'mute'
    };
