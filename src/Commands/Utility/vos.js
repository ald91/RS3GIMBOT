const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const ApiLinks = require('../../services/apilinks.js');

const api = new ApiLinks(); 
const url = ApiLinks.getVos(); 

module.exports = {
	data: new SlashCommandBuilder()
		.setName('vos')
		.setDescription('Returns the current Voice of Seren!'),

	async execute(interaction) {
		await interaction.deferReply();

		try {
			const response = await fetch(url);
			if (!response.ok) throw new Error('Unable to get data');

			const json = await response.json();
			const district1 = json['district1'];
			const district2 = json['district2'];

			console.log(`District 1: ${district1}, District 2: ${district2}`);

			const date = new Date().toLocaleString();

			const tmstodayEmbed = new EmbedBuilder()
				.setColor(0x0099FF)
				.setTitle('The Current Voice of Seren for this Hour')
				.setURL('https://runescape.wiki/w/Voice_of_Seren')
				.setAuthor({
					name: 'From RS Wiki API',
					iconURL: 'https://runescape.wiki/images/Favicon.ico',
					url: 'https://runescape.wiki/',
				})
				.setDescription(`Until the next hour — ${date}`)
				.setThumbnail('https://runescape.wiki/images/Favicon.ico')
				.addFields(
					{ name: 'District 1', value: district1, inline: true },
					{ name: 'District 2', value: district2, inline: true },
				)
				.setTimestamp()
				.setFooter({ text: 'Data from RS Wiki', iconURL: 'https://runescape.wiki/images/Favicon.ico' });

			await interaction.editReply({ embeds: [tmstodayEmbed] });

		}
		catch (error) {
			console.error(error);
			await interaction.editReply('There was an error fetching the Voice of Seren.');
		}
	},
};
