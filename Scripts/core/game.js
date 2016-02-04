/// <reference path = "_reference.ts" />
// global variables
var canvas;
var stage;
var stats;
var currentScene;
var scene;
// Game Scenes
// class name of intro.ts,leftcave.ts and rightcave.ts
var intro;
var leftCave;
var rightCave;
// variable to match the class name of leftcave2.ts
var leftCave2;
function init() {
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    // create our main display list container
    stage = new createjs.Stage(canvas);
    // Enable mouse events
    stage.enableMouseOver(20);
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    // sets up our stats counting workflow
    setupStats();
    // set initial scene i.e intro.ts
    scene = config.Scene.INTRO;
    changeScene();
}
// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event) {
    // start collecting stats for this frame
    stats.begin();
    // calling State's update method
    currentScene.update();
    // redraw/refresh stage every frame
    stage.update();
    // stop collecting stats for this frame
    stats.end();
}
// Setup Game Stats
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
// Finite State Machine used to change Scenes
function changeScene() {
    // Launch various scenes
    switch (scene) {
        //intro.ts file runs in this
        case config.Scene.INTRO:
            // show the MENU scene
            stage.removeAllChildren();
            intro = new scenes.Intro();
            currentScene = intro;
            console.log("Starting INTRO Scene");
            break;
        //----------------------------------------------------------------------------------       
        //leftcave.ts files on this
        case config.Scene.LEFT_CAVE:
            // show the PLAY scene
            stage.removeAllChildren();
            leftCave = new scenes.LeftCave(); // scenes.LeftCave is variable which points to leftcave.ts file.
            //ASSIGNING THE leftcave.ts file 
            currentScene = leftCave;
            console.log("Starting LEFT_CAVE Scene");
            break;
        //----------------------------------------------------------------------------------       
        //rightcave.ts files runs on this
        case config.Scene.RIGHT_CAVE:
            // show the game OVER scene
            stage.removeAllChildren();
            rightCave = new scenes.RightCave(); // scenes.RightCave is variable which points to rightcave.ts file.
            //assigning the rightcave.ts file
            currentScene = rightCave;
            console.log("Starting RIGHT_CAVE Scene");
            break;
        //---------------------------------------------------------------------------
        case config.Scene.LEFT_CAVE2:
            // show the PLAY scene
            //     stage.removeAllChildren();
            //leftCave2 = new scenes.LeftCave2();  // scenes.LeftCave is variable which points to leftcave.ts file.
            leftCave2 = new scenes.LeftCave2();
            //ASSIGNING THE leftcave.ts file 
            currentScene = leftCave2;
            console.log("Starting FINAL LEFT_CAVE  Scene");
            break;
    }
    console.log(currentScene.numChildren);
}
//# sourceMappingURL=game.js.map