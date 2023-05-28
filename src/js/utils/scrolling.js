import hitSideOfPlatform from "./hitSideOfPlatform";

const scrolling = ({
  keys,
  player,
  platforms,
  scrollOffset,
  setScrollOffset,
}) => {
  let hitSide = false;
  if (
    keys.right.pressed &&
    player.position.x + player.width < canvas.width / 2 / 2
  ) {
    player.velocity.x = player.speed;
  } else if (
    (keys.left.pressed && player.position.x > 200) ||
    (keys.left.pressed && scrollOffset === 0 && player.position.x > 0)
  ) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      for (let i = 0; i < platforms.length; i++) {
        const platform = platforms[i];
        platform.velocity.x = -player.speed;

        if (hitSideOfPlatform({ object: player, platform })) {
          platforms.forEach((el) => {
            el.velocity.x = 0;
          });

          hitSide = true;
          break;
        }

        if (!hitSide) {
          setScrollOffset(scrollOffset + player.speed);
        }
      }
    } else if (keys.left.pressed && scrollOffset > 0) {
      for (let i = 0; i < platforms.length; i++) {
        const platform = platforms[i];
        platform.velocity.x = player.speed;

        if (hitSideOfPlatform({ object: player, platform })) {
          platforms.forEach((el) => {
            el.velocity.x = 0;
          });

          hitSide = true;
          break;
        }
        if (!hitSide) {
          setScrollOffset(scrollOffset - player.speed);
        }
      }
    }
  }
};

export default scrolling;
