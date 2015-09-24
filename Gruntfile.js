module.exports = function(grunt) {

  require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    browserify: {
      dist: {
         options: {
            transform: [
               ["babelify", {
                  loose: "all"
               }]
            ]
         },
         files: {
            // if the source file has an extension of es6 then
            // we change the name of the source file accordingly.
            // The result file's extension is always .js
            "./build/js/app.js": ["./static/js/app.js"]
         }
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
      files: ['static/**/*.*', 'assets/**/*.*'],
      tasks: ['default']
    },
    clean: ['build/*'],
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
      assets: {
        files: [
          {
            expand : true,
            dest   : './build/assets/',
            cwd    : './assets/',
            src    : [
              '**/*.*'
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

  grunt.registerTask("default", ["clean", "sass", "browserify", "copy"]);

};
