// ==UserScript==
// @name         KoL Completionist Script
// @namespace    http://jemonjam.com
// @version      1.7
// @description  This script will fill in unobtainable (or virtually unobtainable) items in the various KoL profile pages. Completionists rejoice!
// @author       jemonjam
// @include      http*://cheesellc.com/kol/profile.php*
// @include      http*://bumcheekcity.com/kol/profile.php*
// @include      http*://api.aventuristo.net/av-snapshot*
// @updateURL    https://raw.githubusercontent.com/jacob-meacham/kol-completionist/master/completionist.js
// @downloadURL  https://raw.githubusercontent.com/jacob-meacham/kol-completionist/master/completionist.js
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

// TODO: Put in the real numbers
// TODO: Get this from an external source

var items = [
    // Unobtainable Tattoos
    { name: 'AWOL I', price: -1 },
    { name: 'AWOL II', price: -1 },
    { name: 'AWOL III', price: -1 },
    { name: 'AWOL IV', price: -1 },
    { name: 'AWOL V', price: -1 },

    // Tattoo Cleanup
    { name: 'Sneaky Pete XXIX', price: -1 },
    { name: 'Sneaky Pete XXIX 2', price: -1 },
    { name: 'Sneaky Pete XXIX 3', price: -1 },
    { name: 'Sneaky Pete XXIX 4', price: -1 },

    // Unobtainable Trophies
    { name: '10+ Turns Protesting', price: -1 },
    { name: '100+ Turns Protesting', price: -1 },
    { name: 'Be Present for Ascension Rollout', price: -1 },
    { name: 'Defeat 10 Reindeer', price: -1 },
    { name: 'Defeat 100 Reindeer', price: -1 },
    { name: 'No Pants on 1st Jan 2006', price: -1 },

    // Underworld
    { name: 'Underworld truncheon', price: -1 },
    { name: 'Staff of the Woodfire', price: -1 },
    { name: 'Underworld flail', price: -1 },
    { name: 'Underworld Bonsai', price: -1 },

    // Unobtainable food
    { name: 'Banana-frosted king cake', price: -1 },
    { name: 'Blueberry-frosted king cake', price: -1 },
    { name: 'Bowl of unidentifiable goo', price: -1 },
    { name: 'Brussels Sprout Stir-Fry', price: -1 },
    { name: 'Candy cane pizza', price: -1 },
    { name: 'Candy Cane Surprise', price: -1 },
    { name: 'Carrot, Cabbage, and Kale Pizza', price: -1 },
    { name: 'Children\'s Meal of the Damned', price: -1 },
    { name: 'Chocolate-frosted king cake', price: -1 },
    { name: 'Crazy Dragon Shogun Buddha Roll', price: -1 },
    { name: 'CRIMBCO Deluxe Reconstituted Gruel with Simulated Raisins', price: -1 },
    { name: 'CRIMBCO Reconstituted Gruel', price: -1 },
    { name: 'Disc-Shaped Nutrition Unit', price: -1 },
    { name: 'festive sausage', price: -1 },
    { name: 'Gingerborg Hive', price: -1 },
    { name: 'Gingerbread massacre', price: -1 },
    { name: 'Grimdrop Chow Mein', price: -1 },
    { name: 'Grimgerbread House', price: -1 },
    { name: 'Halibut Alfredo', price: -1 },
    { name: 'holiday cheese log', price: -1 },
    { name: 'It Came From Beyond Dessert', price: -1 },
    { name: 'New and Improved CRIMBCO Reconstituted Gruel', price: -1 },
    { name: 'Rainbow Spider Fun Roll', price: -1 },
    { name: 'Red Herring Velvet Cake', price: -1 },
    { name: 'Soylent Red and Green', price: -1 },
    { name: 'Tin rations', price: -1 },
    { name: 'Turnip and Rutabaga Pie', price: -1 },
    { name: 'Valentine\'s Day cake', price: -1 },
    { name: 'Vampire cake', price: -1 },
    { name: 'Vanilla-frosted king cake', price: -1 },
    { name: 'Vegas Volcano Lava Roll', price: -1 },
    { name: 'Wedge of gray cheese', price: -1 },
    { name: 'Shoots and leaves', price: -1 },

    // Unobtainable booze
    { name: 'Acqua Del Piatto Merlot', price: -1 },
    { name: 'Acque Luride Grezze Cabernet', price: -1 },
    { name: 'Black and Tan and Red All Over', price: -1 },
    { name: 'CRIMBCO Egg Substitute Nog Substitute', price: -1 },
    { name: 'CRIMBCO Extreme Braincracker Sour', price: -1 },
    { name: 'CRIMBCO Ribbon Candy Schnapps', price: -1 },
    { name: 'CRIMBCO wine', price: -1 },
    { name: 'Crimboku Drop', price: -1 },
    { name: 'Crimbo Saketini', price: -1 },
    { name: 'Desert Island Iced Tea', price: -1 },
    { name: 'Ecto-nog', price: -1 },
    { name: 'Ferita Del Petto Zinfandel', price: -1 },
    { name: 'Fermented honey', price: -1 },
    { name: 'Flaming Crimbo Log', price: -1 },
    { name: 'Gin and Herring', price: -1 },
    { name: 'Grimacider', price: -1 },
    { name: 'Grimacite Bock', price: -1 },
    { name: 'Hi-Octane Peppermint Jet Fuel', price: -1 },
    { name: 'Horseradish-infused Vodka', price: -1 },
    { name: 'Hot toady', price: -1 },
    { name: 'Isotope Nog', price: -1 },
    { name: 'Jeppson\'s Malort', price: -1 },
    { name: 'Jerkitini', price: -1 },
    { name: 'Maiali Sifilitici Pinot Noir', price: -1 },
    { name: 'Moons-shine', price: -1 },
    { name: 'Mutagin \'n\' Tonic', price: -1 },
    { name: 'Oil Nog', price: -1 },
    { name: 'Spasmi Dolorosi Del Rene Champagne', price: -1 },
    { name: 'Uovo Marcio Shiraz', price: -1 },
    { name: 'White-label gin', price: -1 },

    // KoL Con
    { name: 'KoL Con 3-D Glasses', price: -1 },
    { name: 'KoL Con IV Pole', price: -1 },
    { name: 'KoL Con Cinco Piñata Bat', price: -1 },
    { name: 'KoL Con Six Pack', price: -1 },
    { name: 'Seven Loco', price: -1 },
    { name: 'KoL Con 8-Bit power bracelet', price: -1 },
    { name: 'Hat O\' Nine Tails', price: -1 },
    { name: 'KoL Con X Treasure Map', price: -1 },
    { name: 'Size XI Wizard\'s Robe', price: -1 },
    { name: 'KoL Con 12-gauge', price: -1 },

    // Unobtainable Hair Club
    { name: 'HP-35 Calculator', price: -1 },
    { name: 'Silver HP-35 Calculator', price: -1 },
    { name: 'Golden HP-35 Calculator', price: -1 },
    { name: 'Platinum HP-35 Calculator', price: -1 },
    { name: 'Super Platinum HP-35 Calculator', price: -1 },

    // consolation ribbon
    { name: 'consolation ribbon', price: -1 },

    // Twitchery
    { name: 'Time Bandit Badge of Courage', price: -1 },

    // Rainbow pearl
    { name: 'rainbow pearl earring', price: -1 },
    { name: 'rainbow pearl necklace', price: -1 },
    { name: 'rainbow pearl ring', price: -1 },

    // IOTM
    { name: 'miniscule temporal rip', price: 100000000 },
    { name: 'lucky Tam O\'Shanter', price: 100000000 },
    { name: 'hungover chauvinist pig', price: 100000000 },
    { name: 'March hat', price: 100000000 },
    { name: 'doppelshifter egg', price: 100000000 },
    { name: 'McPhee\'s Grimoire of Hilarious Object Summoning', price: 100000000 },
    { name: 'nervous tick egg', price: 100000000 },
    { name: 'personal raindrop', price: 100000000 },
    { name: 'uniclops egg', price: 100000000 },
    { name: 'deflated inflatable dodecapede', price: 100000000 },
    { name: 'airplane charter: Conspiracy Island', price: 100000000 },
    { name: 'coffee sprite', price: 100000000 },
    { name: 'Clan shower', price: 100000000 },
    { name: 'Cheshire Bitten', price: 100000000 },
    { name: 'Tome of Snowcone Summoning', price: 100000000 },
    { name: 'silk garter snake', price: 100000000 },
    { name: 'emo roe', price: 100000000 },
    { name: 'Dark Jill-O-Lantern', price: 100000000 },
    { name: 'crimbo elfling', price: 100000000 },
    { name: 'orphan baby yeti', price: 100000000 },
    { name: 'hand turkey outline', price: 100000000 },
    { name: 'miniature gravy-covered maypole', price: 50000000 },
    { name: 'Sneaky Pete\'s leather jacket', price: 50000000 },
    { name: 'pygmy bugbear shaman', price: 50000000 },
    { name: 'navel ring of navel gazing', price: 50000000 },
    { name: 'passed-out psychedelic bear', price: 50000000 },
    { name: 'suspicious stocking', price: 50000000 },
    { name: 'jitterbug larva', price: 50000000 },
    { name: 'Jekyllin hide belt', price: 50000000 },
    { name: 'calm attention-deficit demon', price: 50000000 },
    { name: 'hippo tutu', price: 50000000 },
    { name: 'GameInformPowerDailyPro subscription card', price: 30000000 },
    { name: 'Apathargic Bandersnatch', price: 30000000 },
    { name: 'Comma Chameleon egg', price: 30000000 },
    { name: 'hibernating Grimstone Golem', price: 30000000 },
    { name: 'can of Rain-Doh', price: 30000000 },
    { name: 'unemployed hunchbacked minion', price: 30000000 },
    { name: 'Clan speakeasy', price: 30000000 },
    { name: 'dandy lion cub', price: 30000000 },
    { name: 'astral badger', price: 30000000 },
    { name: 'praying Grim Brother', price: 30000000 },
    { name: 'Professor of Spelunkology', price: 30000000 },
    { name: 'The Smith\'s Tome', price: 30000000 },
    { name: 'homeless hobo spirit', price: 30000000 },
    { name: 'unwound cymbal-playing monkey', price: 30000000 },
    { name: 'golden monkey statuette', price: 30000000 },
    { name: 'perfectly ordinary frog', price: 30000000 },
    { name: 'Winter Garden Catalog', price: 30000000 },
    { name: 'airplane charter: Dinseylandfill', price: 30000000 },
    { name: 'V for Vivala mask', price: 30000000 },
    { name: 'organ grinder', price: 30000000 },
    { name: 'Olympic-sized Clan crate', price: 30000000 },
    { name: 'dreaming Jung man', price: 30000000 },
    { name: 'spooky rattling cigar box', price: 30000000 },
    { name: 'class five ecto-larva', price: 30000000 },
    { name: 'yellow puck', price: 30000000 },
    { name: 'Libram of Divine Favors', price: 30000000 },
    { name: 'avatar of the Unconscious Collective', price: 30000000 },
    { name: 'Crimbo P. R. E. S. S. I. E.', price: 10000000 },
    { name: 'haiku katana', price: 10000000 },
    { name: 'Bag o\' Tricks', price: 10000000 },
    { name: 'panicked kernel', price: 10000000 },
    { name: 'Sp\'n-Zor\'s Grimoire of "Tasteful" Gifts', price: 10000000 },
    { name: 'Mayflower bouquet', price: 10000000 },
    { name: 'Operation Patriot Shield', price: 10000000 },
    { name: 'Juju Mojo Mask', price: 10000000 },
    { name: 'Moping Artistic Goth Kid', price: 10000000 },
    { name: 'plastic pumpkin bucket', price: 10000000 },
    { name: 'hibernating robot reindeer', price: 10000000 },
    { name: 'adventurer clone egg', price: 10000000 },
    { name: 'Snow Suit', price: 10000000 },
    { name: 'stuffed-shirt scarecrow', price: 10000000 },
    { name: 'Small Medium', price: 10000000 },
    { name: 'Unagnimated Gnome', price: 10000000 },
    { name: 'stinky cheese ball', price: 10000000 },
    { name: 'KoLHS Pep Squad Box', price: 10000000 },
    { name: 'fist turkey outline', price: 10000000 },
    { name: 'Tome of Clip Art', price: 10000000 },
    { name: 'airplane charter: Spring Break Beach', price: 10000000 },
    { name: 'Jarlsberg\'s pan', price: 10000000 },
    { name: 'mysterious chest', price: 10000000 },
    { name: 'Pete & Jackie\'s Dragon Tooth Emporium Catalog', price: 10000000 },
    { name: 'Thor\'s Pliers', price: 10000000 },
    { name: 'wizard action figure', price: 10000000 },
    { name: 'Greatest American Pants', price: 10000000 },
    { name: 'fairy-worn boots', price: 10000000 },
    { name: 'deactivated nanobots', price: 10000000 },
    { name: 'Libram of Pulled Taffy', price: 10000000 },
    { name: 'Order of the Green Thumb Order Form', price: 10000000 },
    { name: 'The Confiscator\'s Grimoire', price: 10000000 },
    { name: 'Thinknerd\'s Grimoire of Geeky Gifts', price: 10000000 },
    { name: 'Tome of Sugar Shummoning', price: 10000000 },
    { name: 'glowing frisbee', price: 10000000 },
    { name: 'Libram of Love Songs', price: 10000000 },
    { name: 'Tome of Sticker Summoning', price: 10000000 },
    { name: 'Grumpy Bumpkin\'s Pumpkin Seed Catalog', price: 10000000 },
    { name: 'travoltan trousers', price: 10000000 },
    { name: 'Make-Your-Own-Vampire-Fangs kit', price: 10000000 },
    { name: 'llama lama cria', price: 10000000 },
    { name: 'Mint Salton Pepper\'s Peppermint Seed Catalog', price: 10000000 },
    { name: 'Libram of BRICKOs', price: 10000000 },
    { name: 'Sorcerers of the Shore Grimoire', price: 10000000 },
    { name: 'deanimated reanimator\'s coffin', price: 10000000 },
    { name: 'Great Ball of Frozen Fire', price: 10000000 },
    { name: 'jewel-eyed wizard hat', price: 10000000 },
    { name: 'Crimbo sapling', price: 10000000 },
    { name: 'Camp Scout backpack', price: 10000000 },
    { name: 'My Own Pen Pal kit', price: 10000000 },
    { name: 'Libram of Candy Heart Summoning', price: 10000000 },
    { name: 'crown of thrones', price: 10000000 },
    { name: 'Pantsgiving', price: 10000000 },
    { name: 'moveable feast', price: 10000000 },
    { name: 'sane hatrack', price: 10000000 },
    { name: 'infant sandworm', price: 10000000 },
    { name: 'portable Mayo Clinic', price: 10000000 },
    { name: 'rehearsing dramatic hedgehog', price: 10000000 },
    { name: 'Chateau Mantegna room key', price: 10000000 },
    { name: 'container of Spooky Putty', price: 10000000 },
    { name: 'squamous polyp', price: 10000000 },
    { name: 'bottle of lovebug pheromones', price: 10000000 },
    { name: 'Ed the Undying exhibit crate', price: 10000000 },
    { name: 'packet of mayfly bait', price: 10000000 },
    { name: 'naughty origami kit', price: 10000000 },
    { name: 'bottle-rocket crossbow', price: 10000000 },
    { name: 'a cute angel', price: 10000000 },
    { name: 'wax lips', price: 10000000 },
    { name: 'still grill', price: 10000000 },
    { name: 'Buddy Bjorn', price: 10000000 },
    { name: 'Schmalz\'s First Prize Beer', price: 10000000 },
    { name: 'sleeping piano cat', price: 10000000 },
    { name: 'The Groose in the Hoose', price: 10000000 },
    { name: 'Libram of Resolutions', price: 10000000 },
    { name: 'bottled green pixie', price: 10000000 },
    { name: 'floaty stone sphere', price: 10000000 },
    { name: 'siesta-ing Casagnova gnome', price: 10000000 },
    { name: 'Loathing Legion knife', price: 10000000 },
    { name: 'The Kloop in the Coop', price: 10000000 },
    { name: 'Folder Holder', price: 10000000 },
    { name: 'Boris\'s Helm', price: 10000000 },
    { name: 'sweet nutcracker', price: 10000000 },
    { name: 'Little Geneticist DNA-Splicing Lab', price: 10000000 },
    { name: 'iceberglet', price: 10000000 },
    { name: 'elvish sunglasses', price: 11000000 },
    { name: 'little box of fireworks', price: 6666670 },
    { name: 'cotton candy cocoon', price: 10000000 },
    { name: 'candy cornucopia', price: 10000000 },
    { name: 'pilgrim shield', price: 6800000 },

    // Familiars from IOTM
    { name: 'Coffee Pixie', price: 100000000 },
    { name: 'Cheshire Bat', price: 100000000 },
    { name: 'Jill-O-Lantern', price: 100000000 },
    { name: 'Hand Turkey', price: 100000000 },
    { name: 'Crimbo Elf', price: 100000000 },
    { name: 'Hanukkimbo Dreidl', price: 100000000 },
    { name: 'Baby Yeti', price: 100000000 },
    { name: 'Feather Boa Constrictor', price: 100000000 },
    { name: 'Emo Squid', price: 100000000 },
    { name: 'Personal Raincloud', price: 100000000 },
    { name: 'Inflatable Dodecapede', price: 100000000 },
    { name: 'Pygmy Bugbear Shaman', price: 100000000 },
    { name: 'Doppelshifter', price: 100000000 },
    { name: 'Attention-Deficit Demon', price: 100000000 },
    { name: 'Wild Hare', price: 100000000 },
    { name: 'Temporal Riftlet', price: 100000000 },
    { name: 'Nervous Tick', price: 100000000 },
    { name: 'Uniclops', price: 100000000 },
    { name: 'Chauvinist Pig', price: 100000000 },
    { name: 'Jitterbug', price: 50000000 },
    { name: 'Psychedelic Bear', price: 50000000 },
    { name: 'Pygmy Bugbear Shaman', price: 50000000 },
    { name: 'Stocking Mimic', price: 50000000 },
    { name: 'Hippo Ballerina', price: 50000000 },
    { name: 'Frumious Bandersnatch', price: 30000000 },
    { name: 'Comma Chameleon', price: 30000000 },
    { name: 'Hunchbacked Minion', price: 30000000 },
    { name: 'Astral Badger', price: 30000000 },
    { name: 'Dandy Lion', price: 30000000 },
    { name: 'Spirit Hobo', price: 30000000 },
    { name: 'Dancing Frog', price: 30000000 },
    { name: 'Cymbal-Playing Monkey', price: 30000000 },
    { name: 'Gluttonous Green Ghost', price: 30000000 },
    { name: 'Disembodied Hand', price: 30000000 },
    { name: 'Mad Hatrack', price: 10000000 },
    { name: 'Sweet Nutcracker', price: 10000000 },
    { name: 'Casagnova Gnome', price: 10000000 },
    { name: 'Wizard Action Figure', price: 10000000 },
    { name: 'Baby Sandworm', price: 10000000 },
    { name: 'Squamous Gibberer', price: 10000000 },
    { name: 'Robot Reindeer', price: 10000000 },
    { name: 'Piano Cat', price: 10000000 },
    { name: 'Dramatic Hedgehog', price: 10000000 },
    { name: 'Green Pixie', price: 10000000 },
    { name: 'Ancient Yuletide Troll', price: 10000000 },
    { name: 'Cotton Candy Carnie', price: 10000000 },
    { name: 'Sugar Fruit Fairy', price: 10000000 },

    // Dump stupid expensive trophies
    { name: '50 bottles of Bloodweiser', price: 100000000 },
    { name: '50 glasses of electric Kool-Aid.', price: 100000000 },

    // Skills from IOTM
    { name: 'Summon Dice', price: 100000000 },
    { name: 'Summon Hilarious Objects', price: 100000000 },
    { name: 'Summon Snowcones', price: 100000000 },
    { name: 'Summon Stickers', price: 100000000 },
    { name: 'Summon Party Favor', price: 30000000 },
    { name: 'Summon BRICKOs', price: 10000000 },
    { name: 'Summon Sugar Sheets', price: 10000000 },
    { name: 'Summon Love Song', price: 10000000 },

    // Other skills
    { name: 'Rainbow Gravitation', price: 19900000 },
    { name: 'A Crimbo Carol, Ch. 1 (used)', price: 17000000 },
    { name: 'A Crimbo Carol, Ch. 2 (used)', price: 9900000 },

    // Ultrarares
    { name: 'Counterclockwise watch', price: 100000000 },
    { name: 'optimal spreadsheet', price: 100000000 },
    { name: 'Platinum Yendorian Express Card', price: 50000000 },
    { name: 'The Nuge\'s favorite crossbow', price: 50000000 },
    { name: 'hockey stick of furious angry rage', price: 50000000 },
    { name: 'incredibly dense meat gem', price: 50000000 },
    { name: 'Talisman of Baio', price: 30000000 },
    { name: 'crazy bastard sword', price: 30000000 },
    { name: 'Talisman of Bakula', price: 30000000 },
    { name: '17-ball', price: 10000000 },
    { name: 'Dallas Dynasty Falcon Crest shield', price: 10000000 },
    { name: 'hypnodisk', price: 10000000 },

    // Crimbo
    { name: 'Uncle Hobo\'s gift baggy pants', price: 50000000 },
    { name: 'Uncle Hobo\'s epic beard', price: 50000000 },
    { name: 'Uncle Hobo\'s stocking cap', price: 50000000 },
    { name: 'Uncle Hobo\'s fingerless tinsel gloves', price: 50000000 },
    { name: 'Uncle Hobo\'s highest bough', price: 50000000 },
    { name: 'Uncle Hobo\'s belt', price: 50000000 },
    { name: 'Uncle Hobo\'s Rags', price: 50000000 },
    { name: 'time sword', price: 30000000 },
    { name: 'time helmet', price: 30000000 },
    { name: 'time trousers', price: 30000000 },
    { name: 'Crimbo hat', price: 100000000 },
    { name: 'Crimbo pants', price: 100000000 },
    { name: 'Crimbo sword', price: 100000000 },

    // Con items
    { name: 'Hippo tutu', price: 140000000 },
    { name: 'Gygaxian Libram', price: 200000000 },

    // Food only accessible via quantum taco
    { name: 'idiot brain', price: 30000000 },
    { name: 'pie man was not meant to eat', price: 30000000 },
    { name: 'plate of Val-U Brand Every Bean Salad', price: 30000000 },

    // Clubbery
    { name: 'exclusive club', price: 10000000 },
];

