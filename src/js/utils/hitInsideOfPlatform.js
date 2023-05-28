function hitInsideOfPlatform({ object, platform }) {
  return (
    object.position.x > platform.position.x &&
    object.position.y > platform.position.y &&
    object.position.x + object.width < platform.position.x + platform.width &&
    object.position.y + object.height < platform.position.y + platform.height
  );
}

export default hitInsideOfPlatform;