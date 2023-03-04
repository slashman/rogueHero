/**
 * Object representing the entirety of the world of the game.
 * Connects with LevelLoader and procedural level generators to build levels as required.
 * Contains the state of the levels generated or loaded previously.
 */

import Level from './Level.class';
import LevelGenerator from '../LevelGenerator';
import LevelLoader from '../LevelLoader';
import Random from '../Random';

export default {
	levels: {},
	init: function(game) {
		this.game = game;
		this.player = game.player;
		this.loadLevel('apartment'); // Load the initial level
	},
	loadLevel: function(levelId: string) {
		if (this.levels[levelId]){
			// We already generated or loaded that level, so we just move to it
			this.level.exitX = this.player.x;
			this.level.exitY = this.player.y;
			this.level = this.levels[levelId];
			this.player.x = this.level.exitX;
			this.player.y = this.level.exitY;
		} else {
			// We must generate or loaded the level, and then move to it
			let previousLevelId = undefined;
			if (this.level) {
				// There was a level loaded already, we store the returning location
				this.level.exitX = this.player.x;
				this.level.exitY = this.player.y;
				previousLevelId = this.level.id;
			}
			// Create the level and store a reference to it
			this.level = new Level(this.game, levelId);
			LevelLoader.loadLevel(this.level, levelId, previousLevelId);
			//LevelGenerator.generateTestLevel(this.level, previousLevelId, 'test'+Random.n(0,1000));
			this.levels[levelId] = this.level;
		}
		if (this.level.onEnter) {
			this.game.display.textBox.setText(this.level.onEnter);
		}
	}
}