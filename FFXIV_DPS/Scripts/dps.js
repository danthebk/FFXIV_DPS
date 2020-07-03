var jsmodel;

var dps_app = angular.module("dps_app", []);
dps_app.controller("dps_controller", function ($scope, $http) {
    $scope.dps_app_init = function () {
        //define the materia
        //$scope.dps_materia = {
        //    materia: [
        //        { tier="V", value=12 },
        //        { tier="VI", value=40 },
        //        { tier="VII", value=20 },
        //        { tier="VIII", value=60 }
        //    ]
        //}

        //these base stats/ratios are based on level 80
        //need to restructure to handle additional level ranges
        $scope.dps_base = {
            determinationRatio: 25,
            tenacityRatio: 33,

            directhitRatio: 6,
            directhitBaseDamage: 25,

            criticalRatio: 16,
            criticalBaseRate: 5,
            criticalBaseDamage: 40,

            skillspeedLevelMod: 3300,
            skillspeedBase: 2.5,

            levelBase: 380
        }

        //the player's stats
        //also the player's calculated stats
        $scope.dps_stats = {
            determination: 340,
            directhit: 380,
            tenacity: 380,
            critical: 380,
            skillspeed: 380,

            determinationDPS: 0,
            determinationDelta: 0,

            tenacityDPS: 0,
            tenacityDelta: 0,

            directhitDPS: 0,
            directhitRate: 0,
            directhitDelta: 0,

            criticalDPS: 0,
            criticalRate: 0,
            criticalDamage: 0,
            criticalDelta: 0,

            skillspeedDPS: 0,
            skillspeedDPSImprovement: 0,
            skillspeedDelay: 0,
            skillspeedDelta: 0,

            totaldps: 0
        }

        //call the stats_change function to initialize the dps calculations
        //for the base stats
        $scope.stats_change();
    }

    //stat calculations
    $scope.stats_calculate = function () {
        //critical hit
        $scope.dps_stats.criticalDelta = $scope.dps_stats.critical - $scope.dps_base.levelBase;
        $scope.dps_stats.criticalRate = ($scope.dps_stats.criticalDelta / $scope.dps_base.criticalRatio) * .1;
        $scope.dps_stats.criticalDamage = ($scope.dps_stats.criticalDelta / $scope.dps_base.criticalRatio) * .1;
        $scope.dps_stats.criticalDPS = (($scope.dps_base.criticalBaseRate + $scope.dps_stats.criticalRate) / 100) * ($scope.dps_base.criticalBaseDamage + $scope.dps_stats.criticalDamage);

        //determination and tenacity
        $scope.dps_stats.determinationDelta = $scope.dps_stats.determination - ($scope.dps_base.levelBase - 40); //determination inexplicably has 40 less base value
        $scope.dps_stats.determinationDPS = ($scope.dps_stats.determinationDelta / $scope.dps_base.determinationRatio) * .1;
        $scope.dps_stats.tenacityDelta = $scope.dps_stats.tenacity - $scope.dps_base.levelBase;
        $scope.dps_stats.tenacityDPS = ($scope.dps_stats.tenacityDelta / $scope.dps_base.tenacityRatio) * .1;

        //direct hit
        $scope.dps_stats.directhitDelta = $scope.dps_stats.directhit - $scope.dps_base.levelBase;
        $scope.dps_stats.directhitRate = ($scope.dps_stats.directhitDelta / $scope.dps_base.directhitRatio) * .1;
        $scope.dps_stats.directhitDPS = $scope.dps_stats.directhitRate * ($scope.dps_base.directhitBaseDamage / 100);

        //skill speed
        $scope.dps_stats.skillspeedDelta = $scope.dps_stats.skillspeed - $scope.dps_base.levelBase;
        $scope.dps_stats.skillspeedDelay = Math.floor(130 * $scope.dps_stats.skillspeedDelta / $scope.dps_base.skillspeedLevelMod);
        $scope.dps_stats.skillspeedDelay = 1000 - $scope.dps_stats.skillspeedDelay;
        $scope.dps_stats.skillspeedDelay = Math.floor($scope.dps_stats.skillspeedDelay * ($scope.dps_base.skillspeedBase * 1000) / 1000);
        $scope.dps_stats.skillspeedDelay = Math.floor(100 * 100 * $scope.dps_stats.skillspeedDelay / 1000);
        $scope.dps_stats.skillspeedDelay = Math.floor($scope.dps_stats.skillspeedDelay / 100)
        $scope.dps_stats.skillspeedDelay = $scope.dps_stats.skillspeedDelay / 100;
        $scope.dps_stats.skillspeedDPS = $scope.dps_base.skillspeedBase / $scope.dps_stats.skillspeedDelay;
        $scope.dps_stats.skillspeedDPSImprovement = $scope.dps_stats.skillspeedDPS - 1;

        //total
        $scope.dps_stats.totaldps = 100;
        $scope.dps_stats.totaldps = $scope.dps_stats.totaldps * (1 + ($scope.dps_stats.determinationDPS / 100));
        $scope.dps_stats.totaldps = $scope.dps_stats.totaldps * (1 + ($scope.dps_stats.tenacityDPS / 100));
        $scope.dps_stats.totaldps = $scope.dps_stats.totaldps * (1 + ($scope.dps_stats.criticalDPS / 100));
        $scope.dps_stats.totaldps = $scope.dps_stats.totaldps * $scope.dps_stats.skillspeedDPS;
    }

    //ui style adjustments
    $scope.stats_ui = function () {

    }

    //user adjusted their stats, recalculate
    $scope.stats_change = function () {
        $scope.stats_calculate();
        $scope.stats_ui();
    }
})