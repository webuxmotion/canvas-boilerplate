function hitBottomOfPlatform({ object, platform }) {
  return (
    object.position.y <= platform.position.y + platform.height &&
    object.position.y - object.velocity.y >= platform.position.y + platform.height &&
    object.position.x + object.width >= platform.position.x &&
    object.position.x <= platform.position.x + platform.width
  );
}

export default hitBottomOfPlatform;