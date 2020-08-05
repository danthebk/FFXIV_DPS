var jsmodel;

var dps_app = angular.module("dps_app", []);
dps_app.controller("dps_controller", function ($scope, $http) {
    //initialize functions
    dps_app.dps_controller($scope);

    //initialize models
    dps_app.dps_model($scope);

    //initialize buffs
    //dps_app.dps_charts($scope);
})