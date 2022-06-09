module.exports = {
    name: "test",
    aliases: ["testerino"],
    category: "Bot",
    description: "Test command",
    ownerOnly: false,
    run : async (client, message, args) => {
        const replyMesssage = await interaction.reply({conten:`test met reactions`, fetchReply: true});
        setTimeout(() => replyMesssage.delete(), 5000);
    }
}