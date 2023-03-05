import Random from "../Random";
import Being from "./Being.class";
import Item from "./Item.class";

const ut = (window as any).ut;

/**
 * Object that contains the state of the player, as well as functions for it
 * to interact with the world.
 * 
 * Contains the player inventory and functions to grab and drop.
 * 
 * Contains the player memory (tiles he has seen previously per level)
 * 
 * Contains the field of view logic using simple raycasting.
 */

export default {
	MAX_SIGHT_RANGE: 10,
	x: 20,
	y: 20,
	tile: new ut.Tile('@', 255, 255, 255),
	visible: [],
	memory: {},
	items: [],
	time: 900,
	init: function(game) {
		this.game = game;
		for (var j = -this.MAX_SIGHT_RANGE; j <= this.MAX_SIGHT_RANGE; j++){
			this.visible[j] = [];
		}
	},
	interactWithItem (item: Item) {
		if (item.def.interact) {
			item.def.interact(this.game, item);
		}
	},
	interactWithBeing (being: Being) {
		if (being.eventId === 'OLD_LADY' && !being.interacted) {
			this.game.display.showEvent('You see an old lady, it looks like she has been trying to cross the street for hours. What will you do?',
				[
					{
						text: 'Help her cross the street (5 minutes)',
						cost: 50,
						action: () => {
							this.game.display.textBox.setText('You help the old lady cross the street, a small act of kindness?');
							being.moveTo(0, 4);
							this.game.display.refresh();
							this.game.input.mode = 'MOVEMENT';
							being.interacted = true;
						}
					},
					{
						text: 'Look to the other side and continue walking',
						action: () => {
							this.game.display.textBox.setText('Yes. There is no time to lose.');
							this.game.input.mode = 'MOVEMENT';
						}
					}
				]
			);
			return;
		}
		if (being.eventId === 'KIPP' && !being.interacted) {
			this.game.display.showEvent('A young man rushes at you. It\'s you, Glenn Wichman! You are one of the programmers of Rogue, right?',
				[
					{
						text: 'Yes, that\'s me! (1 minute)',
						cost: 10,
						action: () => {
							this.game.display.showEvent(
								'I knew! listen, I have a great idea to improve the game, do you want to hear it?',
								[
									{
										text: 'Sure.. what is it? (1 minute)',
										cost: 10,
										action: () => {
											this.game.display.showEvent(
												'"Imagine this: It\'s ROGUE, but with a MORALITY axis, so you have to be *kind* in order to win the game."\nYou believe it\'s not a very good idea.',
												[
													{
														text: 'Well, being kind just for a mechanical benefit is not really being kind - it’s being selfish.',
														action: () => {
															this.game.display.textBox.setText('The man looks a bit disappointed. "Yes. I guess you are right."');
															this.game.input.mode = 'MOVEMENT';
														}
													},
													{
														text: 'Oh... cool... yeah I will consider this... bye!',
														action: () => {
															this.game.display.textBox.setText('You are the best! let me know when it\'s in the game so I can boast with my friends!');
															this.game.input.mode = 'MOVEMENT';
														}
													}
												]
											);
											being.interacted = true;
										}
									},
									{
										text: 'Sorry, we have enough ideas already.',
										action: () => {
											this.game.display.textBox.setText('Of course... sorry to bother you!');
											this.game.input.mode = 'MOVEMENT';
											being.interacted = true;
										}
									},
									{
										text: 'Nope, I\'m a bit too busy now. Bye!',
										action: () => {
											this.game.display.textBox.setText('Of course... sorry to bother you!');
											this.game.input.mode = 'MOVEMENT';
											being.interacted = true;
										}
									}
								]
							);
						}
					},
					{
						text: 'Yes, but I\'m in a hurry. Sorry!',
						action: () => {
							this.game.display.textBox.setText('Of course... sorry to bother you!');
							this.game.input.mode = 'MOVEMENT';
							being.interacted = true;
						}
					},
					{
						text: 'Haha, no... people mistakes me for him every time!',
						action: () => {
							this.game.display.textBox.setText('Huh... ok.');
							this.game.input.mode = 'MOVEMENT';
							being.interacted = true;
						}
					}
				]
			);
			return;
		}
		if (being.race.dialogs) {
			being.currentMessage++;
			if (being.currentMessage >= being.race.dialogs.length) {
				being.currentMessage = 0;
			}
			this.game.display.textBox.setText(`${being.race.name} says: ${being.race.dialogs[being.currentMessage]}`);
			this.game.input.inputEnabled = true;
			this.game.input.mode = 'MOVEMENT';
		}
	},
	tryMove: function(dir: {x: number, y: number}) {
		const being = this.game.world.level.getBeing(this.x + dir.x, this.y + dir.y);
		if (being) {
			this.interactWithBeing(being);
			return;
		}
		const item = this.game.world.level.getItem(this.x + dir.x, this.y + dir.y);
		if (item) {
			this.game.input.inputEnabled = true;
			this.interactWithItem(item);
			return;
		}
		const tile = this.game.world.level.getTile(this.x + dir.x, this.y + dir.y);
		if (tile?.interact) {
			this.game.input.inputEnabled = true;
			tile.interact(this.game);
			return;
		}

		if (!this.game.world.level.canWalkTo(this.x+dir.x, this.y+dir.y)){
			this.game.input.inputEnabled = true;
			return;
		}
		this.x += dir.x;
		this.y += dir.y;
		if (this.game.world.level.id !== 'apartment') {
			this.time--;
		}
		this.game.audio.playSfx('step');
		this.land();
	},
	land: function() {
		if (this.game.world.level.exits[this.x] && this.game.world.level.exits[this.x][this.y]){
			this.game.world.loadLevel(this.game.world.level.exits[this.x][this.y]);
		}
		this.endTurn();
	},
	endTurn: function() {
		this.updateFOV();
		this.game.display.refresh();
		this.game.world.level.beingsTurn();
	},
	remember: function(x: number, y: number) {
		var memory = this.memory[this.game.world.level.id];
		if (!memory){
			memory = [];
			this.memory[this.game.world.level.id] = memory;
		}
		if (!memory[x]){
			memory[x] = [];
		}
		memory[x][y] = true;
	},
	remembers: function(x: number, y: number) {
		var memory = this.memory[this.game.world.level.id];
		if (!memory){
			return false;
		}
		if (!memory[x]){
			return false;
		}
		return memory[x][y] === true;
	},
	canSee: function(dx: number, dy: number) {
		try {
			return this.visible[dx][dy] === true;
		} catch(err) {
			// Catch OOB
			return false; 
		}
	},
	getSightRange: function() {
		return 5;
	},
	updateFOV: function() {
		/*
		 * This function uses simple raycasting, 
		 * use something better for longer ranges
		 * or increased performance
		 */
		for (var j = -this.MAX_SIGHT_RANGE; j <= this.MAX_SIGHT_RANGE; j++)
			for (var i = -this.MAX_SIGHT_RANGE; i <= this.MAX_SIGHT_RANGE; i++)
				this.visible[i][j] = false;
		var step = Math.PI * 2.0 / 1080;
		for (var a = 0; a < Math.PI * 2; a += step)
			this.shootRay(a);
	},
	shootRay: function (a: number) {
		var step = 0.3333;
		var maxdist = this.getSightRange() < this.MAX_SIGHT_RANGE ? this.getSightRange() : this.MAX_SIGHT_RANGE;
		maxdist /= step;
		var dx = Math.cos(a) * step;
		var dy = -Math.sin(a) * step;
		var xx = this.x, yy = this.y;
		for (var i = 0; i < maxdist; ++i) {
			var testx = Math.round(xx);
			var testy = Math.round(yy);
			this.visible[testx-this.x][testy-this.y] = true;
			this.remember(testx, testy);
			try { 
				if (this.game.world.level.map[testx][testy].opaque && !(testx == this.x && testy == this.y))
					return;
			} catch(err) {
				// Catch OOB
				return; 
			}
			xx += dx; yy += dy;
		}
	},
	canPick: function() {
		return this.items.length < 24;
	},
	addItem: function(item) {
		if (this.items.length === 24){
			return;
		}
		this.items.push(item);
		this.items.sort(this.itemSorter);
	},
	removeItem: function(item) {
		this.items.splice(this.items.indexOf(item), 1);
		this.items.sort(this.itemSorter);	
	},
	itemSorter: function(a, b) {
		if (a.def.type.name === b.def.type.name){
			return a.def.name > b.def.name ? 1 : -1;
		} else {
			return a.def.type.name > b.def.type.name ? 1 : -1;
		}
	},
	tryPickup: function() {
		var item = this.game.world.level.getItem(this.x, this.y);
		if (item){
			if (!this.canPick()){
				this.game.display.message("You can't pickup the "+item.def.name);
			} else {
				this.game.display.message("You pickup the "+item.def.name);
				this.game.world.level.removeItem(this.x, this.y);
				this.addItem(item);
			}
		}
	},
	tryDrop: function(item) {
		var underItem = this.game.world.level.items[this.x] && this.game.world.level.items[this.x][this.y];
		if (underItem){
			this.game.display.message("Cannot drop the "+item.def.name+" here.");
		} else {
			this.game.world.level.addItem(item, this.x, this.y);
			this.removeItem(item);
			this.game.display.message("You drop the "+item.def.name+".");
		}
	},
	tryUse: function(item, dx, dy) {
		item.def.type.useFunction(this.game, item, dx, dy);
	}
}