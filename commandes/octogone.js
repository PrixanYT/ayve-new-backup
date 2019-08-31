const Discord = require("discord.js");

module.exports.run = (client, message, ops, args) => {
   const user = message.mentions.users.first()

  var ErrorMentionUser = new Discord.RichEmbed()
 .setColor("#cb4b16")
 .setDescription('Syntaxe : .octogone @user :x:')
if(!user) return message.channel.send(ErrorMentionUser)
    let replies = [`**${message.author.username} veut nique ${user.username}**
**${message.author.username}** vien vasy tu m'fait pas peur
**${user.username}** victime vien la jvais te bouffer sale pute
**${message.author.username} tape ${user.username}**
**${user.username} tombe K.O !** 
**${message.author.username}** sous-merde va ! :joy:`, //2octogne
`**${user.username}** vien te battre
**${message.author.username} mets un coup de pied dans les couilles à ${user.username}**
**${user.username} pleure**
**${message.author.username}** ça va ?
**${user.username}** j'ai hyper mal
**${message.author.username} a compagne ${user.username} à l'hopital**
**${user.username} devient ami avec ${message.author.username} à vie**`, //3octogone
`**${message.author.username} appelle ça team**
**${client.user.username}** wesh
**${message.author.username}** vien whoula
**${client.user.username}** tu veut bz qui ?
**${message.author.username}** une victime, regarde enface de toi
**${user.username}** c'est toi la victime
**${client.user.username}** mdrrrr
**${message.author.username}** azy tu fait le ouf
**${user.username}** c'est toi à appellé ta team
**${user.username} ce tire**
**${message.author.username}** azy casse toi sale pu****`,//4octogone
`**${message.author.username} fait un croche pied à ${user.username}**
**${user.username} tombe sur la tête**
**${message.author.username} enmène à l'hopital ${user.username}**
**${user.username} meurt à l'hopital**`,//5octogone
`**${user.username}** chuis un teroriste
**${message.author.username}** mytho mdrrrrr
**${user.username}** AHLAHWOKBA
**${user.username} active sa bombe et fait explosé Paris**
**${message.author.username} meurt**
**${user.username} meurt**`]
    let question = args.slice(0).join(" ");
   let res = Math.floor((Math.random() * replies.length));
   message.channel.send(replies[res])
    }


module.exports.help = {
    name: 'octogone'
};
