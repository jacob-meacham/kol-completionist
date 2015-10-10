// ==UserScript==
// @name         KoL Completionist Script
// @namespace    http://jemonjam.com
// @version      1.0
// @description  This script will fill in unobtainable (or virtually unobtainable) items in the various KoL profile pages. Completionists rejoice!
// @author       jemonjam
// @include      http*://cheesellc.com/kol/profile.php*
// @include      http*://bumcheekcity.com/kol/profile.php*
// @grant        GM_log
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

// Totally unobtainable
var unobtainableItems = [
    // Unobtainable Tattoos
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

    // Underworld
    'Underworld truncheon',
    'Staff of the Woodfire',
    'Underworld flail',
    'Underworld Bonsai',

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

// >100mm 
var extremelyExpensiveItems = [
    // IOTM
    'miniscule temporal rip',
    'lucky Tam O\'Shanter',
    'hungover chauvinist pig',
    'March hat',
    'doppelshifter egg',
    'McPhee\'s Grimoire of Hilarious Object Summoning',
    'nervous tick egg',
    'personal raindrop',
    'uniclops egg',
    'deflated inflatable dodecapede',
    'airplane charter: Conspiracy Island',
    'coffee sprite',
    'Clan shower',
    'Cheshire Bitten',
    'Tome of Snowcone Summoning',
    'silk garter snake',
    'emo roe',
    'Dark Jill-O-Lantern',
    'crimbo elfling',
    'orphan baby yeti',
    'hand turkey outline',


    // Familiars from IOTM
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
    'Temporal Riftlet',
    'Nervous Tick',
    'Uniclops',
    'Chauvinist Pig',
    
    // Dump stupid expensive trophies
    '50 bottles of Bloodweiser',
    '50 glasses of electric Kool-Aid.',
    
    // Expensive smithing discoveries
    'Crimbo hat',
    'Crimbo pants',
    'Crimbo sword',
    
    // Skills from IOTM
    'Summon Dice',
    'Summon Hilarious Objects',
    'Summon Snowcones',
    'Summon Stickers',
    
    // Ultrarares
    'Counterclockwise watch',
    'optimal spreadsheet'
];

// >50mm
var veryExpensiveItems = [
    // IOTM
    'miniature gravy-covered maypole',
    'Sneaky Pete\'s leather jacket',
    'pygmy bugbear shaman',
    'navel ring of navel gazing',
    'passed-out psychedelic bear',
    'suspicious stocking',
    'jitterbug larva',
    'Jekyllin hide belt',
    'calm attention-deficit demon',
    'hippo tutu',

    // Familiars from IOTM
    'Jitterbug',
    'Psychedelic Bear',
    'Pygmy Bugbear Shaman',
    'Stocking Mimic',
    'Hippo Ballerina',

    // Uncle Hobo
    'Uncle Hobo\'s gift baggy pants',
    'Uncle Hobo\'s epic beard',
    'Uncle Hobo\'s stocking cap',
    'Uncle Hobo\'s fingerless tinsel gloves',
    'Uncle Hobo\'s highest bough',
    'Uncle Hobo\'s belt',
    'Uncle Hobo\'s Rags',
    
    // Ultrarares
    'Platinum Yendorian Express Card',
    'The Nuge\'s favorite crossbow',
    'hockey stick of furious angry rage',
    'incredibly dense meat gem'
    
];

// >30mm
var expensiveItems = [
    // IOTM
    'GameInformPowerDailyPro subscription card',
    'Apathargic Bandersnatch',
    'Comma Chameleon egg',
    'hibernating Grimstone Golem',
    'can of Rain-Doh',
    'unemployed hunchbacked minion',
    'Clan speakeasy',
    'dandy lion cub',
    'astral badger',
    'praying Grim Brother',
    'Professor of Spelunkology',
    'The Smith\'s Tome',
    'homeless hobo spirit',
    'unwound cymbal-playing monkey',
    'golden monkey statuette',
    'perfectly ordinary frog',
    'Winter Garden Catalog',
    'airplane charter: Dinseylandfill',
    'V for Vivala mask',
    'organ grinder',
    'Olympic-sized Clan crate',
    'dreaming Jung man',
    'spooky rattling cigar box',
    'class five ecto-larva',
    'yellow puck',
    'Libram of Divine Favors',
    'avatar of the Unconscious Collective',

    // Familiars from IOTM
    'Frumious Bandersnatch',
    'Comma Chameleon',
    'Hunchbacked Minion',
    'Astral Badger',
    'Dandy Lion',
    'Spirit Hobo',
    'Dancing Frog',
    'Cymbal-Playing Monkey',
    'Gluttonous Green Ghost',
    'Disembodied Hand',
    
    // Skills from IOTM
    'Summon Party Favor',
    
    // Ultrarares
    'Talisman of Baio',
    'crazy bastard sword',
    'Talisman of Bakula'
    
];

// > 10mm
var prettyCheapItems = [
    // IOTM
    'Crimbo P. R. E. S. S. I. E.',
    'haiku katana',
    'Bag o\' Tricks',
    'panicked kernel',
    'Sp\'n-Zor\'s Grimoire of "Tasteful" Gifts',
    'Mayflower bouquet',
    'Operation Patriot Shield',
    'Juju Mojo Mask',
    'Moping Artistic Goth Kid',
    'plastic pumpkin bucket',
    'hibernating robot reindeer',
    'adventurer clone egg',
    'Snow Suit',
    'stuffed-shirt scarecrow',
    'Small Medium',
    'Unagnimated Gnome',
    'stinky cheese ball',
    'KoLHS Pep Squad Box',
    'fist turkey outline',
    'Tome of Clip Art',
    'airplane charter: Spring Break Beach',
    'Jarlsberg\'s pan',
    'mysterious chest',
    'Pete & Jackie\'s Dragon Tooth Emporium Catalog',
    'Thor\'s Pliers',
    'wizard action figure',
    'Greatest American Pants',
    'fairy-worn boots',
    'deactivated nanobots',
    'Libram of Pulled Taffy',
    'Order of the Green Thumb Order Form',
    'The Confiscator\'s Grimoire',
    'Thinknerd\'s Grimoire of Geeky Gifts',
    'Tome of Sugar Shummoning',
    'glowing frisbee',
    'Libram of Love Songs',
    'Tome of Sticker Summoning',
    'Grumpy Bumpkin\'s Pumpkin Seed Catalog',
    'travoltan trousers',
    'Make-Your-Own-Vampire-Fangs kit',
    'llama lama cria',
    'Mint Salton Pepper\'s Peppermint Seed Catalog',
    'Libram of BRICKOs',
    'Sorcerers of the Shore Grimoire',
    'deanimated reanimator\'s coffin',
    'Great Ball of Frozen Fire',
    'jewel-eyed wizard hat',
    'Crimbo sapling',
    'Camp Scout backpack',
    'My Own Pen Pal kit',
    'Libram of Candy Heart Summoning',
    'crown of thrones',
    'Pantsgiving',
    'moveable feast',
    'sane hatrack',
    'infant sandworm',
    'portable Mayo Clinic',
    'rehearsing dramatic hedgehog',
    'Chateau Mantegna room key',
    'container of Spooky Putty',
    'squamous polyp',
    'bottle of lovebug pheromones',
    'Ed the Undying exhibit crate',
    'packet of mayfly bait',
    'naughty origami kit',
    'bottle-rocket crossbow',
    'a cute angel',
    'wax lips',
    'still grill',
    'Buddy Bjorn',
    'Schmalz\'s First Prize Beer',
    'sleeping piano cat',
    'The Groose in the Hoose',
    'Libram of Resolutions',
    'bottled green pixie',
    'floaty stone sphere',
    'siesta-ing Casagnova gnome',
    'Loathing Legion knife',
    'The Kloop in the Coop',
    'Folder Holder',
    'Boris\'s Helm',
    'sweet nutcracker',
    'Little Geneticist DNA-Splicing Lab',
    'iceberglet',

    // Familiars from IOTM
    'Mad Hatrack',
    'Sweet Nutcracker',
    'Casagnova Gnome',
    'Wizard Action Figure',
    'Baby Sandworm',
    'Squamous Gibberer',
    'Robot Reindeer',
    'Piano Cat',
    'Dramatic Hedgehog',
    'Green Pixie',
    'Ancient Yuletide Troll',

    // Skills from IOTM
    'Summon BRICKOs',
    'Summon Sugar Sheets',
    'Summon Love Song',
    
    // Ultra-rares
    '17-ball',
    'Dallas Dynasty Falcon Crest shield',
    'hypnodisk',
    
    
];

var allItems = [unobtainableItems, extremelyExpensiveItems, veryExpensiveItems, expensiveItems, prettyCheapItems];
var currentItemSet = [];
var selectedValue = GM_getValue('cmplnst.selector', 3);

function updateSelectedItemSet(selected_value) {
    selectedValue = selected_value;
    GM_setValue('cmplnst.selector', selectedValue);
    
    currentItemSet = [];
    for (var i = 0; i < selected_value; i++) {
        currentItemSet += allItems[i];
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
    selector.appendTo(inner).change(function() { updateSelectedItemSet(selector.val()) });
    for (var i = 0; i < select_values.length; i++) {
        var option = $('<option />', {value: i, text: select_values[i]}).appendTo(selector);
    }
    
    selector.val(selectedValue);
};

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
        var unobtained = background_color === 'rgba(0, 0, 0, 0)' || background_color === 'rgb(255, 204, 204)';
        var unobtainable = $(this).text() && currentItemSet.indexOf($(this).text()) > -1;
    
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
