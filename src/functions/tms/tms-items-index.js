// items constructor function
function Item(name, cost, quantity, description, url) {
	this.name = name;
	this.cost = cost;
	this.quantity = quantity;
	this.description = description;
	this.url = url;
}

// slot 1
const uncharted_island_map = new Item('Uncharted Island Map', '800,000', '1', 'Allows travel to an uncharted island with the chance of 3 to 6 special resources at the cost of no supplies.', 'https://runescape.wiki/w/Uncharted_island_map_(Deep_Sea_Fishing)');

// dnd resets
const dnd_token_d = new Item('D&D token (daily)', '250,000', '1', 'One-time use to reset a daily Distraction and Diversion.', 'https://runescape.wiki/w/Distraction_%26_Diversion_reset_token_(daily)');
const dnd_token_w = new Item('D&D token (weekly)', '400,000', '1', 'One-time use to reset a weekly Distraction and Diversion.', '');
const dnd_token_m = new Item('D&D token (monthly)', '1,000,000', '1', 'One-time use to reset a monthly Distraction and Diversion.', '');

// burial charm
const goebie_burial_charm_s = new Item('Small goebie burial charm', '50,000', '1', '50 Goebie Reputation or 50 Teci.', 'https://runescape.wiki/w/Small_goebie_burial_charm');
const goebie_burial_charm_m = new Item('Medium goebie burial charm', '100,000', '1', '100 Goebie Reputation or 100 Teci', 'https://runescape.wiki/w/Goebie_burial_charm');
const goebie_burial_charm_l = new Item('Large goebie burial charm', '150,000', '1', '150 Goebie Reputation or 150 Teci.', 'https://runescape.wiki/w/Large_goebie_burial_charm');


// menaphite
const menaphite_gift_offering_s = new Item('Menaphite gift offering (small)', '100,000', '1', 'Variety of rewards, check wiki.', 'https://runescape.wiki/w/Menaphite_gift_offering_(small)');
const menaphite_gift_offering_m = new Item('Menaphite gift offering (medium)', '300,000', '1', 'Variety of rewards, check wiki.', 'https://runescape.wiki/w/Menaphite_gift_offering_(medium)');
const menaphite_gift_offering_l = new Item('Menaphite gift offering (large)', '500,000', '1', 'Variety of rewards, see page.', 'https://runescape.wiki/w/Menaphite_gift_offering_(large)');

// fishing platform
const barrel_of_bait = new Item('Barrel of Bait', '50,000', '1', 'chance to gain an additional catch for 3 minutes', 'https://runescape.wiki/w/Barrel_of_bait');
const broken_fishing_rod = new Item('Broken fishing rod', '50,000', '1', '10% bonus catch rate for 3 minutes.', 'https://runescape.wiki/w/Broken_fishing_rod');
const tangled_fishbowl = new Item('Tangled Fishbowl', '50,000', '1', '5% Fishing experience boost for 3 minutes.', 'https://runescape.wiki/w/Tangled_fishbowl');
const message_in_a_bottle = new Item('Message in a bottle', '200,000', '1', 'One-time choice between three Deep Sea Fishing boosts.', 'https://runescape.wiki/w/Message_in_a_bottle_(Deep_Sea_Fishing)');

// minigames
const unstable_air_rune = new Item('Unstable air rune', '250,000', '1', '5,000 Runespan points.', 'https://runescape.wiki/w/Unstable_air_rune');
const scared_clay = new Item('Sacred clay', '600,000', '1', '50-100 Stealing Creation points.', 'https://runescape.wiki/w/Sacred_clay_(Deep_Sea_Fishing)');
const shattered_anima = new Item('Shattered anima', '750,000', '1', '500,000-2,000,000 shattered anima points.', 'https://runescape.wiki/w/Shattered_anima');
const livid_plant = new Item('Livid plant', '1,000,000', '1', '10,000 to 40,000 produce points.', 'https://runescape.wiki/w/Livid_plant_(Deep_Sea_Fishing)');
const horn_of_honour = new Item('Horn of honour', '1,000,000', '1', 'Awards 200 Barbarian Assault Honour Points in a role of the player\'s choice.', 'https://runescape.wiki/w/Horn_of_honour');

