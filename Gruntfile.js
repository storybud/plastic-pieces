module.exports = function(grunt){

	var SRC = "src/",
		BUILD = "build/" 

	grunt.initConfig({

		assemble: {
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
		},

		compass: {
			build: {
				options: {
					sassDir: SRC + 'sass/',
					cssDir: BUILD + 'css/',
					require: 'susy',
					environment: 'development'
				}
			}
		}

	});

	grunt.loadNpmTasks('assemble');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', [
		'assemble', 
		'compass'
	]);
};