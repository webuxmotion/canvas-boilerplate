import { Fps, Player } from "./classes";
import checkPlayerOnTopOfPlatform from "./utils/checkPlayerOnTopOfPlatform";
import { getPlatforms1 } from "./utils/getPlatforms";
import resizeCanvas from "./utils/resizeCanvas";
import audio from './audio';

var canvas;
var c;
var baseCanvasWidth = 640;
var baseCanvasHeight = 480;
let fullscreen = true;

// game

export const GRAVITY_NORMAL = 1.4;
export let gravity = GRAVITY_NORMAL;
let backgroundSpeed;

let keys;
let game;
let lastKey;
let scrollOffset;
let currentLevel = 1;

let player;
let fpsCounter;
let platforms;

window.onload = () => {
  init();
};

function selectLevel(currentLevel) {
  
  switch (currentLevel) {
    case 1:
      initParams();
      break;
    default:
      console.log('default case. selectLevel function');
  }
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
  keys = {
    right: {
      pressed: false,
    },
    left: {
      pressed: false,
    },
  };
  lastKey = "right";
  game = {
    disableUserInput: false
  };
  scrollOffset = 0;
  player = new Player();
  platforms = getPlatforms1({ canvas });
  backgroundSpeed = player.speed * 0.4;
  fpsCounter = new Fps({ canvasWidth: canvas.width / 2 });
}

function draw() {
  c.clearRect(0, 0, canvas.width, canvas.height);

  platforms.forEach((platform) => {
    platform.update({ c });
  });

  player.update({ c });

  // fps counter should be at the end of draw
  fpsCounter.update({ c });

  c.fillText(scrollOffset, 10, 10);
}

function tick() {
  requestAnimationFrame(tick);

  draw();

  platforms.forEach((platform) => {
    // check if player on top of platform
    if (checkPlayerOnTopOfPlatform({ player, platform })) {
      player.velocity.y = 0;
    }
  });

  if (player.position.y > canvas.height / 2) {
    selectLevel(currentLevel)
  }

  // scrolling code
  if (
    keys.right.pressed &&
    player.position.x + player.width < canvas.width / 2 / 2
  ) {
    player.velocity.x = player.speed;
  } else if (
    keys.left.pressed && player.position.x > 200 ||
    (keys.left.pressed && scrollOffset === 0 && player.position.x > 0)
  ) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      for (let i = 0; i < platforms.length; i++) {
        const platform = platforms[i];
        platform.velocity.x = -player.speed;
      }

      scrollOffset += player.speed;

    } else if (keys.left.pressed && scrollOffset > 0) {
      for (let i = 0; i < platforms.length; i++) {
        const platform = platforms[i];
        platform.velocity.x = player.speed;
      }

      scrollOffset -= player.speed;
    } else {
      for (let i = 0; i < platforms.length; i++) {
        const platform = platforms[i];
        platform.velocity.x = 0;
      }
    }
  }
}

function windowSizeChanged() {
  resizeCanvas({ c, canvas, fullscreen, baseCanvasWidth, baseCanvasHeight });
  selectLevel(currentLevel);
}

addEventListener("keydown", ({ code }) => {
  if (game.disableUserInput) return;

  switch (code) {
    case "ArrowLeft":
    case "KeyA":
      keys.left.pressed = true;
      lastKey = "left";
      break;
    case "ArrowRight":
    case "KeyD":
      keys.right.pressed = true;
      lastKey = "right";
      break;
    case "ArrowUp":
    case "Space":
    case "KeyW":
      if (player.velocity.y === 0) {
        audio.jump.play();

        player.velocity.y = -player.jumpVelocity;
      }

      break;
    case "KeyF":
      if (!player.powerUps.fireFlower) return;

      player.shooting = true;
      setTimeout(() => {
        player.shooting = false;
      }, 100);

      audio.fireFlowerShot.play();
      let velocity = 15;

      if (lastKey === "left") velocity = -velocity;
      particles.push(
        new Particle({
          position: {
            x: player.position.x + player.width / 2,
            y: player.position.y + player.height / 2,
          },
          velocity: {
            x: velocity,
            y: 0,
          },
          radius: 5,
          color: "red",
          fireball: true
        })
      );
      break;
    default:
  }
});

addEventListener("keyup", ({ code }) => {
  if (game.disableUserInput) return;

  switch (code) {
    case "ArrowLeft":
    case "KeyA":
      keys.left.pressed = false;
      break;
    case "ArrowRight":
    case "KeyD":
      keys.right.pressed = false;
      break;
    case "ArrowUp":
    case "Space":
    case "KeyW":
      break;
    default:
  }
});  