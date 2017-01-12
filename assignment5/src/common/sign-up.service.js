(function () {
"use strict";

angular.module('common')
.service('SignUpService', SignUpService);


function SignUpService() {
  var service = this;

  var userInformation = {};

  service.setSignUpInformation = function(user) {
    service.userInformation = user;
    //console.log(user);
    //return userInformation;

  };

  service.getSignUpInformation = function() {
    return service.userInformation;
    //return "hi";

  };

}



})();
