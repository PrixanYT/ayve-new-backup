const { get } = require("https")

module.exports.run = async(client, message, args) => {
    get("https://nekos.life/api/v2/img/kiss", (res) => {
        const { statusCode } = res;
        if (statusCode !== 200) {
            return message.channel.send("Une erreur est survenye avec l'API");
        }

        res.setEncoding("utf8");
        let rawData = "";

        res.on("data", chunk => {
            rawData += chunk;
        });

        res.on("end", () => {
            try {
                const parsedData = JSON.parse(rawData);

                message.channel.send({
                    embed: {
                        image: {
                            url: parsedData.url
                        },
                        footer: {
                            text: `${message.author.username} embrasse ${client.user.username}`
                        }
                    }
                });
            } catch (error) {
                console.error(error.message)

            }
        });
    }).on("error", (error) => {
        console.error(error.message);
    });
};

module.exports.help = {
    name: "kiss"
}