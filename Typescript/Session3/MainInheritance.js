"use strict";
exports.__esModule = true;
var circle_1 = require("./circle");
var rectangle_1 = require("./rectangle");
var circleObj = new circle_1.Circle(3);
circleObj.MyArea();
circleObj.Display();
var rectObj = new rectangle_1.Rectangle(2, 3);
rectObj.MyArea();
rectObj.Display();
