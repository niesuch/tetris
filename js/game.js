/* global RENDER_GAME */

function Game(rows, cols, level) {
    this.rows = rows;
    this.cols = cols;
    this.lose;
    this.level = level;
    this.interval;
    this.board;
    this.shape;
    this.score;
}

Game.prototype.init = function () {
    RENDER_GAME.init();

    this.board = new Board();
    this.board.init();
};

Game.prototype.newGame = function () {
    clearInterval(this.interval);

    this.board = new Board();
    this.board.init();

    this.shape = new Shape();
    this.shape.newShape();

    this.score = new Score(0);
    this.score.updateScore();

    this.lose = false;
    this.interval = setInterval(this.tick, this.level);
};

Game.prototype.keyPress = function (key) {
    switch (key) {
        case 'left':
            if (this.valid(-1)) {
                --this.shape.currentX;
            }
            break;
        case 'right':
            if (this.valid(1)) {
                ++this.shape.currentX;
            }
            break;
        case 'down':
            if (this.valid(0, 1)) {
                ++this.shape.currentY;
            }
            break;
        case 'rotate':
            if (this.shape.current.id === 3) {
                break;
            }

            var rotated = this.shape.rotate(this.shape.current.shape);

            if (this.valid(0, 0, rotated)) {
                this.shape.current.shape = rotated;
            }
            break;
    }
};

Game.prototype.tick = function () {
    var these = this.GAME;

    if (these.valid(0, 1)) {
        ++these.shape.currentY;
    } else {
        these.board.freeze(these.shape);
        these.board.clearLines();

        if (these.lose) {
            RENDER_GAME.renderGameOver();
            return false;
        }

        these.shape.newShape();
    }
};

Game.prototype.valid = function (offsetX, offsetY, newCurrent) {
    offsetX = offsetX || 0;
    offsetY = offsetY || 0;
    offsetX = this.shape.currentX + offsetX;
    offsetY = this.shape.currentY + offsetY;
    newCurrent = newCurrent || this.shape.current.shape;

    for (var y = 0; y < 4; ++y) {
        for (var x = 0; x < 4; ++x) {
            if (newCurrent[y][x]) {
                if (typeof this.board.board[y + offsetY] === 'undefined'
                        || typeof this.board.board[y + offsetY][x + offsetX] === 'undefined'
                        || this.board.board[y + offsetY][x + offsetX]) {
                    if (offsetY === 1 && offsetX < COLS-2 && offsetX > 1) {
                        this.lose = true;
                    }

                    return false;
                }
            }
        }
    }

    return true;
};