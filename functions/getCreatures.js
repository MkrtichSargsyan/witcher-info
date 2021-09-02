exports.handler = async (event) => {
  const creatures = [
    {
      id: 1,
      name: 'Alghoul',
      class: 'Necrophage',
      tactics:
        '- They emit a piercing scream to stun nearby victims - Grows spines on its back when enraged that injure you if attacked',
      susceptibility: 'Necrophage oil, Axii',
      immunity: 'None',
      quest:
        "Contract: Woodland Beast, Contract: The Beast of Honorton, Where the Cat and Wolf Play..., The Tower Outta Nowheres, Looters, Vintner's Contract: Rivecalme Storehouse",
      image:
        'https://static.wikia.nocookie.net/witcher/images/6/64/Tw3_journal_alghoul.png',
      occurences:
        'Battlefields and any location where a large number of corpses can be found in shallow graves or left out to rot.',
    },
    {
      id: 2,
      name: 'Alp',
      class: 'Vampire',
      tactics:
        '- Knocking down with Aard sign may allow you to finish it in one strike - Alps are extremely fast and prefer dodging to blocking. They also often jump out of sight to either drop down on you or prepare their shriek.',
      susceptibility: 'Yrden, Vampire oil, Moon dust, Black Blood',
      immunity: 'None',
      quest: 'The Night of Long Fangs, The Toussaint Prison Experiment',
      image:
        'https://static.wikia.nocookie.net/witcher/images/a/a9/Tw3_journal_alp.png',
      occurences: 'Toussaint',
    },
    {
      id: 3,
      name: 'Alpha Garkain',
      class: 'Vampire',
      tactics:
        '- Like other vampires, Black Blood and vampire oil is effective against them. - Susceptible to the Samum and Moon Dust bombs.',
      susceptibility: 'Moon dust, Samum, Vampire oil, Black Blood',
      immunity: 'None',
      quest: 'Blood Simple',
      image:
        'https://static.wikia.nocookie.net/witcher/images/d/d0/Tw3_journal_garkain_mh.png',
      occurences: 'Toussaint',
    },
    {
      id: 4,
      name: 'Arachas',
      class: 'Insectoid',
      tactics:
        '- Its attacks are laced with poison. - Shoot a sticky web stream which binds Geralt in place for a few seconds allowing the Arachas to charge in. - Blindly hacking away at the Arachas from the front is unwise as it will cover itself with its pincers to mitigate damage and open Geralt up to a vicious counter-attack which can knock down',
      susceptibility: 'Golden Oriole, Insectoid oil',
      immunity: 'Aard',
      quest:
        "Contract: Missing Brother, Contract: Skellige's Most Wanted, Practicum in Advanced Alchemy, Hidden in the Depths",
      image:
        'https://static.wikia.nocookie.net/witcher/images/8/8a/Tw3_journal_arachas.png',
      occurences: 'Velen, Novigrad, Skellige',
    },
    {
      id: 5,
      name: 'Archespore',
      class: 'Cursed one',
      tactics:
        "- From a distance, they shoot venom that not only causes substantial damage, but also deals additional poison damage after striking. - Their pods can explode, releasing an explosive poison that deals extremely high damage - The creature will also lunge forward if you get too close. - Quickly sink into the ground and sprout from any nearby pods currently on the ground. If you don't immediately roll away, it will explode in your face like the other pods do",
      susceptibility: 'Cursed oil, Aard, Igni',
      immunity: 'None',
      quest:
        'Of Sheers and a Witcher I Sing, Till Death Do You Part, Wine Wars: Coronata, Wine Wars: Vermentino, Wine Wars: The Deus in the Machina, Feet as Cold as Ice, The Curse of Carnarvon, Scavenger Hunt: Grandmaster Feline Gear, Scavenger Hunt: Grandmaster Manti',
      image:
        'https://static.wikia.nocookie.net/witcher/images/c/cd/Tw3_journal_echinops.png',
      occurences: 'Toussaint',
    },
    {
      id: 6,
      name: 'Archgriffin',
      class: 'Hybrid',
      tactics:
        '- Spit acid at you in order to catch you off guard. - Griffins will repeatedly swoop down from the sky in order to rake their target using their talons. - Attacks from a griffin will cause bleeding. The Quen sign, or a Swallow potion can be used to counter bleed effects.',
      susceptibility: 'Grapeshot, Hybrid oil, Aard, Crossbow',
      immunity: 'Fire',
      quest:
        "Contract: The Griffin from the Highlands, Contract:, The Creature from Oxenfurt Forest, Unlucky's Treasure, A Surprise Inheritance",
      image:
        'https://static.wikia.nocookie.net/witcher/images/9/9d/Tw3_journal_archgriffin.png',
      occurences: 'Forests',
    },
    {
      id: 7,
      name: 'Banshee',
      class: 'Specter',
      tactics:
        "- The infamous scream which will stun and disorient Geralt if he's caught in its wake, opening him up to melee attacks. - Summon friendly skeletons to mob Geralt and restrict his freedom of movement.",
      susceptibility: 'Specter oil',
      immunity: 'None',
      quest:
        "A Knight's Tales, Spoontaneous Profits!, But Other Than That, How Did You Enjoy the Play?",
      image:
        'https://static.wikia.nocookie.net/witcher/images/9/90/Tw3_journal_banshee.png',
      occurences: 'Toussaint',
    },
    {
      id: 8,
      name: 'Barghest',
      class: 'Specter',
      tactics:
        '- Appear in packs like dogs and wolves and behave simillary, with two major difference. - They occasionally charge at the player in great speed, temporally blinding Geralt. - When being attacked, they sometimes counterattack by spitting fire towards Geralt, potentially set him ablaze. - Barghests tend to use their special attacks more often when in pack, so try to single them out one by one.',
      susceptibility: 'Moon Dust, Specter oil, Axii, Yrden',
      immunity: 'Igni',
      quest:
        'La Cage au Fou, The Warble of a Smitten Knight, Scavenger Hunt: Grandmaster Wolven Gear',
      image:
        'https://static.wikia.nocookie.net/witcher/images/8/8e/Tw3_journal_barghest.png',
      occurences: 'Toussaint',
    },
    {
      id: 9,
      name: 'Bear',
      class: 'Beasts',
      tactics:
        '- Bears possess great vitality, amazing strength and are quick to anger if you find yourself within their territory. - It is best to avoid a head on attack with a bear, try and dodge the swipes of their claws and cut at their flanks.',
      susceptibility: 'Beast oil, Quen',
      immunity: 'None',
      quest:
        'Scavenger Hunt: Cat School Gear Upgrade Diagrams - Part 2, Big Game Hunter',
      image:
        'https://static.wikia.nocookie.net/witcher/images/0/07/Tw3_journal_bear.png',
      occurences: 'Velen, Skellige, White Orchard, Toussaint',
    },
    {
      id: 10,
      name: 'Bruxae',
      class: 'Vampire',
      tactics:
        '- They turn invisible during the fight and perform strikes without being seen, ',
      susceptibility: 'Moon dust, Black Blood, Vampire oil, Yrden',
      immunity: 'None',
      quest:
        'The Beast of Toussaint, The Night of Long Fangs, Pomp and Strange Circumstance, Scavenger Hunt: Grandmaster Manticore Gear',
      image:
        'https://static.wikia.nocookie.net/witcher/images/d/d1/Tw3_journal_bruxa.png',
      occurences: 'Toussaint',
    },
    {
      id: 11,
      name: 'Chort',
      class: 'Relict',
      tactics:
        '- Chorts are speed and brute strength personified, rivaled only by fiends among relicts. - They use their arms to pummel, claw, and smash their prey. - They also charge with such speed they can barely control themselves as they smash head first into their unfortunate victims.',
      susceptibility: "Devil's Puffball, Relict oil",
      immunity: 'None',
      quest: "Contract: Mysterious Tracks, Berengar's Blade, Greenhouse Effect",
      image:
        'https://static.wikia.nocookie.net/witcher/images/6/6a/Tw3_journal_chort.png',
      occurences: 'Velen, Skellige, Kaer Morhen',
    },
    {
      id: 12,
      name: 'Cyclops',
      class: 'Ogroid',
      tactics:
        '- Cyclopses go where they want; even a witcher should move to the side if a cyclops is charging forward. - The strongest witchers cannot parry or block any punch or slap delivered by a cyclops, and a mere hop backwards may not be enough to stay out of reach. Roll to the side or behind a cyclops to evade their attacks and reach their vulnerable flanks. - Do not stand in one place when fighting a cyclops. They rarely flinch from anything a witcher can do to them. - If a cyclops raises both hands in the air, avoid being anywhere close to the front of it.',
      susceptibility: 'Ogroid oil, Quen, Axii',
      immunity: 'None',
      quest:
        'Hard Times, Practicum in Advanced Alchemy, Scavenger Hunt: Bear School Gear Upgrade Diagrams - Part 4, Scavenger Hunt: Griffin School Gear Upgrade Diagrams - Part 4',
      image:
        'https://static.wikia.nocookie.net/witcher/images/d/db/Tw3_journal_cyclops.png',
      occurences: 'Velen, Skellige, Kaer Morhen',
    },
    {
      id: 13,
      name: 'Devourer',
      class: 'Necrophage',
      tactics:
        '- Devourers will explode when their health reaches a certain level. - When you see them start to choke and their heads swell, back away quickly. Their death attacks can damage nearby enemies as well.',
      susceptibility: 'Necrophage oil',
      immunity: 'None',
      quest: 'The Lord of Undvik, For Fame and Glory',
      image:
        'https://static.wikia.nocookie.net/witcher/images/0/00/Tw3_devourer.png',
      occurences: 'With rotfiends, near corpses',
    },
    {
      id: 14,
      name: 'Djinns',
      class: 'Elementa',
      tactics:
        '- The closer a djinn is to death or capture, the more dangerous it becomes. - The massive area-of-effect spells it can cast come faster, and it may teleport more often the more desperate it becomes. - The aard and igni signs empower a djinn greatly, while axii and yrden calm it down and make it easier to combat.',
      susceptibility: 'Dimeritium bomb, Elementa oil',
      immunity: 'None',
      quest: 'The Last Wish',
      image:
        'https://static.wikia.nocookie.net/witcher/images/e/e2/Tw3_journal_djinn.png',
      occurences: 'Skellige',
    },
    {
      id: 15,
      name: 'Doppler',
      class: 'Relict',
      tactics:
        "- When a doppler assumes the form of its attacker, it gains some of its skills. In the case of the doppler hunted by Geralt, he gains the ability to use the active shield mode for Quen, and can even use blasts of Igni. - The doppler's swordplay is nearly on par with that of the witcher, as he can parry and strike just as swiftly. - Be patient when fighting the doppler. Do not attack when his active shield is clearly visible",
      susceptibility: 'Relict oil',
      immunity: 'None',
      quest: "Contract: An Elusive Thief, Contract: Skellige's Most Wanted",
      image:
        'https://static.wikia.nocookie.net/witcher/images/d/d6/Tw3_journal_doppler.png',
      occurences: 'Novigrad, Skellige',
    },
    {
      id: 16,
      name: 'Dog',
      class: 'Beasts',
      tactics:
        "- One on one a single dog is not much of a threat at all; it's a pack of them surrounding you that is the problem. - You have to drop each one quickly while simultaneously dodging out of range of his friends coming at you from the sides and behind. - Dogs are also particularly fast on their feet, while they aren't all that strong, their speed can more than make up for it if a Witcher is careless.",
      susceptibility: 'Beast oil',
      immunity: 'None',
      quest: "Missing in Action, A Dog's Life",
      image:
        'https://static.wikia.nocookie.net/witcher/images/e/e4/Tw3_journal_dog.png',
      occurences: 'Velen, Novigrad, Skellige',
    },
    {
      id: 17,
      name: 'Dracolizard',
      class: 'Draconid',
      tactics:
        "- Slyzards aren't affected by stunlock after dodging and punishing one of their attacks. To adapt to this, alternate between dodging and landing a single hit. Evade to the side, strike once, then prepare for the counterattack, and repeat the cycle - Sometimes the slyzard will attack by breathing fire, which locks it into an animation for a time, which can allow two or even three retaliatory strikes. - It's easily dodged with a dash if you're in close, but can catch you off guard at a distance",
      susceptibility: 'Grapeshot, Draconid oil, Aard, Quen',
      immunity: 'Fire',
      quest: 'Contract: Bovine Blues, Wine Wars: Belgaard',
      image:
        'https://static.wikia.nocookie.net/witcher/images/3/30/Tw3_journal_dracolizard.png',
      occurences: 'Dragon Mountains near Barefield, Toussaint',
    },
    {
      id: 18,
      name: 'Drowners',
      class: 'Necrophage',
      tactics:
        "- Drowners are predominantly pack creatures by nature, usually in groups of three or greater. - Drowner's leaping attacks cannot be parried or countered, attempting to do so will momentarily stagger Geralt and render him immobile for several seconds, often enough for other drowners to land attacks on him. - Their normal clawing attack on the other hand are susceptible to counterattacks, but doing so when multiple drowners are are landing hits simultaneously could be dangerous.",
      susceptibility: 'Necrophage oil, Igni',
      immunity: 'None',
      quest:
        "Precious Cargo, A Favor for a Friend, At the Mercy of Strangers, Black Pearl, Forefathers' Eve, Return to Crookback Bog, Hidden Messages of the Nilfgaardian Kind, Now or Never, The Last Wish, Contract: Woodland Beast, Contract: Here Comes the Groom, Contr",
      image:
        'https://static.wikia.nocookie.net/witcher/images/0/09/Tw3_journal_drowner.png',
      occurences: 'Novigrad, Skellige, Toussaint, Velen, White Orchard',
    },
    {
      id: 19,
      name: 'Earth Elemental',
      class: 'Elementa',
      tactics:
        "- You should be alert for elementals to raise a foot high off the ground - If an earth elemental jumps off the ground, move away as quickly as possible. The resulting shockwave knocks down any nearby victims and also creates a ring of rock around the both of you at a certain range. - The hammerblows delivered by an earth elemental's fist can be made easier to avoid by using Yrden. - If you see the elemental crouch down and cover itself with its arms, do not attack; it will be partially reflected back at you, staggering you or breaking Quen, and the elemental will soon slam its fist into the ground creating a shockwave.",
      susceptibility: 'Dimeritium bomb, Elementa oil',
      immunity: 'None',
      quest:
        "The King is Dead â€“ Long Live the King, The Witchers' Forge, The Tower Outta Nowheres, Scavenger Hunt: Bear School Gear Upgrade Diagrams - Part 3, Scavenger Hunt: Cat School Gear Upgrade Diagrams - Part 3",
      image:
        'https://static.wikia.nocookie.net/witcher/images/9/94/Tw3_journal_earthelemental.png',
      occurences: "Elven ruins, Ermion's laboratory in Kaer Trolde citadel",
    },
    {
      id: 20,
      name: 'Ekhidna',
      class: 'Hybrid',
      tactics:
        '- They can do both flying and underwater attacks - Shoot them down with crossbow',
      susceptibility: 'Grapeshot, Hybrid oil, Igni, Aard',
      immunity: 'None',
      quest: 'Contract: Here Comes the Groom, Taken as a Lass',
      image:
        'https://static.wikia.nocookie.net/witcher/images/3/35/Tw3_journal_melusine.png',
      occurences: 'Bodies of water and shorelines',
    },
    {
      id: 21,
      name: 'Ekimmara',
      class: 'Vampire',
      tactics:
        '- Turns invisible then reappears. - Ekimmaras are especially dangerous foes due to their ability to regenerate. They can even outlast a witcher using the finest potions.',
      susceptibility: "Devil's Puffball, Vampire oil, Igni",
      immunity: 'None',
      quest:
        'Contract: The Mystery of the Byways Murders, Following the Thread, Scavenger Hunt: Griffin School Gear',
      image:
        'https://static.wikia.nocookie.net/witcher/images/d/d8/Tw3_journal_ekimmara.png',
      occurences: 'Novigrad, Velen',
    },
    {
      id: 22,
      name: 'Werewolf',
      class: 'Cursed one',
      tactics:
        '- They can jump great distances and at such high speeds that defending yourself against one can be challenging at best. - Utilising the sign Yrden can be a useful way to slow them down, making close quarter combat safer. Igni and Axii can also be used to stop the werewolf on its tracks momentarily. - Werewolves have an intriguingly powerful health regeneration ability. Players who are unable to give enough damage output within short time will have to be prepared for an exhausting fight, if not at all impossible',
      susceptibility: "Moon Dust, Devil's Puffball, Cursed oil, Igni",
      immunity: 'None',
      quest:
        "Ciri's Story: The King of the Wolves, Contract: Skellige's Most Wanted, In Wolf's Clothing, Little Red, Wild at Heart, The Whispering Hillock",
      image:
        'https://static.wikia.nocookie.net/witcher/images/b/ba/Tw3_journal_werewolf.png',
      occurences: 'Velen, Skellige',
    },
    {
      id: 23,
      name: 'Endrega drone',
      class: 'Insectoid',
      tactics:
        '- Endrega drones can shoot poisoned quills at distant targets from their abdomens, or attack with their pincers. - Drones are extremely aggressive and territorial. - Golden Oriole can neutralize the poison and prevent aggravated damage from the wounds. ',
      susceptibility: 'Golden Oriole, Insectoid oil',
      immunity: 'None',
      quest: 'Hidden in the Depths, Wine Wars: Belgaard',
      image:
        'https://static.wikia.nocookie.net/witcher/images/e/e8/Tw3_journal_endregadrone.png',
      occurences: 'Novigrad, Skellige and Toussaint',
    },
    {
      id: 24,
      name: 'Endrega worker',
      class: 'Insectoid',
      tactics:
        '- The pincers and forearms of a worker are venomous, but they can be parried to open the worker up to further attacks. - Workers can be surprisingly troublesome to inexperienced witchers, thanks to the speed with which they can use their claws. - Sidestep their initial attacks to bring their flanks within reach.',
      susceptibility: 'Golden Oriole, Insectoid oil',
      immunity: 'None',
      quest:
        "Wine Wars: Belgaard, Contract: Missing Brother, Contract: Skellige's Most Wanted",
      image:
        'https://static.wikia.nocookie.net/witcher/images/1/1b/Tw3_journal_endregaworker.png',
      occurences: 'Velen, Skellige, Toussaint',
    },
    {
      id: 25,
      name: 'Endrega warrior',
      class: 'Insectoid',
      tactics:
        "- Warriors are as vicious as endrega drones, with the added danger in the form of their poison barbed tail. - The tail can counter a witcher's swordplay with ease, and warriors are known to advance on an enemy with the tail first. - Warriors strain can strike quickly with its jaws and forelegs. - It can also charge headlong into the enemy in an attempt to knock them off balance.",
      susceptibility: 'Golden Oriole, Insectoid oil',
      immunity: 'None',
      quest:
        'Defender of the Faith, The Whispering Hillock, Wine Wars: Belgaard',
      image:
        'https://static.wikia.nocookie.net/witcher/images/c/c8/Tw3_journal_endregawarrior.png',
      occurences: 'Velen, Skellige, Toussaint',
    },
    {
      id: 26,
      name: 'Ethereal',
      class: 'Specter',
      tactics:
        '- Normally only a single ethereal will be active at a time unless you hit one of the dormant ones. - Try to avoid hitting the inactive ones; you will quickly get swarmed and will likely die. - At the start of the battle, you can go to the far end of the room and wait for the ethereals to approach individually - The initial one is quite weak compared to the real life version however each successive shadow becomes more and more skilled. - The final two are almost a pound for pound match for the real life version, so you will need to use the dodge-hit-dodge-hit fighting style and extensive use of Quen (likely with the Active Shield upgrade) to beat him.',
      susceptibility: 'Specter oil, Blizzard',
      immunity: 'None',
      quest: 'Scenes From a Marriage',
      image:
        'https://static.wikia.nocookie.net/witcher/images/8/8e/Tw3_journal_ethereal.png',
      occurences: 'von Everec Estate',
    },
    {
      id: 27,
      name: 'Arachnomorph',
      class: 'Insectoid',
      tactics:
        "- Arachnomorphs have the ability to spit webbing that can stop Geralt in his tracks, leaving him vulnerable to further attack; they always charge in for a hit while you're tangled in the webs. - If you are trapped in the webbing, you can still parry their fast attacks (but not strong/leap attacks), so use this to your advantage. - The spiders attack as one when the odds are in their favor, but when the player starts to attack they retreat at quite a surprising speed leaving the player frustratingly out of reach, spitting the webbing whenever they can.",
      susceptibility: 'Aard, Axii, Insectoid oil',
      immunity: 'None',
      quest:
        "The Drakenborg Redemption, Scenes From a Marriage, Vintner's Contract: Chuchote Cave",
      image:
        'https://static.wikia.nocookie.net/witcher/images/5/5f/Tw3_journal_arachnomorph.png',
      occurences: 'Novigrad, Gustfields, Toussaint',
    },
    {
      id: 28,
      name: 'Fiend',
      class: 'Relict',
      tactics:
        "- It can lure victims into a state of hypnosis, where all they see is the third eye glowing in the darkness. - In terms of attack style, at longer range the fiend will sometimes paw the ground and then do a long range charge like a bull. - Rolling out of the way is your only option. At closer range it will attack with its claws and its horns in moderate-sized sweeping attacks; it isn't particularly good at countering someone hitting it on the rear side almost behind it.",
      susceptibility: "Samum, Devil's Puffball, Relict oil",
      immunity: 'Aard',
      quest:
        'Contract: Missing Son, Return to Crookback Bog, The Isle of Mists, Scavenger Hunt: Wolf School Gear Upgrade Diagrams - Part 5, Bald Mountain',
      image:
        'https://static.wikia.nocookie.net/witcher/images/0/05/Tw3_journal_fiend.png',
      occurences: 'Velen, Skellige',
    },
    {
      id: 29,
      name: 'Fire Elemental',
      class: 'Elementa',
      tactics:
        '- They can use similar abilities to an earth elemental, with the key difference that fire enhances and empowers them. - They can light clothes and armor on fire. Simply drawing close to a fire elemental is dangerous, due to the intense heat they constantly generate.The flames can be temporarily extinguished by Aard.',
      susceptibility: 'Dimeritium bomb, Northern wind, Elementa oil, Aard',
      immunity: 'Igni',
      quest: "Blindingly Obvious, Redania's Most Wanted, The Witchers' Forge",
      image:
        'https://static.wikia.nocookie.net/witcher/images/d/d0/Tw3_journal_fireelemental.png',
      occurences: 'Found in magical ruins',
    },
    {
      id: 30,
      name: 'Fleder',
      class: 'Vampire',
      tactics:
        '- When Fleder attacks you, use a combination of dodges, Igni Sign and quick attacks on it - All you need to keep in mind is that it can leap. Fleders as ekimmaras are especially dangerous foes due to their ability to regenerate.',
      susceptibility: 'Vampire oil, Black Blood',
      immunity: 'None',
      quest: 'La Cage au Fou, The Night of Long Fangs',
      image:
        'https://static.wikia.nocookie.net/witcher/images/c/c3/Tw3_journal_fleder.png',
      occurences: 'Toussaint',
    },
    {
      id: 31,
      name: 'Foglet',
      class: 'Necrophage',
      tactics:
        "- Foglets turns invisible in fog and can also create illusions of themselves that can cause physical harm, while the real foglet stalks the area. - Damaging the illusions disrupts them, and can reveal the foglet's location.",
      susceptibility: 'Moon dust, Necrophage oil, Quen',
      immunity: 'None',
      quest:
        'Contract: Swamp Thing, The Isle of Mists, The Final Trial, Echoes of the Past',
      image:
        'https://static.wikia.nocookie.net/witcher/images/a/a6/Tw3_journal_foglet.png',
      occurences: 'Isle of Mists, Kaer Morhen, Velen',
    },
    {
      id: 32,
      name: 'Gargoyle',
      class: 'Elementa',
      tactics:
        '- A gargoyle is nearly as sturdy as any earth elemental, but significantly faster, more versatile, and seemingly more intelligent. - They can counter overly aggressive witchers by using their poisonous breath. - They can not only throw rocks with a great degree of accuracy and power, but they can leap into the air and crash down atop or next to a witcher with terrifying speed. Both attacks serve to harm and stun victims. - A gargoyle can also stomp the ground with such force that they can stun and partially blind nearby threats',
      susceptibility: 'Dimeritium bomb, Elementa oil, Quen',
      immunity: 'Aard, Igni, Bleeding, Poisoning',
      quest:
        "Wandering in the Dark, Vintner's Contract: Cleaning Those Hard-to-Reach Places, Turn and Face the Strange, The Tower Outta Nowheres",
      image:
        'https://static.wikia.nocookie.net/witcher/images/b/be/Tw3_journal_gargoyle.png',
      occurences: 'Abandoned Ruins and Castles',
    },
    {
      id: 33,
      name: 'Garkain',
      class: 'Vampire',
      tactics:
        '- Like other vampires, Black Blood and vampire oil is effective against them. - Garkains are also susceptible to the Samum and Moon Dust bombs.',
      susceptibility: 'Moon dust, Samum, Vampire oil, Black Blood',
      immunity: 'None',
      quest: 'The Night of Long Fangs',
      image:
        'https://static.wikia.nocookie.net/witcher/images/b/bb/Tw3_journal_garkain.png',
      occurences: 'Toussaint',
    },
    {
      id: 34,
      name: 'Ghoul',
      class: 'Necrophage',
      tactics:
        '- Keep moving around until one ghoul gets separated. When this happens circle the ghoul and try to kill it. Do small attacks now and then, but keep dancing around. - If a ghoul is low on health and starts snarling loudly, this is a sign that the ghoul is becoming enraged and regenerate its health. The Axii sign works well for stopping the effects of enrage.',
      susceptibility: 'Necrophage oil',
      immunity: 'None',
      quest:
        "Bitter Harvest, Blood Ties, Contract: The Mystery of the Byways Murders, For Fame and Glory, Funeral Pyres, La Cage au Fou, Lilac and Gooseberries Vintner's Contract: Rivecalme Storehouse, Witcher Wannabe",
      image:
        'https://static.wikia.nocookie.net/witcher/images/c/c9/Tw3_journal_ghoul.png',
      occurences: 'Anywhere near corpses',
    },
    {
      id: 35,
      name: 'Giant Centipede',
      class: 'Insectoid',
      tactics:
        "- The best way to deal with the giant centipede is the Yrden Sign trap; if it rises within one, the centipede will be paralyzed and won't be able to burrow, allowing you to get quite a few hits in - Once hit several times it will curl into a protective loop. Make sure to roll away when this happens; after a couple of seconds it will swing its body around in a wide sweeping attack before burrowing in the ground to reappear elsewhere.",
      susceptibility: 'Insectoid oil, Yrden',
      immunity: 'None',
      quest:
        'Big Game Hunter, Scavenger Hunt: Grandmaster Ursine Gear, Wine Wars: Belgaard',
      image:
        'https://static.wikia.nocookie.net/witcher/images/d/de/Tw3_journal_scolopendromorph.png',
      occurences: 'Toussaint',
    },
    {
      id: 36,
      name: 'Cloud Giant',
      class: 'Ogroid',
      tactics:
        '- The Cloud Giant has the ability to disappear into the clouds below and then suddenly reappear for a surprise attack. Thus, frequent dodging is recommended, as well as ample use of the Quen sign for protection against these sudden attacks in case a dodge is poorly timed.',
      susceptibility: 'Ogroid oil, Igni sign, Dancing Star',
      immunity: 'None',
      quest: 'Beyond Hill and Dale...',
      image:
        'https://static.wikia.nocookie.net/witcher/images/d/d6/Tw3_journal_cloud_giant.png',
      occurences: "Land of a Thousand Fables, Cloud Giant's castle",
    },
    {
      id: 37,
      name: 'Golyat',
      class: 'Ogroid',
      tactics:
        '- Be careful of swinging attack with his huge club - You can one shot him with a crossbow bolt to the eyes',
      susceptibility: 'Ogroid oil, Quen',
      immunity: 'None',
      quest: 'The Beast of Toussaint',
      image:
        'https://static.wikia.nocookie.net/witcher/images/9/9c/Tw3_journal_dagonet.png',
      occurences: 'Dulcinea Windmill in Toussaint',
    },
    {
      id: 38,
      name: 'Godling',
      class: 'Relict',
      tactics:
        '- They are usually friendly creatures - They gladly perform small services for those in their care, asking only for respect and payment in the form of food or tools in return. They are easily offended by churlish, ungrateful, or rude behavior',
      susceptibility: 'Relict oil, Burdock herb',
      immunity: 'None',
      quest:
        'Ladies of the Wood, Return to Crookback Bog, Bald Mountain, Haunted House, Novigrad Dreaming',
      image:
        'https://static.wikia.nocookie.net/witcher/images/1/1b/Tw3_journal_godlings.png',
      occurences: 'Velen, Novigrad',
    },
    {
      id: 39,
      name: 'Golem',
      class: 'Elementa',
      tactics:
        "- Do not attempt to parry the punches delivered by a golem. The sheer weight and power behind them renders such thinking suicidal at best. - Roll out of the golem's path, then strike. - As with the elementals, a golem can pound the ground with such ferocity, anyone standing near it is knocked prone.",
      susceptibility: 'Dimeritium bomb, Elementa oil',
      immunity: 'None',
      quest:
        'The Tower Outta Nowheres, Wandering in the Dark, Magic Lamp, Scavenger Hunt: Cat School Gear',
      image:
        'https://static.wikia.nocookie.net/witcher/images/d/d6/Tw3_journal_golem.png',
      occurences: 'Elven ruins and caves',
    },
    {
      id: 40,
      name: 'Grave hag',
      class: 'Necrophage',
      tactics:
        '- Grave hags are territorial and aggressive when provoked, using their great speed to rapidly close on prey. - You should always have Quen active, and Yrden prepared for use. Stun-and-hit combat with Axii is also very effective. - The tongue of a grave hag can surprise even veteran witchers with the speed and range it can lash out. Being struck by it can cause temporary blindness, leaving the victim unable to properly defend themselves.',
      susceptibility: 'Black Blood, Necrophage oil, Yrden, Quen',
      immunity: 'None',
      quest: 'A Plea Ignored',
      image:
        'https://static.wikia.nocookie.net/witcher/images/d/d0/Tw3_journal_gravehag.png',
      occurences: 'Velen, Skellige',
    },
    {
      id: 41,
      name: 'Griffin',
      class: 'Hybrid',
      tactics:
        '- Griffins will repeatedly swoop down from the sky in order to rake their target using their talons. A crossbow or the Aard sign will force a griffin to the ground. - Griffins use a high pitch roar that can knock its opponent off balance. They will leap at their target from a great distance, in order to tackle their prey. - Attacks from a griffin will cause bleeding. The Quen sign, or a Swallow potion can be used to counter bleed effects.',
      susceptibility: 'Grapeshot, Hybrid oil, Aard',
      immunity: 'None',
      quest: 'The Beast of White Orchard',
      image:
        'https://static.wikia.nocookie.net/witcher/images/1/15/Tw3_journal_griffin.png',
      occurences: 'Oxenfurt, Skellige, Velen, White Orchard',
    },
    {
      id: 42,
      name: 'Harpy',
      class: 'Hybrid',
      tactics:
        '- Like many other swarming enemies such as wolves or Drowners, individual Harpies are quite weak, fragile and easy to deal with. - Shoot them down with your crossbow to one hit them one by one',
      susceptibility: 'Grapeshot, Hybrid oil, Aard',
      immunity: 'None',
      quest:
        'The Path of Warriors, Crime and Punishment, The Whispering Hillock, Scavenger Hunt: Griffin School Gear, Scavenger Hunt: Cat School Gear Upgrade Diagrams - Part 4, Scavenger Hunt: Wolf School Gear Upgrade Diagrams - Part 3, Scavenger Hunt: Bear School Gea',
      image:
        'https://static.wikia.nocookie.net/witcher/images/d/d5/Tw3_journal_harpy.png',
      occurences: 'Highland areas',
    },
    {
      id: 43,
      name: 'Hound of the Wild Hunt',
      class: 'Elementa',
      tactics:
        '- The hounds of the Wild Hunt fight as viciously as wolves or wild dogs. They can be momentarily weakened by Axii, but only for an instant. - Use Yrden to slow any hounds too close for comfort, and break away if needed. The icy nature of the hounds makes them perfect targets for Igni. - Back off from the hounds if they start forming ice spikes. These barriers will pierce through you if you attempt to strike.',
      susceptibility: 'Dimeritium bomb, Elementa oil, Igni, Axii',
      immunity: 'None',
      quest:
        'On Thin Ice, Wandering in the Dark, The Battle of Kaer Morhen, The Calm Before the Storm, Contract: The Apiarian Phantom',
      image:
        'https://static.wikia.nocookie.net/witcher/images/c/c0/Tw3_journal_houndofthewildhunt.png',
      occurences:
        'Always together with Wild Hunt, In hut near Honeyfill Meadworks',
    },
    {
      id: 44,
      name: 'Ice giant',
      class: 'Ogroid',
      tactics:
        '- Similar to the cyclopses in terms of combat ability - The monster draws its strength from cold weather, with blizzards allowing them to reach their physical peak.',
      susceptibility: 'Ogroid oil, Quen',
      immunity: 'None',
      quest: 'The Lord of Undvik',
      image:
        'https://static.wikia.nocookie.net/witcher/images/c/ca/Tw3_journal_icegiant.png',
      occurences: 'Skellige',
    },
    {
      id: 45,
      name: 'Katakan',
      class: 'Vampire',
      tactics:
        "- Katakans are notably smarter and more powerful than ekimmaras. Their power only increases at night, and so a witcher should take additional precautions if they hunt one at those late hours. - The witcher should wait for daylight, so the katakan's natural regeneration is impaired. - Yrden sign is one of the most valuable tools when hunting a katakan, undoing its invisibility",
      susceptibility: "Moon dust, Devil's Puffball, Vampire oil, Yrden, Igni",
      immunity: 'None',
      quest:
        'Now or Never, Carnal Sins, Contract: The Oxenfurt Drunk, A Tome Entombed, La Cage au Fou, The Night of Long Fangs',
      image:
        'https://static.wikia.nocookie.net/witcher/images/c/cd/Tw3_journal_katakan.png',
      occurences: 'Novigrad, Oxenfurt, Toussaint',
    },
    {
      id: 46,
      name: 'Kikimore warrior',
      class: 'Insectoid',
      tactics:
        "- Kikimore warriors defend their nests from attackers. They attack somewhat slower than kikimore workers. - They are able to spew streams of caustic venom a great distance and leap to attack. This venom is highly unique in that it reacts with a witcher's body to raise the level of his potion toxicity. - They are covered with thick, hard armor which easily deflects blows from even the sharpest sword",
      susceptibility: 'Insectoid oil, White Honey, Igni',
      immunity: 'Axii',
      quest: 'Father Knows Worst, La Cage au Fou, Contract: The Tufo Monster',
      image:
        'https://static.wikia.nocookie.net/witcher/images/5/5c/Tw3_journal_kikimore_warrior.png',
      occurences: 'Toussaint',
    },
    {
      id: 47,
      name: 'Kikimore worker',
      class: 'Insectoid',
      tactics:
        '- Kikimore workers listen to orders given by kikimore warriors. Kikimore workers are nimbler and quicker than warrriors. On command, a swarm of workers might begin burrowing tunnels near potential prey to allow for a surprise mass attack. - Eliminate the warrior guiding a swarm, however, and the workers will disperse and cease digging.',
      susceptibility: 'Insectoid oil, White Honey, Igni',
      immunity: 'Axii, Poisoning',
      quest:
        'Father Knows Worst, La Cage au Fou, Scavenger Hunt: Grandmaster Manticore Gear',
      image:
        'https://static.wikia.nocookie.net/witcher/images/8/80/Tw3_journal_kikimore_worker.png',
      occurences: 'Toussaint',
    },
    {
      id: 48,
      name: 'Leshen',
      class: 'Relict',
      tactics:
        '- They can summon swarms of crows to distract and harass their enemies, and even call upon wolves to fight with them. - Watch for them to dig their rootlike arms into the ground. This is a sign that they are commanding the roots to strike. This attack has surprising range, does heavy damage, hits a reasonably sized area and can only be foiled by rolling away from it. - Leshens are slow but powerful melee fighters, and can cause serious injury if allowed. Dodge or roll away from the swipes of their claws. - They also have the ability to turn into a smoke form; they will raise both arms above their head and with a swirl of dark smoke, disappear.',
      susceptibility: 'Dimeritium bomb, Relict oil, Igni',
      immunity: 'Axii',
      quest:
        'Abandoned Sawmill, In the Heart of the Woods, Contract: Lord of the Wood',
      image:
        'https://static.wikia.nocookie.net/witcher/images/3/39/Tw3_journal_leshen.png',
      occurences: 'Velen, Skellige',
    },
    {
      id: 49,
      name: 'Mucknixer',
      class: 'Necrophage',
      tactics:
        "- Drowners are predominantly pack creatures by nature, usually in groups of three or greater. - Drowner's leaping attacks cannot be parried or countered, attempting to do so will momentarily stagger Geralt and render him immobile for several seconds, often enough for other drowners to land attacks on him. - Their normal clawing attack on the other hand are susceptible to counterattacks, but doing so when multiple drowners are are landing hits simultaneously could be dangerous.",
      susceptibility: 'Necrophage oil, Igni',
      immunity: 'None',
      quest: 'Coast of Wrecks, Not Only Eagles Dare',
      image:
        'https://static.wikia.nocookie.net/witcher/images/c/c1/Mucknixer.png',
      occurences: 'Velen, Novigrad, Skellige',
    },
    {
      id: 50,
      name: 'Nekker',
      class: 'Ogroid',
      tactics:
        '- Individual nekkers are weak, easy marks compared to other monsters; nekkers do not tend to fight as individuals. Nekkers overwhelm their targets through sheer numbers, surrounding them, then pummeling and clawing victims to death - Nekkers are considerably agile and acrobatic, even more so than the likes of drowners and rotfiends. One could easily leap at Geralt from barrel roll distance and roll back even further to avoid counterattacks.',
      susceptibility: 'Northern wind, Ogroid oil',
      immunity: 'None',
      quest:
        "Fools' Gold, Harassing a Troll, Redania's Most Wanted, Warehouse of Woe, Hard Times, The Cave of Dreams",
      image:
        'https://static.wikia.nocookie.net/witcher/images/a/a1/Tw3_journal_nekker.png',
      occurences: 'Velen, White Orchard, Skellige, Toussaint',
    },
    {
      id: 51,
      name: 'Nightwraith',
      class: 'Specter',
      tactics:
        '- Mostly incorporeal, a nightwraith must be made corporeal, either through Yrden, or Moon Dust bombs. When forced to become corporeal, silver swords can be employed to finish the wraith off. - When weakened, a nightwraith can split into three copies of itself. Destroy these with all haste, during this state the nightwraith saps vital energy from nearby sources.',
      susceptibility: 'Moon dust, Specter oil, Yrden',
      immunity: 'None',
      quest:
        "Contract: Jenny o' the Woods, Peace Disturbed, Don't Play with the Gods",
      image:
        'https://static.wikia.nocookie.net/witcher/images/c/cc/Tw3_journal_nightwraith.png',
      occurences: 'Velen',
    },
    {
      id: 52,
      name: 'Noonwraith',
      class: 'Specter',
      tactics:
        '- Noonwraiths are similar in nature to nightwraiths, save for their preference of the sunlight, and a greater mastery of physical attacks. They can blind foes with dust they kick up. - Noonwraiths can also create copies of themselves when threatened, consuming the lifeforce of their victims until they are destroyed. Bombs and crossbow bolts can destroy noonwraith doppelgangers. Upon entering a cloud released by a Dimeritium Bomb, they will immediately dissolve. - The Yrden sign or the Moon Dust bomb forces a noonwraith to become corporeal and vulnerable.',
      susceptibility: 'Moon dust, Specter oil, Yrden',
      immunity: 'None',
      quest:
        "Contract: The White Lady, Contract: Devil by the Well, Scavenger Hunt: Griffin School Gear Upgrade Diagrams - Part 2, Don't Play with the Gods",
      image:
        'https://static.wikia.nocookie.net/witcher/images/5/5e/Tw3_journal_noonwraith.png',
      occurences: 'Velen, White Orchard',
    },
    {
      id: 53,
      name: 'Pale Widow',
      class: 'Insectoid',
      tactics:
        "- The Pale Widow isn't particularly strong, but its a tricky foe to fight, really very good at moving about the area and trying to do quick attacks, so keeping a Quen Sign or Yrden sign up, while constantly moving is your best bet. - It will spit acid at you so it is best to try and dodge it, it will shoot AT MOST 3 shots before going back underground to relocate. After hitting the Pale Widow three times fall back for you can no longer do damage, and it curls up before doing a retaliation strike that has decent range.",
      susceptibility: 'Insectoid oil, Yrden',
      immunity: 'None',
      quest: 'Turn and Face the Strange',
      image:
        'https://static.wikia.nocookie.net/witcher/images/1/15/Tw3_journal_pale_widow.png',
      occurences: 'Toussaint',
    },
    {
      id: 54,
      name: 'Panther',
      class: 'Beasts',
      tactics:
        '- Panthers are incredibly swift and able to sneak up on prey undetected to gain the advantage of surprise. As soon as they enter open terrain, they leap to attack with astonishing speed, mauling their prey with their sharp claws, long teeth and the sheer force of their momentum. - Panthers are known to retreat mid-fight. This is but a ruse to allow them to attack again, by surprise.',
      susceptibility: 'Beast oil',
      immunity: 'None',
      quest:
        'The Warble of a Smitten Knight, Wine is Sacred, Big Game Hunter, Scavenger Hunt: Grandmaster Manticore Gear',
      image:
        'https://static.wikia.nocookie.net/witcher/images/d/da/Tw3_journal_panther.png',
      occurences: 'Toussaint',
    },
    {
      id: 55,
      name: 'Plague maiden',
      class: 'Specter',
      tactics:
        '- Also known as a pesta, a plague maiden is one of the more insidious wraiths a witcher may come across. - When provoked, a pesta calls forth clouds of plague-ridden insects that seek out their foes. The insect clouds can be destroyed with Igni or a slice of a silver sword. Aard can push the clouds back.',
      susceptibility: 'Specter oil, Yrden',
      immunity: 'None',
      quest: 'A Towerful of Mice',
      image:
        'https://static.wikia.nocookie.net/witcher/images/b/b2/Tw3_journal_plaguemaiden.png',
      occurences: 'Fyke Isle, Velen',
    },
    {
      id: 56,
      name: 'Rock troll',
      class: 'Ogroid',
      tactics:
        '- Trolls of both varieties are vicious fighters, and unfortunately must be fought head on. The armor of stone or ice on their backs armors them too well for flanking tactics. - Running away from a troll does not guarantee safety, as they can throw stones with alarming speed and accuracy. The power and weight behind every punch thrown by a troll means that they cannot be parried.',
      susceptibility: 'Ogroid oil, Quen',
      immunity: 'None',
      quest: 'Master Armorers, Contract: Missing Miners, The Volunteer',
      image:
        'https://static.wikia.nocookie.net/witcher/images/6/69/Tw3_journal_rocktroll.png',
      occurences: 'Novigrad, Kaer Morhen valley, Skellige, Velen',
    },
    {
      id: 57,
      name: 'Rotfiend',
      class: 'Necrophage',
      tactics:
        "- Rotfiends are fast and adopt similar basic tactics and moveset with drowners - When a rotfiend's health is cut to a certain point by anything that is not a result of Burn, their body will undergo an uncontrollable spasm that ends in an explosion, damaging anything caught within the radius. When the animation leading to the explosion play, Rotfiends become immune to any kind of damage, leaving no means to prematurely kill them. This explosion could do considerable damage to other nearby foes",
      susceptibility: 'Necrophage oil',
      immunity: 'None',
      quest: 'Return to Crookback Bog, Bitter Harvest, La Cage au Fou',
      image:
        'https://static.wikia.nocookie.net/witcher/images/6/61/Tw3_journal_rotfiend.png',
      occurences: 'Velen, White Orchard, Skellige, Toussaint',
    },
    {
      id: 58,
      name: 'Wyvern',
      class: 'Draconid',
      tactics:
        '- Wyverns are quite venomous, they are able to spit their venom from a distance and even inject it directly into its victim through the stinger on the end of its long tail, the use of Golden Oriole can prevent it from incapacitating you. - They will fly around their prey, well beyond Crossbow range, before they will swoop down at break neck speeds in an attempt to claw at their victim. - Once on the ground a wyvern will prefer to strike with the talons on its feet, its teeth and its tail.',
      susceptibility: 'Golden Oriole, Grapeshot, Draconid oil, Aard',
      immunity: 'None',
      quest:
        'Contract: Patrol Gone Missing, Contract: Phantom of the Trade Route, The Most Truest of Basilisks, Scavenger Hunt: Griffin School Gear',
      image:
        'https://static.wikia.nocookie.net/witcher/images/2/2a/Tw3_journal_wyvern.png',
      occurences:
        'Wyverns have been spotted nesting in northeastern Velen and have been sighted across the entire Continent and the Skellige isles. ',
    },
    {
      id: 59,
      name: 'Scurver',
      class: 'Necrophage',
      tactics:
        "- A scurver fights like a rotfiend except at the very end, when it a final hit will cause it to stop attacking, freezing up as it gets ready to explode, so make sure to use Quen when this happens to protect yourself from the resulting explosion (or get far enough away quickly). On higher difficulties, taking a hit from Scurver's explosion could easily mean certain death. - Scurvers will instantly explode if its health is dropped to zero by powerful enough hits, thus Deadly Precision or anything that randomly inflict Instant Kill on close range are best put aside when facing these Necrophages.",
      susceptibility: 'Necrophage oil',
      immunity: 'None',
      quest: 'The Beast of Toussaint, La Cage au Fou',
      image:
        'https://static.wikia.nocookie.net/witcher/images/b/ba/Tw3_journal_graveir.png',
      occurences: 'Toussaint',
    },
    {
      id: 60,
      name: 'Siren',
      class: 'Hybrid',
      tactics:
        '- They have been spotted attempting to lure in victims by transforming their appearance to that of an attractive human woman, a deception that quickly ends the moment they become aggressive. - Sirens can move as quickly in water as they do in the sky. When sailing in siren-infested waters, expect to see the monsters transition from the seas to the air as they surround their prey.',
      susceptibility: 'Grapeshot, Hybrid oil, Igni, Aard',
      immunity: 'None',
      quest:
        "Siren's Call, Possession, The Last Wish, The Price of Honor, The Path of Warriors",
      image:
        'https://static.wikia.nocookie.net/witcher/images/0/05/Tw3_journal_siren.png',
      occurences:
        'Coastal Regions throughout Velen and Novigrad, Skellige is also a major breeding ground.',
    },
    {
      id: 61,
      name: 'Spriggan',
      class: 'Relict',
      tactics:
        "- Like leshens, it's vulnerable to Igni, so make sure to strike it with this when possible, but note that, unlike leshens, spriggans are fast. - If taking heavy damage, it's better to focus on using Quen instead and just use relict oil on your sword.",
      susceptibility: 'Dimeritium bomb, Relict oil, Igni',
      immunity: 'None',
      quest:
        'Big Feet to Fill: The Third Group, The Suffering of Young Francois',
      image:
        'https://static.wikia.nocookie.net/witcher/images/f/fe/Tw3_journal_spriggan.png',
      occurences: 'Toussaint',
    },
    {
      id: 62,
      name: 'Succubus',
      class: 'Hybrid',
      tactics:
        '- Clever witchers may be able to talk down a succubus. - Succubi are known for their surprising brute strength. - They can also be accomplished spell-slingers in their own right, commanding fire with natural aptitude. The simple flashes of fire that a succubus can call upon can disrupt any sword technique a witcher is capable of, and there is no defense save for Quen, or frantic rolls away from the flames.',
      susceptibility: 'Hybrid oil, Quen',
      immunity: 'Axii',
      quest:
        'Big Feet to Fill: The Third Group, The Suffering of Young Francois',
      image:
        'https://static.wikia.nocookie.net/witcher/images/1/14/Tw3_journal_succubus.png',
      occurences:
        'Try to live close to their prey, near towns and villages. Some succubi inhabit cities.',
    },
    {
      id: 63,
      name: 'The Caretaker',
      class: 'Relict',
      tactics:
        '- His attacks are fairly slow and predictable, and the wider area of effect attacks are noticeably telegraphed beforehand and therefore easy to dodge. However, every single hit he lands on you heals him, quite strongly. - When The Caretaker summons groups of dark spirits from the ground and his spade starts to glow, you need to attack the spirits before he does to prevent him from healing himself rather extensively. - Keep in mind that receiving hits while under the effects of Quen will not heal him. - The best time to counterattack is after he hits the ground with his spade causing a shockwave, as he will be unable to pull it out for a few seconds, thus giving you the time to land several backstabs with ease.',
      susceptibility: 'Relict oil, Quen',
      immunity: 'None',
      quest: 'Scenes From a Marriage',
      image:
        'https://static.wikia.nocookie.net/witcher/images/3/38/Tw3_journal_caretaker.png',
      occurences: 'von Everec Estate',
    },
    {
      id: 64,
      name: 'Forktail',
      class: 'Draconid',
      tactics:
        '- Forktails can be brought to the ground with Crossbow bolts or Grapeshot. - They are as aggressive as Wyvern, and make use of their foot talons in order to slash and kick at their prey. - The singers on the tip of their tail are highly poisonous, and because of this Golden Oriole is essential. They will use their tails aggressively while in combat and the only counter is to try and evade these attacks. - Bites from the forktail come at near-lightning speeds, but can be parried and countered.',
      susceptibility: 'Golden Oriole, Grapeshot, Draconid oil, Aard',
      immunity: 'None',
      quest:
        'To Bait a Forktail..., Scavenger Hunt: Griffin School Gear Upgrade Diagrams - Part 1, Contract: Dragon',
      image:
        'https://static.wikia.nocookie.net/witcher/images/2/2f/Tw3_journal_forktail.png',
      occurences: 'Velen, Skellige, White Orchard',
    },
    {
      id: 65,
      name: 'Umbra',
      class: 'Specter',
      tactics:
        '- Such an umbra could be defeated with a silver blade, preferably one coated in wraith oil.',
      susceptibility: 'Specter oil',
      immunity: 'None',
      quest: 'Equine Phantoms',
      image:
        'https://static.wikia.nocookie.net/witcher/images/1/13/Tw3_journal_nightmare_horse.png',
      occurences: 'Toussaint',
    },
    {
      id: 66,
      name: 'Water hag',
      class: 'Necrophage',
      tactics:
        "- Water hags can 'swim' through mud as swiftly as they can through water, and they can use this to ambush their prey. - A clever witcher can catch a hag with Yrden just as it bursts from the ground, allowing plenty of time to savage it with their silver sword. - They have the ability to throw balls of mud at the faces of their opponents in order to blind them, and they do this with frightening accuracy.",
      susceptibility: 'Northern wind, Necrophage oil, Quen, Igni',
      immunity: 'None',
      quest: "A Bard's Beloved, A Towerful of Mice, Ladies of the Wood",
      image:
        'https://static.wikia.nocookie.net/witcher/images/3/36/Tw3_journal_waterhag.png',
      occurences: 'Velen, White Orchard, Skellige',
    },
    {
      id: 67,
      name: 'Berserkers',
      class: 'Cursed one',
      tactics:
        "- A berserker starts out as a human, when filled with the rage of battle, it transforms into a berserker (a form of bear). - While in human form steel swords along with Hanged Man's Venom will work well against them, as well as any tactics learned while fighting other humans. - However, once they are transformed into their bear form, a silver sword, that has been tainted with Cursed oil, will work best.",
      susceptibility: "Devil's Puffball, Cursed oil, Quen, Igni",
      immunity: 'None',
      quest: "King's Gambit",
      image:
        'https://static.wikia.nocookie.net/witcher/images/4/48/Tw3_journal_berserker.png',
      occurences: "Skellige, Vildkaarls' village",
    },
    {
      id: 68,
      name: 'Wolf',
      class: 'Beasts',
      tactics:
        '- Wolves hunt in packs and coordinate with one another in order to surround their choice of prey. - Creating openings to halt their momentum is the key to efficiently defeating them, and your Signs are the best tools to make that happen',
      susceptibility: 'Beast oil',
      immunity: 'None',
      quest:
        "Ciri's Story: The King of the Wolves, In Wolf's Clothing, Abandoned Sawmill",
      image:
        'https://static.wikia.nocookie.net/witcher/images/6/62/Tw3_journal_wolf.png',
      occurences: 'Velen, White Orchard, Skellige, Toussaint',
    },
    {
      id: 69,
      name: 'Wight',
      class: 'Necrophage',
      tactics:
        '- When not disturbed, spotted wights would not act aggressively. If threatened, however, they became very dangerous indeed. - In the colder months or when faced with an unseasonable chill, they would slip into a state of lethargy, making them easy targets. Even during their active periods, it is said the witchers found a surefire way of besting them, based around careful casting of the Yrden Sign',
      susceptibility: 'Necrophage oil, Axii, Yrden, Igni',
      immunity: 'Poisoning',
      quest: 'The Warble of a Smitten Knight, La Cage au Fou',
      image:
        'https://static.wikia.nocookie.net/witcher/images/a/a8/Tw3_journal_wicht.png',
      occurences: 'Toussaint',
    },
    {
      id: 70,
      name: 'Wild Boar',
      class: 'Beasts',
      tactics:
        '- They will circle around Geralt at high speed and charge straight at him occasionally, although unlike wolves, they do not slow down or pause after lunging, thus simple dodge and attack tactics are much less effective. - One can try Yrden to slow their movements or stun them with Igni or Northern Wind.',
      susceptibility: 'Northern Wind, Beast oil, Igni, Yrden',
      immunity: 'None',
      quest: 'Beyond Hill and Dale...',
      image:
        'https://static.wikia.nocookie.net/witcher/images/9/93/Tw3_journal_wild_boar.png',
      occurences: 'Gustfields, Toussaint',
    },
    {
      id: 71,
      name: 'Wraith',
      class: 'Specter',
      tactics:
        '- Relatively fast melee fighters, wraiths can do serious damage if they get in close, and they can easily do so with their ability to teleport short distances. - If they do teleport while they are somewhat close to Geralt, dodge in any direction. They like to teleport right next to their target and immediately start swinging, inflicting heavy damage in an instant if they catch you. - A wraith attacks victims with sword in one hand, and a lantern in the other and they can use both instruments in a spinning attack. Like other wraiths, these specters can turn incorporeal at any given time, rendering attacks from silver swords much less effective.',
      susceptibility: 'Moon dust, Specter oil, Yrden, Quen',
      immunity: 'None',
      quest:
        "Magic Lamp, The Fall of the House of Reardon, The Bastion, Forefathers' Eve, Contract: The Phantom of Eldberg",
      image:
        'https://static.wikia.nocookie.net/witcher/images/c/c6/Tw3_journal_wraith.png',
      occurences: 'Velen, White Orchard, Skellige, Toussaint',
    },
    {
      id: 72,
      name: 'Higher Vampire',
      class: 'Vampire',
      tactics:
        '- Higher vampires possess nearly unmatched strength and intelligence among all foes one could face. When they are transformed into their bestial state, evasion is key. - Higher vampires also favor striking while invisible, appearing only when they are an eye blink away from sinking their claws into a victim. This makes Yrden absolutely vital both for revealing the vampire, and also keeping it in place long enough to cut it down with a silver sword. - Igni is one of the few real weaknesses a higher vampire possesses. Use it if you can; if it catches on fire, it will be stunned for a brief moment.',
      susceptibility: 'Vampire oil, Igni',
      immunity: 'Daylight, Holy water, Religious Symbols, Garlic',
      quest: 'A Tome Entombed, Carnal Sins, Blood Run, Tesham Mutna',
      image:
        'https://static.wikia.nocookie.net/witcher/images/2/20/Tw3_journal_highervampire.png',
      occurences: 'Novigrad, Toussaint',
    },
    {
      id: 73,
      name: 'Basilisk',
      class: 'Draconid',
      tactics:
        '- Basilisks are vulnerable to Igni and other means of using fire against them such as Dancing star bombs. A well timed bomb or burst of Igni can not only bring down a flying basilisk to ground level, but distract the beast from being able to properly defend itself. - While in combat with witchers they have been observed parrying sword strikes with their wings and then leaping up in to the air to land near devastating overhead blows with their claws. - It can also leap up in to the air, hover momentarily, and spit acid at their opponent from above.',
      susceptibility: 'Golden Oriole, Grapeshot, Draconid oil, Aard',
      immunity: 'None',
      quest: "Ciri's Story: Out of the Shadows, Dowry",
      image:
        'https://static.wikia.nocookie.net/witcher/images/b/bc/Tw3_journal_basilisk.png',
      occurences: 'Velen',
    },
    {
      id: 74,
      name: 'Botchling',
      class: 'Cursed one',
      tactics:
        '- When threatened, botchlings turn into a bigger monster substantially rising in size and resembling a ghoul or alghoul when they grow spikes on their back. - Using Axii though will make them retract the spikes for a short time, allowing one to safely strike them.',
      susceptibility: 'Cursed oil, Axii',
      immunity: 'None',
      quest: 'Family Matters',
      image:
        'https://static.wikia.nocookie.net/witcher/images/4/4c/Tw3_journal_botchling.png',
      occurences: "Crow's Perch",
    },
    {
      id: 75,
      name: 'Cockatrice',
      class: 'Draconid',
      tactics:
        "- A cockatrice will fight aggressively once the fight begins, to take advantage of this aggression and force them to remain on the ground you should use Aard and/or Grapeshot to your benefit. - While in flight, the Cockatrice will try a set of swooping attacks on you to grab/strike you with the talons on their feet. This is actually very easy to avoid by simply doing a roll to the side, and you can bring the Cockatrice down to the ground to hit it by either using Aard, the crossbow or just wait for it to get bored of missing you and land on its own. - Once it's on the ground it will use its talons, wings and feet to strike against its foe, as well as its razor-sharp beak and tail tip. These attacks are fast, fairly long range and causing Bleeding. If you back away from them even a small amount they will also frequently do a forward leap-strike; it has dangerously long range, does quite a bit of damage, stuns you and their semi-spread wings as they do it can also cause the hit so it is a very wide strike that can be difficult to roll out of range of. - If you see it cover its head with its wings, stop attacking as this is effectively a Parry that will do reduced damage to them, stagger you and break Quen if you have it on, and they will quickly follow up with a counterattack. ",
      susceptibility: 'Grapeshot, Draconid oil, Aard',
      immunity: 'None',
      quest: 'Contract: Shrieker',
      image:
        'https://static.wikia.nocookie.net/witcher/images/2/2a/Tw3_journal_cockatrice.png',
      occurences: 'Velen, Redania',
    },
    {
      id: 76,
      name: 'Crones',
      class: 'Relict',
      tactics:
        '- They wield powerful magic, but one different from that of mages. They draw power from water and earth and are bound to the land in which they live. - The Crones can hear everything that happens in their woods, predict the future, twist the threads of human lives and bring blessings as well as curses.',
      susceptibility: 'Relict oil, Quen',
      immunity: 'None',
      quest: 'Ladies of the Wood, Bald Mountain',
      image:
        'https://static.wikia.nocookie.net/witcher/images/1/15/Tw3_journal_crones.png',
      occurences: 'Velen, Crookback Bog, Bald Mountain',
    },
    {
      id: 77,
      name: 'Erynia',
      class: 'Hybrid',
      tactics:
        '- Harpies, erynias, and all their varied sub-species, favor flying and hunting in packs. This could mean a handful of five or six individuals, upwards of twenty. - When provoked, harpies and erynias begin circling them from above, swooping alone or in groups of two or three. If they are grouped close enough during a dive, you can catch multiple harpies with area-of-effect abilities or bombs.',
      susceptibility: 'Grapeshot, Hybrid oil, Aard',
      immunity: 'None',
      quest: 'Scavenger Hunt: Wolf School Gear',
      image:
        'https://static.wikia.nocookie.net/witcher/images/f/fd/Tw3_journal_erynia.png',
      occurences: 'Skellige',
    },
    {
      id: 78,
      name: 'Ice troll',
      class: 'Ogroid',
      tactics:
        "- Some rock trolls can actually be reasoned with; but not ice trolls. If you're forced into a fight with one, cast Quen and apply ogroid oil to your silver blade before the fight. - Trolls of both varieties are vicious fighters, and unfortunately must be fought head on. The armor of stone or ice on their backs armors them too well for flanking tactics. - Ice trolls become noticeably more powerful during snow storms. Avoid fighting them during such weather.",
      susceptibility: 'Ogroid oil, Quen',
      immunity: 'None',
      quest: 'The Lord of Undvik',
      image:
        'https://static.wikia.nocookie.net/witcher/images/8/84/Tw3_journal_icetroll.png',
      occurences: 'Skellige',
    },
    {
      id: 79,
      name: 'Hym',
      class: 'Specter',
      tactics:
        '- Hyms do not move quickly, compared to other specters. Their ethereal claws have great reach, and they can sap the life out of their victims with a mere brush, which makes up for their slowness. Evade or roll past the claws and try to strike the hym before it can react. - Be aware that after several strikes, the hym will teleport to another corner of its room.',
      susceptibility: 'Moon Dust, Specter oil, Igni',
      immunity: 'None',
      quest: 'Possession, Whatsoever a Man Soweth...',
      image:
        'https://static.wikia.nocookie.net/witcher/images/a/ab/Tw3_journal_hym.png',
      occurences: "Skellige, Gaunter's world",
    },
    {
      id: 80,
      name: 'Sandcrab',
      class: 'Insectoid',
      tactics:
        '- Sandcrabs are not particularly strong opponents. As it turns out, they are only dangerous in large quantities. - An important fact is that sandcrabs can suddenly jump out of the ground in a similar fashion to giant centipedes',
      susceptibility: 'Samum, Northern Wind, Dancing Star, Grapeshot',
      immunity: "Dragon's Dream, Moon Dust, Dimeritium bomb, Devil's Puffball",
      quest: 'Through Time and Space',
      image:
        'https://static.wikia.nocookie.net/witcher/images/e/e0/Tw3_sandcrap_close_up.jpg',
      occurences: 'Ddiddiwedht Desert',
    },
    {
      id: 81,
      name: 'Sylvan',
      class: 'Relict',
      tactics:
        "- Melee combat against a sylvan is difficult, even for a witcher. One has to evade the physical strikes from a sylvan, not attempt to parry or counterattack. - Yrden can gain time to bring a silver sword into play, but a sylvan can counter this by breathing intense flames that melt through the best armor. - If close-quarters combat isn't going well, one should be prepared to make use of long-ranged options. A crossbow loaded with good bolts can keep the witcher relatively safe, whilst being effective.",
      susceptibility: "Samum, Devil's Puffball, Relict oil, Igni",
      immunity: 'None',
      quest: 'A Greedy God, Bald Mountain',
      image:
        'https://static.wikia.nocookie.net/witcher/images/9/94/Tw3_journal_sylvan.png',
      occurences: 'Velen',
    },
    {
      id: 82,
      name: 'Ulfhedinn',
      class: 'Cursed one',
      tactics:
        '- These breeds of cursed ones are some of the fastest and most lethal. They can leap great distances at such speeds that it can be a challenge defending against them. Yrden is of great use in avoiding these attacks. - It is best to use footwork and evade them. When possible, use Igni. Setting these foes alight can force cursed ones to stay still long enough to score critical strikes on their flanks. Fire, bleeding, and poison effects can be used to slow the regeneration of these creatures. - Avoid fighting werewolves in tight spaces if at all possible, since the speed of their assault can quickly overwhelm even high skilled witchers.',
      susceptibility: "Moon Dust, Devil's Puffball, Cursed oil, Igni",
      immunity: 'None',
      quest: "In Wolf's Clothing, Call of the Wild",
      image:
        'https://static.wikia.nocookie.net/witcher/images/0/06/Tw3_journal_ulfhedinn.png',
      occurences: 'Skellige',
    },
  ];

  const subject = event.queryStringParameters.id;
  const filteredCreatures = subject
    ? creatures.filter((el) => `${el.id}` === subject)
    : creatures;

  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 200,
    body: JSON.stringify(filteredCreatures),
  };
};
