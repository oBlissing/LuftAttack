import EnemyTurret from './enemyturret';

class EnemyManager {
  constructor(game, x, y, movement) {
    this.game = game;
    this.items = [];
    this.movement = movement;
    this.name = "EnemyManager";
  }
  create() {
    for (let i = 0; i < 10; i++) {
      let enemy = new EnemyTurret(this.game, this.game.width, 200);
      this.game.add.existing(enemy);
      this.items.push(enemy);
    }
  }
  update() {
    for(let i = 0; i < this.items.length; i ++) {
      let item = this.items[i];
      if (item.isAlive)
        item.x -= this.movement;
      if (item.x < -(item.width + this.game.width))
        item.x = this.game.width * 2;

    }
  }
  spawnEnemy() {
    for (let i = 0; i < this.items.length; i ++) {
      if (!this.items[i].isAlive) {
        this.items[i].spawn();
        return true;
      }
    }
    console.log("Did not find available enemy to spawn");
    return false;
  }
}

export default EnemyManager;
