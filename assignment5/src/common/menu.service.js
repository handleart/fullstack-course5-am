(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getSpecificMenuItems = function (item_short_name) {
    // var config = {};
    //if (category) {
    //  config.params = {'category': category};
    //}

    //console.log(item_short_name);

    // console.log('hi');

    if (typeof item_short_name === "undefined") {
      return false;
    };

    return $http.get(ApiPath + '/menu_items.json').then(function (response) {
      var data = response.data;
      for (var i = 0; i < data.menu_items.length; i++) {
        //console.log(data.menu_items[i].short_name, value)
        if (data.menu_items[i].short_name === item_short_name) {
         //console.log('matched', value, data.menu_items[i]);
         //return true;
         return data.menu_items[i];
       }
     }
       // else {
      //   ctrl.$setValidity('validCategoryDirective', false);
       //}
       return false;
      //return response.data;
    });
  };

}



})();
