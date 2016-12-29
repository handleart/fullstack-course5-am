(function () {
'use strict';

angular.module('app', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListService', ShoppingListService);

ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService) {
  var list = this;

  list.items = ShoppingListService.getToBuyItems();

  list.BuyItem = function(itemIndex) {
    ShoppingListService.BuyItems(itemIndex);
  };
};

AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
  var showList = this;

  showList.items = ShoppingListService.getBoughtItems();
};

function ShoppingListService() {
  var service = this;

  // List of shopping items
  var items = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    },
    {
      name: "Gum",
      quantity: "200"
    }
  ];

  var BoughtItems = [];

  service.BuyItems = function (itemIndex) {
    var element = items[itemIndex];
    BoughtItems.push(element);
    items.splice(itemIndex, 1);
  };

  service.getToBuyItems = function () {
    return items;
  };

  service.getBoughtItems = function () {
    return BoughtItems;
  };

}



})();
