module.exports = {
	assemble: {
		files: '<%= template %>**/*{.hbs, .md}',
		tasks: 'assemble'
	},
	sass: {
		files: 'src/sass/**/*.scss',
		tasks: 'compass'
	},
	// uglify: {
	// 	files: 'src/js/**/*.js',
	// 	tasks: 'uglify'
	// }
};