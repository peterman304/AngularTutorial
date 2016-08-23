'use strict';

// Define the `phonecatApp` module
angular.module('phonecatApp', [
  // ...which depends on the `phoneList` module
  'core',
  'ngRoute',
  'phoneList',
  'phoneDetail'
]);