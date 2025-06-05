import { parse } from "node:path";
import { item_listJS } from "./tms-items-index.js";
import { getTms } from "./apilinks.js";

const tmsItemsToday = [];
const replacementsCompleted = 0;
var ShopItem1 = 'item 1';
var ShopItem2 = 'item 2';
var ShopItem3 = 'item 3';
var ShopItem4 = 'item 4';

function tmsGet() {
    // Define the API URL
    tmsTodayAPILink = getTms();

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

            // search object for items and put in array tmsItemsToday
            tmsItemsToday = tms_string.match(item_listJS);

            //map is always slot 1
            tmsItemsToday.unshift('Uncharted Island Map');

            // build array for discord export
            const ShopItem1 = tmsItemsToday[0];
            const ShopItem2 = tmsItemsToday[1];
            const ShopItem3 = tmsItemsToday[2];
            const ShopItem4 = tmsItemsToday[3];

            //return stock as string
            console.log(`slot1 = ${ShopItem1}, slot2 = ${ShopItem2}, slot3 = ${ShopItem3} & slot4 = ${ShopItem4} for today`);

            //prep items in [tmsItemsToday]
            tmsPrepSlots();

            //return the array of items
            return tmsItemsToday, ShopItem1, ShopItem2, ShopItem3, ShopItem4;

        })
        .catch(error => {
            console.error('Error:', error);
        });



}


function tmsPrepSlots() {
    // check to see if the JSON extracted items exist in the [item_listJS]. If they do, replace the string with the object in [tmsItemsToday]
    for (let i = 0; i < tmsItemsToday.length; i++) {
        for (let x = 0; i < item_listJS.length; i++) {
            if (item_listJS[x].name === tmsItemsToday[i]) {
                console.log(`found match for string in position ${i} with ${tmsItemsToday[i]} against item_listJS[${x}].name this will be replaced with object ${item_listJS[x]}`);
                tmsItemsToday[i].replace(tmsItemsToday[i], item_listJS[x]);
            }
        }
        console.log(`Replacement ${replacementsCompleted} completed`);
        replacementsCompleted++;
        return tmsItemsToday;

    }
}

export { tmsGet, tmsPrepSlots, ShopItem1, ShopItem2, ShopItem3, ShopItem4, tmsItemsToday };
