const Discord = require("discord.js");

module.exports.run = async (client, message, ops, args) => {
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("**Vous n'avez pas la permission d'utiliser cette commande :x:**")

    let bannedMember = await client.fetchUser(args[0]) 
    if(!bannedMember) return message.channel.send("**Veuillez indiqué l'id du membre à unban !** :x:")

    let reason = args.slice(1).join(" ")
    if(!reason) reason = "**Veuillez indiqué une raison ! :x:**"

        message.guild.unban(bannedMember, {reason: reason})
        message.channel.send(`**${bannedMember.tag} à été unban pour raison ${reason} ! :white_check_mark:**`)

}
module.exports.help = {
  name: "unbantestrigo"
}