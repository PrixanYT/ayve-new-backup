const Discord = require("discord.js");
const fs = require("fs")
module.exports.run = async (client, message, ops, args) => {
    if (!args[0] || args[0 == "help"])
    return message.channel.send("Veuillez indiqué un prefix !")

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"))
    prefixes[message.guild.id] = {
        prefixes: args[0]
    }

    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), err => {
        if (err) console.log(err)
    })
}

module.exports.help = {
  name: "prefix"
}