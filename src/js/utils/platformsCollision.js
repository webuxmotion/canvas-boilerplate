import hitBottomOfPlatform from "./hitBottomOfPlatform";
import hitInsideOfPlatform from "./hitInsideOfPlatform";
import hitSideOfPlatform from "./hitSideOfPlatform";
import hitTopOfPlatform from "./hitTopOfPlatform";

const platformsCollision = ({ platforms, player }) => {

  platforms.forEach((platform) => {
    if (hitSideOfPlatform({ object: player, platform })) {
      player.velocity.x = 0;
    }

    if (hitTopOfPlatform({ object: player, platform })) {
      player.velocity.y = 0;
    }

    if (
      hitBottomOfPlatform({ object: player, platform }) ||
      hitInsideOfPlatform({ object: player, platform })
    ) {
      player.velocity.y = -player.velocity.y;
    }
  });
}

export default platformsCollision;