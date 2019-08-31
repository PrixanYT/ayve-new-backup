const Discord = require("discord.js");

module.exports.run = async (client, message, ops, args) => {
    const user = message.mentions.users.first()

    var ErrorMentionUser = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription('Syntaxe : .love @user :x:')

    let replies = ["-5%, Vous êtes les pires enemie du monde !","-4%", "-3%","-2%","-1%","1%", "2%", "3%", "4%","5%", "6%", "7%", "10%", "11%", "17%", "18%", "19%", "20%", "21%", "27%", "28%", "35%", "38%", "39%", "42%", "41%", "45%", "46%", "47%", "48%", "49%", "50%", "53%", "58%", "56%", "57%", "51%", "63%", "65%", "64%", "67%", "69%", "73%", "71%", "75%", "76%", "79%", "82%", "84%", "86%", "87%", "88%", "89%", "94%", "91%", "97%", "99%", "100%"]
    let res = Math.floor((Math.random() * replies.length));

    let askEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author.username} va tu trouvé un(e) partenaire ?`)
    .addField(`Pourcentage d'amour avec`, `${user.tag}`)
    .addField("Tôt de pourcentage", replies[res]);
    message.channel.send(askEmbed)
    console.log(`Commande love exécuté par ${message.author.username}`)
}          


module.exports.help = {
    name: 'love'
};
