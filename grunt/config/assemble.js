module.exports = {
	options: {
		flatten: true,
		layoutdir: 'src/template/layouts/', 
		layout: 'default.hbs',
		// data: '<%= data =>**/*.json',
		partials: 'src/template/partials/**/*.hbs',
		helpers: 'src/template/helpers/**/*.js'
	},
	site: {
		files: [{
			cwd: 'src/template/pages',
			dest: 'build',
			expand: true,
			src: ['**/*.md', '**/*.hbs']
		}]
	}

};