const ytdl = require("ytdl-core");
const Discord = require("discord.js")
module.exports.run = async (client, message, ops, args) => {
    let fetched = ops.active.get(message.guild.id)

    if (!fetched) return message.channel.send("**Il n'y aucune musique en cour ! :x:**")

    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("**Vous n'êtes pas connecté à un vocal ! :x:**")

    let userCount = message.member.voiceChannel.members.size

    let required = Math.ceil(userCount/2);

    if (!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = []
    if (fetched.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(`**Vous ne pouvez pas skip ! ${fetched.queue[0].voteSkips.length}/${required} requit** :x:`)

    fetched.queue[0].voteSkips.push(message.member.id)

    ops.active.set(message.guild.id, fetched)

    if (fetched.queue[0].voteSkips.length >= required) {
        message.channel.send("**Musique skip ! :track_next:**")
        return fetched.dispatcher.emit("end")
    }

    message.channel.send(`**Vous ne pouvez pas skip ! ${fetched.queue[0].voteSkips.length}/${required} requit :x:**`)
};



module.exports.help = {
    name: 'skip'
};