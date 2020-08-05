
dps_app.dps_controller = function ($scope) {
    //-----------------------------------------------
    //primary functions; calulation and ui
    //-----------------------------------------------

    //food calculations
    $scope.food_calculate = function () {
        //critical hit
        $scope.stats_main.food_selected.criticalhitValue = Math.floor($scope.stats_main.critical * ($scope.stats_main.food_selected.criticalhitPercent / 100));
        if ($scope.stats_main.food_selected.criticalhitValue > $scope.stats_main.food_selected.criticalhitCap) {
            $scope.stats_main.food_selected.criticalhitValue = $scope.stats_main.food_selected.criticalhitCap;
        }

        //determination
        $scope.stats_main.food_selected.determinationValue = Math.floor($scope.stats_main.determination * ($scope.stats_main.food_selected.determinationPercent / 100));
        if ($scope.stats_main.food_selected.determinationValue > $scope.stats_main.food_selected.determinationCap) {
            $scope.stats_main.food_selected.determinationValue = $scope.stats_main.food_selected.determinationCap;
        }

        //direct hit
        $scope.stats_main.food_selected.directhitValue = Math.floor($scope.stats_main.directhit * ($scope.stats_main.food_selected.directhitPercent / 100));
        if ($scope.stats_main.food_selected.directhitValue > $scope.stats_main.food_selected.directhitCap) {
            $scope.stats_main.food_selected.directhitValue = $scope.stats_main.food_selected.directhitCap;
        }

        //skill speed
        $scope.stats_main.food_selected.skillspeedValue = Math.floor($scope.stats_main.skillspeed * ($scope.stats_main.food_selected.skillspeedPercent / 100));
        if ($scope.stats_main.food_selected.skillspeedValue > $scope.stats_main.food_selected.skillspeedCap) {
            $scope.stats_main.food_selected.skillspeedValue = $scope.stats_main.food_selected.skillspeedCap;
        }

        //tenacity
        $scope.stats_main.food_selected.tenacityValue = Math.floor($scope.stats_main.tenacity * ($scope.stats_main.food_selected.tenacityPercent / 100));
        if ($scope.stats_main.food_selected.tenacityValue > $scope.stats_main.food_selected.tenacityCap) {
            $scope.stats_main.food_selected.tenacityValue = $scope.stats_main.food_selected.tenacityCap;
        }
    }

    //food ui
    $scope.food_ui = function () {
        $scope.stats_main.food_stat1 = "";
        $scope.stats_main.food_value1 = "";
        $scope.stats_main.food_stat2 = "";
        $scope.stats_main.food_value2 = "";

        var second = false;

        //critical hit
        if ($scope.stats_main.food_selected.criticalhitCap > 0) {
            if (second) {
                $scope.stats_main.food_stat2 = "Critical Hit: ";
                $scope.stats_main.food_value2 = $scope.stats_main.food_selected.criticalhitValue;
            } else {
                $scope.stats_main.food_stat1 = "Critical Hit: ";
                $scope.stats_main.food_value1 = $scope.stats_main.food_selected.criticalhitValue;
                second = true;
            }
        }

        //determination
        if ($scope.stats_main.food_selected.determinationCap > 0) {
            if (second) {
                $scope.stats_main.food_stat2 = "Determination: ";
                $scope.stats_main.food_value2 = $scope.stats_main.food_selected.determinationValue;
            } else {
                $scope.stats_main.food_stat1 = "Determination: ";
                $scope.stats_main.food_value1 = $scope.stats_main.food_selected.determinationValue;
                second = true;
            }
        }

        //direct hit
        if ($scope.stats_main.food_selected.directhitCap > 0) {
            if (second) {
                $scope.stats_main.food_stat2 = "Direct Hit: ";
                $scope.stats_main.food_value2 = $scope.stats_main.food_selected.directhitValue;
            } else {
                $scope.stats_main.food_stat1 = "Direct Hit: ";
                $scope.stats_main.food_value1 = $scope.stats_main.food_selected.directhitValue;
                second = true;
            }
        }

        //mostly unimplemented since it doesn't affect dps, just going to display the food cap
        //piety
        if ($scope.stats_main.food_selected.pietyCap > 0) {
            if (second) {
                $scope.stats_main.food_stat2 = "Piety: ";
                $scope.stats_main.food_value2 = $scope.stats_main.food_selected.pietyCap;
            } else {
                $scope.stats_main.food_stat1 = "Piety: ";
                $scope.stats_main.food_value1 = $scope.stats_main.food_selected.pietyCap;
                second = true;
            }
        }

        //skill speed
        if ($scope.stats_main.food_selected.skillspeedCap > 0) {
            if (second) {
                $scope.stats_main.food_stat2 = "Skill/Spell Speed: ";
                $scope.stats_main.food_value2 = $scope.stats_main.food_selected.skillspeedValue;
            } else {
                $scope.stats_main.food_stat1 = "Skill/Spell Speed: ";
                $scope.stats_main.food_value1 = $scope.stats_main.food_selected.skillspeedValue;
                second = true;
            }
        }

        //tenacity
        if ($scope.stats_main.food_selected.tenacityCap > 0) {
            if (second) {
                $scope.stats_main.food_stat2 = "Tenacity: ";
                $scope.stats_main.food_value2 = $scope.stats_main.food_selected.tenacityValue;
            } else {
                $scope.stats_main.food_stat1 = "Tenacity: ";
                $scope.stats_main.food_value1 = $scope.stats_main.food_selected.tenacityValue;
                second = true;
            }
        }
    }

    $scope.stats_calculate = function () {
        //reinitialize
        $scope.stats_main.criticalDPS = 0;
        $scope.stats_main.determinationDPS = 0;
        $scope.stats_main.tenacityDPS = 0;
        $scope.stats_main.directhitDPS = 0;
        $scope.stats_main.skillspeedDPS = 0;
        $scope.stats_main.buffDPS = 0;
        $scope.stats_main.totaldps = 0;

        //deltas
        $scope.stats_main.criticalDelta = $scope.stats_main.critical - $scope.base_stats.levelBase + $scope.stats_main.food_selected.criticalhitValue;
        $scope.stats_main.determinationDelta = $scope.stats_main.determination - ($scope.base_stats.levelBase - 40) + $scope.stats_main.food_selected.determinationValue; //determination inexplicably has 40 less base value
        $scope.stats_main.directhitDelta = $scope.stats_main.directhit - $scope.base_stats.levelBase + $scope.stats_main.food_selected.directhitValue;
        $scope.stats_main.skillspeedDelta = $scope.stats_main.skillspeed - $scope.base_stats.levelBase + $scope.stats_main.food_selected.skillspeedValue;
        $scope.stats_main.tenacityDelta = $scope.stats_main.tenacity - $scope.base_stats.levelBase + $scope.stats_main.food_selected.tenacityValue;

        //rates
        $scope.stats_main.criticalRate = (($scope.stats_main.criticalDelta / $scope.base_stats.criticalRatio) * .1)
        $scope.stats_main.directhitRate = (($scope.stats_main.directhitDelta / $scope.base_stats.directhitRatio) * .1)

        //damage multiplier
        $scope.stats_main.criticalDamage = ($scope.stats_main.criticalDelta / $scope.base_stats.criticalRatio) * .1;

        //skill speed delay
        $scope.stats_main.skillspeedDelay = Math.floor(130 * $scope.stats_main.skillspeedDelta / $scope.base_stats.skillspeedLevelMod);
        $scope.stats_main.skillspeedDelay = 1000 - $scope.stats_main.skillspeedDelay;
        $scope.stats_main.skillspeedDelay = Math.floor($scope.stats_main.skillspeedDelay * ($scope.base_stats.skillspeedBase * 1000) / 1000);
        $scope.stats_main.skillspeedDelay = Math.floor(100 * 100 * $scope.stats_main.skillspeedDelay / 1000);
        $scope.stats_main.skillspeedDelay = Math.floor($scope.stats_main.skillspeedDelay / 100)
        $scope.stats_main.skillspeedDelay = $scope.stats_main.skillspeedDelay / 100;

        //skillspeed cap
        if ($scope.stats_main.skillspeedDelay <= 0) {
            $scope.stats_main.skillspeedDelay = .1;
        }
        
        //individual hit delay
        var j = $scope.stats_main.skillspeedDelay;
        //individual hit dps
        $scope.stats_main.skillspeedHits = 0
        for (var i = 0; i < $scope.stats_main.fightduration; i += j) {
            //for (var i = 0; i < $scope.stats_main.skillspeedHits; ++i) {
            buffs = determineActiveBuffs($scope.stats_main, i);
            //buffs = determineActiveBuffs($scope.stats_main, i * $scope.stats_main.skillspeedDelay);

            //critical hit rate cap
            var criticalhitrate = $scope.base_stats.criticalBaseRate + $scope.stats_main.criticalRate + buffs.criticalhitrateBuff;
            if (criticalhitrate > 100) {
                criticalhitrate = 100;
            }

            //direct hit rate cap
            var directhitrate = $scope.stats_main.directhitRate + buffs.directhitrateBuff;
            if (directhitrate > 100) {
                direchitrate = 100
            }

            //account for delay buffs
            j = $scope.stats_main.skillspeedDelay * ((100 - buffs.delayReduction) / 100);

            //calculate individual hit dps
            $scope.stats_main.criticalDPS += (criticalhitrate / 100) * ($scope.base_stats.criticalBaseDamage + $scope.stats_main.criticalDamage);
            $scope.stats_main.determinationDPS += ($scope.stats_main.determinationDelta / $scope.base_stats.determinationRatio) * .1;
            $scope.stats_main.directhitDPS += directhitrate * ($scope.base_stats.directhitBaseDamage / 100);
            $scope.stats_main.tenacityDPS += ($scope.stats_main.tenacityDelta / $scope.base_stats.tenacityRatio) * .1;

            //account for dps buffs
            $scope.stats_main.buffDPS += buffs.dpsBuff;

            //increment actual hits
            $scope.stats_main.skillspeedHits += 1;
        }

        //skill speed hit count over the course of the fight duration
        var skillspeedbaseHits = Math.floor($scope.stats_main.fightduration / $scope.base_stats.skillspeedBase);
        //$scope.stats_main.skillspeedHits = $scope.stats_main.fightduration / $scope.stats_main.skillspeedDelay;
        //$scope.stats_main.skillspeedHits = Math.floor($scope.stats_main.skillspeedHits);

        //skill speed DPS
        //$scope.stats_main.skillspeedDPS = $scope.base_stats.skillspeedBase / $scope.stats_main.skillspeedDelay;
        //adjusting the calculation to account for the number of hits across the fight rather than based on the delay difference
        $scope.stats_main.skillspeedDPS = $scope.stats_main.skillspeedHits / skillspeedbaseHits;
        $scope.stats_main.skillspeedDPSImprovement = ($scope.stats_main.skillspeedDPS - 1) * 100;

        //adjust for iterations
        $scope.stats_main.criticalDPS = $scope.stats_main.criticalDPS / $scope.stats_main.skillspeedHits;
        $scope.stats_main.determinationDPS = $scope.stats_main.determinationDPS / $scope.stats_main.skillspeedHits;
        $scope.stats_main.tenacityDPS = $scope.stats_main.tenacityDPS / $scope.stats_main.skillspeedHits;
        $scope.stats_main.directhitDPS = $scope.stats_main.directhitDPS / $scope.stats_main.skillspeedHits;
        $scope.stats_main.buffDPS = $scope.stats_main.buffDPS / $scope.stats_main.skillspeedHits;

        //total
        $scope.stats_main.totaldps = 100;
        $scope.stats_main.totaldps = $scope.stats_main.totaldps * (1 + ($scope.stats_main.determinationDPS / 100));
        $scope.stats_main.totaldps = $scope.stats_main.totaldps * (1 + ($scope.stats_main.tenacityDPS / 100));
        $scope.stats_main.totaldps = $scope.stats_main.totaldps * (1 + ($scope.stats_main.criticalDPS / 100));
        $scope.stats_main.totaldps = $scope.stats_main.totaldps * (1 + ($scope.stats_main.directhitDPS / 100));
        $scope.stats_main.totaldps = $scope.stats_main.totaldps * $scope.stats_main.skillspeedDPS;
        $scope.stats_main.totaldps = $scope.stats_main.totaldps * (1 + ($scope.stats_main.buffDPS / 100));
    }

    //init buffs creates a table for windows when buffs are active
    //this function returns the stats increments of the active buffs for a given GCD
    //i is the current time (in seconds) of the fight
    function determineActiveBuffs(stats, i) {
        var buffs = {
            criticalhitrateBuff: 0,
            directhitrateBuff: 0,
            dpsBuff: 0,
            delayReduction: 0
        }

        //inner release
        for (var w = 0; w < stats.buff_windows.length; ++w) {
            if (i >= stats.buff_windows[w].start && i <= stats.buff_windows[w].end) {
                buffs.criticalhitrateBuff += stats.buff_windows[w].buff.criticalhitratebuff;
                buffs.directhitrateBuff += stats.buff_windows[w].buff.directhitratebuff;
                buffs.dpsBuff += stats.buff_windows[w].buff.dpsbuff;
                buffs.delayReduction += stats.buff_windows[w].buff.delayreduction;
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
        warriorBuffs(stats, $scope.buffs);
        bardBuffs(stats, $scope.buffs);
        dragoonBuffs(stats, $scope.buffs);
        samuraiBuffs(stats, $scope.buffs);
        ninjaBuffs(stats, $scope.buffs);
        scholarBuffs(stats, $scope.buffs);
    }

    //warrior job buffs
    function warriorBuffs(stats, buffs) {
        //storm's eye
        if (stats.stormseye) {
            addBuffWindow(stats, buffs.stormseye);
        }

        //inner release
        if (stats.innerrelease) {
            addBuffWindow(stats, buffs.innerrelease);
        }
    }

    function dragoonBuffs(stats, buffs) {
        if (stats.battlelittany) {
            addBuffWindow(stats, buffs.battlelittany);
        }
    }

    function ninjaBuffs(stats, buffs) {
        if (stats.huton) {
            addBuffWindow(stats, buffs.huton);
        }
    }

    function samuraiBuffs(stats, buffs) {
        if (stats.shifu) {
            addBuffWindow(stats, buffs.shifu);
        }
    }

    function scholarBuffs(stats, buffs) {
        if (stats.chainstratagem) {
            addBuffWindow(stats, buffs.chainstratagem);
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
                    buff: buffs.magesballad,
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
                    buff: buffs.armyspaeon,
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
                    buff: buffs.wanderersminuet,
                    start: i,
                    end: end
                });
            }
        }

        //battle voice
        if (stats.battlevoice) {
            addBuffWindow(stats, buffs.battlevoice);
        }
    }

    //should work for everything except for the staggered bard buffs
    function addBuffWindow(stats, buff) {
        for (var i = 0; i < stats.fightduration; i += buff.recast) {
            var end = maxDuration(i + buff.duration, stats.fightduration);

            stats.buff_windows.push({
                buff: buff,
                start: i,
                end: end
            });
        }
    }

    //ui style adjustments
    $scope.stats_ui = function () {
        //critical
        if ($scope.stats_main.criticalDPS == $scope.stats_archive.criticalDPS) {
            $scope.ui.critical_main = $scope.ui_color.neutral;
            $scope.ui.critical_archive = $scope.ui_color.neutral;
        }
        else if ($scope.stats_main.criticalDPS > $scope.stats_archive.criticalDPS) {
            $scope.ui.critical_main = $scope.ui_color.better;
            $scope.ui.critical_archive = $scope.ui_color.worse;
        } else {
            $scope.ui.critical_main = $scope.ui_color.worse;
            $scope.ui.critical_archive = $scope.ui_color.better;
        }

        //determination
        if ($scope.stats_main.determinationDPS == $scope.stats_archive.determinationDPS) {
            $scope.ui.determination_main = $scope.ui_color.neutral;
            $scope.ui.determination_archive = $scope.ui_color.neutral;
        }
        else if ($scope.stats_main.determinationDPS > $scope.stats_archive.determinationDPS) {
            $scope.ui.determination_main = $scope.ui_color.better;
            $scope.ui.determination_archive = $scope.ui_color.worse;
        } else {
            $scope.ui.determination_main = $scope.ui_color.worse;
            $scope.ui.determination_archive = $scope.ui_color.better;
        }

        //direct hit
        if ($scope.stats_main.directhitDPS == $scope.stats_archive.directhitDPS) {
            $scope.ui.directhit_main = $scope.ui_color.neutral;
            $scope.ui.directhit_archive = $scope.ui_color.neutral;
        }
        else if ($scope.stats_main.directhitDPS > $scope.stats_archive.directhitDPS) {
            $scope.ui.directhit_main = $scope.ui_color.better;
            $scope.ui.directhit_archive = $scope.ui_color.worse;
        } else {
            $scope.ui.directhit_main = $scope.ui_color.worse;
            $scope.ui.directhit_archive = $scope.ui_color.better;
        }

        //skill speed
        if ($scope.stats_main.skillspeedDPS == $scope.stats_archive.skillspeedDPS) {
            $scope.ui.skillspeed_main = $scope.ui_color.neutral;
            $scope.ui.skillspeed_archive = $scope.ui_color.neutral;
        }
        else if ($scope.stats_main.skillspeedDPS > $scope.stats_archive.skillspeedDPS) {
            $scope.ui.skillspeed_main = $scope.ui_color.better;
            $scope.ui.skillspeed_archive = $scope.ui_color.worse;
        } else {
            $scope.ui.skillspeed_main = $scope.ui_color.worse;
            $scope.ui.skillspeed_archive = $scope.ui_color.better;
        }

        //tenacity
        if ($scope.stats_main.tenacityDPS == $scope.stats_archive.tenacityDPS) {
            $scope.ui.tenacity_main = $scope.ui_color.neutral;
            $scope.ui.tenacity_archive = $scope.ui_color.neutral;
        }
        else if ($scope.stats_main.tenacityDPS > $scope.stats_archive.tenacityDPS) {
            $scope.ui.tenacity_main = $scope.ui_color.better;
            $scope.ui.tenacity_archive = $scope.ui_color.worse;
        } else {
            $scope.ui.tenacity_main = $scope.ui_color.worse;
            $scope.ui.tenacity_archive = $scope.ui_color.better;
        }

        //total
        if ($scope.stats_main.totaldps == $scope.stats_archive.totaldps) {
            $scope.ui.total_main = $scope.ui_color.neutral;
            $scope.ui.total_archive = $scope.ui_color.neutral;
        }
        else if ($scope.stats_main.totaldps > $scope.stats_archive.totaldps) {
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
        initBuffs($scope.stats_main);

        //calculate food first since they affect base stats
        $scope.food_calculate();
        $scope.food_ui();

        //calculate dps last
        $scope.stats_calculate();
        $scope.stats_ui();

        //charts
        dps_app.dps_charts("chart_mainBuffTimeline", $scope.stats_main);
    }

    //-----------------------------------------------
    //archive handling
    //-----------------------------------------------

    //save the main object to the archive
    $scope.archive_save = function () {
        $scope.stats_archive = {
            fightduration: $scope.stats_main.fightduration,
            buff_windows: $scope.stats_main.buff_windows,

            food_selected: $scope.stats_main.food_selected,
            food_stat1: $scope.stats_main.food_stat1,
            food_value1: $scope.stats_main.food_value1,
            food_stat2: $scope.stats_main.food_stat2,
            food_value2: $scope.stats_main.food_value2,

            innerrelease: $scope.stats_main.innerrelease,
            stormseye: $scope.stats_main.stormseye,

            huton: $scope.stats_main.huton,
            shifu: $scope.stats_main.shifu,

            magesballad: $scope.stats_main.magesballad,
            magesballadShort: $scope.stats_main.magesballadShort,
            magesballadPriority: $scope.stats_main.magesballadPriority,
            armyspaeon: $scope.stats_main.armyspaeon,
            armyspaeonShort: $scope.stats_main.armyspaeonShort,
            armyspaeonPriority: $scope.stats_main.armyspaeonPriority,
            wanderersminuet: $scope.stats_main.wanderersminuet,
            wanderersminuetShort: $scope.stats_main.wanderersminuetShort,
            wanderersminuetPriority: $scope.stats_main.wanderersminuetPriority,
            battlevoice: $scope.stats_main.battlevoice,

            battlelittany: $scope.stats_main.battlelittany,
            chainstratagem: $scope.stats_main.chainstratagem,

            determination: $scope.stats_main.determination,
            directhit: $scope.stats_main.directhit,
            tenacity: $scope.stats_main.tenacity,
            critical: $scope.stats_main.critical,
            skillspeed: $scope.stats_main.skillspeed,

            determinationDPS: $scope.stats_main.determinationDPS,
            determinationDelta: $scope.stats_main.determinationDelta,

            tenacityDPS: $scope.stats_main.tenacityDPS,
            tenacityDelta: $scope.stats_main.tenacityDelta,

            directhitDPS: $scope.stats_main.directhitDPS,
            directhitRate: $scope.stats_main.directhitRate,
            directhitDelta: $scope.stats_main.directhitDelta,

            criticalDPS: $scope.stats_main.criticalDPS,
            criticalRate: $scope.stats_main.criticalRate,
            criticalDamage: $scope.stats_main.criticalDamage,
            criticalDelta: $scope.stats_main.criticalDelta,

            skillspeedDPS: $scope.stats_main.skillspeedDPS,
            skillspeedDPSImprovement: $scope.stats_main.skillspeedDPSImprovement,
            skillspeedDelay: $scope.stats_main.skillspeedDelay,
            skillspeedDelta: $scope.stats_main.skillspeedDelta,
            skillspeedHits: $scope.stats_main.skillspeedHits,

            buffDPS: $scope.stats_main.buffDPS,
            totaldps: $scope.stats_main.totaldps
        }

        //update the archive chart
        dps_app.dps_charts("chart_archiveBuffTimeline", $scope.stats_archive);

        //this doesn't seem necessary anymore
        //update charts and calculations
        $scope.stats_ui();
        //$scope.stats_change();
    }

    //load the main object with the archived data
    $scope.archive_revert = function () {
        $scope.stats_main = {
            fightduration: $scope.stats_archive.fightduration,
            buff_windows: $scope.stats_archive.buff_windows,

            food_selected: $scope.stats_archive.food_selected,
            ood_stat1: $scope.stats_archive.food_stat1,
            food_value1: $scope.stats_archive.food_value1,
            food_stat2: $scope.stats_archive.food_stat2,
            food_value2: $scope.stats_archive.food_value2,

            innerrelease: $scope.stats_archive.innerrelease,
            stormseye: $scope.stats_archive.stormseye,

            huton: $scope.stats_archive.huton,
            shifu: $scope.stats_archive.shifu,

            magesballad: $scope.stats_archive.magesballad,
            magesballadShort: $scope.stats_archive.magesballadShort,
            magesballadPriority: $scope.stats_archive.magesballadPriority,
            armyspaeon: $scope.stats_archive.armyspaeon,
            armyspaeonShort: $scope.stats_archive.armyspaeonShort,
            armyspaeonPriority: $scope.stats_archive.armyspaeonPriority,
            wanderersminuet: $scope.stats_archive.wanderersminuet,
            wanderersminuetShort: $scope.stats_archive.wanderersminuetShort,
            wanderersminuetPriority: $scope.stats_archive.wanderersminuetPriority,
            battlevoice: $scope.stats_archive.battlevoice,

            battlelittany: $scope.stats_archive.battlelittany,
            chainstratagem: $scope.stats_archive.chainstratagem,

            determination: $scope.stats_archive.determination,
            directhit: $scope.stats_archive.directhit,
            tenacity: $scope.stats_archive.tenacity,
            critical: $scope.stats_archive.critical,
            skillspeed: $scope.stats_archive.skillspeed,

            determinationDPS: $scope.stats_archive.determinationDPS,
            determinationDelta: $scope.stats_archive.determinationDelta,

            tenacityDPS: $scope.stats_archive.tenacityDPS,
            tenacityDelta: $scope.stats_archive.tenacityDelta,

            directhitDPS: $scope.stats_archive.directhitDPS,
            directhitRate: $scope.stats_archive.directhitRate,
            directhitDelta: $scope.stats_archive.directhitDelta,

            criticalDPS: $scope.stats_archive.criticalDPS,
            criticalRate: $scope.stats_archive.criticalRate,
            criticalDamage: $scope.stats_archive.criticalDamage,
            criticalDelta: $scope.stats_archive.criticalDelta,

            skillspeedDPS: $scope.stats_archive.skillspeedDPS,
            skillspeedDPSImprovement: $scope.stats_archive.skillspeedDPSImprovement,
            skillspeedDelay: $scope.stats_archive.skillspeedDelay,
            skillspeedDelta: $scope.stats_archive.skillspeedDelta,
            skillspeedHits: $scope.stats_archive.skillspeedHits,

            buffDPS: $scope.stats_archive.buffDPS,
            totaldps: $scope.stats_archive.totaldps
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
            $scope.stats_main.critical = $scope.stats_main.critical + $scope.materia_selected.critical;
        } else if ($scope.stats_indexes.determination == stat) {
            $scope.stats_main.determination = $scope.stats_main.determination + $scope.materia_selected.determination;
        } else if ($scope.stats_indexes.directhit == stat) {
            $scope.stats_main.directhit = $scope.stats_main.directhit + $scope.materia_selected.directhit;
        } else if ($scope.stats_indexes.skillspeed == stat) {
            $scope.stats_main.skillspeed = $scope.stats_main.skillspeed + $scope.materia_selected.skillspeed;
        } else if ($scope.stats_indexes.tenacity == stat) {
            $scope.stats_main.tenacity = $scope.stats_main.tenacity + $scope.materia_selected.tenacity;
        }

        //recalculate dps
        $scope.stats_change();
    }

    //subtract
    $scope.materia_subtract = function (stat) {
        if ($scope.stats_indexes.critical == stat) {
            $scope.stats_main.critical = $scope.stats_main.critical - $scope.materia_selected.critical;
        } else if ($scope.stats_indexes.determination == stat) {
            $scope.stats_main.determination = $scope.stats_main.determination - $scope.materia_selected.determination;
        } else if ($scope.stats_indexes.directhit == stat) {
            $scope.stats_main.directhit = $scope.stats_main.directhit - $scope.materia_selected.directhit;
        } else if ($scope.stats_indexes.skillspeed == stat) {
            $scope.stats_main.skillspeed = $scope.stats_main.skillspeed - $scope.materia_selected.skillspeed;
        } else if ($scope.stats_indexes.tenacity == stat) {
            $scope.stats_main.tenacity = $scope.stats_main.tenacity - $scope.materia_selected.tenacity;
        }

        //recalculate dps
        $scope.stats_change();
    }
}