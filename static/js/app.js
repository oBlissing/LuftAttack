import "babelify/polyfill";
import Player from './gameobjects/player';
import ParallaxLayer from './gameobjects/parallaxlayer';

var game = new Phaser.Game(1280, 720, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update });

var player, backgroundobjects1, backgroundobjects2, foregroundobjects, gameHelper;

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
  game.load.spritesheet('foreground1', './assets/sprites/foreground1.png', 74, 57);
  game.load.spritesheet('foreground2', './assets/sprites/foreground2.png', 74, 57);
  game.load.spritesheet('foreground3', './assets/sprites/foreground3.png', 74, 57);
  game.load.spritesheet('foreground4', './assets/sprites/foreground4.png', 74, 57);
  game.load.spritesheet('foreground5', './assets/sprites/foreground5.png', 74, 57);
  game.load.spritesheet('foreground6', './assets/sprites/foreground6.png', 74, 57);
  game.load.spritesheet('foreground7', './assets/sprites/foreground7.png', 74, 57);
  game.load.spritesheet('foreground8', './assets/sprites/foreground8.png', 74, 57);
  game.load.spritesheet('foreground9', './assets/sprites/foreground9.png', 74, 57);
}

function create() {
    game.time.advancedTiming = true;
    game.world.setBounds(0, 0, 1280, 620);
    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0, 0, 'sky');

    function RGBtoHEX(r, g, b) {
	     return r << 16 | g << 8 | b;
    }
    let gray = RGBtoHEX(150,150,150);
    let graylight = RGBtoHEX(200,200,200);
    let black = RGBtoHEX(0,0,0);

    // (game, x, y, width, height, texturePrefix, textureMax, color, speed, scale, numberOfItems)
    backgroundobjects2 = new ParallaxLayer(game, 0, 0, 200, 330, 'background', 7, graylight, 1, 1);
    backgroundobjects2.create();
    backgroundobjects1 = new ParallaxLayer(game, 0, 0, 200, 330, 'background', 7, gray, 1.25, 1.1);
    backgroundobjects1.create();
    foregroundobjects = new ParallaxLayer(game, 0, 0, 74, 57, 'foreground', 9, black, 1.5, 1);
    foregroundobjects.create();


    //
    // backgroundobjects = new EnvironmentHandler(game, 0, 0, gray, 1.25, 1.1);
    // backgroundobjects.create();
    // foregroundobjects = new EnvironmentHandler(game, 0, 0, black, 1.35, 1);
    // foregroundobjects.create();

    player = new Player(game, 320, 32);

    game.add.existing(player);

}

function update() {

  backgroundobjects1.update();
  backgroundobjects2.update();
  foregroundobjects.update();

}
