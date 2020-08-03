dps_app.dps_charts = function ($scope) {

    google.charts.load("current", { packages: ["timeline"] });
    google.charts.setOnLoadCallback(mainDraw);

    function mainDraw() {
        drawMainTimeline();
        drawArchiveTimeline();
    }

    function drawMainTimeline() {
        drawBuffTimeline("chart_mainBuffTimeline", $scope.dps_stats, $scope.dps_buffs);
    }

    function drawArchiveTimeline() {
        drawBuffTimeline("chart_archiveBuffTimeline", $scope.dps_stats_archive, $scope.dps_buffs)
    }

    function drawBuffTimeline(chart, stats, buffs) {
        var container = document.getElementById(chart);
        var chart = new google.visualization.Timeline(container);
        var dataTable = new google.visualization.DataTable();

        dataTable.addColumn({ type: 'string', id: 'Job' });
        dataTable.addColumn({ type: 'string', id: 'Buff' });
        dataTable.addColumn({ type: 'date', id: 'Start' });
        dataTable.addColumn({ type: 'date', id: 'End' });

        //add the fight duration
        dataTable.addRows([
            ['All', 'Fight Duration', new getDateObject(0), new getDateObject(stats.fightduration)]
        ])

        dataTable = warriorBuffs(dataTable, stats, buffs);
        dataTable = bardBuffs(dataTable, stats, buffs);

        var options = {
            //colors: ['#cbb69d', '#603913', '#c69c6e'],
        };

        chart.draw(dataTable, options);
    }

    function warriorBuffs(dataTable, stats, buffs) {
        //inner release
        if (stats.innerrelease) {
            for (var i = 0; i < stats.fightduration; i += buffs.innerrelease.recast) {
                var end = i + buffs.innerrelease.duration;
                if (end > stats.fightduration) {
                    end = stats.fightduration;
                }

                dataTable.addRows([
                    [buffs.innerrelease.job, buffs.innerrelease.name, new getDateObject(i), new getDateObject(end)]
                ]);
            }
        }

        return dataTable;
    }

    function bardBuffs(dataTable, stats, buffs) {
        //battle voice
        if (stats.battlevoice) {
            for (var i = 0; i < stats.fightduration; i += buffs.battlevoice.recast) {
                var end = i + buffs.battlevoice.duration;
                if (end > stats.fightduration) {
                    end = stats.fightduration;
                }

                dataTable.addRows([
                    [buffs.battlevoice.job, buffs.battlevoice.name, new getDateObject(i), new getDateObject(end)]
                ]);
            }
        }

        //mage's ballad
        if (stats.magesballad) {
            var duration = buffs.magesballad.duration;
            if (stats.magesballadShort) {
                duration -= 10;
            }

            for (var i = 0; i < stats.fightduration; i += buffs.magesballad.recast) {
                var end = i + duration;
                if (end > stats.fightduration) {
                    end = stats.fightduration;
                }

                dataTable.addRows([
                    [buffs.magesballad.job, buffs.magesballad.name, new getDateObject(i), new getDateObject(end)]
                ]);
            }
        }

        //army's paeon
        if (stats.armyspaeon) {
            var duration = buffs.armyspaeon.duration;
            if (stats.armyspaeonShort) {
                duration -= 10;
            }

            for (var i = 0; i < stats.fightduration; i += buffs.armyspaeon.recast) {
                var end = i + duration;
                if (end > stats.fightduration) {
                    end = stats.fightduration;
                }

                dataTable.addRows([
                    [buffs.armyspaeon.job, buffs.armyspaeon.name, new getDateObject(i), new getDateObject(end)]
                ]);
            }
        }

        //wanderer's minuet
        if (stats.wanderersminuet) {
            var duration = buffs.wanderersminuet.duration;
            if (stats.wanderersminuetShort) {
                duration -= 10;
            }

            for (var i = 0; i < stats.fightduration; i += buffs.wanderersminuet.recast) {
                var end = i + duration;
                if (end > stats.fightduration) {
                    end = stats.fightduration;
                }

                dataTable.addRows([
                    [buffs.wanderersminuet.job, buffs.wanderersminuet.name, new getDateObject(i), new getDateObject(end)]
                ]);
            }
        }

        return dataTable;
    }

    //easier to handle it in just seconds, so i'll create a function to convert it
    function getDateObject(seconds) {
        var minutes = Math.floor(seconds / 60);
        var seconds = seconds % 60;

        return new Date(0, 0, 0, 0, minutes, seconds, 0);
    }
}