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
			.setDescription('use friends chat "Whirlpooldnd" to find a world. The Current inventory is:')
			.setThumbnail('https://runescape.wiki/images/Uncharted_island_map_%28Deep_Sea_Fishing%29.png?65f48')
            .addFields(
                ...shop.map(item => ({
                    name: item.name || 'No item data',
                    value: item.cost || 'No cost data',
                    inline: false
                }))
			)
			.setImage('https://runescape.wiki/images/thumb/Travelling_Merchant%27s_Shop.png/300px-Travelling_Merchant%27s_Shop.png?8d787')
			.setTimestamp()
			.setFooter({ text: 'items will reset at 00:00 GMT'});


		await interaction.reply({ embeds: [tmsEmbed] });
	},
};