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
				{ clan: `Amlodd`, icon: `https://runescape.wiki/images/Amlodd_Clan.png`, buff: `Summoning and divination buffs and xp`},
				{ clan: `Cadarn`, icon: `https://runescape.wiki/images/Cadarn_Clan.png`,buff: `magic  and ranged xp` },
				{ clan: `<:Crwys:1382762263727046717> Cryws`, icon: `https://runescape.wiki/images/Crwys_Clan.png`, buff: `farming and woodcutting xp buffs and xp` },
				{ clan: `<:Hefin:1382762291430166588> Hefin`, icon: `https://runescape.wiki/images/Hefin_Clan.png`, buff: `agility and prayer xp` },
				{ clan: `<:Iorwerth:1382762329271173190>  Iorwerth`, icon: `https://runescape.wiki/images/Iorwerth_Clan.png`, buff: `slayer and melee xp` },
				{ clan: `Ithell`, icon: `https://runescape.wiki/images/thumb/Ithell_Clan.png`, buff: `construction and crafting xp` },
				{ clan: `Meilyr`, icon: `https://runescape.wiki/images/Meilyr_Clan.png`,buff: `dungeoneering buffs and herblore xp` },
				{ clan: `Trahaearn`, icon: `https://runescape.wiki/images/Trahaearn_Clan.png`, buff: `mining and smithing buffs and xp` },
			]

			district1 = {
				clan: data['district1'],
				icon: clanIcons.find(c => c.clan === data['district1'])?.icon || null,
				buff: clanIcons.find(c => c.buff === data['district1'])?.buff || null
			};

			district2 = {
				clan: data['district2'],
				icon: clanIcons.find(c => c.clan === data['district2'])?.icon || null,
				buff: clanIcons.find(c => c.buff === data['district1'])?.buff || null
				
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
			.setDescription(`Clan Buff = ${district1.buff}`)
			.setImage(district1.icon);

		const embed2 = new EmbedBuilder()
			.setTitle(`District 2: ${district2.clan}`)
			.setDescription(`Clan Buff = ${district2.buff}`)
			.setImage(district2.icon);


		await interaction.editReply({ embeds: [embed1, embed2] });
	},
};
