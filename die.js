
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('die')
		.setDescription('kills the bot'),
	async execute(interaction) {
		await interaction.reply('YOU KILLED ME, I AM NOW DEAD');
		process.exit(0)
	},
};