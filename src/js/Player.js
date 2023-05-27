class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };
    this.velocity = {
      x: 0,
      y: 20,
    };
    this.width = 50;
    this.height = 50;
  }

  draw({ c }) {
    c.save();

    c.fillRect(this.position.x, this.position.y, this.width, this.height);
    
    c.restore();
  }

  update({ c }) {
    this.draw({ c });
  }
}

export default Player;