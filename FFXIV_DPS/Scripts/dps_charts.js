dps_app.dps_charts = function (chart, stats) {

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
        dataTable = jobbuffs(dataTable, stats.buff_windows);

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
                [
                    'All',
                    'GCD',
                    getDateObject(i),
                    getDateObject(i)
                ]
            ])
        }

        return dataTable;
    }

    function jobbuffs(dataTable, buff_windows) {
        for (var i = 0; i < buff_windows.length; ++i) {
            dataTable.addRows([
                [
                    buff_windows[i].job,
                    buff_windows[i].name,
                    getDateObject(buff_windows[i].start),
                    getDateObject(buff_windows[i].end)
                ]
            ]);
        }
        return dataTable;
    }
}