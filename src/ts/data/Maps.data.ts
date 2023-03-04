import Tiles from './Tiles.data';
import Races from './Races.data';
import Items from './Items.data';

const globalDefs = [
	{ char: ' ', tile: Tiles.VOID },
	{ char: 'B', tile: Tiles.GRASS, item: Items.BOOK_OF_MIRDAS },

	{ index: 102, tile: Tiles.GRASS1},
	{ index: 103, tile: Tiles.GRASS2},
	{ index: 104, tile: Tiles.FLOWERS},
	{ index: 105, tile: Tiles.GRASS3},
	{ index: 39, tile: Tiles.PATHWAY},
	{ index: 56, tile: Tiles.TOP},
	{ index: 71, tile: Tiles.HOUSETOP1},
	{ index: 72, tile: Tiles.HOUSETOP2},
	{ index: 73, tile: Tiles.HOUSETOP3},
	{ index: 74, tile: Tiles.HOUSEFRONT}, // TODO Use different tile?
	{ index: 76, tile: Tiles.SOLID_VOID},
	{ index: 77, tile: Tiles.BUILDINGFRONT},
	{ index: 78, tile: Tiles.BUILDINGDOOR},
	{ index: 79, tile: Tiles.BUILDINGDOOROPEN},
	{ index: 97, tile: Tiles.TREETOP1},
	{ index: 98, tile: Tiles.TREETOP2},
	{ index: 99, tile: Tiles.TREETOP3},
	{ index: 113, tile: Tiles.TREEBOTTOM1},
	{ index: 114, tile: Tiles.TREEBOTTOM2},
	{ index: 115, tile: Tiles.TREEBOTTOM3},
	{ index: 134, tile: Tiles.ASCIIFLOOR},
	{ index: 135, tile: Tiles.ASCIICORRIDOR},
	{ index: 136, tile: Tiles.ASCIIDOOR},
	{ index: 137, tile: Tiles.ASCIIWALLH},
	{ index: 138, tile: Tiles.ASCIIWALLV},
	{ index: 155, tile: Tiles.VAC1},
	{ index: 156, tile: Tiles.VAC2},
	{ index: 157, tile: Tiles.VAC3},
	{ index: 158, tile: Tiles.VAC4},
	{ index: 155 + 16, tile: Tiles.VAC5},
	{ index: 156 + 16, tile: Tiles.VAC6},
	{ index: 157 + 16, tile: Tiles.VAC7},
	{ index: 158 + 16, tile: Tiles.VAC8},

];

