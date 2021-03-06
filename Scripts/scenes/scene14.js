var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Scene14 i.e winning game
var scenes;
(function (scenes) {
    var win = (function (_super) {
        __extends(win, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function win() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        win.prototype.start = function () {
            // add RightCave Image
            this._rightCaveImage = new createjs.Bitmap("../../Assets/images/win.png");
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
        win.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        win.prototype._startOverButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        return win;
    })(objects.Scene);
    scenes.win = win;
})(scenes || (scenes = {}));
//# sourceMappingURL=scene14.js.map