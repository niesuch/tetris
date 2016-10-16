/* global GAME, ADD_POINTS */

function Board() {
    this.board = [];
}

Board.prototype.init = function () {
    for (var y = 0; y < GAME.rows; ++y) {
        this.board[y] = [];

        for (var x = 0; x < GAME.cols; ++x) {
            this.board[y][x] = 0;
        }
    }
};

Board.prototype.freeze = function (shape) {
    for (var y = 0; y < 4; ++y) {
        for (var x = 0; x < 4; ++x) {
            if (shape.current.shape[y][x]) {
                this.board[y + shape.currentY][x + shape.currentX] = shape.current.shape[y][x];
            }
        }
    }
};

Board.prototype.clearLines = function () {
    for (var y = GAME.rows - 1; y >= 0; --y) {
        var rowFilled = true;

        for (var x = 0; x < GAME.cols; ++x) {
            if (this.board[y][x] === 0) {
                rowFilled = false;
                break;
            }
        }

        if (rowFilled) {
            for (var yy = y; yy > 0; --yy) {
                for (var x = 0; x < GAME.cols; ++x) {
                    this.board[yy][x] = this.board[yy - 1][x];
                }
            }
            ++y;
            
            GAME.score.changeScore(ADD_POINTS);
            GAME.score.updateScore();
        }
    }    
};