const levelMaps = {

	apartment: {
		name: 'March 25, 1980. Santa Cruz.\nGlenn & Michael\'s Apartment',
		defs: [
			{ char: '$', tile: Tiles.FLOOR, start: true },
			{ char: 'T', tile: Tiles.FLOOR, being: Races.TOY },
			{ char: '>', tile: Tiles.FLOOR, exitTo: 'overworld' },
			{ char: '#', tile: Tiles.TOP },
			{ char: ':', tile: Tiles.WALL },
			{ char: '.', tile: Tiles.FLOOR },
			{ char: '1', tile: Tiles.MICROCOMPUTER },
			{ char: '2', tile: Tiles.PHONE },
			{ char: '3', tile: Tiles.MODEM },
			{ char: '4', tile: Tiles.TERMINAL },
			{ char: '5', tile: Tiles.BED1 },
			{ char: '6', tile: Tiles.BED2 },
			{ char: '7', tile: Tiles.BED3 },
			{ char: '8', tile: Tiles.BED4 },
		],
		map: [
			"                              ",
			"          #############       ",
			"          #::::#:#::::#       ",
			"          #56..###..78#       ",
			"          #....:::....#       ",
			"          #...........#       ",
			"          #....#.#....#       ",
			"          ######.######       ",
			"          #:::::.::#          ",
			"          #1234....#          ",
			"          #.T....$.#          ",
			"          #........#          ",
			"          #........#          ",
			"          #####>####          ",
			"                              ",
			"                              ",
			"                              ",
			
		]
	},
	overworld: {
		defs: [
			{ char: '>', tile: Tiles.SIDEWALK3, exitTo: 'apartment', start: true },
			{ char: '8', tile: Tiles.HOUSEDOOR },
			{ char: '#', tile: Tiles.HOUSEFRONT },
			{ char: '5', tile: Tiles.HOUSETOP1 },
			{ char: '6', tile: Tiles.HOUSETOP2 },
			{ char: '7', tile: Tiles.HOUSETOP3 },
			{ char: '-', tile: Tiles.SIDEWALK1 },
			{ char: '|', tile: Tiles.SIDEWALK2 },
			{ char: '+', tile: Tiles.SIDEWALK3 },
			{ char: '.', tile: Tiles.ROAD1 },
			{ char: '=', tile: Tiles.ROAD2 },
			{ char: ']', tile: Tiles.ROAD3 },
			
			{ char: '1', tile: Tiles.CAR1 },
			{ char: '2', tile: Tiles.CAR2, exitTo: 'campus' },
			{ char: '3', tile: Tiles.CAR3 },
			{ char: '4', tile: Tiles.CAR4 },
		],
		map: [
			"|.].|                          ",
			"+..12   567  56667   5667 567  ",
			"|.]34   #8#  #8###   ##8# #8#  ",
			"+...+-+-+--++-+-+-+-+-+--+->-+-+",
			"..]............................",
			"....=.=.=.=.=.=.=.=.=.=.=.=.=.=",
			"..]............................",
			"+...+-+-+-+-+-+-+-+-+-+-+-+-+-+",
		]
	},
	campus: {
		name: 'University of California Santa Cruz.\nYendor College',
		exits: [
			{
				x: 3,
				y: 0,
				target: 'overworld',
				start: true
			},
			{
				x: 40,
				y: 12,
				target: 'dungeon'
			}
		],
		width: 64,
		height: 32,
		indexMap: [102, 103, 105, 39, 102, 102, 71, 72, 72, 72, 72, 73, 102, 102, 105, 103, 102, 105, 103, 103, 102, 103, 103, 103, 102, 103, 97, 102, 102, 103, 102, 103, 103, 102, 103, 105, 103, 102, 102, 102, 103, 39, 102, 102, 102, 105, 103, 102, 99, 103, 105, 71, 72, 73, 103, 102, 103, 103, 105, 102, 105, 105, 105, 103, 102, 105, 105, 39, 102, 105, 77, 77, 77, 77, 77, 77, 103, 103, 105, 105, 103, 102, 102, 105, 103, 103, 103, 102, 103, 105, 113, 105, 105, 103, 102, 105, 102, 103, 102, 99, 105, 105, 105, 102, 39, 39, 105, 105, 102, 105, 102, 102, 115, 105, 103, 77, 77, 77, 105, 99, 103, 103, 105, 103, 103, 103, 102, 103, 103, 102, 103, 39, 102, 105, 77, 77, 78, 77, 77, 77, 102, 103, 102, 102, 102, 102, 103, 103, 97, 105, 105, 105, 103, 103, 105, 105, 105, 105, 105, 105, 102, 103, 103, 115, 102, 102, 103, 102, 39, 105, 103, 103, 102, 102, 105, 71, 72, 73, 102, 77, 77, 77, 103, 115, 103, 103, 105, 102, 105, 102, 105, 102, 102, 102, 105, 39, 105, 103, 103, 103, 39, 103, 105, 102, 103, 105, 102, 105, 105, 103, 105, 105, 113, 105, 103, 105, 102, 103, 105, 105, 102, 105, 105, 97, 102, 102, 105, 103, 105, 103, 102, 105, 39, 105, 105, 102, 103, 102, 105, 77, 77, 77, 103, 77, 77, 77, 105, 102, 103, 103, 102, 102, 102, 102, 103, 102, 103, 105, 102, 39, 105, 105, 103, 105, 39, 103, 102, 105, 105, 102, 102, 102, 102, 102, 103, 105, 102, 105, 103, 103, 102, 105, 102, 105, 103, 103, 102, 113, 105, 102, 102, 103, 105, 105, 105, 105, 39, 105, 103, 71, 72, 73, 103, 77, 77, 77, 103, 39, 105, 102, 102, 102, 105, 103, 102, 105, 103, 102, 103, 105, 105, 103, 103, 39, 103, 105, 102, 102, 39, 71, 73, 103, 102, 105, 102, 105, 103, 103, 103, 103, 105, 102, 103, 103, 103, 103, 102, 105, 103, 102, 103, 105, 103, 103, 102, 105, 105, 105, 105, 103, 39, 102, 103, 77, 77, 77, 105, 77, 77, 77, 39, 39, 39, 39, 103, 102, 105, 102, 103, 102, 103, 103, 103, 103, 98, 105, 103, 39, 103, 99, 102, 102, 39, 77, 77, 102, 102, 103, 103, 102, 105, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 103, 105, 105, 103, 105, 102, 102, 39, 39, 39, 39, 39, 103, 102, 77, 78, 77, 103, 102, 103, 102, 103, 102, 105, 39, 102, 102, 105, 99, 103, 102, 105, 103, 103, 103, 114, 105, 102, 39, 103, 115, 103, 105, 39, 77, 77, 105, 103, 102, 102, 103, 105, 39, 103, 103, 71, 72, 72, 72, 72, 73, 103, 102, 39, 39, 39, 39, 39, 39, 39, 39, 39, 103, 105, 102, 103, 102, 105, 102, 39, 103, 103, 103, 103, 103, 102, 103, 102, 39, 105, 102, 105, 115, 105, 105, 102, 103, 102, 105, 105, 103, 103, 39, 103, 103, 102, 102, 39, 77, 77, 39, 39, 39, 39, 39, 39, 39, 103, 105, 77, 77, 77, 77, 77, 77, 103, 103, 102, 102, 105, 103, 105, 103, 103, 102, 102, 105, 102, 102, 102, 103, 103, 102, 39, 102, 102, 105, 102, 71, 72, 73, 103, 39, 102, 103, 103, 105, 102, 105, 102, 105, 105, 103, 105, 102, 103, 39, 105, 105, 102, 102, 39, 103, 102, 39, 71, 72, 73, 102, 103, 39, 39, 39, 77, 77, 77, 77, 77, 77, 103, 102, 103, 105, 102, 102, 103, 102, 98, 103, 103, 105, 105, 97, 105, 105, 102, 103, 39, 105, 102, 105, 102, 77, 77, 77, 102, 39, 105, 103, 105, 103, 105, 102, 103, 105, 103, 102, 105, 103, 103, 39, 39, 39, 39, 39, 39, 39, 39, 39, 77, 77, 77, 103, 105, 39, 105, 102, 71, 72, 72, 72, 73, 105, 105, 71, 72, 73, 102, 103, 103, 71, 72, 72, 72, 73, 102, 71, 72, 73, 103, 102, 39, 102, 71, 73, 103, 77, 77, 77, 39, 39, 103, 102, 103, 102, 103, 102, 105, 105, 103, 103, 103, 103, 103, 39, 103, 105, 102, 105, 103, 102, 105, 39, 77, 78, 77, 102, 102, 39, 39, 103, 77, 77, 77, 77, 77, 105, 102, 77, 77, 77, 105, 102, 102, 77, 77, 77, 77, 77, 105, 77, 77, 77, 105, 105, 39, 102, 77, 77, 105, 102, 105, 105, 103, 39, 105, 103, 98, 105, 103, 105, 103, 102, 103, 105, 102, 103, 105, 39, 103, 102, 105, 102, 102, 103, 103, 39, 39, 39, 103, 102, 71, 73, 39, 103, 77, 77, 78, 77, 77, 102, 105, 77, 78, 77, 103, 102, 103, 77, 77, 77, 77, 77, 103, 77, 79, 77, 105, 105, 39, 39, 77, 77, 103, 105, 102, 102, 103, 39, 105, 105, 114, 105, 102, 102, 105, 103, 103, 105, 103, 103, 103, 39, 103, 103, 99, 103, 105, 105, 105, 102, 102, 102, 99, 103, 77, 77, 39, 102, 39, 39, 39, 39, 39, 39, 39, 39, 39, 102, 71, 72, 73, 102, 105, 105, 103, 103, 103, 103, 39, 103, 102, 103, 39, 102, 77, 77, 102, 102, 105, 105, 103, 39, 105, 103, 103, 103, 105, 103, 98, 102, 102, 105, 105, 103, 102, 39, 105, 105, 115, 102, 105, 105, 103, 103, 99, 105, 115, 102, 77, 77, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 102, 77, 77, 77, 105, 105, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 105, 105, 103, 102, 105, 103, 103, 103, 39, 105, 103, 105, 103, 102, 102, 114, 102, 102, 103, 102, 39, 39, 39, 105, 71, 73, 102, 103, 71, 73, 103, 115, 103, 102, 105, 77, 77, 105, 102, 39, 39, 39, 39, 39, 39, 71, 72, 72, 73, 77, 77, 78, 103, 103, 71, 72, 72, 73, 103, 103, 71, 72, 73, 102, 102, 103, 103, 105, 102, 102, 39, 39, 39, 102, 103, 105, 102, 105, 102, 102, 105, 103, 102, 103, 39, 103, 102, 102, 77, 77, 102, 102, 77, 77, 39, 39, 39, 105, 103, 103, 102, 103, 103, 39, 39, 39, 39, 39, 39, 77, 77, 77, 77, 103, 105, 39, 105, 102, 77, 77, 77, 77, 103, 102, 77, 77, 77, 105, 105, 105, 99, 103, 103, 105, 39, 71, 72, 72, 73, 103, 105, 105, 103, 103, 102, 102, 102, 102, 39, 105, 103, 103, 77, 78, 103, 105, 77, 78, 105, 102, 71, 72, 73, 103, 103, 103, 105, 105, 71, 72, 72, 73, 102, 77, 77, 77, 77, 102, 103, 39, 105, 105, 77, 77, 77, 77, 102, 102, 77, 77, 77, 105, 103, 105, 115, 102, 102, 103, 39, 77, 77, 77, 77, 105, 102, 105, 102, 105, 102, 102, 103, 102, 39, 103, 102, 102, 102, 39, 39, 39, 39, 39, 103, 103, 77, 77, 77, 103, 105, 71, 73, 105, 77, 77, 77, 77, 102, 102, 103, 103, 105, 102, 39, 39, 102, 105, 105, 105, 103, 105, 103, 103, 103, 103, 103, 105, 103, 103, 103, 102, 105, 105, 39, 77, 77, 77, 77, 102, 102, 103, 103, 103, 105, 103, 102, 102, 39, 105, 105, 105, 102, 39, 103, 103, 102, 71, 73, 103, 77, 77, 77, 105, 103, 77, 77, 105, 105, 103, 102, 103, 97, 105, 105, 103, 105, 102, 39, 39, 105, 105, 102, 105, 103, 103, 103, 105, 105, 105, 103, 105, 102, 102, 103, 105, 105, 103, 39, 102, 103, 103, 103, 102, 103, 105, 102, 105, 103, 102, 102, 102, 39, 105, 103, 105, 102, 39, 102, 102, 105, 77, 77, 103, 97, 102, 102, 105, 102, 77, 77, 105, 105, 102, 103, 105, 113, 103, 102, 103, 102, 39, 39, 39, 39, 102, 105, 105, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 103, 103, 105, 103, 102, 105, 103, 102, 102, 102, 103, 105, 105, 39, 105, 103, 102, 105, 39, 103, 105, 102, 77, 77, 102, 113, 102, 102, 103, 102, 105, 102, 105, 105, 97, 102, 105, 102, 105, 105, 102, 39, 39, 39, 39, 39, 39, 39, 39, 39, 71, 72, 72, 73, 102, 103, 103, 39, 105, 103, 103, 105, 105, 103, 103, 103, 99, 102, 103, 102, 103, 102, 103, 103, 105, 105, 103, 39, 105, 71, 73, 102, 39, 39, 39, 39, 77, 77, 103, 102, 102, 105, 97, 103, 102, 105, 105, 103, 113, 102, 103, 105, 103, 105, 105, 39, 105, 71, 73, 39, 102, 105, 102, 103, 77, 77, 77, 77, 102, 103, 71, 72, 73, 103, 105, 105, 103, 105, 105, 103, 115, 103, 102, 102, 102, 103, 105, 98, 105, 102, 102, 39, 105, 77, 77, 103, 39, 102, 105, 105, 102, 103, 102, 102, 105, 103, 113, 105, 105, 103, 102, 103, 103, 105, 103, 102, 103, 105, 39, 39, 105, 77, 77, 39, 102, 105, 105, 102, 77, 77, 77, 77, 102, 102, 77, 77, 77, 103, 102, 103, 103, 102, 105, 102, 103, 103, 103, 103, 103, 103, 105, 114, 102, 105, 102, 39, 103, 77, 77, 39, 39, 105, 98, 105, 105, 102, 105, 71, 72, 72, 73, 105, 102, 103, 102, 39, 39, 39, 39, 39, 39, 39, 39, 102, 103, 77, 77, 39, 71, 72, 73, 105, 102, 105, 105, 103, 105, 105, 77, 77, 77, 103, 103, 105, 102, 102, 103, 105, 102, 102, 98, 105, 102, 103, 105, 102, 102, 103, 102, 39, 105, 105, 103, 102, 71, 72, 72, 72, 73, 102, 105, 77, 77, 77, 77, 103, 102, 103, 39, 39, 105, 105, 102, 103, 103, 102, 105, 103, 105, 103, 102, 39, 77, 77, 77, 102, 102, 103, 105, 102, 102, 102, 77, 77, 77, 105, 103, 102, 102, 103, 105, 103, 102, 105, 114, 102, 103, 105, 102, 103, 102, 105, 102, 39, 39, 102, 102, 103, 77, 77, 77, 77, 77, 102, 102, 77, 77, 78, 77, 102, 103, 39, 39, 102, 102, 103, 102, 105, 103, 97, 102, 105, 102, 71, 73, 39, 77, 77, 77, 103, 105, 102, 105, 105, 105, 103, 103, 102, 105, 103, 103, 99, 102, 103, 105, 105, 105, 102, 105, 103, 105, 103, 105, 102, 102, 103, 105, 102, 39, 102, 105, 105, 77, 77, 77, 77, 77, 105, 102, 102, 103, 39, 103, 103, 39, 39, 103, 102, 103, 102, 105, 103, 102, 113, 105, 103, 103, 77, 77, 39, 39, 103, 105, 102, 103, 105, 105, 103, 102, 97, 103, 105, 103, 105, 103, 115, 105, 102, 105, 105, 103, 103, 105, 105, 105, 103, 105, 103, 105, 102, 103, 102, 39, 105, 104, 103, 105, 102, 103, 102, 105, 103, 102, 103, 102, 39, 102, 105, 39, 102, 105, 102, 103, 105, 105, 105, 103, 102, 103, 103, 105, 77, 77, 103, 71, 72, 72, 72, 73, 105, 103, 105, 102, 113, 105, 105, 103, 102, 105, 103, 102, 103, 105, 105, 103, 102, 102, 102, 103, 102, 103, 103, 105, 103, 105, 102, 39, 39, 102, 102, 105, 102, 102, 105, 105, 105, 39, 39, 39, 39, 39, 39, 39, 103, 102, 102, 105, 103, 97, 105, 105, 105, 105, 97, 102, 102, 102, 102, 77, 77, 77, 77, 77, 105, 103, 103, 103, 102, 102, 105, 102, 103, 103, 105, 102, 103, 105, 102, 102, 105, 102, 105, 103, 103, 102, 105, 103, 103, 105, 102, 102, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 103, 103, 103, 102, 105, 39, 105, 102, 102, 103, 103, 113, 105, 102, 102, 103, 113, 103, 105, 105, 103, 77, 77, 77, 77, 77, 103, 103, 105, 105, 105, 102, 102, 102, 103, 102, 102, 103, 102, 103, 105, 102, 103, 103, 102, 103, 103, 103, 105, 103, 105, 105, 103, 105, 102, 105, 105, 105, 105, 103, 102, 102, 105, 103, 103, 102, 105, 105, 103, 39, 102, 105, 105, 103, 103, 102, 102, 105, 103, 102, 102, 102, 105, 102, 103, 105, 102, 103, 102, 102, 103, 102, 102, 103, 105, 103, 105, 102, 103, 105, 102, 103, 102, 105, 103, 103, 105, 103, 102, 105, 103, 102, 102, 105, 103]
	},
	dungeon: {
		name: 'Communications Building\nBasement',
		defs: [
			{ index: '>', tile: Tiles.FLOOR, exitTo: 'campus', start: true },
		],
		exits: [
			{
				x: 7,
				y: 2,
				target: 'campus',
				start: true
			}
		],
		width: 80,
		height: 25,
		indexMap: [76, 76, 76, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 56, 74, 74, 74, 74, 74, 74, 74, 56, 74, 74, 74, 74, 74, 74, 74, 74, 56, 74, 74, 74, 74, 74, 74, 74, 56, 74, 74, 74, 74, 74, 74, 56, 76, 76, 76, 76, 76, 76, 76, 76, 76, 137, 137, 137, 137, 137, 137, 137, 137, 76, 76, 76, 76, 76, 76, 76, 76, 76, 135, 76, 76, 76, 76, 76, 76, 76, 76, 76, 137, 137, 137, 137, 137, 137, 137, 76, 76, 76, 76, 56, 39, 39, 39, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 56, 76, 76, 76, 76, 76, 76, 76, 76, 76, 138, 134, 134, 134, 134, 134, 134, 138, 76, 135, 135, 135, 135, 135, 135, 135, 135, 135, 76, 76, 76, 76, 76, 135, 135, 135, 135, 136, 134, 134, 134, 134, 134, 138, 76, 76, 76, 76, 56, 39, 39, 39, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 56, 76, 76, 76, 76, 76, 76, 76, 76, 76, 138, 134, 134, 134, 134, 134, 134, 138, 76, 76, 76, 76, 76, 76, 135, 76, 76, 76, 76, 76, 76, 76, 76, 135, 76, 76, 76, 138, 134, 134, 134, 134, 134, 138, 76, 76, 76, 76, 56, 39, 39, 39, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 56, 76, 76, 76, 76, 76, 76, 76, 76, 76, 138, 134, 134, 134, 134, 134, 134, 138, 76, 76, 76, 76, 76, 76, 135, 135, 135, 135, 76, 76, 76, 76, 76, 135, 76, 76, 76, 138, 134, 134, 134, 134, 134, 138, 76, 76, 76, 76, 56, 39, 39, 39, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 56, 76, 76, 76, 76, 76, 76, 76, 135, 135, 136, 134, 134, 134, 134, 134, 134, 138, 76, 135, 135, 135, 135, 135, 135, 76, 76, 135, 76, 76, 76, 76, 135, 135, 76, 76, 76, 138, 134, 134, 134, 134, 134, 138, 76, 76, 76, 76, 56, 39, 39, 39, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 56, 76, 76, 76, 76, 76, 76, 76, 135, 76, 137, 137, 137, 137, 137, 137, 137, 137, 76, 76, 76, 76, 76, 76, 76, 76, 76, 135, 76, 76, 76, 76, 135, 76, 76, 76, 76, 137, 137, 137, 137, 137, 137, 137, 76, 76, 76, 76, 56, 56, 56, 39, 39, 56, 56, 56, 56, 56, 56, 56, 39, 39, 56, 56, 56, 56, 56, 56, 39, 39, 56, 56, 56, 56, 56, 56, 39, 39, 56, 56, 56, 76, 76, 76, 76, 76, 76, 76, 135, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 135, 135, 135, 135, 135, 135, 76, 76, 76, 76, 135, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 74, 74, 56, 39, 39, 74, 74, 74, 74, 74, 74, 74, 39, 39, 74, 74, 74, 74, 74, 74, 39, 39, 74, 74, 74, 74, 74, 74, 39, 39, 56, 74, 74, 76, 76, 76, 76, 76, 76, 76, 135, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 135, 76, 76, 76, 76, 76, 76, 76, 76, 76, 135, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 56, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 56, 76, 76, 76, 76, 76, 137, 137, 137, 137, 136, 137, 137, 137, 137, 137, 76, 76, 76, 76, 76, 76, 76, 76, 135, 76, 76, 76, 76, 76, 76, 76, 76, 76, 135, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 56, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 56, 76, 76, 76, 76, 76, 138, 134, 134, 134, 134, 134, 134, 134, 134, 138, 76, 76, 76, 76, 137, 137, 137, 137, 136, 137, 137, 137, 137, 137, 137, 76, 76, 76, 135, 76, 76, 76, 137, 137, 137, 137, 137, 137, 137, 137, 76, 76, 76, 76, 76, 76, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 39, 39, 56, 56, 56, 56, 56, 56, 39, 39, 56, 56, 56, 56, 56, 56, 39, 39, 56, 56, 56, 76, 76, 76, 138, 134, 134, 134, 134, 134, 134, 134, 134, 136, 135, 135, 76, 76, 138, 134, 134, 134, 134, 134, 134, 134, 134, 134, 138, 76, 76, 76, 135, 76, 76, 76, 138, 134, 134, 134, 134, 134, 134, 138, 76, 76, 76, 76, 76, 76, 56, 74, 74, 74, 74, 56, 74, 74, 74, 74, 39, 39, 74, 74, 74, 56, 74, 74, 39, 39, 74, 74, 74, 56, 74, 74, 39, 39, 74, 74, 56, 76, 76, 76, 138, 134, 134, 134, 134, 134, 134, 134, 134, 138, 76, 135, 76, 76, 138, 134, 134, 134, 134, 134, 134, 134, 134, 134, 138, 76, 76, 76, 135, 76, 76, 76, 138, 134, 134, 134, 134, 134, 134, 138, 76, 76, 76, 76, 76, 76, 56, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 56, 76, 76, 76, 137, 137, 137, 137, 137, 136, 137, 137, 137, 137, 76, 135, 135, 135, 136, 134, 134, 134, 134, 134, 134, 134, 134, 134, 136, 135, 76, 76, 135, 76, 76, 76, 137, 137, 137, 136, 137, 137, 137, 137, 76, 76, 76, 76, 76, 76, 56, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 56, 76, 76, 76, 76, 76, 76, 76, 76, 135, 76, 76, 76, 76, 76, 76, 76, 76, 138, 134, 134, 134, 134, 134, 134, 134, 134, 134, 138, 135, 76, 76, 135, 76, 76, 76, 76, 76, 76, 135, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 56, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 56, 76, 76, 76, 76, 76, 76, 76, 76, 135, 76, 76, 76, 76, 76, 76, 76, 76, 137, 137, 137, 137, 137, 137, 136, 137, 137, 137, 137, 135, 76, 76, 135, 76, 76, 76, 76, 76, 76, 135, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 56, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 74, 76, 76, 76, 76, 76, 137, 137, 137, 136, 137, 137, 137, 137, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 135, 76, 76, 76, 76, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 56, 39, 39, 39, 39, 74, 39, 39, 39, 39, 39, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 135, 135, 76, 76, 76, 76, 138, 134, 134, 134, 134, 134, 134, 138, 76, 76, 76, 76, 76, 76, 76, 137, 137, 137, 136, 137, 137, 137, 76, 76, 76, 76, 76, 76, 135, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 56, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 56, 135, 76, 76, 76, 76, 138, 134, 134, 134, 134, 134, 134, 138, 76, 76, 76, 76, 76, 76, 76, 138, 134, 134, 134, 134, 134, 138, 76, 76, 76, 76, 76, 76, 135, 56, 56, 56, 56, 56, 56, 56, 56, 56, 76, 76, 76, 76, 76, 76, 56, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 56, 135, 76, 76, 76, 76, 138, 134, 134, 134, 134, 134, 134, 138, 76, 76, 76, 76, 76, 76, 76, 138, 134, 134, 134, 134, 134, 138, 76, 76, 76, 76, 76, 76, 135, 56, 74, 74, 155, 156, 157, 158, 74, 56, 76, 76, 76, 76, 76, 76, 56, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 56, 135, 76, 76, 76, 76, 138, 134, 134, 134, 134, 134, 134, 138, 76, 76, 76, 76, 76, 76, 76, 138, 134, 134, 134, 134, 134, 138, 76, 76, 76, 76, 76, 76, 39, 74, 39, 39, 171, 172, 173, 174, 39, 56, 76, 76, 76, 76, 76, 76, 56, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 39, 56, 39, 39, 39, 39, 39, 39, 56, 135, 135, 135, 135, 135, 136, 134, 134, 134, 134, 134, 134, 138, 76, 76, 76, 76, 76, 76, 76, 138, 134, 134, 134, 134, 134, 138, 76, 76, 76, 76, 76, 76, 39, 39, 39, 39, 39, 39, 39, 39, 39, 56, 76, 76, 76, 76, 76, 76, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 76, 76, 76, 76, 76, 138, 134, 134, 134, 134, 134, 134, 138, 76, 76, 76, 76, 76, 76, 76, 138, 134, 134, 134, 134, 134, 138, 76, 76, 76, 76, 76, 76, 76, 56, 39, 39, 39, 39, 39, 39, 39, 56, 76, 76, 76, 76, 76, 76, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 76, 76, 76, 76, 76, 137, 137, 137, 137, 137, 137, 137, 137, 76, 76, 76, 76, 76, 76, 76, 138, 134, 134, 134, 134, 134, 138, 76, 76, 76, 76, 76, 76, 76, 56, 56, 56, 56, 56, 56, 56, 56, 56, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 137, 137, 137, 137, 137, 137, 137, 76, 76, 76, 76, 76, 76, 76, 74, 74, 74, 74, 74, 74, 74, 74, 74, 76]
	}
}

export { globalDefs, levelMaps }