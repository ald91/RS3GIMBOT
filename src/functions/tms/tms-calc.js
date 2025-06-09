 /* const parse = require('node:path');
const getX = require('../../services/getx.js');
const item_listJS = require('./tms-items-index.js');
const tmsPrepSlots = require ('./tms-prep-slots.js');
const ApiLinks = require('../../services/apilinks.js');

getX(ApiLinks.getTms());

tmsItemsToday = [];
replacementsCompleted = 0;
ShopItem1 = 'item 1';
ShopItem2 = 'item 2';
ShopItem3 = 'item 3';
ShopItem4 = 'item 4';

async function tmsGet() {
	


		// app takes data from stringified API reading
		const tms_string = parse.json(data.text['*']);
		console.log(tms_string);

		// search object for items and put in array tmsItemsToday
		tmsItemsToday = tms_string.match(item_listJS);

		// map is always slot 1
		tmsItemsToday.unshift('Uncharted Island Map');

		// build array for discord export
		ShopItem1 = tmsItemsToday[0];
		ShopItem2 = tmsItemsToday[1];
		ShopItem3 = tmsItemsToday[2];
		ShopItem4 = tmsItemsToday[3];

		// return stock as string
		console.log(`slot1 = ${ShopItem1}, slot2 = ${ShopItem2}, slot3 = ${ShopItem3} & slot4 = ${ShopItem4} for today`);

		// prep items in [tmsItemsToday]
		tmsPrepSlots();

		// return the array of items
		return tmsItemsToday, ShopItem1, ShopItem2, ShopItem3, ShopItem4;
	};
}




module.exports = { tmsGet, tmsPrepSlots, ShopItem1, ShopItem2, ShopItem3, ShopItem4, tmsItemsToday };
*/