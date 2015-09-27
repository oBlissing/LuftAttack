import DecorativeItem from './decorativeitem';

class ParallaxLayer {
  constructor(game, x, y, width, height, texturePrefix, textureMax, color, speed, scale) {
    this.items = [];
    this.game = game;
    this.movement = speed;
    this.color = color;
    this.scale = scale;
    this.width = width;
    this.height = height;
    this.texturePrefix = texturePrefix;
    this.textureMax = textureMax;
  }
  create() {

    this.numberOfItems = Math.floor((this.game.width*3) / this.width);

    for (let i = 0;i< this.numberOfItems; i++) {
      let rand = Math.floor(Math.random() * this.textureMax) + 1
      let yPos = 620 - (this.height * this.scale);
      let xPos = (this.width * this.scale) * i;
      var item = new DecorativeItem(this.game, xPos, yPos, this.texturePrefix + rand);
      item.tint = this.color;
      item.scale.setTo(this.scale, this.scale);

      this.game.add.existing(item);
      this.items.push(item);
    }

  }
  update() {
    for(let i = 0; i < this.items.length; i ++) {
      let item = this.items[i];
      item.x -= this.movement;
      if (item.x < -(item.width + this.game.width))
        item.x = this.game.width * 2;
    }
  }
}

export default ParallaxLayer;
