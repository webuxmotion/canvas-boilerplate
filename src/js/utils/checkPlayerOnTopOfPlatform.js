const checkPlayerOnTopOfPlatform = ({ player, platform }) => {
  return (
    player.position.y + player.height + player.velocity.y > platform.position.y &&
    player.position.x + player.width + player.velocity.x > platform.position.x &&
    player.position.x < platform.position.x + platform.width &&
    player.position.y + player.height < platform.position.y
  );
};

export default checkPlayerOnTopOfPlatform;