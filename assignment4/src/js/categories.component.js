(function () {
'use strict';

angular.module('MenuApp')
.component('categoriesList', {
  templateUrl: 'src/html/categories.template.html',
  bindings: {
    items: '<'
  }
});

})();
