const superagent = require("superagent");
const  { RichEmbed } = require("discord.js");

module.exports.run = async(client, message, args) => {
        superagent.get('https://nekos.life/api/v2/img/fox_girl')
            .then(body => {
                var body = body.body;
                const smug = new RichEmbed();
                smug.setImage(body.url);
                smug.setFooter(`${client.user.username}`);
                message.channel.send(smug);
            }
        ).catch(err =>  {
            message.channel.send(`l'api est probablement éteint. \nError: ${err}`);
            console.log(err);
        })
}

module.exports.help = {
    name: "foxg"
}