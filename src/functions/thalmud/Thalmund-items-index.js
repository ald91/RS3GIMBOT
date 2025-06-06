module.exports = { item_listJS , Item};

//item array containing objects
const item_listJS = [ ensouled_bar, ensouled_cloth, ensouled_thread, greater_ensouled_bar, greater_ensouled_cloth, greater_ensouled_thread, ]

//items constructor function
function Item(name, cost, quantity, description, iconURL,) {
this.name = name;
this.cost = cost;
this.quantity = quantity;
this.description = description;
this.iconURL = iconURL;
}

const x = new Item()

//SLOT 1 Ensouled items
  const ensouled_bar = new Item( `Ensouled bar`, `10,000`, `1`, `an ensouled bar, used to upgrade necromancer's equipment.`, `` );
  const ensouled_cloth = new Item(`Ensouled cloth`,	`5,000`, `1`, `An ensouled cloth, used to upgrade necromancer's equipment.`, ``);
  const ensouled_thread = new Item(`Ensouled thread`, `1,000`, `1`,	`An ensouled thread, used to upgrade necromancer's equipment.`, ``);
  const greater_ensouled_bar = new Item(`Greater ensouled bar`, `10,000`, `1`, `A greater ensouled bar, used to upgrade necromancer's equipment.`, ``);
  const greater_ensouled_cloth = new Item(`Greater ensouled cloth`,	`1,000,000`, `1`, `A greater ensouled cloth, used to upgrade necromancer's equipment.`, ``);
  const greater_ensouled_thread	= new Item(`Greater ensouled thread`, `300,000`, `1`, `A greater ensouled thread, used to upgrade necromancer's equipment.`, ``);

//SLOT 2 necrotic runes
  const impure_essence = new Item(`Impure essence`, `17,600`, `1000`, `An uncharged rune stone imbued with necrotic energy. Used in Runecrafting for training and production.`,``);
  const spirit_rune	= new Item(`Spirit rune`,	`100`, `2,000`,	`A necrotic rune used in incantations.`,``);
  const bone_rune = new Item(`Bone rune`,	`100`, ``,	`A necrotic rune used in incantations.`,``);
  const flesh_rune = new Item(`Flesh rune`,	`100`, ``, `A necrotic rune used in incantations.`,``);
  const miasma_rune = new Item(`Miasma rune`,	`100`, ``,	`A necrotic rune used in incantations.`,``);
/*
//Slot 3 ritual items
  Greater necroplasm	Greater necroplasm	50	100	390	14,500	A greater necroplasm, used in creation of ritual reagents.
  Powerful necroplasm	Powerful necroplasm	50	200	666	23,300	A powerful necroplasm, used in creation of ritual reagents.
  Spirit memento	Spirit memento	5	100	27,479	136,895	A spirit memento, used as a focus object in communion rituals.
  Robust memento	Robust memento	5	200	818	3,090	A robust memento, used as a focus object in communion rituals.
  Powerful memento	Powerful memento	5	300	13,800	67,500	A powerful memento, used as a focus object in communion rituals.
  Greater ghostly ink	Greater ghostly ink	5	200	11,046	54,230	A greater ghostly ink, used to draw glyphs in rituals.
  Powerful ghostly ink	Powerful ghostly ink	5	400	19,085	93,425	A powerful ghostly ink, used to draw glyphs in rituals.
  Greater ritual candle	Greater ritual candle	5	20	2,829	14,045	A light source used in rituals, with 18 durability.

//slot 4 Rare finds
  Greater flaming skull	Greater flaming skull	5	800	39,859	195,295	A powerful light source used in rituals, with 36 durability.
  Uncut moonstone	Uncut moonstone	1	4,000	263,923	259,923	A gemstone used in crafting necromantic jewellery.
  Ghost impling jar	Ghost impling jar	1	1,000	74,039	73,039	A ghost impling in a jar. Can be opened for a reward.
  Extreme necromancy flask (6)	Extreme necromancy flask (6)	1	3,000	65,203	62,203	Six doses of a powerful necromancy-boosting potion.
  /*