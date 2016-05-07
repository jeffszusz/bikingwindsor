module.exports  = function(grunt) {
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 8000,
          open: true,
          livereload: true,
          hostname: 'localhost',
          base: 'public'
        }
      }
    },

    watch: {
      everything: {
        files: [
          "public/**/*.html",
          "public/**/*.css",
          "public/**/*.js"
        ],
        tasks: [],
        options: { livereload: true }
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['connect', 'watch']);
}
