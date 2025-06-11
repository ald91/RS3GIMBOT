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
            console.log(`found ${data.activities.length} recent acivities for ${playerName}`);
            console.log(`data for ${playerName} is as follows ${data.activities.slice(0, 4)}`);
            
            const playerData = data.stringify(data.activities.slice(0, 5));


            const playerA5embed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle(`5 most recent activities for ${playerName}`)
            .setURL(`https://apps.runescape.com/runemetrics/profile/profile?user=GIM_Daelin&activities=20`)
            .setAuthor({ name: 'from Runemetrics API', iconURL: '', url: 'https://apps.runescape.com/runemetrics' })
            .setDescription('5 most revent activities')
            .setThumbnail('')
            .addFields(
                ...playerData.map(activity => ({
                    name: activity.details || 'No activity available',
                    value: activity.text || 'No details available',
                    inline: true
                }))
            )
            
            .setImage('https://i.imgur.com/AfFp7pu.png')
            .setTimestamp()
            .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

             await interaction.editReply({ embeds: [playerA5embed] })



        } catch (err) {
            throw new Error(`unable to retrieve activities correctly, ${err.message}`);
        }


}
};
