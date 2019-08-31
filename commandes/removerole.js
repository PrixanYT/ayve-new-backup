const Discord = require("discord.js");

module.exports.run = async (client, message, ops, args) => {
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("**Tu n'a pas la permission d'uilitise cette commande ! :x:**");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("**Veuillez mentionner un membre !** :x:");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("**Veuillez specifie un role !** :x:");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("**Ce role n'exsiste pas !** :x:");

  if(!rMember.roles.has(gRole.id)) return message.reply("**Ce membre n'a pas ce role ! :x:**");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`Tu a perdu le role **${gRole.name}** sur le serveur **${message.guild.name} !**`)
  }catch(e){
    message.channel.send(`**<@${rMember.id}> a perdu le role ${gRole.name}. Retire par ${message.author.username}** `)
  }
}

module.exports.help = {
  name: "removerole"
}