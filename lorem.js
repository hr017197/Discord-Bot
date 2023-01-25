const { SlashCommandBuilder } = require('discord.js');
const { LoremIpsum } = require('lorem-ipsum')

const lorem = new LoremIpsum()

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lorem')
		.setDescription('produces lorem ipsum words, automatically is set to 10')
		.addIntegerOption(option => option.setName('target').setDescription('Amount of words to grab, fewer than 100')),
	async execute(interaction) {
		const number = interaction.options.getInteger('target')
		if (number) return interaction.reply(lorem.generateWords(number))
		return interaction.reply(lorem.generateWords(10));
	},
};
