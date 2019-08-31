const Discord = require("discord.js");
const fs = require("fs")

module.exports.run = async (client, message, args) => {
   var rr = [

                `**Quelle chance ! On ta pas tiré dessus ! :smiley: **`,
                `**Quelle chance ! On ta pas tiré dessus ! :smiley: **`,
                `**Quelle chance ! On ta pas tiré dessus ! :smiley: **`,
                `**Quelle chance ! On ta pas tiré dessus ! :smiley: **`,
                `**Quelle chance ! On ta pas tiré dessus ! :smiley: **`,
                `**Quelle chance ! On ta pas tiré dessus ! :smiley: **`,
                `**Quelle chance ! On ta pas tiré dessus ! :smiley: **`,
                `**Oh non ! On ta touché ! ${message.author.username} est K.O ! :confused:**`,
                `**Oh non ! On ta touché ! ${message.author.username} est K.O ! :confused:**`,
                `**Oh non ! On ta touché ! ${message.author.username} est K.O ! :confused:**`,
                `**Oh non ! On ta touché ! ${message.author.username} est K.O ! :confused:**`
   ]
   let rrusse = (rr[Math.floor(Math.random() * rr.length)])
   message.channel.send(rrusse)
}

module.exports.help = {
  name: "roulette"
}