/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/Fps.js":
/*!***********************!*\
  !*** ./src/js/Fps.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Fps = /*#__PURE__*/function () {
  function Fps(_ref) {
    var canvasWidth = _ref.canvasWidth;

    _classCallCheck(this, Fps);

    this.times = [];
    this.fps = 0;
    this.lastUpdate = 0;
    this.lastUpdateCounter = 0;
    this.items = [];
    this.lineWidth = 5;
    this.maxItems = 30;
    this.height = 50;
    this.width = this.maxItems * this.lineWidth;
    this.position = {
      x: canvasWidth - this.width - 20,
      y: 20
    };
  }

  _createClass(Fps, [{
    key: "draw",
    value: function draw(_ref2) {
      var c = _ref2.c;
      c.save();
      c.globalAlpha = 0.2;
      c.fillStyle = "black";
      c.fillRect(this.position.x, this.position.y, this.width, this.height);

      for (var i = 0; i < this.maxItems; i++) {
        var item = this.items[i];

        if (item) {
          var height = item * this.height / 70;
          var x = this.position.x + i * this.lineWidth;
          var y = this.position.y + this.height - height;
          c.fillStyle = "green";

          if (item < 30) {
            c.fillStyle = "red";
          }

          c.globalAlpha = 0.2;
          c.fillRect(x, y, this.lineWidth, height);
          c.globalAlpha = 1;
          c.fillRect(x, y, this.lineWidth, 2);
        }
      }

      c.font = "20px Arial";
      c.fillStyle = "black";
      c.fillText("FPS: ".concat(this.fps), this.position.x, this.position.y);
      c.restore();
    }
  }, {
    key: "update",
    value: function update(_ref3) {
      var c = _ref3.c;
      this.draw({
        c: c
      });
      var now = performance.now();

      while (this.times.length > 0 && this.times[0] <= now - 1000) {
        this.times.shift();
      }

      var delta = (now - this.times[this.times.length - 1]) / 1000 || 0;

      if (!this.lastUpdate || this.lastUpdateCounter - this.lastUpdate >= 0.5) {
        this.lastUpdate = now;
        this.lastUpdateCounter = now;
        this.fps = this.times.length;

        if (this.items.length > this.maxItems) {
          this.items.shift();
        }

        this.items.push(this.fps);
      }

      this.lastUpdateCounter += delta;
      this.times.push(now);
    }
  }]);

  return Fps;
}();

/* harmony default export */ __webpack_exports__["default"] = (Fps);

/***/ }),

/***/ "./src/js/Player.js":
/*!**************************!*\
  !*** ./src/js/Player.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 20
    };
    this.width = 50;
    this.height = 50;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw(_ref) {
      var c = _ref.c;
      c.save();
      c.fillRect(this.position.x, this.position.y, this.width, this.height);
      c.restore();
    }
  }, {
    key: "update",
    value: function update(_ref2) {
      var c = _ref2.c;
      this.draw({
        c: c
      });
    }
  }]);

  return Player;
}();

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Fps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fps */ "./src/js/Fps.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ "./src/js/Player.js");


var canvas;
var ctx;
var baseCanvasWidth = 640;
var baseCanvasHeight = 480;
var fullscreen = true;
var angle = 0;
var speed = 0.05;
var player;
var fpsCounter;

function init() {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  window.addEventListener("resize", windowSizeChanged);
  resizeCanvas();
  initParams();
  tick();
}

function initParams() {
  player = new _Player__WEBPACK_IMPORTED_MODULE_1__["default"]();
  fpsCounter = new _Fps__WEBPACK_IMPORTED_MODULE_0__["default"]({
    canvasWidth: canvas.width / 2
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var y = Math.sin(angle) * 100;
  angle += speed;

  for (var i = 0; i < 100; i++) {
    drawLine(ctx, 100 + i * y, y, 0, 1000);
  }

  player.update({
    c: ctx
  });
  fpsCounter.update({
    c: ctx
  });
}

function tick() {
  requestAnimationFrame(tick);
  draw();
}

function windowSizeChanged() {
  resizeCanvas();
  initParams();
}

function resizeCanvas() {
  console.log("devicePixelRatio: " + window.devicePixelRatio);
  console.log("canvas size: " + canvas.width + " x " + canvas.height);
  console.log("canvas style size: " + canvas.style.width + "px x " + canvas.style.height + "px");

  if (fullscreen) {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    console.log("window size: " + windowWidth + " x " + windowHeight);
    canvas.width = Math.floor(windowWidth * window.devicePixelRatio);
    canvas.height = Math.floor(windowHeight * window.devicePixelRatio);
    canvas.style.width = windowWidth + "px";
    canvas.style.height = windowHeight + "px";
  } else {
    canvas.width = Math.floor(baseCanvasWidth * window.devicePixelRatio);
    canvas.height = Math.floor(baseCanvasHeight * window.devicePixelRatio);
    canvas.style.width = baseCanvasWidth + "px";
    canvas.style.height = baseCanvasHeight + "px";
  }

  ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  console.log("new canvas size: " + canvas.width + " x " + canvas.height);
  console.log("new canvas style size: " + canvas.style.width + "px x " + canvas.style.height + "px");
}

function drawLine(ctx, x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1 + 0.5, y1 + 0.5);
  ctx.lineTo(x2 + 0.5, y2 + 0.5);
  ctx.stroke();
}

init();

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map