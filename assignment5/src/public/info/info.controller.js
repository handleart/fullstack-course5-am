(function () {
'use strict ()';

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['items', 'menuItem', '$state'];
function InfoController(items, menuItem, $state) {
  var info = this;
  info.SignedUp = false;
  // if (typeof items === "undefined") {

    //$state.go('public.signup');
  // } else {
  if (typeof items != "undefined") {
    info.SignedUp = true;
    info.user = items;
    info.menuItem = menuItem
  }

  //console.log(menuItem);


};

})();
