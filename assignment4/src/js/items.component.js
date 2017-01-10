(function () {
'use strict';

angular.module('MenuApp')
.component('itemsList', {
  templateUrl: 'src/html/items.template.html',
  bindings: {
    items: '<'
  }
});


})();
