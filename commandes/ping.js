const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    let startTime = Date.now();
   var speedTest = require('speedtest-net');
   var speed = speedTest();
   message.channel.send("**Calcul en cours ... :satellite:**").then((msg) => {
     speed.on('data',async data => {  
       let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setDescription('⏲ Ping du bot ***' + ((new Date() - message.createdTimestamp)/200).toFixed(0) + ' ms***\n💓 Ping de l\'API ***' + Math.round(client.ping).toFixed(0) + '  ms***\n🖥 Ping du serveur ***'+data.server.ping+'***')
        .setFooter(`Upload: ${data.speeds.upload} Download: ${data.speeds.download}`)
        msg.edit("**Ping en général**",embed)
      }) ;
   })

}    
module.exports.help = {
     name: 'ping'
};
