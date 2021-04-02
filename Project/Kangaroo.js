gravity = 2.5;

class Kangaroo {
  constructor() {
    this.dim = 100;

    this.x = this.dim / 2;
    this.y = height - this.dim;

    this.velocityX = 0;

  }

  jump() {
    this.velocityX = -25;
  }

  move() {
    this.y += this.velocityX;
    this.velocityX += gravity;
    this.y = constrain(this.y, 0, height - this.dim);
  }

  show() {
    image(kanImg, this.x, this.y, this.dim, this.dim);
  }
}