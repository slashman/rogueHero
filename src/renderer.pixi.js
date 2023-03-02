import './css/styles.css';
import {printEnvironment} from './environment';
import Game from './ts/Game';

window.onload = () => {
  printEnvironment()

  Game.start({
    display: 'pixi',
    displayConfig: {
      tilesetURL: './assets/gfx/programmers.png',
      tilesetCountX: 16,
      tilesetCountY: 16,
      tileSize: 16,

      viewportCountX: 27,
      viewportCountY: 27,
      textboxFontSize: 64,

      transparentTiles: false
    }
  });
}
