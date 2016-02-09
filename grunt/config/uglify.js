module.exports = {
	build: {
		options: {
			beautify: true
		},
		files: [
			{
				expand: true,
				cwd: '<%= src %>/js/',
				src: ['*.js'],
				dest: '<%= build %>/js/',
				ext: '.min.js'
			}
		]
	}
}