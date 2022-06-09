module.exports = {
    name: "test",
    aliases: ["testerino"],
    category: "Bot",
    description: "Test command",
    ownerOnly: false,
    run : async (client, message, args) => {
        const msg = await message.channel.reply(`test met reactions`);
        setTimeout(() => replyMesssage.delete(), 5000);
    }
}