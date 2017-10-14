module.exports = function(config) {
	config.set({
		frameworks: ['jasmine'],
		browsers: ['Chrome'],
		files: [
			'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular.js',
			'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular-route.js',
			'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular-mocks.js',
			'app/public/script_app.js',
			'app/public/controllers/MainController.js',
			'app/public/controllers/EditEneidaRowController.js',
			'app/public/services/Eneida.js',
			'spec/unit/*.js'
		]
	});
};