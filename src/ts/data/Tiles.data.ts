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
		tilesetData: '7-2'
	},
	BED2: {
		solid: true,
		opaque: false,
		name: 'Bed',
		tilesetData: '8-2'
	},
	BED3: {
		solid: true,
		opaque: false,
		name: 'Bed',
		tilesetData: '10-2'
	},
	BED4: {
		solid: true,
		opaque: false,
		name: 'Bed',
		tilesetData: '11-2'
	},
	MICROCOMPUTER: {
		solid: true,
		opaque: false,
		name: 'Microcomputer',
		tilesetData: '0-2'
	},
	PHONE: {
		solid: true,
		opaque: false,
		name: 'Table',
		tilesetData: '1-2'
	},
	MODEM: {
		solid: true,
		opaque: false,
		name: 'Table',
		tilesetData: '2-2'
	},
	TERMINAL: {
		solid: true,
		opaque: false,
		name: 'ADM-3A Terminal',
		tilesetData: '3-2'
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
		tilesetData: '3-6'
	},
	CAR2: {
		solid: false,
		opaque: false,
		name: 'Car',
		tilesetData: '4-6'
	},
	CAR3: {
		solid: true,
		opaque: false,
		name: 'Car',
		tilesetData: '3-7'
	},
	CAR4: {
		solid: true,
		opaque: false,
		name: 'Car',
		tilesetData: '4-7'
	}
}