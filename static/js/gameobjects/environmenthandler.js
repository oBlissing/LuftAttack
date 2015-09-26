import BackgroundItem from './backgrounditem';

class EnvironmentHandler {
  constructor(game, x, y, color, speed, scale) {
    this.numberOfItems = 9;
    this.items = [];
    this.game = game;
    this.movement = speed;
    this.color = color;
    this.scale = scale;
    console.log("EnvironmentHandler initiated");
  }
  create() {

    for (let i = 0;i< this.numberOfItems; i++) {
      let rand = Math.floor(Math.random() * 7) + 1
      let yPos = 620 - (330 * this.scale);
      var item = new BackgroundItem(this.game, i*190, yPos, 'background' + rand);
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
      if (item.x < -300)
        item.x = 1400;
    }
  }
}

export default EnvironmentHandler;
