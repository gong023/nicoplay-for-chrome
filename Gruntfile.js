module.exports = function(grunt) {
  grunt.initConfig({
    jasmine: {
      src: 'js/app/**/*.js',
      options: {
        specs: 'js/spec/**/*_spec.js',
        helpers: 'js/spec/app/SpecHelper.js',
        template: require('grunt-template-jasmine-requirejs'),
        templateOptions: {
          requireConfig: {
            baseUrl: "js/app/",
            paths: {
              jquery: '../libs/jquery/jquery-min',
              underscore: '../libs/underscore/underscore-min',
              backbone: '../libs/backbone/backbone-min'
            },
            shim: {
              'backbone': {
                deps: ['underscore', 'jquery'],
                exports: 'Backbone'
              }
            }
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.registerTask('default', ['jasmine']);
};
