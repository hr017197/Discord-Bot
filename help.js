
const { SlashCommandBuilder } = require('discord.js');
help = `/help (displays a helpful summary of commands)\n
/hello (responds with world)\n
/lorem (produces lorem ipsum words, automatically displays 10 but is optional to change amount needed up to 100)\n
/virus (gives number of current cases in Utah County)\n
/dadjoke (tells a random dad joke)\n
/die (kills the bot)\n
/weather (gives weather blurb in Provo Utah)\n
		`

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('displays a helpful summary of commands'),
	async execute(interaction) {
		return interaction.reply(help);
	},
};