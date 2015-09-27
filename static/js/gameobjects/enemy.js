class Enemy extends Phaser.Sprite {
    constructor(game, x, y, texture) {
        super(game, x, y, texture);
        this.name = "Enemy";

        this.scale.setTo(1, 1);
        game.physics.arcade.enable(this);

        this.damage = 0;
        this.topVelocity = 150;
        this.acceleration = 25;
        this.deceleration = 10;
        this.isAlive = false;

        // this.body.setSize(30, 48, 49, 60);
        this.body.bounce.y = 0.0;
        this.body.gravity.y = 0;
        this.body.collideWorldBounds = false;

        function RGBtoHEX(r, g, b) {
           return r << 16 | g << 8 | b;
        }
        let red = RGBtoHEX(255,0,0);
        this.tint = red;
    }

    update() {
      super.update();

      if (this.x < -this.width)
        this.kill();
    }

    spawn() {
      this.isAlive = true;
      console.log(this.name + " was spawned!");
    }

    kill() {
      this.x = this.game.width;
      this.isAlive = false;
      console.log(this.name + " was killed!");
    }
}

export default Enemy;
