const { tmsGet } = require('../../functions/tms/tms-calc.js');
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('tms')
		.setDescription('displays Travelling merchant inventory for today'),

	async execute(interaction) {

        
		const shop = await tmsGet();
		
		date = new Date().toLocaleDateString();

		const tmsEmbed = new EmbedBuilder()
			.setColor(0x0099FF)
			.setTitle(`Travelling Merchant Store for ${date}`)
			.setURL('https://runescape.wiki/w/Travelling_merchant')
			.setAuthor({ name: 'from RS Wiki API', iconURL: 'https://runescape.wiki/images/Favicon.ico', url: 'https://runescape.wiki/' })
			.setDescription('Current inventory')
			.setThumbnail('https://runescape.wiki/images/Favicon.ico')
            .addFields(
                ...shop.map(item => ({
                    name: item.name || 'No item data',
                    value: item.cost || 'No cost data',
                    inline: true
                }))
			)
			.setImage('https://i.imgur.com/AfFp7pu.png')
			.setTimestamp()
			.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });


		await interaction.reply({ embeds: [tmsEmbed] });
	},
};