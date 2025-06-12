const { SlashCommandBuilder, EmbedBuilder } = require('discord.js'); 

// export information for command handler
module.exports = {
    data: new SlashCommandBuilder()
        .setName('player-a')
        .setDescription('shows the most recent 5 activities on a players Runemetrics profile')
        .addStringOption(option =>
            option.setName('playername')
                .setDescription('player name to search on Runemetrics API')
                .setRequired(true)
        ),
    async execute(interaction) {
        // get data from api and return last 5 player activities
        let playerName = interaction.options.getString('playername');
        playerName = playerName.replace(" ", "_");

        console.log(`name recieved = ${playerName}`);

        await interaction.deferReply()
        try {
            //send name to API
            const response = await fetch(`https://apps.runescape.com/runemetrics/profile/profile?user=${playerName}&activities=20`)

            if (!response.ok) {
                throw new Error(`Unable to get data from Runescape API for ${playerName}`);
            }

            const data = await response.json();

            if (!Array.isArray(data.activities)) {
                console.error(`unexpected API response`, data);
                throw new Error(`activities data is missing or incorrectly formatted`);
            }
            
            const playerData = data.activities.slice(0, 5);
            console.log(`stored data for embed = ${JSON.stringify(playerData, null, 2)}`);


            const playerA5embed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle(`5 most recent activities for ${playerName}`)
            .setURL(`https://apps.runescape.com/runemetrics/profile/profile?user=${playerName}&activities=20`)
            .setAuthor({name:'from Runemetrics API', iconURL: `https://secure.runescape.com/m=avatar-rs/GIM+Daelin/chat.png`, url: 'https://apps.runescape.com/runemetrics'})
            .setThumbnail(`https://apps.runescape.com/runemetrics/images/logos/runemetrics_logox2.225f8986.png`)
            .setDescription(`Let's see what ${playerName} has been upto...`)

            .addFields(
                ...playerData.map(activity => ({
                    name: activity.details || 'No activity available',
                    value: activity.text || 'No details available',
                    inline: false
                }))
            )
            
            .setImage(`https://secure.runescape.com/m=avatar-rs/GIM+Daelin/chat.png`)
            .setTimestamp()
            .setFooter({ text: `you nosey sod.` });

             await interaction.editReply({ embeds: [playerA5embed] })



        } catch (err) {
            throw new Error(`unable to retrieve activities correctly, ${err.message}`);
        }


}
};
