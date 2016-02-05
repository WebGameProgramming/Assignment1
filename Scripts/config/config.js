var config;
(function (config) {
    // Scene Constants
    var Scene = (function () {
        function Scene() {
        }
        Scene.INTRO = 0;
        Scene.LEFT_CAVE = 1;
        Scene.RIGHT_CAVE = 2;
        Scene.LEFT_CAVE2 = 3;
        Scene.RIGHT_CAVE2 = 4;
        Scene.scene13 = 5;
        Scene.scene14 = 6;
        Scene.scene5 = 7;
        Scene.scene9 = 8;
        return Scene;
    })();
    config.Scene = Scene;
    // Screen Constants
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 640;
        Screen.HEIGHT = 480;
        Screen.CENTER_X = 320;
        Screen.CENTER_Y = 240;
        return Screen;
    })();
    config.Screen = Screen;
    // Game Constants
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    })();
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=config.js.map