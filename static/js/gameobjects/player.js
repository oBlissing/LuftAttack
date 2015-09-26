class Player extends Phaser.Sprite {
    constructor(game, x, y) {
        super(game, x, y, 'playership');
        this.name = "Player";

        this.scale.setTo(1, 1);
        game.physics.arcade.enable(this);

        this.damage = 10;

        // this.body.setSize(30, 48, 49, 60);
        this.body.bounce.y = 0.0;
        this.body.gravity.y = 0;
        this.body.collideWorldBounds = true;

        this.cursor = game.input.keyboard.createCursorKeys();
    }

    update() {
      super.update();

      //  Reset the players velocity (movement)
      // if(this.body.velocity.x > 0)
      //     this.body.velocity.x -= 5;
      this.body.velocity.x = 0;
      this.body.velocity.y = 0;

      if (this.cursor.left.isDown)
      {
          //  Move to the left
          this.body.velocity.x = -150;

      }
      else if (this.cursor.right.isDown)
      {
          //  Move to the right
          this.body.velocity.x = 150;

      }
      else if (this.cursor.up.isDown)
      {
          //  Move to the right
          this.body.velocity.y = -150;

      }
      else if (this.cursor.down.isDown)
      {
          //  Move to the right
          this.body.velocity.y = 150;

      }
      else
      {
      }

    }
}

export default Player;
