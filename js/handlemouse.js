function Handlemouse() {

}

Handlemouse.prototype.handleMouseDown = function (e) {    
    var optionsOffset = e.data.canvasObj.offset();  
    var mouseX = parseInt(e.clientX - optionsOffset.left);
    var mouseY = parseInt(e.clientY - optionsOffset.top);

    var clicked = "";
    for (var i = 0; i < e.data.menu.length; i++) {
        if (e.data.menu[i].isPointInside(mouseX, mouseY)) {
            clicked += e.data.menu[i].id + " ";
        }
    }
    
    if (clicked.length > 0) {
        e.data.context.clearRect(e.data.clear[0], e.data.clear[1], e.data.clear[2], e.data.clear[3]);
        e.data.onclick();
    }
};

Handlemouse.prototype.handleMouseMove = function (e) {  
    var optionsOffset = e.data.canvasObj.offset();
    var mouseX = parseInt(e.clientX - optionsOffset.left);
    var mouseY = parseInt(e.clientY - optionsOffset.top);

    e.data.context.clearRect(e.data.clear[0], e.data.clear[1], e.data.clear[2], e.data.clear[3]);
    for (var i = 0; i < e.data.menu.length; i++) {
        if (e.data.menu[i].isPointInside(mouseX, mouseY)) {
            e.data.menu[i].highlight();
        } else {
            e.data.menu[i].redraw();
        }
    }
};