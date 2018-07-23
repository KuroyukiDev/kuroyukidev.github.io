app.factory('photos', ['$http', function($http) {
	return $http.get('https://kuroyukidev.github.io/web-apps-sites/shodou-art-gallery-site/js/services/photos-api/test-photos.json')
		.success(function(data) {
			return data;
		})
		.error(function(err) {
			return err;
		});
	
}]);