﻿dps_app.dps_charts = function ($scope) {

    google.charts.load("current", { packages: ["timeline"] });
    google.charts.setOnLoadCallback(mainDraw);

    //-------------------------------------------------------------------------------------------------
    //initialization/controller functions
    //-------------------------------------------------------------------------------------------------

    function mainDraw() {
        drawMainTimeline();
        drawArchiveTimeline();
    }

    function drawMainTimeline() {
        drawBuffTimeline("chart_mainBuffTimeline", $scope);
    }

    function drawArchiveTimeline() {
        drawBuffTimeline("chart_archiveBuffTimeline", $scope);
    }

    function drawBuffTimeline(chart, $scope) {
        var container = document.getElementById(chart);
        var chart = new google.visualization.Timeline(container);
        var dataTable = new google.visualization.DataTable();

        dataTable.addColumn({ type: 'string', id: 'Job' });
        dataTable.addColumn({ type: 'string', id: 'Buff' });
        dataTable.addColumn({ type: 'date', id: 'Start' });
        dataTable.addColumn({ type: 'date', id: 'End' });

        //add the fight duration
        dataTable.addRows([
            ['All', 'Fight Duration', getDateObject(0), getDateObject($scope.dps_stats.fightduration)]
        ])

        dataTable = skillspeed(dataTable, $scope.dps_stats, $scope.dps_buffs);
        dataTable = warriorBuffs(dataTable, $scope.dps_stats, $scope.dps_buffs);
        dataTable = bardBuffs(dataTable, $scope.dps_stats, $scope.dps_buffs);

        var options = {
            //colors: ['#cbb69d', '#603913', '#c69c6e'],
        };
        
        chart.draw(dataTable, options);
    }

    //-------------------------------------------------------------------------------------------------
    //global chart functions
    //-------------------------------------------------------------------------------------------------
    function skillspeed(dataTable, stats) {
        for (var i = 0; i < stats.fightduration; i += stats.skillspeedDelay) {
            dataTable.addRows([
                ['All', 'GCD', getDateObject(i), getDateObject(i)]
            ])
        }

        return dataTable;
    }

    //-------------------------------------------------------------------------------------------------
    //job specific buffs
    //-------------------------------------------------------------------------------------------------

    //warrior job buffs
    function warriorBuffs(dataTable, stats, buffs) {
        //inner release
        if (stats.innerrelease) {
            for (var i = 0; i < stats.fightduration; i += buffs.innerrelease.recast) {
                var end = maxDuration(i + buffs.innerrelease.duration, stats.fightduration);

                dataTable.addRows([
                    [buffs.innerrelease.job, buffs.innerrelease.name, getDateObject(i), getDateObject(end)]
                ]);
            }
        }

        return dataTable;
    }

    //bard job buffs
    function bardBuffs(dataTable, stats, buffs) {
        //mage's ballad
        if (stats.magesballad) {
            var start = bardSongStart(stats.magesballadPriority, stats, buffs);
            var duration = bardSongDuration(buffs.magesballad.duration, stats.magesballadShort);

            for (var i = start; i < stats.fightduration; i += buffs.magesballad.recast) {
                var end = maxDuration(i + duration, stats.fightduration);

                dataTable.addRows([
                    [buffs.magesballad.job, buffs.magesballad.name, getDateObject(i), getDateObject(end)]
                ]);
            }
        }

        //army's paeon
        if (stats.armyspaeon) {
            var start = bardSongStart(stats.armyspaeonPriority, stats, buffs);
            var duration = bardSongDuration(buffs.armyspaeon.duration, stats.armyspaeonShort);

            for (var i = start; i < stats.fightduration; i += buffs.armyspaeon.recast) {
                var end = maxDuration(i + duration, stats.fightduration);

                dataTable.addRows([
                    [buffs.armyspaeon.job, buffs.armyspaeon.name, getDateObject(i), getDateObject(end)]
                ]);
            }
        }

        //wanderer's minuet
        if (stats.wanderersminuet) {
            var start = bardSongStart(stats.wanderersminuetPriority, stats, buffs);
            var duration = bardSongDuration(buffs.wanderersminuet.duration, stats.wanderersminuetShort);

            for (var i = start; i < stats.fightduration; i += buffs.wanderersminuet.recast) {
                var end = maxDuration(i + duration, stats.fightduration);

                dataTable.addRows([
                    [buffs.wanderersminuet.job, buffs.wanderersminuet.name, getDateObject(i), getDateObject(end)]
                ]);
            }
        }

        //battle voice
        if (stats.battlevoice) {
            for (var i = 0; i < stats.fightduration; i += buffs.battlevoice.recast) {
                var end = maxDuration(i + buffs.battlevoice.duration, stats.fightduration);

                dataTable.addRows([
                    [buffs.battlevoice.job, buffs.battlevoice.name, getDateObject(i), getDateObject(end)]
                ]);
            }
        }

        return dataTable;
    }

    //-------------------------------------------------------------------------------------------------
    //bard specific helper functions
    //-------------------------------------------------------------------------------------------------

    //bard songs are staggered, determine the order of execution
    function bardSongStart(priority, stats, buffs) {
        var start = 0;

        if (stats.magesballadPriority < priority) {
            if (stats.magesballadShort) {
                start = start + (buffs.magesballad.duration - 10);
            } else {
                start = start + buffs.magesballad.duration;
            }
        }
        if (stats.armyspaeonPriority < priority) {
            if (stats.armyspaeonShort) {
                start = start + (buffs.armyspaeon.duration - 10);
            } else {
                start = start + buffs.armyspaeon.duration;
            }
        }
        if (stats.wanderersminuetPriority < priority) {
            if (stats.wanderersminuetShort) {
                start = start + (buffs.wanderersminuet.duration - 10);
            } else {
                start = start + buffs.wanderersminuet.duration;
            }
        }

        return start;
    }

    //one of the bard buffs should be cut off at 20 seconds
    function bardSongDuration(duration, shortBool) {
        var d = duration;

        if (shortBool) {
            d = d - 10;
        }

        return d;
    }
}