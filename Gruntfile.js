module.exports = function(grunt){

	grunt.initConfig({

		assemble: {
			options: {
				flatten: true,
				layoutdir: 'src/templates/layouts/', 
				layout: 'default.hbs',
				data: 'src/data/**/*.json',
				partials: 'src/templates/partials/*.hbs'
			},
			site: {
				files: {
					'build/': ['src/templates/pages/*.hbs']
				}
			}
		}
	});

	grunt.loadNpmTasks('assemble');

	grunt.registerTask('default', ['assemble']);
}