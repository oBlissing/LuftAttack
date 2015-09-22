module.exports = function(grunt) {

  require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    "babel": {
      options: {
        sourceMap: true
      },
      dist: {
        files: [{
          expand: true,
          cwd: './static',
          src: ['**/*.js'],
          dest: 'build/',
          ext: '.js'
        }]
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: './static/sass',
          src: ['*.scss'],
          dest: './build',
          ext: '.css'
        }]
      }
    },
    watch: {
      files: ['static/**/*.*'],
      tasks: ['default']
    },
    clean: ['build'],
    copy: {
      main: {
        files: [
          {
            expand : true,
            dest   : './build/',
            cwd    : './static/html/',
            src    : [
              '**/*.html'
            ]
          }
        ]
      },
      engine: {
        expand: true,
        cwd: './node_modules/phaser/dist/',
        src: '*.min.js',
        dest: './build/js/',
      }
    },


  });

  grunt.registerTask("default", ["clean", "sass", "babel", "copy"]);

};
