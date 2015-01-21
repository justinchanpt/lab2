'use strict';

/**
 * @ngdoc function
 * @name lab2ChallengeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the lab2ChallengeApp
 */
angular.module('lab2ChallengeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
