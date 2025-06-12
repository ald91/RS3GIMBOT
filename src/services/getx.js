async function getX(url) {


    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Unable to get data');

        const data = await response.json();
        console.log(`getX JSON Data: ${JSON.stringify(data)}`);
        return data;


    }
    catch (error) {
        console.error(error);
        await interaction.editReply('There was an error fetching the data.');
    }
}

module.exports = getX;