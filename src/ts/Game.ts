/**
 * Single object that controls the initialization of the 
 * game and serves as a container for its main subsystems (Display, World, Player and Input)
 * 
 */

import UnicodeTilesDisplay from './display/unicodeTilesDisplay/UnicodeTilesDisplay';
import PIXIDisplay from'./display/pixiDisplay/PixiDisplay';
import TestDisplay from './display/TestDisplay';

import World from './model/World';
import Player from './model/Player';
import Input from './Input';

import Item from './model/Item.class';
import Items from './data/Items.data';
import Audio from './Audio';
import AudioTracks from './data/AudioTracks';

declare global {
	interface Window {
		Game: {}
	}
}

const Game = {
	start: async function(config) {
		let selectedDisplay;
		switch (config.display) {
			case 'pixi':
				selectedDisplay = PIXIDisplay;
				break;
			case 'test':
				selectedDisplay = TestDisplay;
				break;
			case 'unicodeTiles':
			default:
				selectedDisplay = UnicodeTilesDisplay;
				break;
		}

		this.display = selectedDisplay;
		this.world = World;
		this.player = Player;
		this.input = Input;
		this.audio = Audio;
		Audio.init(this);
		AudioTracks.loadAudio(this);
		await this.display.init(this, config.displayConfig);
		Player.init(this);
		World.init(this);
		Input.init(this);
		this.display.titleScreen();
	},
	newGame: function () {
		this.player.updateFOV();
		this.display.refresh();
		Player.addItem(new Item(Items.WALKMAN));
		this.display.activateNewGame();
	}
}

window.Game = Game;

export default Game;
