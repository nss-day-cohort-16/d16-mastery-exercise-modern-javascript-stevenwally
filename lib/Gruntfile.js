module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      '../dist/quiz.js': ['../js/*.js']
    },
    jshint: {
      files: ['../js/**/*.js'],
      options: {
        predef: ["document", "console", "$", "event", "window", "alert", "location", "setInterval", "clearInterval"],
        esnext: true,
        globalstrict: true,
        globals: { "Robots": true, "require": true, "module": true, "Enemies": true }
      }
    },
    sass: {
      dist: {
        files: {
// target: source
          '../styles/styles.css': '../sass/*.scss'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['../js/**/*.js'],
        tasks: ['jshint']
      },
      sass: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      },
      browserify: {
        files: ['../js/*.js'],
        tasks: ["browserify"]
      }
   }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'browserify', 'watch']);
};