module.exports = function (grunt) {
  grunt.registerTask('build', [
    'compileAssets',
    'syncAssets',
    'linkAssetsBuild',
    'clean:build',
    'copy:build'
  ]);
};
