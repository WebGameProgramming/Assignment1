var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Right SCENE
var scenes;
(function (scenes) {
    var RightCave = (function (_super) {
        __extends(RightCave, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function RightCave() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        RightCave.prototype.start = function () {
            // add RightCave Image
            this._rightCaveImage = new createjs.Bitmap("../../Assets/images/scene6.png");
            this.addChild(this._rightCaveImage);
            // add the LEFT_CAVE button to the MENU scene
            this._leftCaveButton = new objects.Button("LeftCaveButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._leftCaveButton);
            // LEFT_CAVE Button event listener
            this._leftCaveButton.on("click", this._leftCaveButtonClick, this);
            // add the RIGHT_CAVE button to the MENU scene
            this._rightCaveButton = new objects.Button("RightCaveButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180);
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
        };
        // PLAY Scene updates here
        RightCave.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        /*
        // START_OVER Button click event handler
        private _startOverButtonClick(event: createjs.MouseEvent) {
            // Switch to the INTRO Scene
            scene = config.Scene.INTRO;
            changeScene();
          */
        // LEFT_CAVE Button click event handler
        RightCave.prototype._leftCaveButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            //winning scene
            scene = config.Scene.scene14;
            changeScene();
        };
        // RIGHT_CAVE Button click event handler
        RightCave.prototype._rightCaveButtonClick = function (event) {
            // Switch to the RIGHT_CAVE Scene
            scene = config.Scene.scene13;
            changeScene();
        };
        return RightCave;
    })(objects.Scene);
    scenes.RightCave = RightCave;
})(scenes || (scenes = {}));
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
//# sourceMappingURL=rightcave.js.map