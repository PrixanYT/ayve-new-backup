const ytdl = require("ytdl-core");

module.exports.run = async (client, message, ops, args) => {
 if (!message.member.voiceChannel) return message.channel.send("**Connectez vous à un salon vocal !** :x:")

 if (!args[0]) return message.channel.send("**Veuillez indiqué un lien valide ! :x:**")
 let validate = await ytdl.validateURL(args[0])

 if (!validate) {
     let commandFile = require("./search.js")
     commandFile.run(client, message, ops, args)
 }
 let info = await ytdl.getInfo(args[0])

 let data = ops.active.get(message.guild.id) || {}

 if (!data.connection) data.connection = await message.member.voiceChannel.join()
 if (!data.queue) data.queue = []
 data.guildID = message.guild.id
 data.queue.push({
     songTitle: info.title,
     requester: message.author.tag,
     url: args[0],
     announceChannel: message.channel.id
 })

 if (!data.dispatcher) playStream(client, ops, data)
 else {

    message.channel.send(`**${info.title} à été ajouté à la liste | Demandé par ${message.author.username} :white_check_mark:**`)
 }

 ops.active.set(message.guild.id, data)

 async function playStream(client, ops, data) {

    client.channels.get(data.queue[0].announceChannel).send(`**:notes: La musique ${data.queue[0].songTitle} commence !**`)

    data.dispatcher = await data.connection.playStream(ytdl(data.queue[0].url, { filter: 'audioonly' }))
    data.dispatcher.guildID = data.guildID

    data.dispatcher.once('end', function() {
        end(client, ops, data)
    })
 }


function end(client, ops, dispatcher) {

    let fetched = ops.active.get(dispatcher.guildID)
    fetched.queue.shift()

    if (fetched.queue.length > 0) {
        ops.active.set(dispatcher.guildID, fetched)
        playStream(client, ops, fetched)
    } else {
        ops.active.delete(dispatcher.guildID)
        let vc = client.guilds.get(dispatcher.guildID).me.voiceChannel;
        if (vc) vc.leave()
    }
}
};



module.exports.help = {
    name: 'play',
    aliases: ["p", "play"],
    usage: ".usage",
    noalias: "No Aliases"
};