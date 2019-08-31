const search = require("yt-search");
module.exports.run = async (client, message, ops, args) => {

    search(args.join(' '), function(err, res) {
        if (err) return message.channel.send("**Je nets trouvé aucune musique ! :x:**")

        let videos = res.videos.slice(0, 10)

        let resp = ''
        for (var i in videos) {
            resp += `**[${parseInt(i)+1}]** ${videos[i].title}
`
        }

        resp += `**
Choisisez un nombre entre 1 et ${videos.length}**`

        message.channel.send(resp)

        const filter = m => !isNaN(m.content) && m.content < videos.length+1 && m.content > 0

        const collector = message.channel.createMessageCollector(filter)
        collector.videos = videos

        collector.once("collect", function(m) {
            let commandFile = require("./play.js")
            commandFile.run(client, message, ops, [this.videos[parseInt(m.content)-1].url])
        })

    })
}




module.exports.help = {
    name: 'search'
};