const { EmbedBuilder } = require('discord.js');

const tmstodayEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle(`Travelling Merchant Store for ${date}.`)
	.setURL('https://runescape.wiki/w/Travelling_merchant')
	.setAuthor({ name: 'from RS Wiki API', iconURL: 'https://runescape.wiki/images/Favicon.ico', url: 'https://runescape.wiki/' })
	.setDescription('Current inventory')
	.setThumbnail('https://runescape.wiki/images/Favicon.ico')
	.addFields(
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
	.setImage('https://i.imgur.com/AfFp7pu.png')
	.setTimestamp()
	.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

channel.send({ embeds: [tmstodayEmbed] });
