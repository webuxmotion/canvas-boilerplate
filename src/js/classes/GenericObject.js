class GenericObject {
  constructor({ x, y, image, block, width, height, text }) {
    this.position = {
      x,
      y,
    };
    this.velocity = {
      x: 0
    };
    this.image = image;
    this.height = height;
    this.width = width;
    this.block = block;
    this.text = text;
  }

  draw({ c }) {
    c.drawImage(
      this.image, 
      this.position.x, 
      this.position.y,
      this.width,
      this.height,
    );

    if (this.text) {
      c.font = "20px Arial";
      c.fillStyle = 'red';
      c.fillText(this.text, this.position.x, this.position.y);
    }
  }

  update({ c }) {
    this.draw({ c });
    this.position.x += this.velocity.x;
    this.velocity.x = 0;
  }
}

export default GenericObject;