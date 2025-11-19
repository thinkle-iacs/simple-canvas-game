import "./style.css";

import { GameInterface } from 'simple-canvas-library';

let gi = new GameInterface();

gi.addDrawing(
  function ({ ctx, width, height, elapsed }) {
    // Your drawing code here...
    // (see demo.js for fuller example)
  }
)

gi.run();


