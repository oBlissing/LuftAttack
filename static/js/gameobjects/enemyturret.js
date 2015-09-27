import Enemy from './enemy';

class EnemyTurret extends Enemy {
    constructor(game, x, y) {
        super(game, x, y, 'enemyturret');
        this.name = "EnemyTurret";

        this.scale.setTo(1, 1);
        game.physics.arcade.enable(this);

        this.damage = 10;
        this.topVelocity = 250;
        this.acceleration = 25;
        this.deceleration = 10;

        // this.body.setSize(30, 48, 49, 60);
        this.body.bounce.y = 0.0;
        this.body.gravity.y = 0;
        this.y = this.game.height - 100 - this.height;

    }

    update() {
      super.update();


    }
}

export default EnemyTurret;
