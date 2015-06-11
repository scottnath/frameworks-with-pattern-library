/**
* @ngdoc function
* @name angularFrameworkTesting.ShowDirective
*
* @description
* Controller that creates an element for show
*/
function ShowDirective () {
  'use strict';
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'show/show.html',
    link: function (scope, element, attributes) {
      scope.location = attributes["location"];
    }
  };
}
function ShowPLDirective ($q) {
  'use strict';
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'components/show/show.html',
    scope: {
      showobj: '='
    },
    link: function (scope, element, attributes) {
      // $q.when(scope.show).then(function(show){
      //     //scope.show = show;
      //     console.log('scope.showshow');
      //     console.log(show);
      // });
      scope.$watch('showobj', function(newVal) {
        if(newVal) {
          scope.show = {
            class: 'show',
            figure: {
              img: {
                src: newVal.image
              }
            },
            title: {
              text: newVal.title
            },
            body: {
              text: newVal.desc
            }
          };
        }
      }, true);
      scope.location = attributes["location"];
      // console.log(scope.show);
      // var showData = scope.show;
      // console.log('showData');
      // console.log(scope);
    }
  };
}
angular
  .module('angularFrameworkTesting')
  .directive('show', ShowDirective)
  .directive('showpl', ['$q',ShowPLDirective]);
