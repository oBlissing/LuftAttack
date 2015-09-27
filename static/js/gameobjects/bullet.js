class Bullet extends Phaser.Sprite {
    constructor(game, x, y, texture) {
        super(game, x, y, texture);
        this.name = "Bullet";

        this.scale.setTo(1, 1);
        game.physics.arcade.enable(this);

        this.damage = 0;
        this.topVelocity = 150;
        this.acceleration = 25;
        this.deceleration = 10;

        // this.body.setSize(30, 48, 49, 60);
        this.body.bounce.y = 0.0;
        this.body.gravity.y = 0;
        this.body.collideWorldBounds = false;
        console.log(this.name + " was spawned!");

    }

    update() {
      super.update();
    }
}

export default Bullet;
