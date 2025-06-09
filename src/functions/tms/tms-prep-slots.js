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