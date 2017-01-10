(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/html/home.html'
  })

  .state('categories', {
    url: '/categories',
    templateUrl: 'src/html/categories.html',
    controller: 'MenuListController as list',
    resolve: {
        items: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
    }
  })

  .state('items', {
    url: '/items/{itemId}',
    templateUrl: 'src/html/items.html',
    controller: 'MenuItemDetailController as list',
    resolve: {
      items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
        //return MenuDataService.getItemsForCategory(itemId)
        return MenuDataService.getItemsForCategory($stateParams.itemId);
      }]
    }
  })

};

})();
