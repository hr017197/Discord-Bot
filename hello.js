//hello world
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription('Replies with world'),
	async execute(interaction) {
		return interaction.reply('world')
	},
}