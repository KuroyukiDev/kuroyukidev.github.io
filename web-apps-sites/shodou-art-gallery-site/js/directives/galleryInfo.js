app.directive('galleryInfo', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/galleryInfo.html'
  };
  
});