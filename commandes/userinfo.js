const Discord = require("discord.js");
const moment = require("moment")

module.exports.run = async (client, message, ops, args) => {
    const membre = message.mentions.members.first() || message.member;
    // if (!membre) { return message.channel.send('Veuillez mentionner un utilisateur !'); }

    message.channel.send({
        embed: {
            color: 0xe43333,
            title: `Statistiques du l'utilisateur **${membre.user.username}**`,
            thumbnail: {
                url: membre.user.displayAvatarURL
            },
            fields: [
                {
                    name: 'ID',
                    value: membre.id 
                },
                {
                    name: 'Crée le',
                    value: moment.utc(membre.user.createdAt).format("LLL")
                },
                {
                    name: 'Jeu',
                    value: membre.user.presence.game ? membre.user.presence.game.name : 'Aucun jeu détecté !'
                },
                {
                    name: 'Rejoint le',
                    value: moment.utc(membre.joinedAt).format('LLL')
                }
            ],
            footer: {
                text: `Informations de l'utilisateur ${membre.user.username}`
            }
        }
    });
};

module.exports.help = {
    name: 'userinfo'
};
