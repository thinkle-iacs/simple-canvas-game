import "./style.css";

import { GameInterface } from 'simple-canvas-library';

let gi = new GameInterface();

/* Variables: Top-Level variables defined here are used to hold game state */


/* Drawing Functions */

/* Example drawing function: you can add multiple drawing functions
that will be called in sequence each frame. It's a good idea to do 
one function per each object you are putting on screen, and you
may then want to break your drawing function down into sub-functions
to make it easier to read/follow */
gi.addDrawing(
  function ({ ctx, width, height, elapsed, stepTime }) {
    // Your drawing code here...    
  }
)

/* Input Handlers */

/* Example: Mouse click handler (you can change to handle 
any type of event -- keydown, mousemove, etc) */

gi.addEventListener(
  "click",
  function ({ event, x, y }) {
    // Your click handling code here...
  }
)


/* Run the game */
gi.run();


