const Discord = require("discord.js");
const moment = require("moment")
module.exports.run = (client, message, args) => {
    var info = new Discord.RichEmbed()
    .setTitle("**Information du bot**")             
    .addField("Librairie", "discord.js, fs, ffmpeg-binaries,  opusscript, ytdl-core, enmap, ms, speedtest-net, superagent, moment, mathjs")
    .addField("Version du Bot","2.6")
    .addField("Développeur",`Voltan#0212`)
    .addField("Nombre de commandes","64")
    .addField("Le bot à été crée le", moment.utc(client.user.createdAt).format("LLL"))
    .addField(`Le bot est sur`, `${client.guilds.size} serveur`)
    .addField(`Il y à`,`${client.users.size} membres au total`)
    .addField("Hébergeur", "[Clique ici..](https://discord.gg/KyaQJXt)", true)
    .addField("Serveur support du bot", "[Clique ici..](https://discord.gg/7Saa2X2)", true)
    .addField("Invitation du bot", "[Clique ici..](https://discordapp.com/api/oauth2/authorize?client_id=581548203317657610&permissions=8&scope=bot)", true)
    .setFooter(`Commande demandé par ${message.author.username}`, message.author.avatarURL)
    .setColor("RANDOM") 
message.channel.send(info) 
console.log(`Commande info exécuté par ${message.author.username}`)

}

module.exports.help = {
    name: 'info'
};
