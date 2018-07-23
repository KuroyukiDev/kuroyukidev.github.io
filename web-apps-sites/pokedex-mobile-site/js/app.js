var app = angular.module('GalleryApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  	.when('/#', {
    	controller: 'HomeController',
    	templateUrl: 'views/home.html'
  	})
  	.when('/#alola', {
    	controller: 'AlolaController',
    	templateUrl: 'views/alolaDexList.html'
	  })
    .otherwise({
    	redirectTo: '/#'
  	});
});