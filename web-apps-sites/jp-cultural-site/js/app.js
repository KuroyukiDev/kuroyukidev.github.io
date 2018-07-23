var app = angular.module('jpCulturalReportApp', []);



app.controller('HomeController', ['$scope', function($scope) {
	
	$scope.title = 'Home Page';
	
	$scope.summary = 'This is the Home Page.<br />Welcome to my site, however it is still<br />under construction.<br />Please check back soon.';
	
}]);



app.controller('KamisamaController', ['$scope', function($scope) {
	$scope.izanagi = {
		title: '"Izanagi no Mikoto" Page',
		summary: 'This is a page for the Kamisama, Izanagi no Mikoto.'
	};
	$scope.izanami = {
		title: '"Izanami no Mikoto" Page',
		summary: 'This is a page for the Kamisama, Izanami no Mikoto.'
	};
	$scope.amaterasu = {
		title: '"Amaterasu no Mikoto" Page',
		summary: 'This is a page for the Kamisama, Amaterasu no Mikoto.'
	};
	$scope.susanoo = {
		title: '"Susano\'o no Mikoto" Page',
		summary: 'This is a page for the Kamisama, Susano\'o no Mikoto.'
	};
	$scope.tsukiyomi = {
		title: '"Tsukiyomi no Mikoto" Page',
		summary: 'This is a page for the Kamisama, Tsukiyomi no Mikoto.'
	};
	
	
}]);