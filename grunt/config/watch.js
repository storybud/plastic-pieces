module.exports = {
	assemble: {
		files: 'src/template/**/*.hbs',
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