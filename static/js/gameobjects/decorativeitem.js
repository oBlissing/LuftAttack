class DecorativeItem extends Phaser.Sprite {
  constructor(game, x, y, texture) {
      super(game, x, y, texture);

      this.scale.setTo(1, 1);
      // game.physics.arcade.enable(this);

  }
}

export default DecorativeItem;