// rep
const anima_crystal = new Item('Anima crystal', '150,000', '1', '500 faction reputation.', 'https://runescape.wiki/w/Anima_crystal');


// currencies and other
const slayer_VIP_coupon = new Item('Slayer VIP Coupon', '200,000', '1', 'Redeemed for 1-7 Slayer VIP tickets.', 'https://runescape.wiki/w/Slayer_VIP_Coupon');
const gift_for_the_reaper = new Item('Gift for the Reaper', '1,250,000', '1', '20 Reaper points.', 'https://runescape.wiki/w/Gift_for_the_Reaper');
const unfocused_damage_enchancer = new Item('Unfocused damage enhancer', '500,000', '1', 'Allows choice of any damage enhancer at the  of lower charges.', `https://runescape.wiki/w/Unfocused_damage_enhancer`);
const silverhawk_down = new Item('Silverhawk down', '1,500,000', '50-100', 'An untradable version of silverhawk feathers. Not available to ironmen.', 'https://runescape.wiki/w/Silverhawk_down');
const advanced_pulse_core = new Item('Advanced pulse core', '800,000', '1-3', '50% extra experience that does not stack with other sources of bonus experience, up to the equivalent of a medium prismatic lamp.', 'https://runescape.wiki/w/Advanced_pulse_core');
const dragonkin_lamp = new Item('Dragonkin lamp', '250,000', '1', 'Rewards a set amount of experience. can award effy.', 'https://runescape.wiki/w/Dragonkin_lamp');
const dungeoneering_wilcard = new Item('Dungeoneering Wildcard', '400,000', '1-3', 'Consuming the card inside Daemonheim rewards 50% extra experience and tokens.', 'https://runescape.wiki/w/Dungeoneering_Wildcard');
const taijitu = new Item('Taijitu', '800,000', '3-5', 'Secondary currency used for the Waiko Reward Shop.', 'https://runescape.wiki/w/Taijitu');
const starved_ancient_effigy = new Item('Starved ancient effigy', '1,000,000', '1', 'Rewards a set amount of experience in multiple skills.', 'https://runescape.wiki/w/Starved_ancient_effigy');
const harmonic_dust = new Item('Harmonic dust', '2,000,000', '500-1000', 'Used for creating crystal tools.', 'https://runescape.wiki/w/Harmonic_dust');
const crystal_triskelion = new Item('Crystal triskelion', '2,000,000', '1', 'Deposited in a cliff face south of Rellekka to obtain a clue scroll (elite) and variety of other rewards.', 'https://runescape.wiki/w/Crystal_triskelion');
const deathtouched_dart = new Item('Deathtouched dart', '5,000,000', '1', 'Insta-kill majority of all monsters.', 'https://runescape.wiki/w/Deathtouched_dart');
const unfocused_reward_enhancer = new Item('Unfocused reward enhancer', '10,000,000', '1', 'Allows choice of any reward enhancer at the cost of lower charges.', 'https://runescape.wiki/w/Unfocused_reward_enhancer');

// item array containing objects
const item_listJS = [uncharted_island_map, advanced_pulse_core, dnd_token_d, dnd_token_w, dnd_token_m, goebie_burial_charm_s, goebie_burial_charm_m, goebie_burial_charm_l, menaphite_gift_offering_s, menaphite_gift_offering_m, menaphite_gift_offering_l, barrel_of_bait, broken_fishing_rod, tangled_fishbowl, message_in_a_bottle, unstable_air_rune, scared_clay,
	shattered_anima, livid_plant, horn_of_honour, anima_crystal, slayer_VIP_coupon, gift_for_the_reaper, unfocused_damage_enchancer, silverhawk_down, dragonkin_lamp, dungeoneering_wilcard, taijitu, starved_ancient_effigy, harmonic_dust, crystal_triskelion, deathtouched_dart, unfocused_reward_enhancer];

module.exports = { item_listJS, Item };