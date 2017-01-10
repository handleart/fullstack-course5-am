(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuItemDetailController', MenuItemDetailController);

MenuItemDetailController.$inject = ['items'];
function MenuItemDetailController(items) {
  var list = this;

  list.menu_items = items.data.menu_items;
  console.log(list.menu_items);

}

})();
