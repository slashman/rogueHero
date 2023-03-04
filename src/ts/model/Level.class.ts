/**
 * Represent an area of the World, connected to others via stairs
 * 
 * Contains Beings, Items and exits.
 * Controls the order of interaction of all beings and the player.
 * 
 */

import Being from "./Being.class";
import Item from "./Item.class";

export default class Level {
	map: any[];
	name: string;
	onEnter: string;
	private beings: Being[][];
	private exits: any[];
	private items: any[];
	
	private beingsList: Being[];
	game: any;
	private id: string;
	player: any;

	constructor (game: any, id: string) {
		this.init(game, id);
	}

	init (game: any, id: string) {
		this.map = [];
		this.beings = [];
		this.beingsList = [];
		this.exits = [];
		this.items = [];

		this.game = game;
		this.id = id;
		this.player = game.player;
	}

	beingsTurn () {
		for (var i = 0; i < this.beingsList.length; i++){
			this.beingsList[i].act();
		}
		this.player.updateFOV();
		this.game.display.refresh();
		this.game.input.inputEnabled = true;
	}

	addBeing (being: Being, x: number, y: number) {
		this.beingsList.push(being);
		if (!this.beings[x])
			this.beings[x] = [];
		being.moveTo(x, y);
		this.beings[x][y] = being;
	}

	canWalkTo (x: number, y: number) {
		try {
			if (this.map[x][y].solid){
				return false;
			}
		} catch (e){
			// Catch OOB
			return false;
		}
		if (this.beings[x] && this.beings[x][y]){
			return false;
		}
		if (this.player && this.player.x === x && this.player.y === y)
			return false;
		return true;
	}

	getBeing (x: number, y: number): Being {
		return this.beings[x] ? this.beings[x][y] : null;
	}

	getTile (x: number, y: number): any {
		return this.map[x] ? this.map[x][y] : null;
	}

	addExit (x: number, y: number, levelId: string, tile?: any) {
		if (tile) {
			if (!this.map[x])
				this.map[x] = [];
			this.map[x][y] = tile;
		}
		if (!this.exits[x])
			this.exits[x] = [];
		this.exits[x][y] = levelId;
	}

	addItem (item: Item, x: number, y: number) {
		if (!this.items[x])
			this.items[x] = [];
		this.items[x][y] = item;
		item.x = x;
		item.y = y;
	}

	getItem (x: number, y: number) {
		if (!this.items[x])
			return false;
		return this.items[x][y];
	}

	removeItem (x: number, y: number) {
		if (!this.items[x])
			this.items[x] = [];
		this.items[x][y] = false;
	}

	moveBeing (being: Being, dx: number, dy: number) {
		if (!this.beings[being.x])
			this.beings[being.x] = [];
		this.beings[being.x][being.y] = null;
		if (!this.beings[being.x + dx])
			this.beings[being.x + dx] = [];
		this.beings[being.x + dx][being.y + dy] = being;
	}
}