// Off, unobtainable, 100M, 50M, 30M, 10M
var valueToPrice = [undefined, 10000000000000000000, 100000000, 50000000, 30000000, 10000000];
var currentItemSet = [];
var selectedValue = GM_getValue('cmplnst.selector', 3);

function updateSelectedItemSet(selected_value) {
    selectedValue = selected_value;
    GM_setValue('cmplnst.selector', selectedValue);

    currentItemSet = [];
    if (selectedValue !== 0) {
        // Not off, so do the filter
        currentItemSet = items.filter(function(val) {
            if (val.price === -1 || val.price >= valueToPrice[selectedValue]) {
                return true;
            }

            return false;
        }).map(function(val) {
            return val.name;
        });
    }

    runFilter();
}

function addSettingsPane() {
    var select_values = ['Off',
                         'Unobtainable Only',
                         '>100 Million Cost',
                         '>50 Million Cost',
                         '>30 Million Cost',
                         '>10 Million Cost'];

    var completionist_pane = $('<div class="cmplnst-pane" />').appendTo('.header');
    $('<div class="cmplnst-header" />').text('Completionist Script').appendTo(completionist_pane);
    var inner = $('<div class="cmplnst-inner" />').appendTo(completionist_pane);

    $('<label for="cmplnst-selection" />').text('Filter: ').appendTo(inner);
    var selector = $('<select name="cmplnst-selection" />');
    selector.appendTo(inner).change(function() { updateSelectedItemSet(selector.val()); });
    for (var i = 0; i < select_values.length; i++) {
        var option = $('<option />', {value: i, text: select_values[i]}).appendTo(selector);
    }

    selector.val(selectedValue);
}

