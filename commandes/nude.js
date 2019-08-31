const Discord = require("discord.js");
const bot = new Discord.Client();
const snekfetch = require("snekfetch");
 
module.exports.run = async (client, message, args) => {
  try {
    const { body } = await snekfetch
      .get("https://www.reddit.com/r/ass.json")
      .query({ limit: 800 });
    const allowed = message.channel.nsfw
      ? body.data.children
      : body.data.children.filter(post => !post.data.over_18);
    if (!allowed.length)
      return message.channel.send(
        "**Vous devez être dans un salon NSFW ! :x:**"
      );
    const randomnumber = Math.floor(Math.random() * allowed.length);
    const embed = new Discord.RichEmbed()
      .setFooter(`${client.user.username}`)
      .setImage(allowed[randomnumber].data.url);
    message.channel.send(embed);
  } catch (err) {
    return console.log(err);
  }
};
 
module.exports.help = {
  name: "nude"
};