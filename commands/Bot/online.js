module.exports = {
    name: "online",
    aliases: ["actief", "wiedan"],
    category: "Bot",
    description: "Wie is er online dan? Jeez",
    ownerOnly: false,
    run: async (client, message, args) => {
        const msg = await message.channel.send(`Er zitten ${client.users.cache.size} mensen in  de server`);
	},
};