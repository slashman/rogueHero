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
	time: 500,
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
		if (being.eventId === 'FAN' && !being.interacted) {
			this.game.display.showEvent('A young man rushes at you. It\'s you, Glenn Wichman! You are one of the programmers of Rogue, right?',
				[
					{
						text: 'Yes, that\'s me! (1 minute)',
						cost: 10,
						action: () => {
							this.game.display.showEvent(
								'I knew! listen, I have some great ideas to improve the game, do you want to hear them?',
								[
									{
										text: 'Sure.. what is it? (1 minute)',
										cost: 10,
										action: () => {
											this.game.display.showEvent(
												'I think you should include new character classes! cowboys, jedi knights, samurai, and also Superman as a hidden enemy! It\'s all in my notebook.',
												[
													{
														text: 'Very... interesting..? Can you xerox that notebook... I may take a look [[suuuure!]]',
														action: () => {
															this.game.display.textBox.setText('Right away!');
															this.game.input.mode = 'MOVEMENT';
														}
													},
													{
														text: 'Frankly, I don\'t think that would work. We are already struggling with memory limits.',
														action: () => {
															this.game.display.textBox.setText('Yeah... whatever, I\'ll use these ideas on my own version of it. You\'ll regret not having taken them!');
															this.game.input.mode = 'MOVEMENT';
														}
													}
												]
											);
											being.interacted = true;
											being.setIntent('RANDOM');
										}
									},
									{
										text: 'Sorry, we have enough ideas already.',
										action: () => {
											this.game.display.textBox.setText('Of course... sorry to bother you!');
											this.game.input.mode = 'MOVEMENT';
											being.interacted = true;
											being.setIntent('RANDOM');
										}
									},
									{
										text: 'Nope, I\'m a bit too busy now. Bye!',
										action: () => {
											this.game.display.textBox.setText('Of course... sorry to bother you!');
											this.game.input.mode = 'MOVEMENT';
											being.interacted = true;
											being.setIntent('RANDOM');
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
							being.setIntent('RANDOM');
						}
					},
					{
						text: 'Haha, no... people mistakes me for him every time!',
						action: () => {
							this.game.display.textBox.setText('Huh... ok.');
							this.game.input.mode = 'MOVEMENT';
							being.interacted = true;
							being.setIntent('RANDOM');
						}
					}
				]
			);
			return;
		}

		if (being.eventId === 'MARTY' && !being.interacted) {
			this.game.display.showEvent(
				'You see your friend, Marty. One of the most loyal testers of rogue. He is ecstatic: "Glenn! I think I have a great idea to improve the game, want to hear it?',
				[
					{
						text: 'Sure.. what is it? (1 minute)',
						cost: 10,
						action: () => {
							this.game.display.showEvent(
								'Let\'s add a "kindness" stat! populate the dungeons with people and if you are kind with them, you\'ll have bonuses in combat!',
								[
									{
										text: 'I think being kind just for a mechanical benefit is not really being kind - it\'s being selfish!',
										action: () => {
											this.game.display.textBox.setText('Marty looks a bit disappointed. "Yes. I guess you are right."');
											this.game.input.mode = 'MOVEMENT';
										}
									},
									{
										text: 'Sounds amaaaaazing! [[Ugh]] I will... talk with Michael about it... yeah.',
										action: () => {
											this.game.display.textBox.setText('You are the best! let me know when it\'s in the game so I can boast with my friends!');
											this.game.input.mode = 'MOVEMENT';
										}
									}
								]
							);
							being.interacted = true;
							being.setIntent('RANDOM');
						}
					},
					{
						text: 'Sorry, we have enough ideas already.',
						action: () => {
							this.game.display.textBox.setText('Of course... sorry to bother you!');
							this.game.input.mode = 'MOVEMENT';
							being.interacted = true;
							being.setIntent('RANDOM');
						}
					},
					{
						text: 'Nope, I\'m a bit too busy now. Bye!',
						action: () => {
							this.game.display.textBox.setText('Of course... sorry to bother you!');
							this.game.input.mode = 'MOVEMENT';
							being.interacted = true;
							being.setIntent('RANDOM');
						}
					}
				]
			);
			return;
		}


		if (being.eventId === 'GABY' && !being.interacted) {
			const sorryAction = () => {
				this.game.display.textBox.setText('The kid says: "I am sorry, sir!" and runs terrified.');
				this.game.input.mode = 'MOVEMENT';
				being.interacted = true;
				being.setIntent('RANDOM');
			}

			this.game.display.showEvent('An energized little child runs straight into you, spilling her entire glass of mango juice over you. What will you do?',
				[
					{
						text: 'Mind your way, KID!',
						action: sorryAction
					},
					{
						text: 'Just what I needed now, AHH!',
						action: sorryAction
					},
					{
						text: 'Hey kid, try being more careful :)',
						action: sorryAction
					}
				]
			);
			return;
		}
		if (being.eventId === 'CUTE_WOMAN' && !being.interacted) {
			this.game.display.showEvent('You see a young woman, your eyes cross with hers for a split second. You feel a strange energy running around your body. What will you do?',
				[
					{
						text: 'Smile at her',
						action: () => {
							this.game.display.textBox.setText('She smiles back.');
							this.game.input.mode = 'MOVEMENT';
							being.interacted = true;
						}
					},
					{
						text: 'Look away and pretend nothing happened.',
						action: () => {
							this.game.display.textBox.setText('I can\'t believe you.');
							this.game.input.mode = 'MOVEMENT';
						}
					}
				]
			);
			return;
		}
		
		if (being.eventId === 'PUNK' && !being.interacted) {
			this.game.display.showEvent('You see a man, seemingly worried heavily by something. What will you do?',
				[
					{
						text: 'Ask him why he\'s sad (1 minute)',
						cost: 10,
						action: () => {
							this.game.display.showText('Why do you care? it\'s none of your business!');
							this.game.input.mode = 'MOVEMENT';
							being.interacted = true;
						}
					},
					{
						text: 'Ignore him',
						action: () => {
							this.game.display.showText('Yup, why would you care anyways.');
							this.game.input.mode = 'MOVEMENT';
						}
					},
				]
			);
			return;
		}
		if (being.race.dialogs) {
			being.currentMessage++;
			if (being.currentMessage >= being.race.dialogs.length) {
				being.currentMessage = 0;
			}
			this.game.display.textBox.setText(`${being.getName()} says: ${being.race.dialogs[being.currentMessage]}`);
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
		if (this.game.world.level.id !== 'apartment' && !this.game.world.level.player.plugged) {
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
	},
	examineBuggy () {
		this.game.display.showText("You see \"Bizmark\", your 1968 Volkswagen Bug. Its front was crunched when brakes failed in the rain and you rear-ended a car. It ended up with yellow fenders from an old ???Baja Bug??? and the red hood from a 62' Bug that you managed to frankenstein together.");
	}
}