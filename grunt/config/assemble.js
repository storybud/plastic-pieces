module.exports = {
	options: {
		flatten: true,
    	// plugins: ['assemble-markdown-pages'],
		layoutdir: 'src/template/layouts/', 
		layout: 'default.hbs',
		// data: '<%= data =>**/*.json',
		partials: 'src/template/partials/*.hbs',
		// markdownPages: {
		// 	src: 'src/template/articles/**/*.md',
		// 	dest: 'build/articles/',
		// 	// subFolder: true
		// },
		// collections: [
		// 	{
		// 		title: 'post',
		// 		sort: 'date',
		// 		sortorder: 'decending'
		// 	}
		// ],
	},
	site: {
		files: [{
			cwd: 'src/template/pages',
			dest: 'build',
			expand: true,
			src: ['**/*.md']
		}]
	}

	// site: {
	// 	files: {
	// 		'build/': ['src/template/pages/**/*.hbs']
	// 	}
	// },

};