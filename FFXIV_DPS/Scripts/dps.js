var jsmodel;

var dps_app = angular.module("dps_app", []);
dps_app.controller("dps_controller", function ($scope, $http) {
    $scope.dps_app_init = function () {
        //-----------------------------------------------
        //constants
        //-----------------------------------------------

        //initialize UI color
        $scope.ui_color = {
            better: "table-success",
            neutral: "table-default",
            worse: "table-danger",
            info: "table-info"
        }

        //initialize materia
        $scope.dps_materia = [
            { tier: "VIII - 60", value: 60 },
            { tier: "VII - 20", value: 20 },
            { tier: "VI - 40", value: 40 },
            { tier: "V - 12", value: 12 }
        ]

        //initialize food
        $scope.food = [
            {
                name: "None",
                criticalhitValue: 0,
                criticalhitPercent: 0,
                criticalhitCap: 0,
                determinationValue: 0,
                determinationPercent: 0,
                determinationCap: 0,
                directhitValue: 0,
                directhitPercent: 0,
                directhitCap: 0,
                pietyValue: 0,
                pietyPercent: 0,
                pietyCap: 0,
                skillspeedValue: 0,
                skillspeedPercent: 0,
                skillspeedCap: 0,
                tenacityValue: 0,
                tenacityPercent: 0,
                tenacityCap: 0
            },
            {
                name: "Farmer's Breakfast HQ",
                criticalhitValue: 0,
                criticalhitPercent: 0,
                criticalhitCap: 0,
                determinationValue: 0,
                determinationPercent: 10,
                determinationCap: 101,
                directhitValue: 0,
                directhitPercent: 0,
                directhitCap: 0,
                pietyValue: 0,
                pietyPercent: 0,
                pietyCap: 0,
                skillspeedValue: 0,
                skillspeedPercent: 0,
                skillspeedCap: 0,
                tenacityValue: 0,
                tenacityPercent: 10,
                tenacityCap: 168
            },
            {
                name: "Herring Pie HQ",
                criticalhitValue: 0,
                criticalhitPercent: 10,
                criticalhitCap: 168,
                determinationValue: 0,
                determinationPercent: 0,
                determinationCap: 0,
                directhitValue: 0,
                directhitPercent: 0,
                directhitCap: 0,
                pietyValue: 0,
                pietyPercent: 0,
                pietyCap: 0,
                skillspeedValue: 0,
                skillspeedPercent: 10,
                skillspeedCap: 101,
                tenacityValue: 0,
                tenacityPercent: 0,
                tenacityCap: 0
            },
            {
                name: "Honey Croissant HQ",
                criticalhitValue: 0,
                criticalhitPercent: 0,
                criticalhitCap: 0,
                determinationValue: 0,
                determinationPercent: 0,
                determinationCap: 0,
                directhitValue: 0,
                directhitPercent: 0,
                directhitCap: 0,
                pietyValue: 0,
                pietyPercent: 10,
                pietyCap: 101,
                skillspeedValue: 0,
                skillspeedPercent: 10,
                skillspeedCap: 168,
                tenacityValue: 0,
                tenacityPercent: 0,
                tenacityCap: 0
            },
            {
                name: "Lemon Waffle HQ",
                criticalhitValue: 0,
                criticalhitPercent: 0,
                criticalhitCap: 0,
                determinationValue: 0,
                determinationPercent: 10,
                determinationCap: 101,
                directhitValue: 0,
                directhitPercent: 0,
                directhitCap: 0,
                pietyValue: 0,
                pietyPercent: 10,
                pietyCap: 168,
                skillspeedValue: 0,
                skillspeedPercent: 0,
                skillspeedCap: 0,
                tenacityValue: 0,
                tenacityPercent: 0,
                tenacityCap: 0
            },
            {
                name: "Mors HQ",
                criticalhitValue: 0,
                criticalhitPercent: 0,
                criticalhitCap: 0,
                determinationValue: 0,
                determinationPercent: 0,
                determinationCap: 0,
                directhitValue: 0,
                directhitPercent: 10,
                directhitCap: 101,
                pietyValue: 0,
                pietyPercent: 0,
                pietyCap: 0,
                skillspeedValue: 0,
                skillspeedPercent: 10,
                skillspeedCap: 168,
                tenacityValue: 0,
                tenacityPercent: 0,
                tenacityCap: 0
            },
            {
                name: "Ovim Meatballs HQ",
                criticalhitValue: 0,
                criticalhitPercent: 0,
                criticalhitCap: 0,
                determinationValue: 0,
                determinationPercent: 10,
                determinationCap: 101,
                directhitValue: 0,
                directhitPercent: 10,
                directhitCap: 168,
                pietyValue: 0,
                pietyPercent: 0,
                pietyCap: 0,
                skillspeedValue: 0,
                skillspeedPercent: 0,
                skillspeedCap: 0,
                tenacityValue: 0,
                tenacityPercent: 0,
                tenacityCap: 0
            },
            {
                name: "Pickled Herring HQ",
                criticalhitValue: 0,
                criticalhitPercent: 0,
                criticalhitCap: 0,
                determinationValue: 0,
                determinationPercent: 0,
                determinationCap: 0,
                directhitValue: 0,
                directhitPercent: 10,
                directhitCap: 101,
                pietyValue: 0,
                pietyPercent: 0,
                pietyCap: 0,
                skillspeedValue: 0,
                skillspeedPercent: 10,
                skillspeedCap: 168,
                tenacityValue: 0,
                tenacityPercent: 0,
                tenacityCap: 0
            },
            {
                name: "Sausage and Sauerkraut HQ",
                criticalhitValue: 0,
                criticalhitPercent: 10,
                criticalhitCap: 168,
                determinationValue: 0,
                determinationPercent: 0,
                determinationCap: 0,
                directhitValue: 0,
                directhitPercent: 0,
                directhitCap: 0,
                pietyValue: 0,
                pietyPercent: 0,
                pietyCap: 0,
                skillspeedValue: 0,
                skillspeedPercent: 10,
                skillspeedCap: 101,
                tenacityValue: 0,
                tenacityPercent: 0,
                tenacityCap: 0
            },
            {
                name: "Silkie Pudding HQ",
                criticalhitValue: 0,
                criticalhitPercent: 0,
                criticalhitCap: 0,
                determinationValue: 0,
                determinationPercent: 10,
                determinationCap: 168,
                directhitValue: 0,
                directhitPercent: 0,
                directhitCap: 0,
                pietyValue: 0,
                pietyPercent: 0,
                pietyCap: 0,
                skillspeedValue: 0,
                skillspeedPercent: 0,
                skillspeedCap: 0,
                tenacityValue: 0,
                tenacityPercent: 10,
                tenacityCap: 101
            },
            {
                name: "Stuffed Highland Cabbage HQ",
                criticalhitValue: 0,
                criticalhitPercent: 10,
                criticalhitCap: 101,
                determinationValue: 0,
                determinationPercent: 10,
                determinationCap: 168,
                directhitValue: 0,
                directhitPercent: 0,
                directhitCap: 0,
                pietyValue: 0,
                pietyPercent: 0,
                pietyCap: 0,
                skillspeedValue: 0,
                skillspeedPercent: 0,
                skillspeedCap: 0,
                tenacityValue: 0,
                tenacityPercent: 0,
                tenacityCap: 0
            }
        ]

        //index values for each stat; used to simplify the quick-materia buttons
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

        //-----------------------------------------------
        //helper models
        //-----------------------------------------------

        //default UI colors
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

        //selected materia object
        $scope.dps_materia_selected = {
            critical: 60,
            determination: 60,
            directhit: 60,
            skillspeed: 60,
            tenacity: 60
        }

        //-----------------------------------------------
        //primary models
        //-----------------------------------------------

        //the player's stats
        //also the player's calculated stats
        $scope.dps_stats = {

            //food
            food_selected: $scope.food[0],
            food_stat1: "",
            food_value1: "",
            food_stat2: "",
            food_value2: "",

            //individual buffs
            stormseye: false,
            innerrelease: false,

            //raid buffs
            magesballad: false,
            magesballadShort: false,
            armyspaeon: false,
            armyspaeonShort: false,
            wanderersminuet: false,
            wanderersminuetShort: false,
            battlevoice: false,

            //input stats
            determination: 340,
            directhit: 380,
            tenacity: 380,
            critical: 380,
            skillspeed: 380,

            //buffed stats
            directhitRateBuff: 0,
            criticalhitRateBuff: 0,
            dpsBuff: 0,

            //calculated stats
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

        //call the stats_change function to initialize the dps calculations for the base stats
        //for the base stats
        $scope.stats_calculate();

        //initialize the archive model
        $scope.archive_save();
    }

    //-----------------------------------------------
    //primary functions; calulation and ui
    //-----------------------------------------------

    //food calculations
    $scope.food_calculate = function () {
        //critical hit
        $scope.dps_stats.food_selected.criticalhitValue = $scope.dps_stats.critical * ($scope.dps_stats.food_selected.criticalhitPercent / 100);
        if ($scope.dps_stats.food_selected.criticalhitValue > $scope.dps_stats.food_selected.criticalhitCap) {
            $scope.dps_stats.food_selected.criticalhitValue = $scope.dps_stats.food_selected.criticalhitCap;
        }

        //determination
        $scope.dps_stats.food_selected.determinationValue = $scope.dps_stats.determination * ($scope.dps_stats.food_selected.determinationPercent / 100);
        if ($scope.dps_stats.food_selected.determinationValue > $scope.dps_stats.food_selected.determinationCap) {
            $scope.dps_stats.food_selected.determinationValue = $scope.dps_stats.food_selected.determinationCap;
        }

        //direct hit
        $scope.dps_stats.food_selected.directhitValue = $scope.dps_stats.directhit * ($scope.dps_stats.food_selected.directhitPercent / 100);
        if ($scope.dps_stats.food_selected.directhitValue > $scope.dps_stats.food_selected.directhitCap) {
            $scope.dps_stats.food_selected.directhitValue = $scope.dps_stats.food_selected.directhitCap;
        }

        //skill speed
        $scope.dps_stats.food_selected.skillspeedValue = $scope.dps_stats.skillspeed * ($scope.dps_stats.food_selected.skillspeedPercent / 100);
        if ($scope.dps_stats.food_selected.skillspeedValue > $scope.dps_stats.food_selected.skillspeedCap) {
            $scope.dps_stats.food_selected.skillspeedValue = $scope.dps_stats.food_selected.skillspeedCap;
        }

        //tenacity
        $scope.dps_stats.food_selected.tenacityValue = $scope.dps_stats.tenacity * ($scope.dps_stats.food_selected.tenacityPercent / 100);
        if ($scope.dps_stats.food_selected.tenacityValue > $scope.dps_stats.food_selected.tenacityCap) {
            $scope.dps_stats.food_selected.tenacityValue = $scope.dps_stats.food_selected.tenacityCap;
        }
    }

    //food ui
    $scope.food_ui = function () {
        $scope.dps_stats.food_stat1 = "";
        $scope.dps_stats.food_value1 = "";
        $scope.dps_stats.food_stat2 = "";
        $scope.dps_stats.food_value2 = "";

        var second = false;

        //critical hit
        if ($scope.dps_stats.food_selected.criticalhitCap > 0) {
            if (second) {
                $scope.dps_stats.food_stat2 = "Critical Hit: ";
                $scope.dps_stats.food_value2 = $scope.dps_stats.food_selected.criticalhitValue;
            } else {
                $scope.dps_stats.food_stat1 = "Critical Hit: ";
                $scope.dps_stats.food_value1 = $scope.dps_stats.food_selected.criticalhitValue;
                second = true;
            }
        }

        //determination
        if ($scope.dps_stats.food_selected.determinationCap > 0) {
            if (second) {
                $scope.dps_stats.food_stat2 = "Determination: ";
                $scope.dps_stats.food_value2 = $scope.dps_stats.food_selected.determinationValue;
            } else {
                $scope.dps_stats.food_stat1 = "Determination: ";
                $scope.dps_stats.food_value1 = $scope.dps_stats.food_selected.determinationValue;
                second = true;
            }
        }

        //direct hit
        if ($scope.dps_stats.food_selected.directhitCap > 0) {
            if (second) {
                $scope.dps_stats.food_stat2 = "Direct Hit: ";
                $scope.dps_stats.food_value2 = $scope.dps_stats.food_selected.directhitValue;
            } else {
                $scope.dps_stats.food_stat1 = "Direct Hit: ";
                $scope.dps_stats.food_value1 = $scope.dps_stats.food_selected.directhitValue;
                second = true;
            }
        }

        //mostly unimplemented since it doesn't affect dps, just going to display the cap
        //piety
        if ($scope.dps_stats.food_selected.pietyCap > 0) {
            if (second) {
                $scope.dps_stats.food_stat2 = "Piety: ";
                $scope.dps_stats.food_value2 = $scope.dps_stats.food_selected.pietyCap;
            } else {
                $scope.dps_stats.food_stat1 = "Piety: ";
                $scope.dps_stats.food_value1 = $scope.dps_stats.food_selected.pietyCap;
                second = true;
            }
        }

        //skill speed
        if ($scope.dps_stats.food_selected.skillspeedCap > 0) {
            if (second) {
                $scope.dps_stats.food_stat2 = "Skill/Spell Speed: ";
                $scope.dps_stats.food_value2 = $scope.dps_stats.food_selected.skillspeedValue;
            } else {
                $scope.dps_stats.food_stat1 = "Skill/Spell Speed: ";
                $scope.dps_stats.food_value1 = $scope.dps_stats.food_selected.skillspeedValue;
                second = true;
            }
        }

        //tenacity
        if ($scope.dps_stats.food_selected.tenacityCap > 0) {
            if (second) {
                $scope.dps_stats.food_stat2 = "Tenacity: ";
                $scope.dps_stats.food_value2 = $scope.dps_stats.food_selected.tenacityValue;
            } else {
                $scope.dps_stats.food_stat1 = "Tenacity: ";
                $scope.dps_stats.food_value1 = $scope.dps_stats.food_selected.tenacityValue;
                second = true;
            }
        }
    }

    //TODO: remove magic numbers
    //buff calculations
    $scope.buffs_calculate = function () {
        //re-initialize the variables
        $scope.dps_stats.criticalhitRateBuff = 0;
        $scope.dps_stats.directhitRateBuff = 0;
        $scope.dps_stats.dpsBuff = 0;

        //warrior
        //storms eye
        if ($scope.dps_stats.stormseye) {
            //10% damage times uptime over 100%; defaulting to 100% uptime, but can be changed into an input
            $scope.dps_stats.dpsBuff = $scope.dps_stats.dpsBuff + (10 * (100 / 100));
        }

        //inner release
        if ($scope.dps_stats.innerrelease) {
            //100 = flat percentage; 10 = duration, 90 = recast; 1/9 uptime.
            $scope.dps_stats.criticalhitRateBuff = $scope.dps_stats.criticalhitRateBuff + (100 * (10 / 90));
            $scope.dps_stats.directhitRateBuff = $scope.dps_stats.directhitRateBuff + (100 * (10 / 90));
        }

        //bard
        //mage's ballad
        if ($scope.dps_stats.magesballad) {
            var duration = 30;
            if ($scope.dps_stats.magesballadShort) {
                duration = 20;
            }
            $scope.dps_stats.dpsBuff = $scope.dps_stats.dpsBuff + (1 * (duration / 80));
        }
        //army's paeon
        if ($scope.dps_stats.armyspaeon) {
            var duration = 30;
            if ($scope.dps_stats.armyspaeonShort) {
                duration = 20;
            }
            $scope.dps_stats.directhitRateBuff = $scope.dps_stats.directhitRateBuff + (2 * (duration / 80));
        }
        //wanderer's minuet
        if ($scope.dps_stats.wanderersminuet) {
            var duration = 30;
            if ($scope.dps_stats.wanderersminuetShort) {
                duration = 20;
            }
            $scope.dps_stats.criticalhitRateBuff = $scope.dps_stats.criticalhitRateBuff + (3 * (duration / 80));
        }
        //battle voice
        if ($scope.dps_stats.battlevoice) {
            $scope.dps_stats.directhitRateBuff = $scope.dps_stats.directhitRateBuff + (20 * (20 / 180));
        }
    }

    //buff UI
    $scope.buffs_ui = function () {

    }

    //stat calculations
    $scope.stats_calculate = function () {
        //critical hit
        $scope.dps_stats.criticalDelta = $scope.dps_stats.critical - $scope.dps_base.levelBase + $scope.dps_stats.food_selected.criticalhitValue;
        $scope.dps_stats.criticalRate = (($scope.dps_stats.criticalDelta / $scope.dps_base.criticalRatio) * .1) + $scope.dps_stats.criticalhitRateBuff;
        $scope.dps_stats.criticalDamage = ($scope.dps_stats.criticalDelta / $scope.dps_base.criticalRatio) * .1;
        $scope.dps_stats.criticalDPS = (($scope.dps_base.criticalBaseRate + $scope.dps_stats.criticalRate) / 100) * ($scope.dps_base.criticalBaseDamage + $scope.dps_stats.criticalDamage);

        //determination and tenacity
        $scope.dps_stats.determinationDelta = $scope.dps_stats.determination - ($scope.dps_base.levelBase - 40) + $scope.dps_stats.food_selected.determinationValue; //determination inexplicably has 40 less base value
        $scope.dps_stats.determinationDPS = ($scope.dps_stats.determinationDelta / $scope.dps_base.determinationRatio) * .1;
        $scope.dps_stats.tenacityDelta = $scope.dps_stats.tenacity - $scope.dps_base.levelBase + $scope.dps_stats.food_selected.tenacityValue;
        $scope.dps_stats.tenacityDPS = ($scope.dps_stats.tenacityDelta / $scope.dps_base.tenacityRatio) * .1;

        //direct hit
        $scope.dps_stats.directhitDelta = $scope.dps_stats.directhit - $scope.dps_base.levelBase + $scope.dps_stats.food_selected.directhitValue;
        $scope.dps_stats.directhitRate = (($scope.dps_stats.directhitDelta / $scope.dps_base.directhitRatio) * .1) + $scope.dps_stats.directhitRateBuff;
        $scope.dps_stats.directhitDPS = $scope.dps_stats.directhitRate * ($scope.dps_base.directhitBaseDamage / 100);

        //skill speed
        $scope.dps_stats.skillspeedDelta = $scope.dps_stats.skillspeed - $scope.dps_base.levelBase + $scope.dps_stats.food_selected.skillspeedValue;
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
        $scope.dps_stats.totaldps = $scope.dps_stats.totaldps * (1 + ($scope.dps_stats.dpsBuff / 100));
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

    //user adjusted their stats, recalculate and update the ui
    $scope.stats_change = function () {
        //calculate food first since they affect base stats
        $scope.food_calculate();
        $scope.food_ui();

        //calculate buffs second since they affect final DPS calculations
        $scope.buffs_calculate();
        $scope.buffs_ui();

        //calculate dps last
        $scope.stats_calculate();
        $scope.stats_ui();
    }

    //-----------------------------------------------
    //archive handling
    //-----------------------------------------------

    //save the main object to the archive
    $scope.archive_save = function () {
        $scope.dps_stats_archive = {
            food_selected: $scope.dps_stats.food_selected,
            food_stat1: $scope.dps_stats.food_stat1,
            food_value1: $scope.dps_stats.food_value1,
            food_stat2: $scope.dps_stats.food_stat2,
            food_value2: $scope.dps_stats.food_value2,

            innerrelease: $scope.dps_stats.innerrelease,
            stormseye: $scope.dps_stats.stormseye,

            magesballad: $scope.dps_stats.magesballad,
            magesballadShort: $scope.dps_stats.magesballadShort,
            armyspaeon: $scope.dps_stats.armyspaeon,
            armyspaeonShort: $scope.dps_stats.armyspaeonShort,
            wanderersminuet: $scope.dps_stats.wanderersminuet,
            wanderersminuetShort: $scope.dps_stats.wanderersminuetShort,
            battlevoice: $scope.dps_stats.battlevoice,

            determination: $scope.dps_stats.determination,
            directhit: $scope.dps_stats.directhit,
            tenacity: $scope.dps_stats.tenacity,
            critical: $scope.dps_stats.critical,
            skillspeed: $scope.dps_stats.skillspeed,

            directhitRateBuff: $scope.dps_stats.directhitRateBuff,
            criticalhitRateBuff: $scope.dps_stats.criticalhitRateBuff,
            dpsBuff: $scope.dps_stats.dpsBuff,

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

    //load the main object with the archived data
    $scope.archive_revert = function () {
        $scope.dps_stats = {
            food_selected: $scope.dps_stats_archive.food_selected,
            ood_stat1: $scope.dps_stats_archive.food_stat1,
            food_value1: $scope.dps_stats_archive.food_value1,
            food_stat2: $scope.dps_stats_archive.food_stat2,
            food_value2: $scope.dps_stats_archive.food_value2,

            innerrelease: $scope.dps_stats_archive.innerrelease,
            stormseye: $scope.dps_stats_archive.stormseye,

            magesballad: $scope.dps_stats_archive.magesballad,
            magesballadShort: $scope.dps_stats_archive.magesballadShort,
            armyspaeon: $scope.dps_stats_archive.armyspaeon,
            armyspaeonShort: $scope.dps_stats_archive.armyspaeonShort,
            wanderersminuet: $scope.dps_stats_archive.wanderersminuet,
            wanderersminuetShort: $scope.dps_stats_archive.wanderersminuetShort,
            battlevoice: $scope.dps_stats_archive.battlevoice,

            determination: $scope.dps_stats_archive.determination,
            directhit: $scope.dps_stats_archive.directhit,
            tenacity: $scope.dps_stats_archive.tenacity,
            critical: $scope.dps_stats_archive.critical,
            skillspeed: $scope.dps_stats_archive.skillspeed,

            directhitRateBuff: $scope.dps_stats_archive.directhitRateBuff,
            criticalhitRateBuff: $scope.dps_stats_archive.criticalhitrateBuff,
            dpsBuff: $scope.dps_stats_archive.dpsBuff,

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

    //-----------------------------------------------
    //materia handling
    //-----------------------------------------------
    //add
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
    //subtract
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