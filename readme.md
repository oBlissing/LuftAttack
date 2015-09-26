# LuftAttack

Decided to start porting my old C++ game LuftAttack to a JS version.

C++ version can be seen here: https://www.youtube.com/watch?v=zTfvsdBqkdo

## Development

The game is built with [Phaser](http://phaser.io/).

It is being written in ES6, and is then transpiled to ES5 with babelify.

### Setup

#### Get dependencies

    $ npm install

#### Build files

    $ grunt

or

    $ grunt watch

#### Serve

    $ cd build && http-server
