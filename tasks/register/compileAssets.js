module.exports = function (grunt) {
  grunt.registerTask('compileAssets', [
    'clean:dev',
    'browserify',
    'less:dev',
    'copy:dev',
    'jst:dev',
    'coffee:dev'
  ]);
};
