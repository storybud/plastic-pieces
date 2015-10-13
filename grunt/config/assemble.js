module.exports = {
	options: {
		flatten: true,
		layoutdir: 'src/template/layouts/', 
		layout: 'default.hbs',
		data: 'src/data/**/*.json',
		partials: 'src/template/partials/*.hbs'
	},
	site: {
		files: {
			'build/': ['src/template/pages/*.hbs']
		}
	}
};