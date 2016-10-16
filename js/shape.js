/* global RENDER, SHAPES, RENDER_NEXT_ELEMENT */

function Shape() {
    this.current;
    this.currentX;
    this.currentY;
    this.next;
}

Shape.prototype.newShape = function () {
    if (!this.next) {
        this.nextShape();
        this.current = this.next;
    } else {
        this.current = this.next;
        this.nextShape();
    }

    this.currentX = 5;
    this.currentY = 0;
    
    RENDER_NEXT_ELEMENT.renderNextElement();
};

Shape.prototype.nextShape = function () {
    var id = Math.floor(Math.random() * SHAPES.length);
    var shape = SHAPES[id];
    var tab = [];

    for (var y = 0; y < 4; ++y) {
        tab[y] = [];
        for (var x = 0; x < 4; ++x) {
            var i = 4 * y + x;
            if (typeof shape[i] !== 'undefined' && shape[i]) {
                tab[y][x] = id + 1;
            } else {
                tab[y][x] = 0;
            }
        }
    }
    
    this.next = {id: id, shape: tab};
};

Shape.prototype.rotate = function (current) {
    var newCurrent = [];

    for (var y = 0; y < 4; ++y) {
        newCurrent[y] = [];

        for (var x = 0; x < 4; ++x) {
            newCurrent[y][x] = current[3 - x][y];
        }
    }

    return newCurrent;
};

