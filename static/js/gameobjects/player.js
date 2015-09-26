class Player extends Phaser.Sprite {
    constructor(game, x, y) {
        super(game, x, y, 'playership');
        this.name = "Player";
    }
}

export default Player;
