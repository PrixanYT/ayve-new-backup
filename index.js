const Discord = require("discord.js");
const client = new Discord.Client({ disableEveryone: true });
const Enmap = require("enmap")
const fs = require("fs");
const exp = require("./exp.json")
const config = require("./config.json")

client.config = config

fs.readdir("./events", (err, files) => {
    if (err) return console.log(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        const eventName = file.split(".")[0];
        console.log(`Lancement de l'event ${eventName}`)
        client.on(eventName, event.bind(null, client));
    });
});

client.commands = new Enmap();

fs.readdir("./commandes", (err, files) => {
    if (err) console.log(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        const props = require(`./commandes/${file}`);
        const commandName = file.split(".")[0];
        console.log(`Lancement de la commande ${commandName}`)
        client.commands.set(commandName, props);
    });
});

client.login("token");
