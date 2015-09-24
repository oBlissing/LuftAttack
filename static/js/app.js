import "babelify/polyfill";
import Player from './gameobjects/player';


var game = new Phaser.Game(1280, 720, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update });

var player;

function preload() {

  game.load.image('sky', './assets/sprites/sky.png');
  game.load.bitmapFont('system_24', './assets/fonts/system_24.png', './assets/fonts/system_24.xml');
  game.load.spritesheet('stone0', './assets/sprites/stone0.png', 128, 128);
}

function create() {
    game.time.advancedTiming = true;
    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    player = new Player(game, 320, 32);


}

function update() {


}
