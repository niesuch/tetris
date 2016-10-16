/* global COLS, ROWS, BOARD_HEIGHT, BOARD_WIDTH, OPTIONS_HEIGHT, OPTIONS_WIDTH, SCORE_HEIGHT, SCORE_WIDTH, NEXT_ELEMENT_WIDTH, NEXT_ELEMENT_HEIGHT */

var GAME = new Game(ROWS, COLS, 350);
var RENDER_GAME = new Render(BOARD_WIDTH, BOARD_HEIGHT);
var RENDER_OPTIONS = new Render(OPTIONS_WIDTH, OPTIONS_HEIGHT);
var RENDER_SCORE = new Render(SCORE_WIDTH, SCORE_HEIGHT);
var RENDER_NEXT_ELEMENT = new Render(NEXT_ELEMENT_WIDTH, NEXT_ELEMENT_HEIGHT);

GAME.init();
setInterval(RENDER_GAME.renderBoard, 30);

document.body.onkeydown = function (e) {
    var keys = {
        37: 'left',
        39: 'right',
        40: 'down',
        38: 'rotate'
    };

    if (typeof keys[e.keyCode] !== 'undefined') {
        GAME.keyPress(keys[e.keyCode]);
    }
};
