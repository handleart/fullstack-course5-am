(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
//.constant('ApiBasePath', "menu_items.json")
//.controller('foundItemsDirectiveController', foundItemsDirectiveController)
.directive('foundItems', foundItemsDirective);

function foundItemsDirective(){
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: foundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}


function foundItemsDirectiveController() {
  var list = this;

  list.emptyResult = function () {
    if (list.items && list.items == 0) {
      return true;
    } else {
      return false;
    }

    //return true;
  }


  // if list.items.length == 0 {
  //    console.log('hi');
  // }
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;



  menu.NarrowItDownClick = function(searchTerm) {
    //console.log(menu.itemName);
    var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

    promise.then(function(response) {
      menu.found = response;
    });

  };

  menu.removeItem = function(itemIndex)  {
    menu.found.splice(itemIndex, 1);
  };


  //console.log(menu);

}

// MenuSearchService.$inject = ['$http', 'ApiBasePath'];
MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMenuItems = function() {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
      //url: (ApiBasePath + "/categories.json"),
    });

    return response;
  };

  service.getMatchedMenuItems = function(searchTerm) {
    var promise = service.getMenuItems();
    return promise.then(function(response) {
      var results = response.data.menu_items;
      var found = [];
      for (var i = 0; i < results.length; i++) {
        var name = results[i].name;

        //console.log(name.toLowerCase().indexOf("won"));
        if (name.toLowerCase().indexOf(searchTerm) != -1) {
            found.push(name);
        }
      }

      return found;

    })
    .catch(function(error) {
      console.log("Something went terribly wrong.")
    });

  };



}



})();
