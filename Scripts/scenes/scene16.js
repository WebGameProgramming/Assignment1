var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Scene16 i.e you lose
var scenes;
(function (scenes) {
    var scene16 = (function (_super) {
        __extends(scene16, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function scene16() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        scene16.prototype.start = function () {
            // add RightCave Image
            this._rightCaveImage = new createjs.Bitmap("../../Assets/images/scene16.png");
            this.addChild(this._rightCaveImage);
            // add the BACK button to the OVER scene
            this._startOverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverButton);
            // START_OVER Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        scene16.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        scene16.prototype._startOverButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        return scene16;
    })(objects.Scene);
    scenes.scene16 = scene16;
})(scenes || (scenes = {}));
//# sourceMappingURL=scene16.js.map