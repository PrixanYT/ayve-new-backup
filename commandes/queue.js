const ytdl = require("ytdl-core");
const Discord = require("discord.js")
module.exports.run = async (client, message, ops, args) => {
    let fetched = ops.active.get(message.guild.id)

    if (!fetched) return message.channel.send("**Il n'y aucune musique en cour ! :x:**")

    let queue = fetched.queue;
    let nowPlaying = queue[0];

    let resp = `:notes:** Musique en cour ${nowPlaying.songTitle} | Demandé par ${nowPlaying.requester} | **
 `

    for (var i = 1; i < queue.length; i++) {
        resp += `**Queue: 
${i}, ${queue[i].songTitle} | Demandé par ${queue[i].requester}**.
`


    }

    message.channel.send(resp)
};



module.exports.help = {
    name: 'queue'
};