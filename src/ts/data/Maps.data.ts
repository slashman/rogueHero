import Tiles from './Tiles.data';
import Races from './Races.data';
import Items from './Items.data';

const globalDefs = [
	{ char: ' ', tile: Tiles.VOID },
	{ char: 'B', tile: Tiles.GRASS, item: Items.BOOK_OF_MIRDAS }
];

const levelMaps = {

	apartment: {
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
		defs: [
			{ char: '>', tile: Tiles.FLOOR, exitTo: 'overworld', start: true },
			{ char: '<', tile: Tiles.FLOOR, exitTo: 'dungeon' },
			{ char: '#', tile: Tiles.TOP },
			{ char: '.', tile: Tiles.FLOOR },
		],
		map: [
			"                              ",
			"       ###  ###               ",
			"  ..............      ######  ",
			"  .    ###  ###.      ###<##  ",
			"  .            .         .    ",
			"  ........................    ",
			"               .              ",
			"               >              ",
		]
	}
}

export { globalDefs, levelMaps }