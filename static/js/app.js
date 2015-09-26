import "babelify/polyfill";
import Player from './gameobjects/player';


var game = new Phaser.Game(1280, 720, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update });

var player;

function preload() {

  game.load.image('sky', './assets/sprites/gamebackground.png');
  game.load.bitmapFont('system_24', './assets/fonts/system_24.png', './assets/fonts/system_24.xml');
  game.load.spritesheet('playership', './assets/sprites/player.png', 102, 37);
}

function create() {
    game.time.advancedTiming = true;
    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0, 0, 'sky');
    player = new Player(game, 320, 32);

    game.add.existing(player);

}

function update() {


}
