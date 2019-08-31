const Discord = require("discord.js");
const math = require("mathjs")

module.exports.run = async (client, message, ops, args) => {
    if (!args[0]) return message.reply("**Entrez des chiffres !** :x:")
    let calcul;

    try {
        calcul = math.eval(args.join(" "))
    } catch (e) {
        return message.channel.send("**Désolé, entrez des chiffres valides !** :x:")
    }

    const mathEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("**Calculatrice**")
    .addField("Calcul", args.join(" "))
    .addField("Résultat", calcul)

    message.channel.send(mathEmbed)
}          


module.exports.help = {
    name: 'math'
};