const weather = require('weather-js');
const { SlashCommandBuilder } = require('discord.js');

let orem = ""


weather.find({search: '84058', degreeType: 'F'}, function(err, result) {
	if(err) console.log(err);
	orem = JSON.stringify(result, null, 2)
})

module.exports = {
	data: new SlashCommandBuilder()
		.setName('weather')
		.setDescription('gives weather blurb for Orem Utah'),
	async execute(interaction) {
		return interaction.reply(orem)
	},
}

//ELEPHANT CODE GRAVEYARD
// function weat(zipcode){
// 	weather.find({search: zipcode, degreeType: 'F'}, function(err, result) {
// 		if(err) console.log(err);
// 		orem = JSON.stringify(result, null, 2)
// 	})
// }

// .addIntegerOption(option => option.setName('target').setDescription('Zipcode for weather area')),

// async execute(interaction) {
// 	const number = interaction.options.getInteger('target')
// 	if (number)  return interaction.reply(weat(number))
// 	return interaction.reply(weat(84601))
// },

//the following is me trying to get it in a nicer format
//it was more work than it was worth
// const weather = require('weather-js');
// const { SlashCommandBuilder } = require('discord.js');

// let orem = ""


// weather.find({search: '84058', degreeType: 'F'}, function(err, result) {
// 	if(err) console.log(err);
// 	console.log(result)
// 	for (i in result){
// 		for (k in i){
// 			for (j in k){
// 				console.log(j.location)
// 			}
// 			console.log(k)
// 		}
// 		console.log(i)
// 	}
// 	let output = extractValue(result, 'location');
// 	const name =  extractValue(output, 'name')
// 	console.log(output);
// 	console.log(name)

// 	let output2 = extractValue(result, 'current');
// 	console.log(output2)

// //create a for loop to figure out the next forcast?

// 	//following is the big long output that is needed
// 	const stryng = ``



// 	orem = JSON.stringify(result, null, 2)
// 	console.log(typeof orem)
// })




// function extractValue(arr, prop) {
// 	//extract specific values
//     let extractedValue = arr.map(item => item[prop])
//     return extractedValue
// }