var sections = getSections();
addSettingsPane();
updateSelectedItemSet(selectedValue);

GM_addStyle('.cmplnst-pane { float: right; padding: 3px; border: #ddd 1px solid; font-size: 0.8em; }' +
            '.cmplnst-header { padding-bottom: 5px; text-align: right }' +
            '.cmplnst-inner { padding: 10px; }' +
            '.cmplnst-unobtainable { background-color: rgb(204, 255, 204); opacity: 0.6; }'
           );


function runFilter() {
    $('td').removeClass('cmplnst-unobtainable').filter(function() {
        // If not obtained, and in the unobtainable list, return it.
        var background_color = $(this).css('background-color');
        var unobtained = (background_color === 'rgba(0, 0, 0, 0)' || background_color === 'rgb(255, 204, 204)');

        var text = $.trim($(this).text());
        var unobtainable = (text && currentItemSet.indexOf(text) > -1);

        return unobtained && unobtainable;
    }).addClass('cmplnst-unobtainable').removeAttr('style');

    updateLabels();
}

function getSections() {
    // TODO: The non-labeled sections don't work because they don't have a subheading.
    var sections = [{name: 'skills'}, /*{name: 'ultrarares'},*/ {name: 'trophies'}, {name: 'familiars'}, {name: 'tattoos'},
                    /*, {name: 'disc-smithing'}, {name: 'disc-consumption-food'}, name:{'disc-consumption-booze'}*/];
    for (var i = 0; i < sections.length; i++) {
        sections[i].element = $('a[name=' + sections[i].name + ']');
        sections[i].label = sections[i].element.parent().nextAll('p.subheader').first();
        sections[i].labelText = sections[i].label.text();
    }

    return sections;
}

