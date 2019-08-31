const ytdl = require("ytdl-core");
const Discord = require("discord.js")
module.exports.run = async (client, message, ops, args) => {
    let fetched = ops.active.get(message.guild.id)

    if (!fetched) return message.channel.send("**Il n'y aucune musique en cour ! :x:**")

    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("**Vous n'êtes pas connecté à un vocal ! :x:**")

    if (!fetched.dispatcher.paused) return message.channel.send("**Musique pas en pause ! :x:**")

    fetched.dispatcher.resume()

    message.channel.send(`**La musique ${fetched.queue[0].songTitle} reprend ! :arrow_forward:**`)
};



module.exports.help = {
    name: 'resume'
};