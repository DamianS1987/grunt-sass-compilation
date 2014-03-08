'use strict';

module.exports = function(grunt) {
 
  // Project configuration.
  grunt.initConfig({
 
    watch: { // for development run 'grunt watch'
      options: {
        nospawn: true
      },
      compass: {
        files: ['public/css/sass/*.scss',
                'public/css/sass/**/*.scss'],
        tasks: ['compass:dev']
      }
    },

    compass: {
      dev: {
        src: 'public/css/sass',
        dest: 'public/css/stylesheets',
        outputstyle: 'expanded', //nested, compact, compressed, expanded
        linecomments: true,
        check: true //check syntax
      },
      prod: {
        src: 'public/css/sass',
        dest: 'public/css/stylesheets',
        outputstyle: 'compressed', //nested, compact, compressed, expanded
        linecomments: false,
        forcecompile: true
      }
    }

  });

  // plugin tasks
  grunt.loadNpmTasks('grunt-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
 
  // Default command "grunt" - compiles to production
  grunt.registerTask('default', 'compass:prod');
  grunt.registerTask('development', 'compass:prod');
  // command "grunt watch_sass" tells grunt to watch for changes in your files
  grunt.registerTask('watch_sass', 'watch:compass');
};