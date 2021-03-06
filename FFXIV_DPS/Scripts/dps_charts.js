﻿dps_app.dps_charts = function (chart, stats) {

    google.charts.load("current", { packages: ["timeline"] });
    google.charts.setOnLoadCallback(mainDraw);

    //-------------------------------------------------------------------------------------------------
    //initialization/controller functions
    //-------------------------------------------------------------------------------------------------

    function mainDraw() {
        drawBuffTimeline(chart, stats);
    }

    function drawBuffTimeline(chart, stats) {
        var container = document.getElementById(chart);
        var chart = new google.visualization.Timeline(container);
        var dataTable = new google.visualization.DataTable();

        dataTable.addColumn({ type: 'string', id: 'Job' });
        dataTable.addColumn({ type: 'string', id: 'Buff' });
        dataTable.addColumn({ type: 'date', id: 'Start' });
        dataTable.addColumn({ type: 'date', id: 'End' });

        //add the fight duration
        dataTable.addRows([
            [
                'All',
                'Fight Duration',
                getDateObject(0),
                getDateObject(stats.fightduration)
            ]
        ])

        dataTable = skillspeed(dataTable, stats);
        datatable = autoattack(dataTable, stats);
        dataTable = jobbuffs(dataTable, stats.buff_windows);
        var cheight = determineChartHeight(stats);

        var options = {
            height: cheight
            //colors: ['#cbb69d', '#603913', '#c69c6e'],
        };

        chart.draw(dataTable, options);
    }

    //-------------------------------------------------------------------------------------------------
    //global chart functions
    //-------------------------------------------------------------------------------------------------
    function autoattack(dataTable, stats) {
        if (stats.weapondelay > 0) {
            for (var i = 0; i < stats.autoattack_timing.length; i += 1) {
                dataTable.addRows([
                    [
                        'All',
                        'Auto Attack',
                        getDateObject(stats.autoattack_timing[i]),
                        getDateObject(stats.autoattack_timing[i])
                    ]
                ])
            }
        }

        return dataTable;
    }

    function skillspeed(dataTable, stats) {
        for (var i = 0; i < stats.gcd_timing.length; i += 1) {
            dataTable.addRows([
                [
                    'All',
                    'GCD',
                    getDateObject(stats.gcd_timing[i]),
                    getDateObject(stats.gcd_timing[i])
                ]
            ])
        }

        return dataTable;
    }

    function jobbuffs(dataTable, buff_windows) {
        for (var i = 0; i < buff_windows.length; ++i) {
            dataTable.addRows([
                [
                    buff_windows[i].buff.job,
                    buff_windows[i].buff.name,
                    getDateObject(buff_windows[i].start),
                    getDateObject(buff_windows[i].end)
                ]
            ]);
        }
        return dataTable;
    }

    //chart height apparently doesn't automatically adjust for the amount of data
    //let's just estimate the ideal height based on the number of buffs selected
    function determineChartHeight(stats) {
        var height = 130;
        var newrow = 40;

        //hard coding buffs
        if (stats.stormseye) {
            height = height + newrow;
        }
        if (stats.innerrelease) {
            height = height + newrow;
        }
        if (stats.huton) {
            height = height + newrow;
        }
        if (stats.trickattack) {
            height = height + newrow;
        }
        if (stats.shifu) {
            height = height + newrow;
        }
        if (stats.jinpu) {
            height = height + newrow;
        }
        if (stats.battlevoice) {
            height = height + newrow;
        }
        if (stats.disembowel) {
            height = height + newrow;
        }
        if (stats.lancecharge) {
            height = height + newrow;
        }
        if (stats.battlelittany) {
            height = height + newrow;
        }
        if (stats.dragonsight) {
            height = height + newrow;
        }
        if (stats.embolden) {
            height = height + newrow;
        }
        if (stats.presenceofmind) {
            height = height + newrow;
        }
        if (stats.chainstratagem) {
            height = height + newrow;
        }


        //stacking buffs, these buffs share the same row so only one needs to be active to increase the height
        if (stats.magesballad || stats.armyspaeon || stats.wanderersminuet) {
            height = height + newrow;
        }

        return height;
    }
}