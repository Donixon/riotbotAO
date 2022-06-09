module.exports = {
    name: "test",
    aliases: ["testerino"],
    category: "Bot",
    description: "Test command",
    ownerOnly: false,
    run : async (client, message, args) => {
        const msg = await message.channel.send(`test met reactions`);
        await message.react('ok');
    }
}