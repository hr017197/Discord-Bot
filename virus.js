//For the state of utah
const { SlashCommandBuilder } = require('discord.js');

const fetch = require('node-fetch');

let url = "https://api.covidtracking.com/v1/states/ut/current.json";
let settings = { method: "Get" };
let positive = 0

fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
		positive = json.positive
    });

module.exports = {
	data: new SlashCommandBuilder()
		.setName('virus')
		.setDescription('gives number of current cases in Utah'),
	async execute(interaction) {
		return interaction.reply(`Current positive cases in Utah: ${positive}`);
	},
};



//ELEPHANT CODE GRAVEYARD
// const puppeteer =  require('puppeteer')

// async function getJson(){
// 	const browser = await puppeteer.launch()
// 	const page = await browser.newPage()
// 	page.goto('https://api.covidtracking.com/v1/states/ut/current.json')
// 	const text = await page.evaluate(() => {
// 		return document.getElementsByTagName("pre")
// 		//return Array.from(document.querySelectorAll("#cntContent_lstMain tbody tr td:nth-child(2)")).map(x => x.textContent)
// 	});
// 	//console.log(text)
// }

// getJson()