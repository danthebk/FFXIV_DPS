﻿
dps_app.dps_model = function ($scope) {
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

    //index values for each stat; used to simplify the quick-materia buttons
    $scope.stats_indexes = {
        critical: 0,
        determination: 1,
        directhit: 2,
        skillspeed: 3,
        tenacity: 4,
        dps: 5,
        none: 6
    }

    //initialize buffs
    $scope.dps_buffs = {
        innerrelease: {
            job: "Warrior",
            name: "Inner Release",
            duration: 10,
            recast: 90,
            stat1: $scope.stats_indexes.critical,
            buff1: 100,
            stat2: $scope.stats_indexes.directhit,
            buff2: 100
        },
        battlevoice: {
            job: "Bard",
            name: "Battle Voice",
            duration: 20,
            recast: 180,
            stat1: $scope.stats_indexes.directhit,
            buff1: 20,
            stat2: $scope.stats_indexes.none,
            buff2: 0
        },
        magesballad: {
            job: "Bard",
            name: "Mage's Ballad",
            duration: 30,
            recast: 80,
            stat1: $scope.stats_indexes.dps,
            buff1: 1,
            stat2: $scope.stats_indexes.none,
            buff2: 0
        },
        armyspaeon: {
            job: "Bard",
            name: "Army's Paeon",
            duration: 30,
            recast: 80,
            stat1: $scope.stats_indexes.directhit,
            buff1: 3,
            stat2: $scope.stats_indexes.none,
            buff2: 0
        },
        wanderersminuet: {
            job: "Bard",
            name: "Wanderer's Minuet",
            duration: 30,
            recast: 80,
            stat1: $scope.stats_indexes.critical,
            buff1: 2,
            stat2: $scope.stats_indexes.none,
            buff2: 0
        }
    }

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
        //buffs
        fightduration: 360,

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
        magesballadPriority: 1,
        armyspaeon: false,
        armyspaeonShort: false,
        armyspaeonPriority: 2,
        wanderersminuet: false,
        wanderersminuetShort: false,
        wanderersminuetPriotity: 0,
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