const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('daily_info')
        .setDescription('Provides links to the runescape wiki for common daily activities.'),

    async execute(interaction) {
        const dailyembed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle(`Links for today`)
            .setAuthor({ name: 'from RS Wiki API', iconURL: 'https://runescape.wiki/images/Favicon.ico', url: 'https://runescape.wiki/' })
            .addFields(
                { name: `Rune Golderg`, value: 'https://runescape.wiki/w/Rune_Goldberg_Machine/Rune_scores', inline: true },
                { name: 'Merchant', value: 'https://runescape.wiki/w/Travelling_Merchant%27s_Shop', inline: true },
            )
            .setTimestamp()


        await interaction.reply({ embeds: [dailyembed] });
    }
};