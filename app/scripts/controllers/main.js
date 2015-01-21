'use strict';

/**
 * @ngdoc function
 * @name lab2ChallengeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lab2ChallengeApp
 */
angular.module('lab2ChallengeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
