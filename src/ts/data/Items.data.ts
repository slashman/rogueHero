const ut = (window as any).ut;

import ItemType from './ItemTypes.data';

export default {
	WALKMAN: {
		type: ItemType.WEAPON,
		name: 'Walkman',
		tile: new ut.Tile('/', 128, 128, 128),
		tilesetData: '1-3'
	},
	BOOK_OF_MIRDAS: {
		type: ItemType.BOOK,
		name: 'Book of Mirdas',
		tile: new ut.Tile('B', 255, 0, 0),
		tilesetData: '45-5'
	},
	BOOK_OF_AURORA: {
		type: ItemType.BOOK,
		name: 'Book of Aurora',
		tile: new ut.Tile('B', 0, 0, 255),
		targetted: true,
		tilesetData: '45-5'
	},
	SPELL_OF_LOLZORS: {
		type: ItemType.SPELL,
		name: 'Spell of Lolzors',
		tile: new ut.Tile('S', 0, 255, 0),
		tilesetData: '45-5'
	},
	POOP: {
		name: 'Poop',
		tilesetData: '2-3',
		interact: (game, item) => {
			game.display.showEvent('There\'s some poop here... likely from that stray dog. What will you do?',
				[
					{
						text: 'Pick up the poop (5 minutes)',
						cost: 50,
						action: () => {
							game.display.textBox.setText('You clean up the poop');
							game.world.level.removeItem(item.x, item.y);
							game.display.refresh();
							game.input.mode = 'MOVEMENT';
						}
					},
					{
						text: 'Eww... gross.',
						action: () => {
							game.display.textBox.setText('Agreed.');
							game.input.mode = 'MOVEMENT';
						}
					}
				]
			);
		}
	}
}