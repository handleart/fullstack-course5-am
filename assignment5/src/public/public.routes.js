(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      absract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state('public.signup', {
      url: '/signup',
      templateUrl: 'src/public/sign-up/sign-up.html',
      controller:  'SignUpController as signup'
    })
    .state('public.info', {
      url: '/info',
      templateUrl: 'src/public/info/info.html',
      controller: 'InfoController as info',
      resolve: {
        items: ['SignUpService', function (SignUpService, MenuService) {
         return(SignUpService.getSignUpInformation());
          //console.log('tmp', tmp);
        }],
        menuItem: ['MenuService', 'SignUpService', function (MenuService, SignUpService) {
            var items = SignUpService.getSignUpInformation();
            //console.log(items);
          //return "hi";
            // console.log(MenuService.getSpecificMenuItems(m));

            if (typeof items === "undefined") {
              return false;
            } else {
              return MenuService.getSpecificMenuItems(items.favoriteItem);
            }

          }]
        }
    });
}
})();
