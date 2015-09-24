class Player extends Phaser.Sprite {
    constructor(game, x, y) {
        super(game, x, y, 'stone0');
        this.name = "Player";
    }
}

export default Player;
