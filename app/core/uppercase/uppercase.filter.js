'use strict';

angular.
  module('core').
  filter('uppercase', function() {
    return function(input) {
      return input.toUpperCase();
    };
  });