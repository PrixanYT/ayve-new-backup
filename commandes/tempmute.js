const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, ops, args) => {

  //!tempmute @user 1s/m/h/d
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("**Ce membre n'exsite pas ! :x:**");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("**Vous ne pouvez pas mute ce membre !** :x:");
  let muterole = message.guild.roles.find(`name`, "Muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("**Vous devez specifie le temp du mute ! :x:**");

  await(tomute.addRole(muterole.id));
  message.reply(`**<@${tomute.id}> est mute pendant ${ms(ms(mutetime))}** :white_check_mark: `);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`**<@${tomute.id}> n'est plus mute !** :white_check_mark:`);
  }, ms(mutetime));


//end of module
}

module.exports.help = {
  name: "tempmute"
}