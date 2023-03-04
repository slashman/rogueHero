/**
 * Object that loads a predesigned map into a game level.
 *  
 */

import {globalDefs, levelMaps} from './data/Maps.data';
import Being from './model/Being.class';
import Item from './model/Item.class';
import Level from './model/Level.class';

export default {
	loadLevel: function(level: Level, mapId: string, fromId?: string){
		const map = levelMaps[mapId];
		level.map = [];
		level.name = map.name;
		const defsMap = {};
		const indexesMap = {};
		const defsList = globalDefs.concat(map.defs);
		if (map.map) {
			// Charmap
			for (var y = 0; y < map.map.length; y++){
				for (var x = 0; x < map.map[0].length; x++){
					if (!level.map[x]) {
						level.map[x] = [];
					}
					const mapChar = map.map[y].charAt(x);
					let def = defsMap[mapChar];
					if (!def) {
						def = defsList.find(def => def.char == mapChar);
						if (!def) {
							throw new Error("def not found for mapChar [" + mapChar + "]");
						}
						defsMap[mapChar] = def;
					}
					this.processDef(level, x, y, def, fromId);
				}
			}
		} else if (map.indexMap) {
			// Indexes map
			for (var y = 0; y < map.height; y++){
				for (var x = 0; x < map.width; x++){
					if (!level.map[x]) {
						level.map[x] = [];
					}
					const mapIndex = map.indexMap[y * map.width + x];
					let def = indexesMap[mapIndex];
					if (!def) {
						def = defsList.find(def => def.index === mapIndex);
						if (!def) {
							throw new Error(`def not found for index [${mapIndex}] at [${x},${y}`);
						}
						indexesMap[mapIndex] = def;
					}
					this.processDef(level, x, y, def, fromId);
				}
			}
		} else {
			throw new Error('Invalid map for level ' + mapId);
		}
		if (map.exits) {
			map.exits.forEach(e => {
				level.addExit(e.x, e.y, e.target);
				if (e.start) {
					level.player.x = e.x;
					level.player.y = e.y;
				}
			})
		}

	},
	processDef (level: Level, x: number, y: number, def: any, fromId: string) {
		level.map[x][y] = def.tile;
		if (def.item) {
			level.addItem(new Item(def.item), x, y);
		}
		if (def.being) {
			var being = new Being(level.game, level, def.being);
			level.addBeing(being, x, y);
			being.setIntent(def.intent || 'RANDOM');
			being.eventId = def.eventId;
		}
		if (def.exitTo) {
			level.addExit(x, y, def.exitTo, def.tile);
		}
		if (def.start) {
			level.addExit(x, y, fromId, def.tile);
			level.player.x = x;
			level.player.y = y;
		}
	}
}