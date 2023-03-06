const ut = (window as any).ut;

export default {
	GRASS: {
		tile: new ut.Tile('.', 0, 128, 0),
		darkTile: new ut.Tile('.', 128, 128, 128),
		solid: false,
		opaque: false,
		name: 'Grass',
		tilesetData: '5-0'
	},
	STAIRS_DOWN: {
		tile: new ut.Tile('>', 255, 255, 255),
		darkTile: new ut.Tile('>', 128, 128, 128),
		solid: false,
		opaque: false,
		name: 'Stairs Down',
		tilesetData: '21-0'
	},
	STAIRS_UP: {
		tile: new ut.Tile('<', 255, 255, 255),
		darkTile: new ut.Tile('<', 128, 128, 128),
		solid: false,
		opaque: false,
		name: 'Stairs Up',
		tilesetData: '21-1'
	},
	BUSH: {
		tile: new ut.Tile('&', 0, 128, 0),
		darkTile: new ut.Tile('&', 128, 128, 128),
		solid: true,
		opaque: true,
		name: 'Bush',
		tilesetData: '2-1'
	},
	WATER: {
		tile: new ut.Tile('~', 0, 0, 255),
		darkTile: new ut.Tile('~', 128, 128, 128),
		solid: true,
		opaque: false,
		name: 'Water',
		tilesetData: '8-5'
	},
	VOID: {
		solid: false,
		opaque: false,
		name: 'Floor',
		tilesetData: '0-0'
	},
	SOLID_VOID: {
		solid: true,
		opaque: true,
		name: 'Void',
		tilesetData: '0-0'
	},
	FLOOR: {
		solid: false,
		opaque: false,
		name: 'Floor',
		tilesetData: '6-2'
	},
	DOOR: {
		solid: false,
		opaque: false,
		name: 'Door',
		tilesetData: '4-2'
	},
	WALL: {
		solid: true,
		opaque: false,
		name: 'Wall',
		tilesetData: '6-3'
	},
	TOP: {
		solid: true,
		opaque: true,
		name: 'Wall',
		tilesetData: '7-3'
	},
	BED1: {
		solid: true,
		opaque: false,
		name: 'Bed',
		tilesetData: '7-2',
		interact: (game) => {
			game.display.showText('No time to sleep!');
		}
	},
	BED2: {
		solid: true,
		opaque: false,
		name: 'Bed',
		tilesetData: '8-2',
		interact: (game) => {
			game.display.showText('No time to sleep!');
		}
	},
	BED3: {
		solid: true,
		opaque: false,
		name: 'Bed',
		tilesetData: '10-2',
		interact: (game) => {
			game.display.showText('That\'s Michael\'s bed... Can\'t waste time putting the sheets when there\'s rogue work to be done.');
		}
	},
	BED4: {
		solid: true,
		opaque: false,
		name: 'Bed',
		tilesetData: '11-2',
		interact: (game) => {
			game.display.showText('That\'s Michael\'s bed... Can\'t waste time putting the sheets when there\'s rogue work to be done.');
		}
	},
	MICROCOMPUTER: {
		solid: true,
		opaque: false,
		name: 'Microcomputer',
		tilesetData: '0-2',
		interact: (game) => {
			game.display.showText('That\'s Michael\'s 8080-based microcomputer, he assembled it from a kit.');
		}
	},
	PHONE: {
		solid: true,
		opaque: false,
		name: 'Telephone',
		tilesetData: '1-2',
		interact: (game) => {
			game.display.showText('This is a "telephone". When you want to talk with someone far away, you lift the handset until you hear a tone, then you dial the phone number, number by number, using the rotary. It\'s useful to keep in touch with family.');
		}
	},
	MODEM: {
		solid: true,
		opaque: false,
		name: 'Modem',
		tilesetData: '2-2',
		interact: (game) => {
			game.display.showText('A 300-baud acoustic modem. This device allows our terminal to connect to the computer in the University so we can work in Rogue. You place the telephone\'s handset on top of it, and both devices "talk" with high-pitches using the landline.');
		}
	},
	TERMINAL: {
		solid: true,
		opaque: false,
		name: 'ADM-3A Terminal',
		tilesetData: '3-2',
		interact: (game) => {
			game.display.showText('A Lear Siegler ADM-3A Terminal from UCSC. The perks of being employees of the lab! we did a lot of work over the weekend in rogue\'s dungeon generation routines, but didn\'t save it and now the connection is down!');
		}
	},
	HOUSETOP1: {
		solid: true,
		opaque: false,
		name: 'House',
		tilesetData: '6-4'
	},
	HOUSETOP2: {
		solid: true,
		opaque: false,
		name: 'House',
		tilesetData: '7-4'
	},
	HOUSETOP3: {
		solid: true,
		opaque: false,
		name: 'House',
		tilesetData: '8-4'
	},
	HOUSEFRONT: {
		solid: true,
		opaque: false,
		name: 'House',
		tilesetData: '9-4'
	},
	HOUSEDOOR: {
		solid: true,
		opaque: false,
		name: 'House',
		tilesetData: '10-4'
	},
	BUILDINGFRONT: {
		solid: true,
		opaque: false,
		name: 'Building',
		tilesetData: '12-4'
	},
	BUILDINGDOOR: {
		solid: true,
		opaque: false,
		name: 'Door',
		tilesetData: '13-4'
	},
	BUILDINGDOOROPEN: {
		solid: false,
		opaque: false,
		name: 'Door',
		tilesetData: '14-4'
	},
	SIDEWALK1: {
		solid: false,
		opaque: false,
		name: 'Sidewalk',
		tilesetData: '3-4'
	},
	SIDEWALK2: {
		solid: false,
		opaque: false,
		name: 'Sidewalk',
		tilesetData: '4-4'
	},
	SIDEWALK3: {
		solid: false,
		opaque: false,
		name: 'Sidewalk',
		tilesetData: '5-4'
	},
	ROAD1: {
		solid: false,
		opaque: false,
		name: 'Road',
		tilesetData: '1-4'
	},
	ROAD2: {
		solid: false,
		opaque: false,
		name: 'Road',
		tilesetData: '0-4'
	},
	ROAD3: {
		solid: false,
		opaque: false,
		name: 'Road',
		tilesetData: '2-4'
	},
	CAR1: {
		solid: true,
		opaque: false,
		name: 'Car',
		tilesetData: '0-8',
		interact: (game) => {
			game.player.examineBuggy();
		}
	},
	CAR2: {
		solid: true,
		opaque: false,
		name: 'Car',
		tilesetData: '1-8',
		interact: (game) => {
			game.player.examineBuggy();
		}
	},
	CAR3: {
		solid: true,
		opaque: false,
		name: 'Car',
		tilesetData: '2-8',
		interact: (game) => {
			game.player.examineBuggy();
		}
	},
	CAR4: {
		solid: true,
		opaque: false,
		name: 'Car',
		tilesetData: '0-9',
		interact: (game) => {
			game.player.examineBuggy();
		}
	},
	CAR5: {
		solid: false,
		opaque: false,
		name: 'Car',
		tilesetData: '1-9'
	},
	CAR6: {
		solid: true,
		opaque: false,
		name: 'Car',
		tilesetData: '2-9',
		interact: (game) => {
			game.player.examineBuggy();
		}
	},
	CARARROW: {
		solid: false,
		opaque: false,
		name: 'Road',
		tilesetData: '1-10'
	},
	GRASS1: {
		solid: false,
		opaque: false,
		name: 'Grass',
		tilesetData: '5-6'
	},
	GRASS2: {
		solid: false,
		opaque: false,
		name: 'Grass',
		tilesetData: '6-6'
	},
	FLOWERS: {
		solid: false,
		opaque: false,
		name: 'Grass',
		tilesetData: '7-6'
	},
	GRASS3: {
		solid: false,
		opaque: false,
		name: 'Grass',
		tilesetData: '8-6'
	},
	PATHWAY: {
		solid: false,
		opaque: false,
		name: 'Pathway',
		tilesetData: '6-2'
	},
	TREETOP1: {
		solid: true,
		opaque: false,
		name: 'Tree',
		tilesetData: '0-6'
	},
	TREETOP2: {
		solid: true,
		opaque: false,
		name: 'Tree',
		tilesetData: '1-6'
	},
	TREETOP3: {
		solid: true,
		opaque: false,
		name: 'Tree',
		tilesetData: '2-6'
	},
	TREEBOTTOM1: {
		solid: true,
		opaque: false,
		name: 'Tree',
		tilesetData: '0-7'
	},
	TREEBOTTOM2: {
		solid: true,
		opaque: false,
		name: 'Tree',
		tilesetData: '1-7'
	},
	TREEBOTTOM3: {
		solid: true,
		opaque: false,
		name: 'Tree',
		tilesetData: '2-7'
	},

	ASCIIFLOOR: {
		solid: false,
		opaque: false,
		name: 'Floor',
		tilesetData: '5-8'
	},
	ASCIICORRIDOR: {
		solid: false,
		opaque: false,
		name: 'Corridor',
		tilesetData: '6-8'
	},
	ASCIIDOOR: {
		solid: false,
		opaque: true,
		name: 'Door',
		tilesetData: '7-8'
	},
	ASCIIWALLH: {
		solid: true,
		opaque: true,
		name: 'Wall',
		tilesetData: '8-8'
	},
	ASCIIWALLV: {
		solid: true,
		opaque: true,
		name: 'Wall',
		tilesetData: '9-8'
	},

	VAC1: {
		solid: true,
		opaque: false,
		name: 'VAC',
		tilesetData: '10-9'
	},
	VAC2: {
		solid: true,
		opaque: false,
		name: 'VAC',
		tilesetData: '11-9'
	},
	VAC3: {
		solid: true,
		opaque: false,
		name: 'VAC',
		tilesetData: '12-9'
	},
	VAC4: {
		solid: true,
		opaque: false,
		name: 'VAC',
		tilesetData: '13-9'
	},
	VAC5: {
		solid: false,
		opaque: false,
		name: 'VAC',
		tilesetData: '10-10',
		interact: (game) => {
			if (game.world.level.player.plugged) {
				return;
			}
			game.display.showEvent('Aha! it looks like one of the banana slugs plugged off the modem connection',
				[
					{
						text: 'Plug it back!',
						action: () => {
							game.world.level.player.plugged = true;
							if (game.world.level.player.time > 0) {
								game.display.textBox.setText('You restored the connection on time! Thank you for playing!');
							} else {
								game.display.textBox.setText('Sadly, the Computer had reboot already. Your work in rogue is lost. Michael will be sad. Thank you for playing!');
							}
							game.input.mode = 'MOVEMENT';
						}
					}
				]
			);
		}
	},
	VAC6: {
		solid: true,
		opaque: false,
		name: 'VAC',
		tilesetData: '11-10'
	},
	VAC7: {
		solid: true,
		opaque: false,
		name: 'VAC',
		tilesetData: '11-10'
	},
	VAC8: {
		solid: true,
		opaque: false,
		name: 'VAC',
		tilesetData: '12-10'
	},
	STAIRS: {
		solid: false,
		opaque: false,
		name: 'Stairs',
		tilesetData: '9-2'
	},
	TERMINAL2: {
		solid: true,
		opaque: false,
		name: 'Terminal',
		tilesetData: '14-5'
	},
	MAIN1: {
		solid: true,
		opaque: false,
		name: 'Main',
		tilesetData: '8-12'
	},
	MAIN2: {
		solid: true,
		opaque: false,
		name: 'Main',
		tilesetData: '9-12'
	},
	MAIN3: {
		solid: true,
		opaque: false,
		name: 'Main',
		tilesetData: '8-13'
	},
	MAIN4: {
		solid: true,
		opaque: false,
		name: 'Main',
		tilesetData: '9-13'
	},
	WINDOOR1: {
		solid: true,
		opaque: false,
		name: 'Door',
		tilesetData: '4-12'
	},
	WINDOOR2: {
		solid: true,
		opaque: false,
		name: 'Door',
		tilesetData: '4-13'
	},
}