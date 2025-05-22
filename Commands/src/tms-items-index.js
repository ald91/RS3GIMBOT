//item array
const item_list = ['Advanced pulse core',
'Anima crystal',
'Barrel of bait',
'Broken fishing rod',
'Crystal triskelion',
'D&D token (daily)',
'D&D token (monthly)',
'D&D token (weekly)',
'Deathtouched dart',
'Dragonkin lamp',
'Dungeoneering Wildcard',
'Gift for the Reaper',
'Goebie burial charm',
'Harmonic dust',
'Horn of honour',
'Large goebie burial charm',
'Livid plant',
'Menaphite gift offering (large)',
'Menaphite gift offering (medium)',
'Menaphite gift offering (small)',
'Message in a bottle',
'Sacred clay',
'Shattered anima',
'Silverhawk down',
'Slayer VIP Coupon',
'Small goebie burial charm',
'Starved ancient effigy',
'Taijitu',
'Tangled fishbowl',
'Uncharted island map',
'Unfocused damage enhancer',
'Unfocused reward enhancer',
'Unstable air rune',
]

// potential items constructor function
function Item(name, cost, quantity, description, iconURL,) {
this.name = name;
this.cost = cost;
this.quantity = quantity;
this.description = description;
this.iconURL = iconURL;
}

//slot 1
const uncharted_island_map = new Item("Uncharted Island Map", "800,000", "1", "Allows travel to an uncharted island with the chance of 3 to 6 special resources at the cost of no supplies.", "");

//dnd resets
const Dnd_token_D = new Item("D&D token (daily)", "250,000", "1", "One-time use to reset a daily Distraction and Diversion.");
const Dnd_token_W = new Item("D&D token (weekly)", "400,000", "1", "One-time use to reset a weekly Distraction and Diversion.", "");
const Dnd_token_M = new Item("D&D token (monthly)", "1,000,000", "1", "One-time use to reset a monthly Distraction and Diversion.", "");

//burial charm
const goebie_burial_charm_S = new Item("Small goebie burial charm", "50,000", "1", "50 Goebie Reputation or 50 Teci.", "");
const goebie_burial_charm_M = new Item("Medium goebie burial charm", "100,000", "1", "100 Goebie Reputation or 100 Teci", "");
const goebie_burial_charm_L = new Item("Large goebie burial charm", "150,000", "1", "150 Goebie Reputation or 150 Teci.", "");


//menaphite
const menaphite_gift_offering_S = new Item("Menaphite gift offering (small)", "100,000", "1", "Variety of rewards, check wiki.", "");
const menaphite_gift_offering_M = new Item("Menaphite gift offering (medium)", "300,000", "1", "Variety of rewards, check wiki.", "");

//fishing platform
const barrel_of_bait = new Item("Barrel of Bait", "50,000", "1", "chance to gain an additional catch for 3 minutes", "");
const broken_fishing_rod = new Item("Broken fishing rod", "50,000", "1", "10% bonus catch rate for 3 minutes.", "");
const tangled_fishbowl = new Item("Tangled Fishbowl", "50,000", "1", "5% Fishing experience boost for 3 minutes.", "");
const message_in_a_bottle = new Item("Message in a bottle", "200,000", "1", "One-time choice between three Deep Sea Fishing boosts.", "");

//minigames
const unstable_air_rune = new Item("Unstable air rune", "250,000", "1", "5,000 Runespan points.", "");
const scared_clay = new Item("Sacred clay", "600,000", "50-100 Stealing Creation points.");
const shattered_anima = new Item("Shattered anima", "750,000", "500,000-2,000,000 shattered anima points.");
const livi_plant = new Item("Livid plant", "1,000,000", "1", "10,000 to 40,000 produce points.", "");
const horn_of_honour = new Item("Horn of honour", "1,000,000", "1", "Awards 200 Barbarian Assault Honour Points in a role of the player's choice.", "");

//rep
const anima_crystal = new Item("Anima crystal", "150,000", "1", "500 faction reputation.", "");


//currencies and other
const slayer_VIP_coupon = new Item("Slayer VIP Coupon", "200,000", "1", "Redeemed for 1–7 Slayer VIP tickets.", "");
const gift_of_the_reaper = new Item("Gift for the Reaper", "1,250,000", "1", "20 Reaper points.", "");
const Unfocused_damage_enchancer = new Item("Unfocused damage enhancer", "500,000", "1", "Allows choice of any damage enhancer at the  of lower charges.");
const silverhawk_down = new Item("Silverhawk down", "1,500,000", "50-100", "An untradable version of silverhawk feathers. Not available to ironmen.", "");
const advanced_pulse_core = new Item("Advanced pulse core", "800,000", "1-3", "50% extra experience that does not stack with other sources of bonus experience, up to the equivalent of a medium prismatic lamp.", "");
const dragonkin_lamp = new Item("Dragonkin lamp", "250,000", "1", "Rewards a set amount of experience. can award effy.", "");
const dungeoneering_wilcard = new Item("Dungeoneering Wildcard", "400,000", "1-3", "Consuming the card inside Daemonheim rewards 50% extra experience and tokens.", "");
const menaphite_gift_offering_L = new Item("Menaphite gift offering (large)", "500,000", "1", "Variety of rewards, see page.", "");
const taijitu = new Item("Taijitu", "800,000", "3-5", "Secondary currency used for the Waiko Reward Shop.", "");
const starved_ancient_effigy = new Item("Starved ancient effigy", "1,000,000", "1", "Rewards a set amount of experience in multiple skills.", "");
const harmonic_dust = new Item("Harmonic dust", "2,000,000", "500-1000", "Used for creating crystal tools.", "");
const crystal_triskelion = new Item("Crystal triskelion", "2,000,000", "1", "Deposited in a cliff face south of Rellekka to obtain a clue scroll (elite) and variety of other rewards.", "");
const deathtouched_dart = new Item("Deathtouched dart", "5,000,000", "1", "Insta-kill majority of all monsters.", "");
const unfocused_reward_enhancer = new Item("Unfocused reward enhancer", "10,000,000", "1", "Allows choice of any reward enhancer at the cost of lower charges.", "");