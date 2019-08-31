const fs = require('fs');
const Discord = require("discord.js")
const exp = require("./../exp.json");
let cooldown = new Set();
let cdseconds = 3;
const active = new Map()
const ownerID = "560392655939436555"
const config = require("./../config.json")
module.exports = (client, message) => {
  
    if (message.author.bot) return;
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"))
    if (!prefixes[message.guild.id]) {
      prefixes[message.guild.id] = {
        prefixes: config.prefix
      }
    }
    let prefix = prefixes[message.guild.id].prefixes
    if (message.content.indexOf(client.config.prefix) !== 0) return

    const args = message.content
    .slice(client.config.prefix.length)
    .trim()
    .split(/ +/g)
    const command = args.shift().toLowerCase()


    let addExp = Math.floor(Math.random() * 5) + 1;
    if(!exp[message.author.id]) {
      exp[message.author.id] = {
      exp: 0,
      niveau: 1
 
      };
    }
 
    let currentExp = exp[message.author.id].exp;
    let currentNiv = exp[message.author.id].niveau;
    let nextLevel = currentNiv * 100;
    exp[message.author.id].exp = currentExp + addExp;
 
    if(nextLevel <= currentExp) {
      exp[message.author.id].niveau += 1;
      message.reply(`**Bravo, tu est passé niveau ${currentNiv + 1} !**`)
    }
    fs.writeFile('./exp.json', JSON.stringify(exp), err => {
      if (err) console.log(err);
    });
    

    if(cooldown.has(message.author.id)) {
      message.delete()
      return message.reply("**Vous devez attendre 3 seconde pour utilisé une commande !**")
    }
  if(!message.member.hasPermission("ADMINISTRATOR")) {
      cooldown.add(message.author.id);
   }
   let ops = {
     ownerID: ownerID,
     active: active
   }
      setTimeout(() => {
        cooldown.delete(message.author.id)
      }, cdseconds * 3000)
      
      const cmd = client.commands.get(command)
      if(!cmd) return;
      cmd.run(client, message, ops, args)
    }