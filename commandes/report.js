const Discord = require("discord.js");

module.exports.run = async (client, message, ops, args) => {
    let reportedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get( [0]));
    if (!reportedUser) {
        return message.channel.send("**Le membre n'exsiste pas !** :x:")
    }

    if (!args[1]) return message.reply("**Entrez une raison du report !** :x:")

    let reportChannel = message.guild.channels.find(`name`, "report")
    if (!reportChannel) {
        return message.channel.send("**Channel 'report' introuvable. Veuillez en crée un !** :x:")
    }
    let reportedReason = args.join(" ").slice(1000)

    var reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("RANDOM")
    .addField("Utilisateur report", `${reportedUser} (ID : ${reportedUser.id})`)
    .addField("Utilisateur ayant report", `${message.author} (ID: ${message.author.id})`)
    .addField("Channel", message.channel)
    .addField("Raison", reportedReason)
    reportChannel.send(reportEmbed)
    message.delete()
}

module.exports.help = {
  name: "report"
}