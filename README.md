# Simple Canvas Library Sandbox

## Project Overview

This is a learning sandbox for creating interactive 2D games and animations using JavaScript and the Simple Canvas Library. This project is designed to help you practice fundamental programming concepts from the AP Computer Science Principles curriculum, including:

- **Defining and using procedures (functions)** to organize your code
- **Working with variables** to store and manipulate data
- Creating visual animations using the HTML5 Canvas API
- Handling user interactions like mouse clicks and keyboard input

By the end of this project, you'll have created your own interactive canvas-based game or animation while demonstrating your understanding of core programming concepts.

## Running project

To run project, use

```sh
npm run dev
```

## Your Code

Your code should live in `main.js`

## Demos

See demo.js for some sample code.

Simple Canvas Library home page here: https://thinkle.github.io/simple-canvas-library/
Source code of simple canvas library here: https://github.com/thinkle/simple-canvas-library/

## Project Rubric

### 1. Using Functions (Defining Procedures)

**Developing (1-2 points):**
- Code contains at least one custom function
- Functions may not have clear purposes or may duplicate code

**Proficient (3-4 points):**
- Code uses multiple well-named functions with clear purposes
- Functions break down the program into logical components
- Functions accept parameters to make them reusable
- Examples: `drawPlayer()`, `updateScore(points)`, `checkCollision(x, y)`

**Advanced (5 points):**
- Code demonstrates sophisticated use of functions
- Functions are modular and can be easily reused or modified
- Uses functions as parameters (e.g., passing drawing functions to `addDrawing()`)
- Code organization shows clear separation of concerns
- Examples: Creating helper functions for common calculations, organizing game logic into separate functions

### 2. Understanding and Using Variables

**Developing (1-2 points):**
- Code uses variables to store basic values
- Variable names may not be descriptive
- May overuse global variables without clear organization

**Proficient (3-4 points):**
- Code uses variables appropriately with descriptive names
- Demonstrates understanding of variable scope (when to use `let` vs `const`)
- Uses variables to track game state (position, score, speed, etc.)
- Updates variables appropriately to create animations or track changes
- Examples: `let playerX = 100;`, `const JUMP_SPEED = 5;`, `let score = 0;`

**Advanced (5 points):**
- Code demonstrates sophisticated variable usage
- Uses objects or arrays to organize related data
- Shows understanding of different data types and when to use them
- Variables are scoped appropriately (avoiding unnecessary globals)
- Examples: Using objects like `{x: 0, y: 0, speed: 5}` to represent game entities, using arrays to track multiple items

### Additional Considerations

Your project will also be evaluated on:
- **Creativity and effort** in the game/animation concept
- **Code organization and readability** (proper indentation, clear naming)
- **Comments** that explain complex logic or design decisions
- **Working functionality** - the program runs without errors

### Submission Requirements

To complete this project, ensure your code:
1. Runs successfully using `npm run dev`
2. Contains at least 3 custom functions with clear purposes
3. Uses at least 5 meaningfully-named variables
4. Creates an interactive or animated visual output
5. Includes comments explaining your functions and key variables
