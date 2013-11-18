var tabApp = angular.module('tabApp',['ui.router']);

tabApp.config(function($stateProvider, $urlRouterProvider) {

  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "home.html",
      controller: 'appController',
    })
    $urlRouterProvider.otherwise("/");
});

tabApp.directive('tabularScope', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).tabulous(scope.$eval(attrs.tabularScope));
        }
    };
});
tabApp.controller('appController', function($scope){
	
});