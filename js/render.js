/* global CONTEXT_NEXT_ELEMENT, CONTEXT_OPTIONS, CONTEXT_SCORE, CONTEXT_BOARD, GAME, COLORS, BOARD_WIDTH, BOARD_HEIGHT, OPTIONS */

function Render(width, height) {
    this.width = width;
    this.height = height;
}

Render.prototype.init = function () {
    this.startNextElement();
    this.startOptions();
    this.startScore();
};

Render.prototype.renderBoard = function () {
    var these = this.RENDER_GAME;

    CONTEXT_BOARD.clearRect(0, 0, these.width, these.height);

    for (var x = 0; x < GAME.cols; ++x) {
        for (var y = 0; y < GAME.rows; ++y) {
            if (GAME.board.board[y][x]) {
                CONTEXT_BOARD.fillStyle = COLORS[GAME.board.board[y][x] - 1];

                var blockWidth = these.width / GAME.cols;
                var blockHeight = these.height / GAME.rows;

                CONTEXT_BOARD.fillRect(blockWidth * x, blockHeight * y, blockWidth - 1, blockHeight - 1);
                CONTEXT_BOARD.strokeRect(blockWidth * x, blockHeight * y, blockWidth - 1, blockHeight - 1);
            }
        }
    }

    if (GAME.shape) {
        for (var y = 0; y < 4; ++y) {
            for (var x = 0; x < 4; ++x) {
                if (GAME.shape.current.shape[y][x]) {
                    CONTEXT_BOARD.fillStyle = COLORS[GAME.shape.current.shape[y][x] - 1];

                    var blockWidth = these.width / GAME.cols;
                    var blockHeight = these.height / GAME.rows;
                    var k = GAME.shape.currentX + x;
                    var l = GAME.shape.currentY + y;

                    CONTEXT_BOARD.fillRect(blockWidth * k, blockHeight * l, blockWidth - 1, blockHeight - 1);
                    CONTEXT_BOARD.strokeRect(blockWidth * k, blockHeight * l, blockWidth - 1, blockHeight - 1);
                }
            }
        }
    }
};

Render.prototype.renderNextElement = function () {
    CONTEXT_NEXT_ELEMENT.clearRect(17, 30, this.width, this.height);

    for (var y = 0; y < 4; ++y) {
        for (var x = 0; x < 4; ++x) {
            if (GAME.shape.next.shape[y][x]) {
                var blockWidth = BOARD_WIDTH / GAME.cols;
                var blockHeight = BOARD_HEIGHT / GAME.rows;

                CONTEXT_NEXT_ELEMENT.fillStyle = COLORS[GAME.shape.next.shape[y][x] - 1];
                CONTEXT_NEXT_ELEMENT.fillRect(blockWidth * x + 18, blockHeight * y + 80, blockWidth - 1, blockHeight - 1);
                CONTEXT_NEXT_ELEMENT.strokeRect(blockWidth * x + 18, blockHeight * y + 80, blockWidth - 1, blockHeight - 1);
            }
        }
    }
};

Render.prototype.renderScore = function (score) {
    CONTEXT_SCORE.clearRect(15, 30, this.width, this.height);
    CONTEXT_SCORE.font = "40px serif";
    CONTEXT_SCORE.fillText(score.toString(), 15, 75);
};

Render.prototype.startNextElement = function () {
    CONTEXT_NEXT_ELEMENT.fillStyle = "black";
    CONTEXT_NEXT_ELEMENT.font = "20px serif";
    CONTEXT_NEXT_ELEMENT.fillText("NEXT ELEMENT:", 15, 30);
};

Render.prototype.startScore = function () {
    CONTEXT_SCORE.font = "20px serif";
    CONTEXT_SCORE.fillText("SCORE:", 15, 30);
    CONTEXT_SCORE.font = "40px serif";
    CONTEXT_SCORE.fillText("0", 15, 75);
};

Render.prototype.startOptions = function () {
    CONTEXT_OPTIONS.font = "20px serif";
    CONTEXT_OPTIONS.fillText("OPTIONS:", 15, 30);

    var menu = [];
    menu.push(
            new Button(
                    "New-Game", 20, 50, 160, 40,
                    "white",
                    "black", 3,
                    CONTEXT_OPTIONS,
                    "20pt Calibri",
                    "black",
                    ["New Game", 100, 77],
                    "orange"
                    )
            );

    var handle = new Handlemouse();

    $("#options").click({
        context: CONTEXT_OPTIONS,
        element: OPTIONS,
        canvasObj: $("#options"),
        menu: menu,
        onclick: function(){
            GAME.newGame();
        },
        clear: [15, 30, this.width, this.height]
    }, handle.handleMouseDown);

    $("#options").mousemove({
        context: CONTEXT_OPTIONS,
        element: OPTIONS,
        canvasObj: $("#options"),
        menu: menu,
        clear: [15, 30, 200, 70]
    }, handle.handleMouseMove);
};

Render.prototype.renderGameOver = function () {
    CONTEXT_OPTIONS.clearRect(0, 100, this.width, this.height);
    CONTEXT_OPTIONS.fillStyle = "red";
    CONTEXT_OPTIONS.font = "26px serif";
    CONTEXT_OPTIONS.fillText("GAME OVER!", 100, 180);
};
