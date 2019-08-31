const Discord = require("discord.js");
const exp = require('../exp.json')
module.exports.run = async (client, message, ops, args) => {
    const membre = message.mentions.members.first() || message.member;
    if(!exp[membre.user.id]) {
        exp[membre.user.id] = {
        exp: 0,
        niveau: 1
    
        };
      }
    
      let cExp = exp[membre.user.id].exp;
      let cNiv = exp[membre.user.id].niveau;
      let nextLevelUp = cNiv * 100;
      let expNeededForLevelUp = nextLevelUp - cExp;

      let nivEmbed = new Discord.RichEmbed()
        .setAuthor(membre.user.tag, membre.user.avatarURL)
        .setColor("RANDOM")
        .addField("Niveau", cNiv, true)
        .addField("Exp", cExp, true)
        .setFooter(`${expNeededForLevelUp} d'exp requis pour le prochain niveau`)
    
    message.channel.send(nivEmbed);
    console.log(`Commande level exécuté par ${message.author.username}`)
}

module.exports.help = {
    name: 'level'
};