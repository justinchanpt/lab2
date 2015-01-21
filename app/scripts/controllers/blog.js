'use strict';

/**
 * @ngdoc function
 * @name lab2ChallengeApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the lab2ChallengeApp
 */
angular.module('lab2ChallengeApp')
  .controller('BlogCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });