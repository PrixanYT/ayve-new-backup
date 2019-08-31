const Discord = require("discord.js");

module.exports.run = (client, message, ops, args) => {
    if(args[0] == "play") {
    var play = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Détail de la commande **play**")
    .setDescription("Les éléments entre **<>** sont facultatifs")
    .addField("Aliases", "play")
    .addField("Description", "Permet de joué de la musique")
    .addField("Comment l'utilisé ?", "Pour joué de la musique, veuillez vous connectez à un Vocal, ensuite allez sur YouTube et prenez le lien de votre musique puis faite **.play <votre lien>** ou faite **.play <nom de la musique>** !")
    .setFooter(`Demandé par ${message.author.username}`)
    message.channel.send(play)
    }
    if(args[0] == "stop") {
        var stop = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("Détail de la commande **stop**")
        .setDescription("Les éléments entre **<>** sont facultatifs")
        .addField("Aliases", "stop")
        .addField("Description", "Permet d'arreté la musique en cour")
        .addField("Comment l'utilisé ?", "Pour arreté la musique, faite **.stop**!")
        .setFooter(`Demandé par ${message.author.username}`)
        message.channel.send(stop)
        }
        if(args[0] == "math") {
            var math = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle("Détail de la commande **math**")
            .setDescription("Les éléments entre **<>** sont facultatifs")
            .addField("Aliases", "math")
            .addField("Description", "Permet de faire des maths")
            .addField("Comment l'utilisé ?", "Pour faire des calculs faite  **.math <calcul>**, **/** = Divison, * = Multiplication")
            .setFooter(`Demandé par ${message.author.username}`)
            message.channel.send(math)
            }
            if(args[0] == "ban") {
                var ban = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setTitle("Détail de la commande **ban**")
                .setDescription("Les éléments entre **<>** sont facultatifs")
                .addField("Aliases", "ban")
                .addField("Description", "Permet de ban quelqu'un")
                .addField("Comment l'utilisé ?", "Faite **.ban <@pseudo>** pour ban quelqu'un !")
                .setFooter(`Demandé par ${message.author.username}`)
                message.channel.send(ban)
                }
                if(args[0] == "kick") {
                    var ban = new Discord.RichEmbed()
                    .setColor("RANDOM")
                    .setTitle("Détail de la commande **kick**")
                    .setDescription("Les éléments entre **<>** sont facultatifs")
                    .addField("Aliases", "kick")
                    .addField("Description", "Permet de kick quelqu'un")
                    .addField("Comment l'utilisé ?", "Faite **.kick <@pseudo>** pour kick quelqu'un !")
                    .setFooter(`Demandé par ${message.author.username}`)
                    message.channel.send(kick)
                    }
                    if(args[0] == "mute") {
                        var mute = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setTitle("Détail de la commande **mute**")
                        .setDescription("Les éléments entre **<>** sont facultatifs")
                        .addField("Aliases", "mute")
                        .addField("Description", "Permet de mute quelqu'un")
                        .addField("Comment l'utilisé ?", "Faite **.mute <@pseudo>** pour muté quelqu'un !")
                        .setFooter(`Demandé par ${message.author.username}`)
                        message.channel.send(mute)
                        }
                        if(args[0] == "tempmute") {
                            var tempmute = new Discord.RichEmbed()
                            .setColor("RANDOM")
                            .setTitle("Détail de la commande **tempmute**")
                            .setDescription("Les éléments entre **<>** sont facultatifs")
                            .addField("Aliases", "tempmute")
                            .addField("Description", "Permet de mute quelqu'un pendant un certain temp")
                            .addField("Comment l'utilisé ?", "Faite **.tempmute <@pseudo> <temp/1s/1h/1d> ** pour mute quelqu'un pendant un certain temp !")
                            .setFooter(`Demandé par ${message.author.username}`)
                            message.channel.send(tempmute)
                            }
                            if(args[0] == "unmute") {
                                var unmute = new Discord.RichEmbed()
                                .setColor("RANDOM")
                                .setTitle("Détail de la commande **unmute**")
                                .setDescription("Les éléments entre **<>** sont facultatifs")
                                .addField("Aliases", "unmute")
                                .addField("Description", "Permet de unmute quelqu'un")
                                .addField("Comment l'utilisé ?", "Faite **.unmute <@pseudo> <raison>** pour unmute quelqu'un !")
                                .setFooter(`Demandé par ${message.author.username}`)
                                message.channel.send(unmute)
                                }
                                if(args[0] == "clear") {
                                    var clear = new Discord.RichEmbed()
                                    .setColor("RANDOM")
                                    .setTitle("Détail de la commande **clear**")
                                    .setDescription("Les éléments entre **<>** sont facultatifs")
                                    .addField("Aliases", "clear")
                                    .addField("Description", "Permet de clear le chat")
                                    .addField("Comment l'utilisé ?", "Faite **.clear <1/100>** pour clear le chat !")
                                    .setFooter(`Demandé par ${message.author.username}`)
                                    message.channel.send(clear)
                                    }
                                    if(args[0] == "poll") {
                                        var poll = new Discord.RichEmbed()
                                        .setColor("RANDOM")
                                        .setTitle("Détail de la commande **poll**")
                                        .setDescription("Les éléments entre **<>** sont facultatifs")
                                        .addField("Aliases", "poll")
                                        .addField("Description", "Permet de faire des sondages")
                                        .addField("Comment l'utilisé ?", "Faite **.poll <sondage>** pour faire un sondage !")
                                        .setFooter(`Demandé par ${message.author.username}`)
                                        message.channel.send(poll)
                                        }
                                        if(args[0] == "addrole") {
                                            var addrole = new Discord.RichEmbed()
                                            .setColor("RANDOM")
                                            .setTitle("Détail de la commande **addrole**")
                                            .setDescription("Les éléments entre **<>** sont facultatifs")
                                            .addField("Aliases", "adrrole")
                                            .addField("Description", "Permet d'ajouté un rôle")
                                            .addField("Comment l'utilisé ?", "Faite **.addrole <@pseudo> <nomDuRole>** pour ajouté un rôle à quelqu'un !")
                                            .setFooter(`Demandé par ${message.author.username}`)
                                            message.channel.send(addrole)
                                            }
                                            if(args[0] == "removerole") {
                                                var removerole = new Discord.RichEmbed()
                                                .setColor("RANDOM")
                                                .setTitle("Détail de la commande **removerole**")
                                                .setDescription("Les éléments entre **<>** sont facultatifs")
                                                .addField("Aliases", "removerole")
                                                .addField("Description", "Permet de retiré un rôle")
                                                .addField("Comment l'utilisé ?", "Faite **.removerole <@pseudo> <nomDuRole>** pour retiré un rôle à quelqu'un !")
                                                .setFooter(`Demandé par ${message.author.username}`)
                                                message.channel.send(removerole)
                                                }
                                                if(args[0] == "crole") {
                                                    var crole = new Discord.RichEmbed()
                                                    .setColor("RANDOM")
                                                    .setTitle("Détail de la commande **crole**")
                                                    .setDescription("Les éléments entre **<>** sont facultatifs")
                                                    .addField("Aliases", "crole")
                                                    .addField("Description", "Permet de crée des rôles")
                                                    .addField("Comment l'utilisé ?", "Faite **.crole <nomDuRole>** pour crée un rôle !")
                                                    .setFooter(`Demandé par ${message.author.username}`)
                                                    message.channel.send(crole)
                                                    }
                                                    if(args[0] == "annonce") {
                                                        var annonce = new Discord.RichEmbed()
                                                        .setColor("RANDOM")
                                                        .setTitle("Détail de la commande **annonce**")
                                                        .setDescription("Les éléments entre **<>** sont facultatifs")
                                                        .addField("Aliases", "annonce")
                                                        .addField("Description", "Permet de faire des annonces")
                                                        .addField("Comment l'utilisé ?", "Faite **.annonce <texte>** pour faire une annonce !")
                                                        .setFooter(`Demandé par ${message.author.username}`)
                                                        message.channel.send(annonce)
                                                        }
                                                        if(args[0] == "afk") {
                                                            var afk = new Discord.RichEmbed()
                                                            .setColor("RANDOM")
                                                            .setTitle("Détail de la commande **afk**")
                                                            .setDescription("Les éléments entre **<>** sont facultatifs")
                                                            .addField("Aliases", "afk")
                                                            .addField("Description", "Permet de se mettre en AFK")
                                                            .addField("Comment l'utilisé ?", "Faite **.afk <texte>** pour se mettre en AFK !")
                                                            .setFooter(`Demandé par ${message.author.username}`)
                                                            message.channel.send(afk)
                                                            }
                                                            if(args[0] == "unafk") {
                                                                var unafk = new Discord.RichEmbed()
                                                                .setColor("RANDOM")
                                                                .setTitle("Détail de la commande **unafk**")
                                                                .setDescription("Les éléments entre **<>** sont facultatifs")
                                                                .addField("Aliases", "unafk")
                                                                .addField("Description", "Permet de se retiré l'AFK")
                                                                .addField("Comment l'utilisé ?", "Faite **.unafk** pour retiré son AFK !")
                                                                .setFooter(`Demandé par ${message.author.username}`)
                                                                message.channel.send(unafk)
                                                                }
                                                                if(args[0] == "dog") {
                                                                    var dog = new Discord.RichEmbed()
                                                                    .setColor("RANDOM")
                                                                    .setTitle("Détail de la commande **dog**")
                                                                    .setDescription("Les éléments entre **<>** sont facultatifs")
                                                                    .addField("Aliases", "dog")
                                                                    .addField("Description", "Permet d'envoyé des images de chien")
                                                                    .addField("Comment l'utilisé ?", "Faite **.dog** pour voir une image de chien !")
                                                                    .setFooter(`Demandé par ${message.author.username}`)
                                                                    message.channel.send(dog)
                                                                    }
                                                                    if(args[0] == "cat") {
                                                                        var cat = new Discord.RichEmbed()
                                                                        .setColor("RANDOM")
                                                                        .setTitle("Détail de la commande **cat**")
                                                                        .setDescription("Les éléments entre **<>** sont facultatifs")
                                                                        .addField("Aliases", "cat")
                                                                        .addField("Description", "Permet d'envoyé des images de chat")
                                                                        .addField("Comment l'utilisé ?", "Faite **.cat** pour voir une image de chat !")
                                                                        .setFooter(`Demandé par ${message.author.username}`)
                                                                        message.channel.send(cat)
                                                                        }
    if(!args[0]) {
             var help = new Discord.RichEmbed()
              .setTitle("**Page d'aide**")
              .setDescription(
`Les élements **<>** sont facultatifs
Tu comprend pas une commande ? Fait **.help <Nom de la commande>** (Il n'y pas de help pour toute les commandes)`)
              .setColor("RANDOM")
	          .addField("🔓 Modération","``ban, kick, mute, tempmute, unmute, clear, poll, memberc, addrole, removerole, crole, annonce, afk, unafk``")
              .addField("📱 Utile","``info, serverinfo, userinfo, report, ping, sugg, invite``")
              .addField("🎲 Fun","``avatar, octogone, level, 8ball, say, sayembed, flip, love, roulette, math``")
              .addField("🐒 Animale","``dog, cat``")
              .addField("📸 Image", "``kitsune, hug, pat, waifu, cry, kiss, slap, foxg, emoji``")
              .addField("🔞 NSFW", "``nekolewd, neko, nude, ero, boobs, pussy, hentaigif, holoero, nsfwlogo, anal, suckm, nudem, yuri, nsfwfoxg``")
              .addField("🎵 Musique","``play, stop, resume, pause, volume, queue, skip, search``")
              .setFooter(`Demandé par ${message.author.username}`, message.author.avatarURL)
          message.channel.send(help)
          console.log(`Commande help exécuté par ${message.author.username}`)
    }
}



module.exports.help = {
    name: 'help'
};

