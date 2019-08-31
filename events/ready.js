const Discord = require("discord.js")

module.exports = async (client, ready) => {
    console.log("Ayve est allumé avec succès !")
        setInterval(async () => {
      const statuslist = [
        `Prefix .`,
        `Version du bot: 2.6`,
        `${client.guilds.size} serveur`,
        `${client.users.size} membres`,
        `By Voltan#0212`,
        `Mise a jour le 30 aout 21:18`
      ];
      const random = Math.floor(Math.random() * statuslist.length);
      
      try {
        await client.user.setPresence({
            game: {
            name: `${statuslist[random]}`
          },
          status: "online"
        });
      } catch (error) {
        console.error(error);
      }
      }, 60000);

}
