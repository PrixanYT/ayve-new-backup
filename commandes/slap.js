const superagent = require("superagent");
const  { RichEmbed } = require("discord.js");

module.exports.run = async(client, message, ops, args) => {
    const user = message.mentions.users.first()
    message.delete()

    var ErrorMentionUser = new RichEmbed()
    .setColor("#cb4b16")
    .setDescription('Syntaxe : .slap @user :x:')


    if(!user) return message.channel.send(ErrorMentionUser)
        superagent.get('https://nekos.life/api/v2/img/slap')
            .then(body => {
                var body = body.body;
                const smug = new RichEmbed();
                smug.setImage(body.url);
                smug.setFooter(`${message.author.username} claque ${user.username}`);
                message.channel.send(smug);
            }
        ).catch(err =>  {
            message.channel.send(`l'api est probablement éteint. \nError: ${err}`);
            console.log(err);
        })
}

module.exports.help = {
    name: "slap"
}