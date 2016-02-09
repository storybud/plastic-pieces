module.exports = {
	build: {
		options: {
			sassDir: '<%= src %>sass/',
			cssDir: '<%= build %>css/',
			require: 'susy',
			environment: 'development'
		}
	}
};