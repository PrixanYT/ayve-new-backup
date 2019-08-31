const ytdl = require("ytdl-core");
module.exports.run = async (client, message, args) => {
    message.delete()
    if (!message.member.voiceChannel) return message.channel.send("**Connectez vous à un salon vocal !** :x:")
    if (!message.guild.me.voiceChannel) return message.channel.send("**Le bot n'est pas connecté a un salon vocal !** :x:")
    if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send("**Vous n'êtes pas dans le même salon vocal !** :x:")
    message.guild.me.voiceChannel.leave(); return message.channel.send("**J'ai quitté le salon vocal ! :stop_button:**") 
};

module.exports.help = {
    name: 'stop'
};