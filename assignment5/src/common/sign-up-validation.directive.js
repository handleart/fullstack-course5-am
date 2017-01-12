(function () {
  'use strict';

  angular.module('common')
  .directive('validCategoryDirective', validCategoryDirective);

  validCategoryDirective.$inject = ['MenuService', '$timeout'];
  function validCategoryDirective(MenuService, $timeout) {
    var toId;
    var ddo = {
      restrict: 'A',
      require: 'ngModel',
       link: function(scope, elem, attr, ctrl) {
         scope.$watch(attr.ngModel, function(value) {

          if(toId) clearTimeout(toId);
          //  console.log('hi');
          if (value != "" && typeof value != "undefined") {
            toId = $timeout(function(){
           // call to some API that returns { isValid: true } or { isValid: false }
             var data = MenuService.getSpecificMenuItems(value).then(function(data) {
                //console.log(data != 0);
                if (typeof data === "undefined") {
                  ctrl.$setValidity('validCategoryDirective', false);
                } else {
                  ctrl.$setValidity('validCategoryDirective', true);
                };

             });
             }, 200);
           }
         })
       }

    };

    return ddo;
  }

} )();
