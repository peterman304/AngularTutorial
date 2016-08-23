'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phonecatApp').
  component('phoneList', {
      // URL's are relative to you're index.html file
      templateUrl: 'phone-list/phone-list.template.html',
      // Since Angular infers the controller's dependencies from the names of arguments to the controller's constructor function, 
      // if you were to minify the JavaScript code for the PhoneListController controller, all of its function arguments would be minified as well, 
      // and the dependency injector would not be able to identify services correctly.
      controller: ['Phone', PhoneListController]
  });

// 
function PhoneListController(Phone) {
    // points back to the controller instance
    var self = this;
    self.pageHeader = 'Our current list of phones';

    self.phones = Phone.query();
    self.orderProp = 'age';
}

//// '$' Denotes angular services, do not write prefix your own services with '$' to prevent collisions
//function PhoneListController($http) {
//    // points back to the controller instance
//    var self = this;
//    self.pageHeader = 'Our current list of phones';
//    self.orderProp = 'age';

//    // $http.get() returns a promise object.
//    // so we are really calling, $promise.then() and passing in an 
//    $http.get('phones/phones.json').then(function (response) {
//        self.phones = response.data;
//    });
//}