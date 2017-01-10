(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuListController', MenuListController);

// MenuListController.$inject = ['MenuDataService', 'items'];
// function MenuListController(MenuDataService, items) {
MenuListController.$inject = ['items'];
function MenuListController(items) {
  var list = this;
  list.items = items.data;
}

})();
