
dps_app.dps_controller = function ($scope) {
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
        $scope.dps_stats.totaldps = $scope.dps_stats.totaldps * (1 + ($scope.dps_stats.directhitDPS / 100));
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

    //user adjusted their buffs, recalculate and update the ui
    $scope.buffs_change = function () {
        //charts
        dps_app.dps_charts($scope);

        //recalculate
        $scope.stats_change();
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
            fightduration: $scope.dps_stats.fightduration,

            food_selected: $scope.dps_stats.food_selected,
            food_stat1: $scope.dps_stats.food_stat1,
            food_value1: $scope.dps_stats.food_value1,
            food_stat2: $scope.dps_stats.food_stat2,
            food_value2: $scope.dps_stats.food_value2,

            innerrelease: $scope.dps_stats.innerrelease,
            stormseye: $scope.dps_stats.stormseye,

            magesballad: $scope.dps_stats.magesballad,
            magesballadShort: $scope.dps_stats.magesballadShort,
            magesballadPriority: $scope.dps_stats.magesballadPriority,
            armyspaeon: $scope.dps_stats.armyspaeon,
            armyspaeonShort: $scope.dps_stats.armyspaeonShort,
            armyspaeonPriority: $scope.dps_stats.armyspaeonPriority;
            wanderersminuet: $scope.dps_stats.wanderersminuet,
            wanderersminuetShort: $scope.dps_stats.wanderersminuetShort,
            wanderersminuetPriority: $scope.dps_stats.wanderersminuetPriority,
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

        //update charts and calculations
        $scope.buffs_change();
    }

    //load the main object with the archived data
    $scope.archive_revert = function () {
        $scope.dps_stats = {
            fightduration: $scope.dps_stats_archive.fightduration,

            food_selected: $scope.dps_stats_archive.food_selected,
            ood_stat1: $scope.dps_stats_archive.food_stat1,
            food_value1: $scope.dps_stats_archive.food_value1,
            food_stat2: $scope.dps_stats_archive.food_stat2,
            food_value2: $scope.dps_stats_archive.food_value2,

            innerrelease: $scope.dps_stats_archive.innerrelease,
            stormseye: $scope.dps_stats_archive.stormseye,

            magesballad: $scope.dps_stats_archive.magesballad,
            magesballadShort: $scope.dps_stats_archive.magesballadShort,
            magesballadPriority: $scope.dps_stats_archive.magesballadPriority,
            armyspaeon: $scope.dps_stats_archive.armyspaeon,
            armyspaeonShort: $scope.dps_stats_archive.armyspaeonShort,
            armyspaeonPriority: $scope.dps_stats_archive.armyspaeonPriority,
            wanderersminuet: $scope.dps_stats_archive.wanderersminuet,
            wanderersminuetShort: $scope.dps_stats_archive.wanderersminuetShort,
            wanderersminuetPriority: $scope.dps_stats_archive.wanderersminuetPriority,
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

        //update charts and calculations
        $scope.buffs_change();
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

        //recalculate dps
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

        //recalculate dps
        $scope.stats_change();
    }
}