const ut = (window as any).ut;

export default {
	BANANA_SLUG: {
		name: 'Banana Slug',
		tilesetData: '0-1'
	},
	RAT: {
		name: 'Rat',
		tilesetData: '1-1'
	},
	TOY: {
		name: 'Toy',
		tilesetData: '2-0',
		dialogs: [
			'I broke my leg last week playing rugby... so I fear I can\'t join you to the Campus.',
			'Please go to the Communications Building and plug back the computer\'s modem so we can connect again!',
			'I fear I may be kicked off Santa Cruz soon :(',
			'Got any ideas for new monsters?'
		]
	},
	OLD_LADY: {
		name: 'Old Lady',
		tilesetData: '2-1',
		dialogs: [
			'Thank you, young man!'
		]
	}
}