function updateLabels() {
    for (var i = 0; i < sections.length; i++) {
        // Reset the label text.
        sections[i].label.text(sections[i].labelText);
        var tables_to_include = 1;
        if (sections[i].name === 'tattoos') {
            // Tattoos are split over multiple tables.
            tables_to_include = 4;
        }

        var num_unobtainable = sections[i].element.parent().nextAll('table').slice(0, tables_to_include).find('.cmplnst-unobtainable').length;
        if (sections[i].name === 'tattoos') {
            // Some of these are sequence tattoos, so remove those:
            num_unobtainable -= 8;
        }
        if (num_unobtainable === 0) {
            // None unonbtainable, so no work to do!
            continue;
        }

        // TODO: Another special case :(
        var new_text = '';
        var label_text = sections[i].labelText;
        if (sections[i].name === 'skills') {
            var num_found = parseInt(label_text.match(/(\d+)\s*missing/)[1]);
            new_text = label_text.replace(/\d+\s*missing/, '' + num_found - num_unobtainable + ' missing [' + num_unobtainable + ' unobtainable]');
        } else {
            var num_found = parseInt(label_text.match(/missing (\d+)/)[1]);
            new_text = label_text.replace(/missing \d+/, 'missing ' + (num_found - num_unobtainable) + ' [' + num_unobtainable + ' unobtainable]');
        }

        sections[i].label.text(new_text);
    }
}
