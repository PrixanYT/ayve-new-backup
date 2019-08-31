const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    message.delete()
        if (args[0] === 'help') {
            var embed = new Discord.RichEmbed()
            .setColor('#00ff00')
            .setTitle("Aide pour la commande:")
            .setDescription("Annonce")
            .addField('Les couleurs :', 'vert, bleu, violet , jaune, orange, rouge, gris, blanc, noir,')
            .addField('Le lien :', 'Le lien est optionelle, il sert juste a mettre un icone sur le bord de l annonce',)
            message.author.sendMessage({embed})
        } else {
        if (args[0] === 'vert') {
            var couleur = 0x00ff00
        }
        else if (args[0] === 'bleu') {
            var couleur = 0x0000ff
        }
        else if (args[0] === 'violet') {
            var couleur = 0x800080
        }
        else if (args[0] === 'jaune') {
            var couleur = 0xffff00
        }
        else if (args[0] === 'orange') {
            var couleur = 0xff8000
        }
        else if (args[0] === 'rouge') {
            var couleur = 0xFF0000
        }
        else if (args[0] === 'gris') {
            var couleur = 0xc0c0c0
        }
        else if (args[0] === 'blanc') {
            var couleur = 0xFFFFFF
        }
        else if (args[0] === 'noir') {
            var couleur = 0x000000
        } else {
        message.channel.send(`${args[0]} isn't a color`) }
       
    var embed = new Discord.RichEmbed()
    .setTitle(args[1])
        .addField(args[2], `\u200b`)
        .setThumbnail(args[3])
    .setColor(couleur)
            message.channel.send({ embed });
            message.channel.send('@everyone');
        }
        }
            
    
module.exports.help = {
    name: 'varrigovoltan'
};