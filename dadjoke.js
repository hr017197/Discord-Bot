const jokes = require('./joke.json');

const { SlashCommandBuilder } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dadjoke')
		.setDescription('Tells a random dad joke'),
	async execute(interaction) {
		return interaction.reply(jokes[Math.floor(Math.random()*jokes.length)])
	},
};
