const Discord = require("discord.js")

module.exports = async (client, oldMember, newMember) => {
    let logschannel = newMember.guild.channels.find("name", "logs")
    if(oldMember.displayName == newMember.displayName){
        return logschannel.send(`**Le membre ${newMember} à été mise a jour !**`)
    }
    logschannel.send(`**Le membre ${oldMember.displayName} à été renomé en ${newMember} !**`)
}
