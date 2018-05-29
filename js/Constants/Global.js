'use strict';


var timer = new Timer();

// html elements ids

// page hash uri
var HASH_URI = {
    index    : '#construct-index',
    howto    : '#construct-how-to-play',
    count   : '#construct-players-count',
    pearls  : '#construct-players-position',
    computer : '#construct-computer-plays',
    game    : '#play'
};

//start point for the first hexagon vertex
var START_POINT = new Coordinates(100, 0);
// hexagon side length
var SIZE = 30;

// color settings for canvas
var CANVAS_COLORS ={
  stadium:{
      strokeStyle: "rgba(0, 81, 255, 1)",
      fillStyle  : "rgb(192, 192, 192, 0.6)"
  }
};


// canvas html elements ids
var CANVAS_ELEMENTS ={
  stadium : 'stadium',
  selected: 'selected',
  pearls  : 'pearls'
};

var CANVAS_EVENTS = {
  mousedown : 'onmousedown',
  mousemove : 'onmousemove',
  mouseup   : 'onmouseup',
  mouseclick: 'onmouseclick'
};

// playground size
var GAME_SIZE = 11;
//array - how much hexagons in each row
var HEXAGON_ROW_COUNT = [5,6,7,8,9,8,7,6,5];
//array - translation of hexagons in each row
var MATRIX_TRANSLATION = [0,0,0,0,0,1,2,3,4];

var COLORS ={
   RED  : 'red',
   BLUE : 'blue',
} ;


//start info about players' colors and pearls count
var PLAYERS_INFO = [
    // RED
    {name: "", count: 3, color: ["rgb(255, 87, 66)", "rgb(191, 0, 50)"], description: COLORS.RED, possitions: [0,34,56]},
    // BLUE
    {name: "", count: 3, color: ["rgb(144, 140, 254)", "rgb(0, 61, 193)"], description: COLORS.BLUE, possitions: [4,26,60]},
];


var ANGLES = [0, Math.PI/6, Math.PI/3, Math.PI/2, 2*Math.PI/3, 5*Math.PI/6, Math.PI, 7*Math.PI/6, 4*Math.PI/3, 3*Math.PI/2, 5*Math.PI/3, 11*Math.PI/6, 2*Math.PI];

var POSITIONS = {
  copy:{
      // copy positions
      positions:  [
          new Coordinates(-1, 0),
          new Coordinates(-1, -1),
          new Coordinates(0, -1),

          new Coordinates(1, 0),
          new Coordinates(1, 1),
          new Coordinates(0, 1)
      ],
      color: ['rgb(97, 237, 141)', 'rgb(81, 232, 128)'],
      type: 1
  },

  jump: {
      // jump positions
      positions:  [
          new Coordinates(-2, -1),
          new Coordinates(-2, -2),
          new Coordinates(-1, -2),

          new Coordinates(0, -2),
          new Coordinates(1, -1),
          new Coordinates(2, 0),

          new Coordinates(2, 1),
          new Coordinates(2, 2),
          new Coordinates(1, 2),

          new Coordinates(0, 2),
          new Coordinates(-1, 1),
          new Coordinates(-2, 0)
      ],
      color: ['rgb(250, 254, 139)','rgb(243, 247, 133)'],
      type: 2
  }
};

var BIG_VALUE = 99999999;