module.exports = {
	build: {
		options: {
			sassDir: '<%= SRC %>sass/',
			cssDir: '<%= BUILD %>css/',
			require: 'susy',
			environment: 'development'
		}
	}
};