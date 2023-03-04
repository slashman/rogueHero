import { Text } from 'pixi.js';

export default {
	createTextBox(x, y, fontSize, textColor, initialText, wordWrapWidth?) {
		const textBox = new Text(initialText, {
			fontFamily: '_decterm',
			fontSize: fontSize,
			fill: textColor,
			align: 'left',
			wordWrap: !!wordWrapWidth,
			wordWrapWidth: wordWrapWidth
		});
		textBox.scale.x = 0.25;
		textBox.scale.y = 0.25;
		textBox.position.x = x;
		textBox.position.y = y;
		textBox.text = initialText;
		return textBox;
	}
}