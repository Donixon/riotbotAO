module.exports = {
    name: "addtag",
    aliases: ["newtag"],
    category: "Utility",
    description: "Tag voor de count toevoegen",
    ownerOnly: false,
    run: async (client, message, args) => {
        
		const tagName = interaction.options.getString('name');
		const tagDescription = interaction.options.getString('description');

		try {
			// equivalent to: INSERT INTO tags (name, description, username) values (?, ?, ?);
			const tag = await Tags.create({
				name: tagName,
				description: tagDescription,
				username: interaction.user.username,
			});

			return interaction.reply(`Tag ${tag.name} added.`);
		}
		catch (error) {
			if (error.name === 'SequelizeUniqueConstraintError') {
				return interaction.reply('That tag already exists.');
			}

			return interaction.reply('Something went wrong with adding a tag.');
		}
	},
};