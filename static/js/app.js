import "babelify/polyfill";
import Player from './gameobjects/player';
import EnvironmentHandler from './gameobjects/environmenthandler';

var game = new Phaser.Game(1280, 720, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update });

var player, environmenthandler1, environmenthandler2, gameHelper;

function preload() {

  game.load.image('sky', './assets/sprites/game_background.png');
  game.load.bitmapFont('system_24', './assets/fonts/system_24.png', './assets/fonts/system_24.xml');
  game.load.spritesheet('playership', './assets/sprites/player.png', 102, 37);
  game.load.spritesheet('background1', './assets/sprites/background1.png', 200, 330);
  game.load.spritesheet('background2', './assets/sprites/background2.png', 200, 330);
  game.load.spritesheet('background3', './assets/sprites/background3.png', 200, 330);
  game.load.spritesheet('background4', './assets/sprites/background4.png', 200, 330);
  game.load.spritesheet('background5', './assets/sprites/background5.png', 200, 330);
  game.load.spritesheet('background6', './assets/sprites/background6.png', 200, 330);
  game.load.spritesheet('background7', './assets/sprites/background7.png', 200, 330);
}

function create() {
    game.time.advancedTiming = true;
    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0, 0, 'sky');

    function RGBtoHEX(r, g, b) {
	     return r << 16 | g << 8 | b;
    }
    let gray = RGBtoHEX(150,150,150);
    let graylight = RGBtoHEX(200,200,200);

    environmenthandler1 = new EnvironmentHandler(game, 0, 0, graylight, 1.5);
    environmenthandler1.create();
    environmenthandler2 = new EnvironmentHandler(game, 0, 0, gray, 2);
    environmenthandler2.create();

    player = new Player(game, 320, 32);

    game.add.existing(player);

}

function update() {

  environmenthandler1.update();
  environmenthandler2.update();

}
