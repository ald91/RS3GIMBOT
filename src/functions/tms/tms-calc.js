const getX = require('../../services/getx.js');
const { item_listJS } = require('./tms-items-index.js');
const ApiLinks = require('../../services/apilinks.js');



async function tmsGet() {

    const tmsItemsToday = [];

    const tmsAPI = ApiLinks.getTms();
    console.log(`address to check for TMS data is ${tmsAPI}`);

    // app takes data from stringified API reading
    const data = await getX(tmsAPI)
    let tms_string = data.parse.text['*'].toLowerCase();
    console.log(` data obtained from Runescape Wiki API = ${tms_string}`);

    //search string to any item that appears in the string. if it does assign it to a shopitem variable and then remove it from the string
    //for loop 1 is for assigning the shop items (not map, as slot 1 is added later using unshift)
    //for nested for loop this searches through the tms_string for any matching items
    // the matched item is then removed from the string using replace */

    for (let i = 0; i < item_listJS.length && tmsItemsToday.length < 4; i++) {
        const itemOBJ = item_listJS[i];
        const itemName = itemOBJ.name.toLowerCase();

        if (tms_string.includes(itemName)) {
            tmsItemsToday.push(itemOBJ);
            tms_string = tms_string.replace(itemName, "");
        }
    }


    // map is always slot 1. Import item for Item_listJS array position [0]
    tmsItemsToday.unshift(item_listJS[0]);

    // return stock as string
    console.log(tmsItemsToday);
    console.log(`slot1 = ${tmsItemsToday[0].name}, slot2 = ${tmsItemsToday[1].name}, slot3 = ${tmsItemsToday[2].name} & slot4 = ${tmsItemsToday[3].name} for today`);

    // return the array of items
    return tmsItemsToday;
};


module.exports = { tmsGet };