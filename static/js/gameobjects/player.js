class Player extends Phaser.Sprite {
    constructor(game, x, y) {
        super(game, x, y, 'playership');
        this.name = "Player";

        this.scale.setTo(1, 1);
        game.physics.arcade.enable(this);

        this.damage = 10;
        this.topVelocity = 250;
        this.acceleration = 25;
        this.deceleration = 10;

        // this.body.setSize(30, 48, 49, 60);
        this.body.bounce.y = 0.0;
        this.body.gravity.y = 0;
        this.body.collideWorldBounds = true;

        this.cursor = game.input.keyboard.createCursorKeys();
    }

    update() {
      super.update();

      // Handle X-movement
      if (this.cursor.left.isDown) {
          //  Move to the left
          if (this.body.velocity.x > -this.topVelocity)
            this.body.velocity.x -= this.acceleration;
      } else if (this.cursor.right.isDown) {
          //  Move to the right
          if (this.body.velocity.x < this.topVelocity)
            this.body.velocity.x += this.acceleration;
      } else {
        // deceleration X
        if (this.body.velocity.x > 0)
          this.body.velocity.x -= this.deceleration;
        else if (this.body.velocity.x < 0)
          this.body.velocity.x += this.deceleration;
      }

      // Handle Y-movement
      if (this.cursor.up.isDown) {
        //  Move up
        if (this.body.velocity.y > -this.topVelocity)
          this.body.velocity.y -= this.acceleration;
      }
      else if (this.cursor.down.isDown) {
        //  Move down
        if (this.body.velocity.y < this.topVelocity)
          this.body.velocity.y += this.acceleration;
      } else {
        // deceleration Y
        if (this.body.velocity.y > 0)
          this.body.velocity.y -= this.deceleration;
        else if (this.body.velocity.y < 0)
          this.body.velocity.y += this.deceleration;
      }
    }
}

export default Player;
