import { Fps, Player } from "./classes";
import { getPlatforms1 } from "./utils/getPlatforms";
import resizeCanvas from "./utils/resizeCanvas";
import scrolling from "./utils/scrolling";
import eventListeners from "./utils/eventListeners";
import platformsCollision from "./utils/platformsCollision";
import getInitialKeys from "./utils/getInitialKeys";
import audio from "./audio";

var canvas;
var c;
var baseCanvasWidth = 640;
var baseCanvasHeight = 480;
let fullscreen = true;

export const GRAVITY_NORMAL = 1.4;
export let gravity = GRAVITY_NORMAL;
let backgroundSpeed;

let keys = {};
let game = {};
let lastKey;
let scrollOffset;
let currentLevel = 1;

let player;
let fpsCounter;
let platforms;

window.onload = () => {
  init();
};

const setScrollOffset = (value) => (scrollOffset = value);
const setLastKey = (value) => (lastKey = value);
const setKeys = (value) => (keys = value);
const setGame = (value) => (game = value);
const setPlayer = (value) => (player = value);

/*
--------------------------
--------- draw -----------
--------------------------
*/

function draw() {
  c.clearRect(0, 0, canvas.width, canvas.height);

  platforms.forEach((platform) => {
    platform.update({ c });
  });

  player.update({ c });

  // fps counter should be at the end of draw
  fpsCounter.update({ c });
}
/* END draw -------------
-----------------
--------------
---------
----
*/


/*
--------------------------
------- calculate --------
--------------------------
*/

function calculate() {
  if (player.position.y > canvas.height / 2) {
    selectLevel(currentLevel);
    audio.die.play();
    return;
  }
  scrolling({ keys, player, platforms, scrollOffset, setScrollOffset });
  platformsCollision({ platforms, player });
}
/* END calculate ---------
-----------------
--------------
---------
----
*/

function selectLevel(currentLevel) {
  switch (currentLevel) {
    case 1:
      initParams();
      break;
    default:
      console.log("default case. selectLevel function");
  }

  eventListeners({ keys, setLastKey, setKeys, game, player });
}

function init() {
  canvas = document.getElementById("canvas");
  c = canvas.getContext("2d");
  window.addEventListener("resize", windowSizeChanged);
  resizeCanvas({ c, canvas, fullscreen, baseCanvasWidth, baseCanvasHeight });

  selectLevel(currentLevel);
  tick();
}

function initParams() {
  setPlayer(new Player());
  setKeys(getInitialKeys());
  setLastKey("right");
  setGame({
    ...game,
    disableUserInput: false,
  });
  setScrollOffset(0);
  platforms = getPlatforms1({ canvas });
  backgroundSpeed = player.speed * 0.4;
  fpsCounter = new Fps({ canvasWidth: canvas.width / 2 });
}

function tick() {
  requestAnimationFrame(tick);
  draw();
  calculate();
}

function windowSizeChanged() {
  resizeCanvas({ c, canvas, fullscreen, baseCanvasWidth, baseCanvasHeight });
}
