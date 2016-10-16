function Button(id, x, y, width, height, fill, stroke, strokewidth, element, font, fontcolor, text, hglight) {
    this.x = x;
    this.y = y;
    this.id = id;
    this.width = width;
    this.height = height;
    this.fill = fill || "gray";
    this.stroke = stroke || "skyblue";
    this.strokewidth = strokewidth || 2;
    this.font = font || '30pt Calibri';
    this.fontcolor = fontcolor || 'black';
    this.text = text || ["", 0, 0];
    this.hglight = hglight || "orange";
    this.element = element;
    this.redraw(this.x, this.y);
}

Button.prototype.redraw = function (x, y) {
    this.x = x || this.x;
    this.y = y || this.y;
    this.draw(this.stroke);
};

Button.prototype.highlight = function (x, y) {
    this.x = x || this.x;
    this.y = y || this.y;
    this.draw(this.hglight);
};

Button.prototype.draw = function (stroke) {
    this.element.save();
    this.element.beginPath();
    this.element.fillStyle = this.fill;
    this.element.strokeStyle = stroke;
    this.element.lineWidth = this.strokewidth;
    this.element.rect(this.x, this.y, this.width, this.height);
    this.element.stroke();
    this.element.fill();
    this.element.restore();
    this.element.font = this.font;
    this.element.textAlign = 'center';
    this.element.fillStyle = stroke || this.fontcolor;
    this.element.fillText(this.text[0], this.text[1], this.text[2]);
};

Button.prototype.isPointInside = function (x, y) {
    return (x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height);
};
