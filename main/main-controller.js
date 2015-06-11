/**
* @ngdoc function
* @name atlasTest.MainCtrl
*
* @description
* Controller that creates an example object
*/
function MainCtrl ($scope) {
  'use strict';
  $scope.shows = [
    'Heros',
    'Real Housewives',
    'Burn Notice'
  ];
}
angular
  .module('angularFrameworkTesting')
  .controller('MainCtrl', MainCtrl);
