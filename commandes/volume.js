const ytdl = require("ytdl-core");
const Discord = require("discord.js")
module.exports.run = async (client, message, ops, args) => {
    let fetched = ops.active.get(message.guild.id)

    if (!fetched) return message.channel.send("**Il n'y aucune musique en cour ! :x:**")

    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("**Vous n'êtes pas connecté à un vocal ! **:x:")

   if (isNaN(args[0]) || args[0] > 200 || args[0] < 0) return message.channel.send("**Choisisez le volume de la musique de 1 à 200 ! :x:**")

   fetched.dispatcher.setVolume(args[0]/100)

   message.channel.send(`**:loud_sound: Volume mise à jour ! Volume changé à ${args[0]} par ${message.author.tag}**`)
};



module.exports.help = {
    name: 'volume'
};