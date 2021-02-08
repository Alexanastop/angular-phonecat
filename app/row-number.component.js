"use strict";

// Register `rowNumber` component, along with its associated controller and template
angular.
  module('phonecatApp').
  component('rowNumber', {
    template:
     '<table>' +
        '<tr><th>Row Number</th></tr>' +
        '<tr ng-repeat="i in [0, 1, 2, 3, 4, 5, 6, 7]"><td>{{i+1}}</td></tr>' +
     '</table>'
    });