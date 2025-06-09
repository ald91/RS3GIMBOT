/* const {tmsPrepSlots, shopItem1, shopItem2, shopItem3, shopItem4 } = require('../../functions/tms/tms-items-index.js');
const {tmsGet} = require('../../functions/tms/tms-calc.js');
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('tms')
		.setDescription('displays Travelling merchant inventory for today'),

	async execute() {
		tmsGet(),
		tmsPrepSlots(),
		date = new Date().toLocaleDateString();


		const tmsEmbed = new EmbedBuilder()
			.setColor(0x0099FF)
			.setTitle(`Travelling Merchant Store for ${date}`)
			.setURL('https://https://runescape.wiki/w/Travelling_merchant')
			.setAuthor({ name: 'from RS Wiki API', iconURL: 'https://runescape.wiki/images/Favicon.ico', url: 'https://https://runescape.wiki/' })
			.setDescription('Current inventory')
			.setThumbnail('https://runescape.wiki/images/Favicon.ico')
			.addFields(
				{ name: shopItem1.name, value: shopItem1.value, inline: true },
				{ name: shopItem2.name, value: shopItem2.value, inline: true },
				{ name: shopItem3.name, value: shopItem3.value, inline: true },
				{ name: shopItem4.name, value: shopItem4.value, inline: true },
			)
			.setImage('https://i.imgur.com/AfFp7pu.png')
			.setTimestamp()
			.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });


		await interaction.reply({ embeds: [tmsEmbed] });
	},
}; */