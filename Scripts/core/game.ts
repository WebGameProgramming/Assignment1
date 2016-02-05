/// <reference path = "_reference.ts" />

// global variables
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;

var currentScene: objects.Scene;
var scene: number;

// Game Scenes

// class name of intro.ts,leftcave.ts and rightcave.ts
var intro: scenes.Intro;
var leftCave: scenes.LeftCave;
var rightCave: scenes.RightCave;
// variable to match the class name of leftcave2.ts
var leftCave2: scenes.LeftCave2;
var rightCave2: scenes.RightCave2;

//---------scene variables----------------
var Scene13: scenes.loose;
var Scene14: scenes.win;
var Scene5: scenes.scene5;
var Scene9: scenes.scene9;
var Scene10: scenes.scene10;
var Scene8: scenes.scene8;
var Scene12: scenes.scene12;
var Scene15: scenes.scene15;
var Scene16: scenes.scene16;

function init(): void {
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
function gameLoop(event: createjs.Event): void {
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
function setupStats(): void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// Finite State Machine used to change Scenes
function changeScene(): void {
    
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
            leftCave = new scenes.LeftCave();       // scenes.LeftCave is variable which points to leftcave.ts file.
            //ASSIGNING THE leftcave.ts file 
            currentScene = leftCave;
            console.log("Congrats you choosed friend");
            break;
     //----------------------------------------------------------------------------------       
            
        case config.Scene.RIGHT_CAVE:
            // show the game OVER scene
            stage.removeAllChildren();
            rightCave = new scenes.RightCave();   // scenes.RightCave is variable which points to rightcave.ts file.
            
            //assigning the rightcave.ts file
            currentScene = rightCave;
            console.log("Congrats you choosed friend");
            break;
            
     //---------------------------------------------------------------------------
     case config.Scene.LEFT_CAVE2:
      // show the PLAY scene
       stage.removeAllChildren();
            //leftCave2 = new scenes.LeftCave2();  // scenes.LeftCave is variable which points to leftcave.ts file.
            leftCave2 = new scenes.LeftCave2();
            //ASSIGNING THE leftcave2.ts file 
            currentScene = leftCave2;
            console.log("You choose enemy cell ");
            break;
    //-------------------------------------------------------
    
     case config.Scene.RIGHT_CAVE2:
            // show the enemy screen
            stage.removeAllChildren();
            rightCave2 = new scenes.RightCave2();   // scenes.RightCave is variable which points to rightcave.ts file.
            
            //assigning the rightcave.ts file
            currentScene = rightCave2;
            console.log("you choosed an enemy in your team");
            break; 
            
     //-------------scene 13-------------------
     case config.Scene.scene13:
            // show the game OVER scene
            stage.removeAllChildren();
            Scene13 = new scenes.loose();   
            
            //assigning the rightcave.ts file
            currentScene = Scene13;
            console.log("You loose the game..");
            break; 
     //---------------------scene 14------------------
     
     case config.Scene.scene14:
            // show that you won the game
            stage.removeAllChildren();
            Scene14 = new scenes.win();   
            
            //assigning the rightcave.ts file
            currentScene = Scene14;
            console.log("You won the game finally..");
            break; 
     
     //------------------------scene5------------------
     case config.Scene.scene5:
            // show that you won the game
            stage.removeAllChildren();
            Scene5 = new scenes.scene5;   
            
            //assigning the rightcave.ts file
            currentScene = Scene5;
            console.log("You choosed enenmy");
            break; 
      //-----------------------scene9-------------------   
          
        case config.Scene.scene9:
            // show that you won the game
            stage.removeAllChildren();
            Scene9 = new scenes.scene9;   
            
            //assigning the rightcave.ts file
            currentScene = Scene9;
            console.log("You choosed friend in your team");
            break;   
    //-----------------------scene10--------------------
     case config.Scene.scene10:
            // show the game OVER scene
            stage.removeAllChildren();
            Scene10 = new scenes.scene10;   
            
            //assigning the rightcave.ts file
            currentScene = Scene10;
            console.log("You loose the game..");
            break; 
    
     //-----------------------scene8--------------------
     case config.Scene.scene8:
            // show the game OVER scene
            stage.removeAllChildren();
            Scene8 = new scenes.scene8;   
            
            //assigning the rightcave.ts file
            currentScene = Scene8;
            console.log("You loose the game..");
            break; 
     //-----------------------scene12--------------------
     case config.Scene.scene12:
            // show the game OVER scene
            stage.removeAllChildren();
            Scene12 = new scenes.scene12;   
            
            //assigning the rightcave.ts file
            currentScene = Scene12;
            console.log("You loose the game..");
            break; 
     
     //-----------------------scene15--------------------
     case config.Scene.scene15:
            // show the game OVER scene
            stage.removeAllChildren();
            Scene15 = new scenes.scene15;   
            
            //assigning the rightcave.ts file
            currentScene = Scene15;
            console.log("You loose the game..");
            break; 
     
     //-----------------------scene16--------------------
     case config.Scene.scene16:
            // show the game OVER scene
            stage.removeAllChildren();
            Scene16 = new scenes.scene16;   
            
            //assigning the rightcave.ts file
            currentScene = Scene16;
            console.log("You loose the game..");
            break; 
            
            
    }

    console.log(currentScene.numChildren);
}