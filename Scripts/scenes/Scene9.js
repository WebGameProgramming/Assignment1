var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Scene 9
var scenes;
(function (scenes) {
    var scene9 = (function (_super) {
        __extends(scene9, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function scene9() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        scene9.prototype.start = function () {
            // add RightCave Image
            this._rightCaveImage = new createjs.Bitmap("../../Assets/images/scene9.png");
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
        scene9.prototype.update = function () {
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
        scene9.prototype._leftCaveButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            //winning scene
            scene = config.Scene.scene13;
            changeScene();
        };
        // RIGHT_CAVE Button click event handler
        scene9.prototype._rightCaveButtonClick = function (event) {
            // Switch to the RIGHT_CAVE Scene
            scene = config.Scene.scene13;
            changeScene();
        };
        return scene9;
    })(objects.Scene);
    scenes.scene9 = scene9;
})(scenes || (scenes = {}));
//# sourceMappingURL=scene9.js.map