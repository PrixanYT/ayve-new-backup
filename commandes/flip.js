const Discord = require("discord.js");
module.exports.run = (client, message, ops, args) => {
    if(args[0] == "pile") {
        let replies = ["Face ! Tu a perdu", "Pile ! Tu a gagné"]
    let res = Math.floor((Math.random() * replies.length));

    let askEmbedface = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField(`${message.author.username} Dit`, "Pile")
    .addField("La réponsse était", replies[res]);
    message.channel.send(askEmbedface)
        }

        if(args[0] == "face") {
            let replies = ["Pile ! Tu à perdu", "Face ! Tu à gagné"]
    let res = Math.floor((Math.random() * replies.length));

    let askEmbedpile = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField(`${message.author.username} Dit`, "Face")
    .addField("La réponsse était", replies[res]);
    message.channel.send(askEmbedpile)
        }
        if(!args[0]) {
        message.channel.send("**Vous voulez faire pile ou face ? Pour joué faite .flip pile ou .flip face ! :x:**")
        }
}

module.exports.help = {
    name: 'info'
};
