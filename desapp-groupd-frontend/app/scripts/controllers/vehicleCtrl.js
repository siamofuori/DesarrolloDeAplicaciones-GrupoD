'use strict';

angular.module('desappGroupdFrontendApp')
.controller('vehicle_ctrl', [ '$http', '$scope', '$window', '$cookies',
  '$locale', '$filter', function($http, $scope, $window, $cookies, $locale, $filter) {

    $scope.baseUrl = "http://localhost:8080/desapp-groupd-backend/rest";
    $scope.user = $cookies.get('user');
    $scope.listOfVehicles = [];

    $scope.showVehicleSuccess = false;
    $scope.showVehicleError = false;

    $scope.vehicles = function(page){
      $http.get( $scope.baseUrl + '/users/'+ $scope.user + '/vehicles/' + page).success(function(result) {
        $scope.listOfVehicles = result;
      })
    };


    $scope.createVehicle = function(newVehicle){
      $http.post( $scope.baseUrl + '/users/'+ $scope.user + '/newvehicle', {
        model : newVehicle.model,
        maxNumberPassangers : newVehicle.maxNumberPassanger,
        registrationNumber : newVehicle.registrationNumber
      }).success(function() {
        $scope.showVehicleSuccess = true;
      }).error(function() {
        $scope.showVehicleError = true;
      })

      $scope.vehicles(1);
    };

    $scope.getVehicles = function(){
      return $scope.listOfVehicles;
    };

    $scope.initVehicle = function(){
      $scope.vehicles(1);
    };

    $scope.initVehicle();

  } ]);
