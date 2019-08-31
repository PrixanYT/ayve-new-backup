const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    message.delete()
      const annoRole = message.guild.roles.get("598551107001647114")
      const nouvRole = message.guild.roles.get("598551282130878465")
      const sonRole = message.guild.roles.get("598551626348757000")
      const parRole = message.guild.roles.get("598551753935290388")

      const embed = new Discord.RichEmbed()
      .setTitle("Rôles")
      .setDescription("Cliquez sur une des réaction ci-dessous pour obtenir le rôle correspondant")
      .addField("Les rôles disponibles",
       `:page_facing_up: - Notification Annonce
:newspaper2: - Notification Nouveauté
:bar_chart: - Notification Sondage
:dividers: - Notification Partenariat`)
       .setColor("RANDOM")
      message.channel.send(embed).then(async message => {
        await message.react("📄")
        await message.react("🗞")
        await message.react("📊")
        await message.react("🗂")
  })
}
  module.exports.help = {
    name: 'rigoprixanvoltanlol'
};
