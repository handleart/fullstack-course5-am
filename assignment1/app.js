(function () {
'use strict';

angular.module('assignment_1', [])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.message = "";
  $scope.food = "";
  $scope.food_placeholder = "list comma separated dishes you usually have for lunch";
  $scope.CheckIfTooMuch = function (string) {

    var tmpMessage = "";

    if (string == ""){
      tmpMessage = "Please enter data first";
    }
    else {
      var numberOfItems = string.split(',').length;

      if (numberOfItems < 4 & numberOfItems > 0){
        tmpMessage = "Enjoy!";
      }
      else {
        tmpMessage = "Too much!";
      }
    }

    $scope.message = tmpMessage;
  };
};

})();
