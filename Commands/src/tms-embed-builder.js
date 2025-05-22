import { parse } from "node:path";
import Items from "tms-items-index.js";
import item_list from "tms-iems-index.js";
import travellingMerchantStoreURL from "./apilinks"

function tmstoday() {
    // Define the API URL
    tmsTodayAPILink = travellingMerchantStoreURL;

    // Make a GET request
    fetch(tmsTodayAPILink)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // app takes data from stringified API reading
            var tms_string = parse.json(data.text["*"]);
            const todays_items = item_list.filer(item => wordsToSearch.includes(item));
            // look for array items from [item_list] 
            


            // if item identified, remove and add to today's items


           
        })
        .catch(error => {
            console.error('Error:', error);
        });



}




// inside a command, event listener, etc.
var date = new date();
const tmstodayEmbed = new EmbedBuilder();
	.setColor(0x0099FF)
	.setTitle(`Travelling Merchant Store for ` + date + `.`)
	.setURL('https://https://runescape.wiki/w/Travelling_merchant')
	.setAuthor({ name: 'from RS Wiki API', iconURL: 'https://runescape.wiki/images/Favicon.ico', url: 'https://https://runescape.wiki/' })
	.setDescription('Current inventory')
	.setThumbnail('https://runescape.wiki/images/Favicon.ico')
	.addFields(

		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
        { name: 'Inline field title', value: 'Some value here', inline: true }
	)
	.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
	.setImage('https://i.imgur.com/AfFp7pu.png')
	.setTimestamp()
	.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

channel.send({ embeds: [tmstodayEmbed] });