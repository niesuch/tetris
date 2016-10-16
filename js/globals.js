var BOARD = document.getElementById('board');
var NEXT_ELEMENT = document.getElementById("next_element");
var OPTIONS = document.getElementById("options");
var SCORE = document.getElementById("score");

var CONTEXT_BOARD = BOARD.getContext('2d');
var CONTEXT_NEXT_ELEMENT = NEXT_ELEMENT.getContext('2d');
var CONTEXT_OPTIONS = OPTIONS.getContext('2d');
var CONTEXT_SCORE = SCORE.getContext('2d');

var BOARD_WIDTH = 300;
var BOARD_HEIGHT = 600;
var SCORE_WIDTH = 200;
var SCORE_HEIGHT = 100;
var OPTIONS_WIDTH = 200;
var OPTIONS_HEIGHT = 282;
var NEXT_ELEMENT_WIDTH = 200;
var NEXT_ELEMENT_HEIGHT = 200;
var ROWS = 20;
var COLS = 10;
var ADD_POINTS = 10;

var SHAPES = [
    [1, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 0, 0, 0, 1],
    [1, 1, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [0, 1, 1, 0, 1, 1],
    [0, 1, 0, 0, 1, 1, 1],
    [1, 1, 1, 0, 1, 0, 1]
];

var COLORS = [
    'cyan',
    'orange',
    'blue',
    'yellow',
    'red',
    'green',
    'purple',
    'grey'
];
