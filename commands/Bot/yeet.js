module.exports = {
    name: "yeet",
    aliases: ["yeetus", "bazinga"],
    category: "Utility",
    description: "Ff een yeet tussendoor",
    ownerOnly: false,
    run: async (client, message, args) => {
        const msg = await message.channel.send(`🏓 yeeting...`);
	},
};
