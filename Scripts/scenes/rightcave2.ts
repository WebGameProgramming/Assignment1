// Right_Cave2 SCENE
module scenes {
    export class RightCave2 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _leftCaveImage: createjs.Bitmap;
        private _startOverButton: objects.Button;
         private _leftCaveButton: objects.Button;
        private _rightCaveButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add LeftCave Image
            this._leftCaveImage = new createjs.Bitmap("../../Assets/images/goku.png");
            this.addChild(this._leftCaveImage);

 // add the LEFT_CAVE button to the MENU scene
            this._leftCaveButton = new objects.Button(
                "LeftCaveButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._leftCaveButton);
            
    // LEFT_CAVE Button event listener
            this._leftCaveButton.on("click", this._leftCaveButtonClick, this);
      
      
     // add the RIGHT_CAVE button to the MENU scene
            this._rightCaveButton = new objects.Button(
                "RightCaveButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._rightCaveButton);
            
            // RIGHT_CAVE Button event listener
            this._rightCaveButton.on("click", this._rightCaveButtonClick, this);
                  

//--------------dont need back button--------------
/*
            // add the BACK button to the OVER scene
            this._startOverButton = new objects.Button(
                "StartOverButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverButton);
  */
  
          /* 
            // START_OVER Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);
*/

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        /*
        // START_OVER Button click event handler
        private _startOverButtonClick(event: createjs.MouseEvent) {
            // Switch to the INTRO Scene
            scene = config.Scene.INTRO;
            changeScene();
          */  
            // LEFT_CAVE Button click event handler
        private _leftCaveButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.LEFT_CAVE2;
            changeScene();
        }
        
        // RIGHT_CAVE Button click event handler
        private _rightCaveButtonClick(event: createjs.MouseEvent) {
            // Switch to the RIGHT_CAVE Scene
            scene = config.Scene.RIGHT_CAVE;
            changeScene();
        }
    }
}