/* global RENDER_SCORE */

function Score(score) {
    this.score = score;
}

Score.prototype.changeScore = function (number) {
    this.score = this.score + number;
};

Score.prototype.updateScore = function () {
    RENDER_SCORE.renderScore(this.score);
};