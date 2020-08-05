
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

        //mostly unimplemented since it doesn't affect dps, just going to display the food cap
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

    $scope.stats_calculate = function () {
        //deltas
        $scope.dps_stats.criticalDelta = $scope.dps_stats.critical - $scope.dps_base.levelBase + $scope.dps_stats.food_selected.criticalhitValue;
        $scope.dps_stats.determinationDelta = $scope.dps_stats.determination - ($scope.dps_base.levelBase - 40) + $scope.dps_stats.food_selected.determinationValue; //determination inexplicably has 40 less base value
        $scope.dps_stats.directhitDelta = $scope.dps_stats.directhit - $scope.dps_base.levelBase + $scope.dps_stats.food_selected.directhitValue;
        $scope.dps_stats.skillspeedDelta = $scope.dps_stats.skillspeed - $scope.dps_base.levelBase + $scope.dps_stats.food_selected.skillspeedValue;
        $scope.dps_stats.tenacityDelta = $scope.dps_stats.tenacity - $scope.dps_base.levelBase + $scope.dps_stats.food_selected.tenacityValue;

        //rates
        $scope.dps_stats.criticalRate = (($scope.dps_stats.criticalDelta / $scope.dps_base.criticalRatio) * .1)
        $scope.dps_stats.directhitRate = (($scope.dps_stats.directhitDelta / $scope.dps_base.directhitRatio) * .1)

        //damage multiplier
        $scope.dps_stats.criticalDamage = ($scope.dps_stats.criticalDelta / $scope.dps_base.criticalRatio) * .1;

        //skill speed
        $scope.dps_stats.skillspeedDelay = Math.floor(130 * $scope.dps_stats.skillspeedDelta / $scope.dps_base.skillspeedLevelMod);
        $scope.dps_stats.skillspeedDelay = 1000 - $scope.dps_stats.skillspeedDelay;
        $scope.dps_stats.skillspeedDelay = Math.floor($scope.dps_stats.skillspeedDelay * ($scope.dps_base.skillspeedBase * 1000) / 1000);
        $scope.dps_stats.skillspeedDelay = Math.floor(100 * 100 * $scope.dps_stats.skillspeedDelay / 1000);
        $scope.dps_stats.skillspeedDelay = Math.floor($scope.dps_stats.skillspeedDelay / 100)
        $scope.dps_stats.skillspeedDelay = $scope.dps_stats.skillspeedDelay / 100;

        //skillspeed cap
        if ($scope.dps_stats.skillspeedDelay <= 0) {
            $scope.dps_stats.skillspeedDelay = .1;
        }

        $scope.dps_stats.skillspeedHits = $scope.dps_stats.fightduration / $scope.dps_stats.skillspeedDelay;
        $scope.dps_stats.skillspeedHits = Math.floor($scope.dps_stats.skillspeedHits);
        $scope.dps_stats.skillspeedDPS = $scope.dps_base.skillspeedBase / $scope.dps_stats.skillspeedDelay;
        $scope.dps_stats.skillspeedDPSImprovement = ($scope.dps_stats.skillspeedDPS - 1) * 100;

        //individual hit dps
        var i;
        for (i = 0; i < $scope.dps_stats.fightduration; i += $scope.dps_stats.skillspeedDelay) {
            buffs = determineActiveBuffs($scope.dps_stats, i);

            //critical hit rate cap
            var criticalhitrate = $scope.dps_base.criticalBaseRate + $scope.dps_stats.criticalRate + buffs.criticalhitrateBuff;
            if (criticalhitrate > 100) {
                criticalhitrate = 100;
            }

            //direct hit rate cap
            var directhitrate = $scope.dps_stats.directhitRate + buffs.directhitrateBuff;
            if (directhitrate > 100) {
                direchitrate = 100
            }

            //calculate individual hit dps
            $scope.dps_stats.criticalDPS += (criticalhitrate / 100) * ($scope.dps_base.criticalBaseDamage + $scope.dps_stats.criticalDamage);
            $scope.dps_stats.determinationDPS += ($scope.dps_stats.determinationDelta / $scope.dps_base.determinationRatio) * .1;
            $scope.dps_stats.directhitDPS += directhitrate * ($scope.dps_base.directhitBaseDamage / 100);
            $scope.dps_stats.tenacityDPS += ($scope.dps_stats.tenacityDelta / $scope.dps_base.tenacityRatio) * .1;
            $scope.dps_stats.buffDPS += $scope.dps_stats.buffDPS * (buffs.dpsBuff / 100);
        }

        //adjust for iterations
        $scope.dps_stats.criticalDPS = $scope.dps_stats.criticalDPS / $scope.dps_stats.skillspeedHits;
        $scope.dps_stats.determinationDPS = $scope.dps_stats.determinationDPS / $scope.dps_stats.skillspeedHits;
        $scope.dps_stats.tenacityDPS = $scope.dps_stats.tenacityDPS / $scope.dps_stats.skillspeedHits;
        $scope.dps_stats.directhitDPS = $scope.dps_stats.directhitDPS / $scope.dps_stats.skillspeedHits;
        $scope.dps_stats.buffDPS = $scope.dps_stats.buffDPS / $scope.dps_stats.skillspeedHits;

        //floor calculations
        $scope.dps_stats.criticalDPS = Math.floor($scope.dps_stats.criticalDPS);
        $scope.dps_stats.determinationDPS = Math.floor($scope.dps_stats.determinationDPS);
        $scope.dps_stats.tenacityDPS = Math.floor($scope.dps_stats.tenacityDPS);
        $scope.dps_stats.directhitDPS = Math.floor($scope.dps_stats.directhitDPS);

        //total
        $scope.dps_stats.totaldps = 100;
        $scope.dps_stats.totaldps = $scope.dps_stats.totaldps * (1 + ($scope.dps_stats.determinationDPS / 100));
        $scope.dps_stats.totaldps = $scope.dps_stats.totaldps * (1 + ($scope.dps_stats.tenacityDPS / 100));
        $scope.dps_stats.totaldps = $scope.dps_stats.totaldps * (1 + ($scope.dps_stats.criticalDPS / 100));
        $scope.dps_stats.totaldps = $scope.dps_stats.totaldps * (1 + ($scope.dps_stats.directhitDPS / 100));
        $scope.dps_stats.totaldps = $scope.dps_stats.totaldps * $scope.dps_stats.skillspeedDPS;
        $scope.dps_stats.totaldps = $scope.dps_stats.totaldps * (1 + ($scope.dps_stats.buffDPS / 100));
    }

    //init buffs creates a table for windows when buffs are active
    //this function returns the stats increments of the active buffs for a given GCD
    //i is the current time (in seconds) of the fight
    function determineActiveBuffs(stats, i) {
        var buffs = {
            criticalhitrateBuff: 0,
            directhitrateBuff: 0,
            dpsBuff: 0
        }

        //inner release
        for (var w = 0; w < stats.buff_windows.length - 1; ++w) {
            if (stats.buff_windows[w].id == $scope.dps_buffs.innerrelease.id) {
                if (i >= stats.buff_windows[w].start && i <= stats.buff_windows[w].end) {
                    buffs.criticalhitrateBuff += $scope.dps_buffs.innerrelease.buff1;
                    buffs.directhitrateBuff += $scope.dps_buffs.innerrelease.buff2;
                }
            }
        }

        return buffs;
    }

    //-------------------------------------------------------------------------------------------------
    //job specific buffs
    //-------------------------------------------------------------------------------------------------

    function initBuffs(stats) {
        //reinitialize
        stats.buff_windows = [];

        //job specific buffs
        warriorBuffs(stats, $scope.dps_buffs);
        bardBuffs(stats, $scope.dps_buffs);
    }

    //warrior job buffs
    function warriorBuffs(stats, buffs) {
        //inner release
        if (stats.innerrelease) {
            for (var i = 0; i < stats.fightduration; i += buffs.innerrelease.recast) {
                var end = maxDuration(i + buffs.innerrelease.duration, stats.fightduration);

                stats.buff_windows.push({
                    id: buffs.innerrelease.id,
                    job: buffs.innerrelease.job,
                    name: buffs.innerrelease.name,
                    start: i,
                    end: end
                });
            }
        }
    }

    //bard job buffs
    function bardBuffs(stats, buffs) {
        //mage's ballad
        if (stats.magesballad) {
            var start = bardSongStart(stats.magesballadPriority, stats, buffs);
            var duration = bardSongDuration(buffs.magesballad.duration, stats.magesballadShort);

            for (var i = start; i < stats.fightduration; i += buffs.magesballad.recast) {
                var end = maxDuration(i + duration, stats.fightduration);

                stats.buff_windows.push({
                    id: buffs.magesballad.id,
                    job: buffs.magesballad.job,
                    name: buffs.magesballad.name,
                    start: i,
                    end: end
                });
            }
        }

        //army's paeon
        if (stats.armyspaeon) {
            var start = bardSongStart(stats.armyspaeonPriority, stats, buffs);
            var duration = bardSongDuration(buffs.armyspaeon.duration, stats.armyspaeonShort);

            for (var i = start; i < stats.fightduration; i += buffs.armyspaeon.recast) {
                var end = maxDuration(i + duration, stats.fightduration);

                stats.buff_windows.push({
                    id: buffs.armyspaeon.id,
                    job: buffs.armyspaeon.job,
                    name: buffs.armyspaeon.name,
                    start: i,
                    end: end
                });
            }
        }

        //wanderer's minuet
        if (stats.wanderersminuet) {
            var start = bardSongStart(stats.wanderersminuetPriority, stats, buffs);
            var duration = bardSongDuration(buffs.wanderersminuet.duration, stats.wanderersminuetShort);

            for (var i = start; i < stats.fightduration; i += buffs.wanderersminuet.recast) {
                var end = maxDuration(i + duration, stats.fightduration);

                stats.buff_windows.push({
                    id: buffs.wanderersminuet.id,
                    job: buffs.wanderersminuet.job,
                    name: buffs.wanderersminuet.name,
                    start: i,
                    end: end
                });
            }
        }

        //battle voice
        if (stats.battlevoice) {
            for (var i = 0; i < stats.fightduration; i += buffs.battlevoice.recast) {
                var end = maxDuration(i + buffs.battlevoice.duration, stats.fightduration);

                stats.buff_windows.push({
                    id: buffs.battlevoice.id,
                    job: buffs.battlevoice.job,
                    name: buffs.battlevoice.name,
                    start: i,
                    end: end
                });
            }
        }
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
        //buffs
        initBuffs($scope.dps_stats);

        //calculate food first since they affect base stats
        $scope.food_calculate();
        $scope.food_ui();

        //calculate dps last
        $scope.stats_calculate();
        $scope.stats_ui();

        //charts
        dps_app.dps_charts("chart_mainBuffTimeline", $scope.dps_stats);
    }

    //-----------------------------------------------
    //archive handling
    //-----------------------------------------------

    //save the main object to the archive
    $scope.archive_save = function () {
        $scope.dps_stats_archive = {
            fightduration: $scope.dps_stats.fightduration,
            buff_windows: $scope.dps_stats.buff_windows,

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
            armyspaeonPriority: $scope.dps_stats.armyspaeonPriority,
            wanderersminuet: $scope.dps_stats.wanderersminuet,
            wanderersminuetShort: $scope.dps_stats.wanderersminuetShort,
            wanderersminuetPriority: $scope.dps_stats.wanderersminuetPriority,
            battlevoice: $scope.dps_stats.battlevoice,

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
            skillspeedHits: $scope.dps_stats.skillspeedHits,

            buffDPS: $scope.dps_stats.buffDPS,
            totaldps: $scope.dps_stats.totaldps
        }

        //update the archive chart
        dps_app.dps_charts("chart_archiveBuffTimeline", $scope.dps_stats_archive);

        //this doesn't seem necessary anymore
        //update charts and calculations
        //$scope.stats_change();
    }

    //load the main object with the archived data
    $scope.archive_revert = function () {
        $scope.dps_stats = {
            fightduration: $scope.dps_stats_archive.fightduration,
            buff_windows: $scope.dps_stats_archive.buff_windows,

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
            skillspeedHits: $scope.dps_stats_archive.skillspeedHits,

            buffDPS: $scope.dps_stats_archive.buffDPS,
            totaldps: $scope.dps_stats_archive.totaldps
        }

        //update charts and calculations
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