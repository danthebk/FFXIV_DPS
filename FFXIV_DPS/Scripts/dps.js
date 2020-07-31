var jsmodel;

var dps_app = angular.module("dps_app", []);
dps_app.controller("dps_controller", function ($scope, $http) {
    $scope.dps_app_init = function () {
        //initialize UI color constants
        $scope.ui_color = {
            better: "table-success",
            neutral: "table-primary",
            worse: "table-danger",
            info: "table-info"
        }

        //initialize UI colors
        $scope.ui = {
            critical_main: $scope.ui_color.neutral,
            determination_main: $scope.ui_color.neutral,
            directhit_main: $scope.ui_color.neutral,
            skillspeed_main: $scope.ui_color.neutral,
            tenacity_main: $scope.ui_color.neutral,
            total_main: $scope.ui_color.neutral,

            critical_archive: $scope.ui_color.neutral,
            determination_archive: $scope.ui_color.neutral,
            directhit_archive: $scope.ui_color.neutral,
            skillspeed_archive: $scope.ui_color.neutral,
            tenacity_archive: $scope.ui_color.neutral,
            total_archive: $scope.ui_color.neutral
        }

        //define the materia
        $scope.dps_materia = [
            { tier: "VIII", value: 60 },
            { tier: "VII", value: 20 },
            { tier: "VI", value: 40 },
            { tier: "V", value: 12 }
        ]

        //selected materia object
        $scope.dps_materia_selected = {
            critical: 60,
            determination: 60,
            directhit: 60,
            skillspeed: 60,
            tenacity: 60
        }

        //stats index
        $scope.stats_indexes = {
            critical: 0,
            determination: 1,
            directhit: 2,
            skillspeed: 3,
            tenacity: 4
        }

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
        $scope.stats_calculate();

        //initialize the archive
        //$scope.dps_stats_archive = {
        //    determination: 340,
        //    directhit: 380,
        //    tenacity: 380,
        //    critical: 380,
        //    skillspeed: 380,

        //    determinationDPS: 0,
        //    determinationDelta: 0,

        //    tenacityDPS: 0,
        //    tenacityDelta: 0,

        //    directhitDPS: 0,
        //    directhitRate: 0,
        //    directhitDelta: 0,

        //    criticalDPS: 0,
        //    criticalRate: 0,
        //    criticalDamage: 0,
        //    criticalDelta: 0,

        //    skillspeedDPS: 0,
        //    skillspeedDPSImprovement: 0,
        //    skillspeedDelay: 0,
        //    skillspeedDelta: 0,

        //    totaldps: 0
        //}

        //initialize the archive
        $scope.archive_save();
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
        $scope.dps_stats.skillspeedDPSImprovement = ($scope.dps_stats.skillspeedDPS - 1) * 100;

        //total
        $scope.dps_stats.totaldps = 100;
        $scope.dps_stats.totaldps = $scope.dps_stats.totaldps * (1 + ($scope.dps_stats.determinationDPS / 100));
        $scope.dps_stats.totaldps = $scope.dps_stats.totaldps * (1 + ($scope.dps_stats.tenacityDPS / 100));
        $scope.dps_stats.totaldps = $scope.dps_stats.totaldps * (1 + ($scope.dps_stats.criticalDPS / 100));
        $scope.dps_stats.totaldps = $scope.dps_stats.totaldps * $scope.dps_stats.skillspeedDPS;
    }

    //ui style adjustments
    $scope.stats_ui = function () {
        //critical
        if ($scope.dps_stats.criticalDPS == $scope.dps_stats_archive.criticalDPS) {
            $scope.ui.critical_main = $scope.ui_color.neutral;
            $scope.ui.critical_archive = $scope.ui_color.neutral;
        }
        else if ($scope.dps_stats.criticalDPS > $scope.dps_stats_archive.criticalDPS) {
            $scope.ui.critical_main = $scope.ui_color.better;
            $scope.ui.critical_archive = $scope.ui_color.worse;
        } else {
            $scope.ui.critical_main = $scope.ui_color.worse;
            $scope.ui.critical_archive = $scope.ui_color.better;
        }

        //determination
        if ($scope.dps_stats.determinationDPS == $scope.dps_stats_archive.determinationDPS) {
            $scope.ui.determination_main = $scope.ui_color.neutral;
            $scope.ui.determination_archive = $scope.ui_color.neutral;
        }
        else if ($scope.dps_stats.determinationDPS > $scope.dps_stats_archive.determinationDPS) {
            $scope.ui.determination_main = $scope.ui_color.better;
            $scope.ui.determination_archive = $scope.ui_color.worse;
        } else {
            $scope.ui.determination_main = $scope.ui_color.worse;
            $scope.ui.determination_archive = $scope.ui_color.better;
        }

        //direct hit
        if ($scope.dps_stats.directhitDPS == $scope.dps_stats_archive.directhitDPS) {
            $scope.ui.directhit_main = $scope.ui_color.neutral;
            $scope.ui.directhit_archive = $scope.ui_color.neutral;
        }
        else if ($scope.dps_stats.directhitDPS > $scope.dps_stats_archive.directhitDPS) {
            $scope.ui.directhit_main = $scope.ui_color.better;
            $scope.ui.directhit_archive = $scope.ui_color.worse;
        } else {
            $scope.ui.directhit_main = $scope.ui_color.worse;
            $scope.ui.directhit_archive = $scope.ui_color.better;
        }

        //skill speed
        if ($scope.dps_stats.skillspeedDPS == $scope.dps_stats_archive.skillspeedDPS) {
            $scope.ui.skillspeed_main = $scope.ui_color.neutral;
            $scope.ui.skillspeed_archive = $scope.ui_color.neutral;
        }
        else if ($scope.dps_stats.skillspeedDPS > $scope.dps_stats_archive.skillspeedDPS) {
            $scope.ui.skillspeed_main = $scope.ui_color.better;
            $scope.ui.skillspeed_archive = $scope.ui_color.worse;
        } else {
            $scope.ui.skillspeed_main = $scope.ui_color.worse;
            $scope.ui.skillspeed_archive = $scope.ui_color.better;
        }

        //tenacity
        if ($scope.dps_stats.tenacityDPS == $scope.dps_stats_archive.tenacityDPS) {
            $scope.ui.tenacity_main = $scope.ui_color.neutral;
            $scope.ui.tenacity_archive = $scope.ui_color.neutral;
        }
        else if ($scope.dps_stats.tenacityDPS > $scope.dps_stats_archive.tenacityDPS) {
            $scope.ui.tenacity_main = $scope.ui_color.better;
            $scope.ui.tenacity_archive = $scope.ui_color.worse;
        } else {
            $scope.ui.tenacity_main = $scope.ui_color.worse;
            $scope.ui.tenacity_archive = $scope.ui_color.better;
        }

        //total
        if ($scope.dps_stats.totaldps == $scope.dps_stats_archive.totaldps) {
            $scope.ui.total_main = $scope.ui_color.neutral;
            $scope.ui.total_archive = $scope.ui_color.neutral;
        }
        else if ($scope.dps_stats.totaldps > $scope.dps_stats_archive.totaldps) {
            $scope.ui.total_main = $scope.ui_color.better;
            $scope.ui.total_archive = $scope.ui_color.worse;
        } else {
            $scope.ui.total_main = $scope.ui_color.worse;
            $scope.ui.total_archive = $scope.ui_color.better;
        }
    }

    //user adjusted their stats, recalculate
    $scope.stats_change = function () {
        $scope.stats_calculate();
        $scope.stats_ui();
    }

    //save the archive
    $scope.archive_save = function () {
        $scope.dps_stats_archive = {
            determination: $scope.dps_stats.determination,
            directhit: $scope.dps_stats.directhit,
            tenacity: $scope.dps_stats.tenacity,
            critical: $scope.dps_stats.critical,
            skillspeed: $scope.dps_stats.skillspeed,

            determinationDPS: $scope.dps_stats.determinationDPS,
            determinationDelta: $scope.dps_stats.determinationDelta,

            tenacityDPS: $scope.dps_stats.tenacityDPS,
            tenacityDelta: $scope.dps_stats.tenacityDelta,

            directhitDPS: $scope.dps_stats.directhitDPS,
            directhitRate: $scope.dps_stats.directhitRate,
            directhitDelta: $scope.dps_stats.directhitDelta,

            criticalDPS: $scope.dps_stats.criticalDPS,
            criticalRate: $scope.dps_stats.criticalRate,
            criticalDamage: $scope.dps_stats.criticalDamage,
            criticalDelta: $scope.dps_stats.criticalDelta,

            skillspeedDPS: $scope.dps_stats.skillspeedDPS,
            skillspeedDPSImprovement: $scope.dps_stats.skillspeedDPSImprovement,
            skillspeedDelay: $scope.dps_stats.skillspeedDelay,
            skillspeedDelta: $scope.dps_stats.skillspeedDelta,

            totaldps: $scope.dps_stats.totaldps
        }

        $scope.stats_change();
    }

    //rever the archive
    $scope.archive_revert = function () {
        $scope.dps_stats = {
            determination: $scope.dps_stats_archive.determination,
            directhit: $scope.dps_stats_archive.directhit,
            tenacity: $scope.dps_stats_archive.tenacity,
            critical: $scope.dps_stats_archive.critical,
            skillspeed: $scope.dps_stats_archive.skillspeed,

            determinationDPS: $scope.dps_stats_archive.determinationDPS,
            determinationDelta: $scope.dps_stats_archive.determinationDelta,

            tenacityDPS: $scope.dps_stats_archive.tenacityDPS,
            tenacityDelta: $scope.dps_stats_archive.tenacityDelta,

            directhitDPS: $scope.dps_stats_archive.directhitDPS,
            directhitRate: $scope.dps_stats_archive.directhitRate,
            directhitDelta: $scope.dps_stats_archive.directhitDelta,

            criticalDPS: $scope.dps_stats_archive.criticalDPS,
            criticalRate: $scope.dps_stats_archive.criticalRate,
            criticalDamage: $scope.dps_stats_archive.criticalDamage,
            criticalDelta: $scope.dps_stats_archive.criticalDelta,

            skillspeedDPS: $scope.dps_stats_archive.skillspeedDPS,
            skillspeedDPSImprovement: $scope.dps_stats_archive.skillspeedDPSImprovement,
            skillspeedDelay: $scope.dps_stats_archive.skillspeedDelay,
            skillspeedDelta: $scope.dps_stats_archive.skillspeedDelta,

            totaldps: $scope.dps_stats_archive.totaldps
        }

        $scope.stats_change();
    }

    //materia handling
    $scope.materia_add = function (stat) {
        if ($scope.stats_indexes.critical == stat) {
            $scope.dps_stats.critical = $scope.dps_stats.critical + $scope.dps_materia_selected.critical;
        } else if ($scope.stats_indexes.determination == stat) {
            $scope.dps_stats.determination = $scope.dps_stats.determination + $scope.dps_materia_selected.determination;
        } else if ($scope.stats_indexes.directhit == stat) {
            $scope.dps_stats.directhit = $scope.dps_stats.directhit + $scope.dps_materia_selected.directhit;
        } else if ($scope.stats_indexes.skillspeed == stat) {
            $scope.dps_stats.skillspeed = $scope.dps_stats.skillspeed + $scope.dps_materia_selected.skillspeed;
        } else if ($scope.stats_indexes.tenacity == stat) {
            $scope.dps_stats.tenacity = $scope.dps_stats.tenacity + $scope.dps_materia_selected.tenacity;
        }

        $scope.stats_change();
    }

    $scope.materia_subtract = function (stat) {
        if ($scope.stats_indexes.critical == stat) {
            $scope.dps_stats.critical = $scope.dps_stats.critical - $scope.dps_materia_selected.critical;
        } else if ($scope.stats_indexes.determination == stat) {
            $scope.dps_stats.determination = $scope.dps_stats.determination - $scope.dps_materia_selected.determination;
        } else if ($scope.stats_indexes.directhit == stat) {
            $scope.dps_stats.directhit = $scope.dps_stats.directhit - $scope.dps_materia_selected.directhit;
        } else if ($scope.stats_indexes.skillspeed == stat) {
            $scope.dps_stats.skillspeed = $scope.dps_stats.skillspeed - $scope.dps_materia_selected.skillspeed;
        } else if ($scope.stats_indexes.tenacity == stat) {
            $scope.dps_stats.tenacity = $scope.dps_stats.tenacity - $scope.dps_materia_selected.tenacity;
        }

        $scope.stats_change();
    }
})