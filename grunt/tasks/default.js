module.exports = function(grunt) {
	grunt.registerTask('default', [
		'assemble', 
		'compass',
		'uglify',
		'watch'
	]);
};