// ==UserScript==
// @name         KoL Completionist Script
// @namespace    http://jemonjam.com
// @version      1.0
// @description  This script will fill in unobtainable (or virtually unobtainable) items in the various KoL profile pages. Completionists rejoice!
// @author       jemonjam
// @include      http*://cheesellc.com/kol/profile.php*
// @include      http*://bumcheekcity.com/kol/profile.php*
// @grant        GM_log
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

var unobtainableItems = [
    // Very expensive skills
    'Summon Snowcones',
    'Summon Stickers',
    'Summon Sugar Sheets',
    'Summon Party Favor',
    'Summon Love Song',
    'Summon BRICKOs',
    'Summon Dice',
    'Summon Hilarious Objects',

    // Unobtainable Tattoos
    'Uncle Hobo\'s Rags',
    'AWOL I',
    'AWOL II',
    'AWOL III',
    'AWOL IV',
    'AWOL V',

    // Tattoo Cleanup
    'Sneaky Pete XXIX',
    'Sneaky Pete XXIX 2',
    'Sneaky Pete XXIX 3',
    'Sneaky Pete XXIX 4',

    // Unobtainable Trophies
    '10+ Turns Protesting',
    '100+ Turns Protesting',
    'Be Present for Ascension Rollout',
    'Defeat 10 Reindeer',
    'Defeat 100 Reindeer',
    'No Pants on 1st Jan 2006',

    // Dump stupid expensive trophies
    '50 bottles of Bloodweiser',
    '50 glasses of electric Kool-Aid.',

    // >50mil meat IOTMs
    'Coffee Pixie',
    'Cheshire Bat',
    'Jill-O-Lantern',
    'Hand Turkey',
    'Crimbo Elf',
    'Hanukkimbo Dreidl',
    'Baby Yeti',
    'Feather Boa Constrictor',
    'Emo Squid',
    'Personal Raincloud',
    'Inflatable Dodecapede',
    'Pygmy Bugbear Shaman',
    'Doppelshifter',
    'Attention-Deficit Demon',
    'Wild Hare',
    'Cymbal-Playing Monkey',
    'Temporal Riftlet',
    'Sweet Nutcracker',
    'Wild Hare',
    'Spirit Hobo',
    'Astral Badger',
    'Comma Chameleon',
    'Jitterbug',
    'Nervous Tick',
    'Ancient Yuletide Troll',
    'Dandy Lion',
    'Green Pixie',
    'Wizard Action Figure',
    'Gluttonous Green Ghost',
    'Casagnova Gnome',
    'Hunchbacked Minion',
    'Mad Hatrack',
    'Cotton Candy Carnie',
    'Disembodied Hand',
    'Uniclops',
    'Psychedelic Bear',
    'Sugar Fruit Fairy',
    'Frumious Bandersnatch',
    'Baby Sandworm',
    'Squamous Gibberer',
    'Dancing Frog',
    'Chauvinist Pig',
    'Stocking Mimic',
    'Underworld Bonsai',
    'Hippo Ballerina',
    'Piano Cat',
    'Dramatic Hedgehog',
    'Robot Reindeer',

    // Uncle Hobo
    'Uncle Hobo\'s gift baggy pants',
    'Uncle Hobo\'s epic beard',
    'Uncle Hobo\'s stocking cap',
    'Uncle Hobo\'s fingerless tinsel gloves',
    'Uncle Hobo\'s highest bough',
    'Uncle Hobo\'s belt',

    // >80mil meat IOTMs
    'Dark Jill-O-Lantern',
    'hand turkey outline',
    'crimbo elfling',
    'orphan baby yeti',
    'silk garter snake',
    'lucky Tam O\'Shanter',
    'emo roe',
    'personal raindrop',
    'miniature gravy-covered maypole',
    'deflated inflatable dodecapede',
    'wax lips',
    'pygmy bugbear shaman',
    'Jekyllin hide belt',
    'doppelshifter egg',
    'miniscule temporal rip',
    'sweet nutcracker',
    'Tome of Snowcone Summoning',
    'iceberglet',
    'March hat',
    'McPhee\'s Grimoire of Hilarious Object Summoning',
    'homeless hobo spirit',
    'astral badger',
    'jewel-eyed wizard hat',
    'Comma Chameleon egg',
    'travoltan trousers',
    'plastic pumpkin bucket',
    'pilgrim shield',
    'yuletide troll chrysalis',
    'Great Ball of Frozen Fire',
    'Libram of Candy Heart Summoning',
    'dandy lion cub',
    'bad penguin egg',
    'Mayflower bouquet',
    'bottled green pixie',
    'bottle-rocket crossbow',
    'wizard action figure',
    'navel ring of navel gazing',
    'class five ecto-larva',
    'V for Vivala mask',
    'Crimbo P. R. E. S. S. I. E.',
    'Libram of Divine Favors',
    'naughty origami kit',
    'sane hatrack',
    'Sp\'n-Zor\'s Grimoire of "Tasteful Gifts"',
    'llama lama cria',
    'little box of fireworks',
    // ...

    // Underworld
    'Underworld truncheon',
    'Staff of the Woodfire',
    'Underworld flail',

    // Expensive smithing discoveries
    'Crimbo hat',
    'Crimbo pants',
    'Crimbo sword',

    // Unobtainable food
    'Banana-frosted king cake',
    'Blueberry-frosted king cake',
    'Bowl of unidentifiable goo',
    'Brussels Sprout Stir-Fry',
    'Candy cane pizza',
    'Candy Cane Surprise',
    'Carrot, Cabbage, and Kale Pizza',
    'Children\'s Meal of the Damned',
    'Chocolate-frosted king cake',
    'Crazy Dragon Shogun Buddha Roll',
    'CRIMBCO Deluxe Reconstituted Gruel with Simulated Raisins',
    'CRIMBCO Reconstituted Gruel',
    'Disc-Shaped Nutrition Unit',
    'festive sausage',
    'Gingerborg Hive',
    'Gingerbread massacre',
    'Grimdrop Chow Mein',
    'Grimgerbread House',
    'Halibut Alfredo',
    'holiday cheese log',
    'It Came From Beyond Dessert',
    'New and Improved CRIMBCO Reconstituted Gruel',
    'Rainbow Spider Fun Roll',
    'Red Herring Velvet Cake',
    'Soylent Red and Green',
    'Tin rations',
    'Turnip and Rutabaga Pie',
    'Valentine\'s Day cake',
    'Vampire cake',
    'Vanilla-frosted king cake',
    'Vegas Volcano Laval Roll',
    'Wedge of gray cheese',

    // Unobtainable booze
    'Acqua Del Piatto Merlot',
    'Acque Luride Grezze Cabernet',
    'Black and Tan and Red All Over',
    'CRIMBCO Egg Substitute Nog Substitute',
    'CRIMBCO Extreme Braincracker Sour',
    'CRIMBCO Ribbon Candy Schnapps',
    'CRIMBCO wine',
    'Crimboku Drop',
    'Crimbo Saketini',
    'Desert Island Iced Tea',
    'Ecto-nog',
    'Ferita Del Petto Zinfandel',
    'Fermented honey',
    'Flaming Crimbo Log',
    'Gin and Herring',
    'Grimacider',
    'Grimacite Bock',
    'Hi-Octane Peppermint Jet Fuel',
    'Horseradish-infused Vodka',
    'Hot toady',
    'Isotope Nog',
    'Jeppson\'s Malort',
    'Jerkitini',
    'Maiali Sifilitici Pinot Noir',
    'Moons-shine',
    'Mutagin \'n\' Tonic',
    'Oil Nog',
    'Spasmi Dolorosi Del Rene Champagne',
    'Uovo Marcio Shiraz',
    'White-label gin'
];

$('td[style]').filter(function() {
    // If not obtained, and in the unobtainable list, return it.
    var background_color = $(this).css('background-color');
    var unobtained = background_color === 'rgba(0, 0, 0, 0)' || background_color === 'rgb(255, 204, 204)';
    var unobtainable = unobtainableItems.indexOf($(this).text()) > -1;
    
    return unobtained && unobtainable;
}).addClass('unobtainable').css({'background-color': 'rgb(204, 255, 204)', 'opacity': '0.6'});