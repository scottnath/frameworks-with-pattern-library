/**
* @ngdoc function
* @name angularFrameworkTesting.ShowCtrl
*
* @description
* Controller that controls presentation of shows
*/
function ShowIndexCtrl ($scope, shows) {
  'use strict';
  shows.query(function(data) {
    $scope.shows = data;
  });
}
function ShowDetailCtrl ($scope, $route, shows) {
  'use strict';
  shows.get({ id: $route.current.params.id }, function(data) {
    $scope.show = data;
  });
}
angular
  .module('angularFrameworkTesting')
  .controller('ShowIndexCtrl', ShowIndexCtrl)
  .controller('ShowDetailCtrl', ShowDetailCtrl);
