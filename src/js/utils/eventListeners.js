import audio from "../audio";

const eventListeners = ({ keys, game, setLastKey, setKeys, player }) => {
  const handleKeydown = ({ code }) => {
    if (game.disableUserInput) return;

    switch (code) {
      case "ArrowLeft":
      case "KeyA":
        keys.left.pressed = true;
        setKeys(keys);
        setLastKey("left");
        break;
      case "ArrowRight":
      case "KeyD":
        keys.right.pressed = true;
        setKeys(keys);
        setLastKey("right");
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
        
        break;
      default:
    }
  };

  const handleKeyup = ({ code }) => {
    if (game.disableUserInput) return;

    switch (code) {
      case "ArrowLeft":
      case "KeyA":
        keys.left.pressed = false;
        setKeys(keys);
        break;
      case "ArrowRight":
      case "KeyD":
        keys.right.pressed = false;
        setKeys(keys);
        break;
      case "ArrowUp":
      case "Space":
      case "KeyW":
        break;
      default:
    }
  };

  removeEventListener("keydown", handleKeydown, true);
  removeEventListener("keyup", handleKeyup, true);

  addEventListener("keydown", handleKeydown, true);
  addEventListener("keyup", handleKeyup, true);
};

export default eventListeners;