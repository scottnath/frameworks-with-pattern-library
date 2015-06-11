'use strict';

/**
 * @ngdoc overview
 * @name angularFrameworkTesting
 * @description
 * # angularFrameworkTesting
 *
 * Main module of the application.
 */
angular
  .module('angularFrameworkTesting', [
    'templatescache',
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'main/main.html',
        controller: 'MainCtrl'
      })
      .when('/shows', {
        templateUrl: 'show/shows-landing.html',
        controller: 'ShowIndexCtrl'
      })
      .when('/shows/:id', {
        templateUrl: 'show/show-detail-page.html',
        controller: 'ShowDetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('shows', function($resource) {
    return $resource('http://52.11.28.2:3000/show/:id', {id:'@id'});
  });
