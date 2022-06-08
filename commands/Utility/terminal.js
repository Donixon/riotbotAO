const { Client, Message, MessageEmbed } = require("discord.js");
const child = require("child_process");

module.exports = {
    name: "terminal",
    /**
     *   @param {Client}
     *   @param {Message}
     *   @param {Stringp[]}
     */
    run: async (client, message, args) => {
        if (message.author.id !== "280989569187315714" && message.author.id !== "224583780441128961") return;

        const command = args.join(" ");
        if (!command)
            return message.reply("Gooi dan een commando erbij man");

        child.exec(command, (err, res) => {
            if (err) return console.log(err);
            message.channel.send(res.slice(0, 2000), { code: "js"});
        });

    },

};