(function() {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
// .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");
// .constant('ApiBasePath', "json/");

MenuDataService.$inject = ['$http', 'ApiBasePath']
function MenuDataService($http, ApiBasePath) {
  var service = this;

  service.getAllCategories = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });
    //console.log(response);
    return response;

  };


  service.getItemsForCategory = function(shortName) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: shortName
      }
    });

    console.log('service', response);

    return response;
  };
};

})();
