const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const ApiLinks = require('../../services/apilinks.js');
const getX = require('../../services/getx.js');

const url = ApiLinks.getVos();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('vos')
		.setDescription('Returns the current Voice of Seren!'),

	async execute(interaction) {
		let district1, district2;

		try {
			await interaction.deferReply();

			const data = await getX(url);
			if (!data) throw new Error('no data returned from getX');

			const clanIcons = [
				{ clan: `Amlodd`, icon: `https://runescape.wiki/images/Amlodd_Clan.png?6c04f`, buff: `Summoning and divination buffs and xp`},
				{ clan: `Cadarn`, icon: `https://runescape.wiki/images/Cadarn_Clan.png?f8c96`,buff: `magic  and ranged xp` },
				{ clan: `Cryws`, icon: `https://runescape.wiki/images/Crwys_Clan.png?49be0`, buff: `farming and woodcutting xp buffs and xp` },
				{ clan: `Hefin`, icon: `https://runescape.wiki/images/Hefin_Clan.png?e62c8`, buff: `agility and prayer xp` },
				{ clan: `Iorwerth`, icon: `https://runescape.wiki/images/Iorwerth_Clan.png?6d35e`, buff: `slayer and melee xp` },
				{ clan: `Ithell`, icon: `https://runescape.wiki/images/thumb/Ithell_Clan.png/50px-Ithell_Clan.png?95c05`, buff: `construction and crafting xp` },
				{ clan: `Meilyr`, icon: `https://runescape.wiki/images/Meilyr_Clan.png?6a5e9`,buff: `dungeoneering buffs and herblore xp` },
				{ clan: `Trahaearn`, icon: `https://runescape.wiki/images/Trahaearn_Clan.png?9b997`, buff: `mining and smithing buffs and xp` },
			]

			district1 = {
				clan: data['district1'],
				icon: clanIcons.find(c => c.clan === data['district1'])?.icon || null,
				buffs: clanIcons.find(c => c.buff === data['district1'])?.icon || null
			};

			district2 = {
				clan: data['district2'],
				icon: clanIcons.find(c => c.clan === data['district2'])?.icon || null,
				buffs: clanIcons.find(c => c.buff === data['district1'])?.icon || null
				
			};
		}
		catch (error) {
			console.error(error);
			await interaction.editReply('There was an error fetching the Voice of Seren.');
			return;
		}

		console.log(`District 1: ${district1.clan}, District 2: ${district2.clan}`);

		const date = new Date().toLocaleString();


		const embed1 = new EmbedBuilder()
			.setTitle(`District 1: ${district1.clan}`)
			.setImage(district1.icon);

		const embed2 = new EmbedBuilder()
			.setTitle(`District 2: ${district2.clan}`)
			.setImage(district2.icon);


		await interaction.editReply({ embeds: [embed1, embed2] });
	},
};
