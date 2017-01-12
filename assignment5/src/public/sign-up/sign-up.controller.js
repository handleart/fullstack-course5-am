(function () {
'use strict ()';

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService', 'MenuService', '$state'];
function SignUpController(SignUpService, MenuService, $state) {
  var signup = this;

  signup.submit = function(user) {
    //console.log(user);
    value = user.favoriteItem;
    var data = MenuService.getSpecificMenuItems(value).then(function(data) {


      if (data) {
        SignUpService.setSignUpInformation(user);
        signup.completed = true;
        //console.log(SignUpService.getSignUpInformation());
        $state.go('public.info');
      } else {
        signup.completed = false;
      }
      //return data;
    });





  };
};

})();
