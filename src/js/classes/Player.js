import { gravity } from "../canvas";

class Player {
  constructor() {
    this.position = {
      x: 200,
      y: 100,
    };
    this.velocity = {
      x: 0,
      y: 5,
    };
    this.width = 50;
    this.height = 50;
    this.speed = 10;
    this.jumpVelocity = 30;
  }

  draw({ c }) {
    c.save();
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
    c.font = "20px Arial";
    c.fillText( `Player` , this.position.x , this.position.y - 5 );
    c.restore();
  }

  update({ c }) {
    this.draw({ c });

    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;

    this.velocity.y += gravity;
  }
}

export default Player;