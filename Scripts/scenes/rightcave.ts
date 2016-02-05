// Right SCENE
module scenes {
    export class RightCave extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _rightCaveImage: createjs.Bitmap;
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
            // add RightCave Image
            this._rightCaveImage = new createjs.Bitmap("../../Assets/images/scene6.png");
            this.addChild(this._rightCaveImage);
        
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
                  
      
            
            
/*-------------------dont need back button now------------
            // add the BACK button to the OVER scene
            this._startOverButton = new objects.Button(
                "StartOverButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverButton);
           
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
            //winning scene
            scene = config.Scene.scene14;
            changeScene();
        }
        
        // RIGHT_CAVE Button click event handler
        private _rightCaveButtonClick(event: createjs.MouseEvent) {
            // Switch to the RIGHT_CAVE Scene
            scene = config.Scene.scene8;
            changeScene();
        }
    }
}
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
        
    /*    
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START_OVER Button click event handler
        private _startOverButtonClick(event: createjs.MouseEvent) {
            // Switch to the INTRO Scene
            scene = config.Scene.INTRO;
            changeScene();
        }
    }
}*/