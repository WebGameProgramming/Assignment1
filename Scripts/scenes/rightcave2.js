var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Right_Cave2 SCENE
var scenes;
(function (scenes) {
    var RightCave2 = (function (_super) {
        __extends(RightCave2, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function RightCave2() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        RightCave2.prototype.start = function () {
            // add LeftCave Image
            this._leftCaveImage = new createjs.Bitmap("../../Assets/images/goku.png");
            this.addChild(this._leftCaveImage);
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
        };
        // PLAY Scene updates here
        RightCave2.prototype.update = function () {
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
        RightCave2.prototype._leftCaveButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.LEFT_CAVE2;
            changeScene();
        };
        // RIGHT_CAVE Button click event handler
        RightCave2.prototype._rightCaveButtonClick = function (event) {
            // Switch to the RIGHT_CAVE Scene
            scene = config.Scene.RIGHT_CAVE;
            changeScene();
        };
        return RightCave2;
    })(objects.Scene);
    scenes.RightCave2 = RightCave2;
})(scenes || (scenes = {}));
//# sourceMappingURL=rightcave2.js.map