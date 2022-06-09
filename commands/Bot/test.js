module.exports = ('interactionCreate', async interaction => {
	if (commandName === 'test') {
		try {
			const message = await interaction.reply({ content: 'Reacting!', fetchReply: true });
			await message.react('🇦');
			await message.react('🇧');
			await message.react('🇨');
		} catch (error) {
			// handle failure of any Promise rejection inside here
		}
	}
});