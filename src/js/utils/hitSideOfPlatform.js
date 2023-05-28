const hitSideOfPlatform = ({ object, platform }) => {
  const isHit = (
    object.position.x + object.width - object.velocity.x - platform.velocity.x >= platform.position.x &&
    object.position.x + object.velocity.x <= platform.position.x + platform.width &&
    object.position.y <= platform.position.y + platform.height &&
    object.position.y + object.height >= platform.position.y
  );
  return isHit;
};

export default hitSideOfPlatform;