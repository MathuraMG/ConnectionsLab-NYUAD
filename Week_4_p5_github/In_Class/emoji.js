
class Emoji {
  constructor(xPos, yPos) {
    this.x = xPos;
    this.y = yPos;
    this.speed = 5;
  }

  drawEmoji() {
    textSize(64);
    text("❤️", this.x, this.y);
  }

  moveEmoji() {
    this.y = (this.y + this.speed);
  }
}


