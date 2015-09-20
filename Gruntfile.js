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
      }
    },


  });

  grunt.registerTask("default", ["clean", "babel", "copy"]);

};
