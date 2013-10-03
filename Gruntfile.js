module.exports = function(grunt){

  // load all grunt-plugin tasks
  grunt.loadNpmTasks('grunt-ie9-selector-counter');

  // init config
  grunt.initConfig({
    ie9_selector_counter: {
      files: [
        'css/*.css'
      ]
    }
  });


  // resiter tasks
  grunt.registerTask('default', ['ie9_selector_counter']);

};
