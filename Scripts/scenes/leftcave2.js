var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INTRO SCENE
var scenes;
(function (scenes) {
    var leftcave2 = (function (_super) {
        __extends(leftcave2, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function leftcave2() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        leftcave2.prototype.start = function () {
            // add Intro Image
            this._introImage = new createjs.Bitmap("../../Assets/images/goku.jpg");
            this.addChild(this._introImage);
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
            // add this scene to the global stage container
            stage.addChild(this);
        };
        /*
                // INTRO Scene updates here
                public update(): void {
        
                }
                
          */
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFT_CAVE Button click event handler
        leftcave2.prototype._leftCaveButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.LEFT_CAVE;
            changeScene();
        };
        // RIGHT_CAVE Button click event handler
        leftcave2.prototype._rightCaveButtonClick = function (event) {
            // Switch to the RIGHT_CAVE Scene
            scene = config.Scene.RIGHT_CAVE;
            changeScene();
        };
        return leftcave2;
    })(objects.Scene);
    scenes.leftcave2 = leftcave2;
})(scenes || (scenes = {}));
//# sourceMappingURL=leftcave2.js.map