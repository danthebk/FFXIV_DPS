
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
    $scope.materia = [
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
    $scope.buffs = {
        innerrelease: {
            job: "Warrior",
            name: "Inner Release",
            duration: 10,
            recast: 90,
            criticalhitratebuff: 100,
            directhitratebuff: 100,
            dpsbuff: 0,
            delayreduction: 0
        },
        stormseye: {
            job: "Warrior",
            name: "Storm's Eye",
            duration: 30,
            recast: 30,
            criticalhitratebuff: 0,
            directhitratebuff: 0,
            dpsbuff: 10,
            delayreduction: 0
        },
        battlevoice: {
            job: "Bard",
            name: "Battle Voice",
            duration: 20,
            recast: 180,
            criticalhitratebuff: 0,
            directhitratebuff: 20,
            dpsbuff: 0,
            delayreduction: 0
        },
        magesballad: {
            job: "Bard",
            name: "Mage's Ballad",
            duration: 30,
            recast: 80,
            criticalhitratebuff: 0,
            directhitratebuff: 0,
            dpsbuff: 1,
            delayreduction: 0
        },
        armyspaeon: {
            job: "Bard",
            name: "Army's Paeon",
            duration: 30,
            recast: 80,
            criticalhitratebuff: 0,
            directhitratebuff: 3,
            dpsbuff: 0,
            delayreduction: 0
        },
        wanderersminuet: {
            job: "Bard",
            name: "Wanderer's Minuet",
            duration: 30,
            recast: 80,
            criticalhitratebuff: 2,
            directhitratebuff: 0,
            dpsbuff: 0,
            delayreduction: 0
        },
        disembowel: {
            job: "Dragoon",
            name: "Disembowel",
            duration: 30,
            recast: 30,
            criticalhitratebuff: 0,
            directhitratebuff: 0,
            dpsbuff: 10,
            delayreduction: 0
        },
        lancecharge: {
            job: "Dragoon",
            name: "Lance Charge",
            duration: 20,
            recast: 90,
            criticalhitratebuff: 0,
            directhitratebuff: 0,
            dpsbuff: 15,
            delayreduction: 0
        },
        battlelittany: {
            job: "Dragoon",
            name: "Battle Littany",
            duration: 20,
            recast: 180,
            criticalhitratebuff: 10,
            directhitratebuff: 0,
            dpsbuff: 0,
            delayreduction: 0
        },
        dragonsight: {
            job: "Dragoon",
            name: "Dragon Sight",
            duration: 20,
            recast: 120,
            criticalhitratebuff: 0,
            directhitratebuff: 0,
            dpsbuff: 5,
            delayreduction: 0
        },
        chainstratagem: {
            job: "Scholar",
            name: "Chain Stratagem",
            duration: 15,
            recast: 120,
            criticalhitratebuff: 10,
            directhitratebuff: 0,
            dpsbuff: 0,
            delayreduction: 0
        },
        presenceofmind: {
            job: "White Mage",
            name: "Presence of Mind",
            duration: 15,
            recast: 150,
            criticalhitratebuff: 0,
            directhitratebuff: 0,
            dpsbuff: 0,
            delayreduction: 20
        },
        embolden: {
            job: "Red Mage",
            name: "Embolden",
            duration: 20,
            recast: 120,
            criticalhitratebuff: 0,
            directhitratebuff: 0,
            dpsbuff: 10,
            delayreduction: 0
        },
        huton: {
            job: "Ninja",
            name: "Huton",
            duration: 70,
            recast: 70,
            criticalhitratebuff: 0,
            directhitratebuff: 0,
            dpsbuff: 0,
            delayreduction: 15
        },
        trickattack: {
            job: "Ninja",
            name: "Trick Attack",
            duration: 15,
            recast: 60,
            criticalhitratebuff: 0,
            directhitratebuff: 0,
            dpsbuff: 5,
            delayreduction: 0
        },
        shifu: {
            job: "Samurai",
            name: "Shifu",
            duration: 40,
            recast: 40,
            criticalhitratebuff: 0,
            directhitratebuff: 0,
            dpsbuff: 0,
            delayreduction: 13
        },
        jinpu: {
            job: "Samurai",
            name: "Jinpu",
            duration: 40,
            recast: 40,
            criticalhitratebuff: 0,
            directhitratebuff: 0,
            dpsbuff: 13,
            delayreduction: 0
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

    //initialize jobs
    $scope.jobs = [
        {
            name: "Paladin",
            apModifier: 165,
            aaModifier: 110
        },
        {
            name: "Warrior",
            apModifier: 165,
            aaModifier: 110
        },
        {
            name: "Dark Knight",
            apModifier: 165,
            aaModifier: 110
        },
        {
            name: "Gunbreaker",
            apModifier: 165,
            aaModifier: 110
        },
        {
            name: "Monk",
            apModifier: 225,
            aaModifier: 110
        },
        {
            name: "Dragoon",
            apModifier: 225,
            aaModifier: 110
        },
        {
            name: "Ninja",
            apModifier: 225,
            aaModifier: 110
        },
        {
            name: "Samurai",
            apModifier: 225,
            aaModifier: 110
        },
        {
            name: "Bard",
            apModifier: 225,
            aaModifier: 110
        },
        {
            name: "Machinist",
            apModifier: 225,
            aaModifier: 110
        },
        {
            name: "Dancer",
            apModifier: 225,
            aaModifier: 110
        },
        {
            name: "Black Mage",
            apModifier: 225,
            aaModifier: 110
        },
        {
            name: "Summoner",
            apModifier: 225,
            aaModifier: 110
        },
        {
            name: "Red Mage",
            apModifier: 225,
            aaModifier: 110
        },
        {
            name: "White Mage",
            apModifier: 225,
            aaModifier: 110
        },
        {
            name: "Scholar",
            apModifier: 225,
            aaModifier: 110
        },
        {
            name: "Astrologian",
            apModifier: 225,
            aaModifier: 110
        }
    ]

    //these base stats/ratios are based on level 90
    //need to restructure to handle additional level ranges
    $scope.base_stats = {
        determinationRatio: 13.5714, //levelDiv / 140.
        tenacityRatio: 19,

        directhitRatio: 3.4545, //levelDiv / 550. apparently 550 coefficient since creation.
        directhitBaseDamage: 25,

        criticalRatio: 9.5, //levelDiv / 200
        criticalBaseRate: 5,
        criticalBaseDamage: 40,

        skillspeedBase: 2.5,

        levelMod: 1400,
        levelSecondary: 400,
        levelPrimary: 390,
        levelDiv: 1900
    }

    //-----------------------------------------------
    //helper models
    //-----------------------------------------------

    //default UI colors
    $scope.ui = {
        primary_main: $scope.ui_color.neutral,
        critical_main: $scope.ui_color.neutral,
        determination_main: $scope.ui_color.neutral,
        directhit_main: $scope.ui_color.neutral,
        skillspeed_main: $scope.ui_color.neutral,
        tenacity_main: $scope.ui_color.neutral,
        total_main: $scope.ui_color.neutral,

        primary_archive: $scope.ui_color.neutral,
        critical_archive: $scope.ui_color.neutral,
        determination_archive: $scope.ui_color.neutral,
        directhit_archive: $scope.ui_color.neutral,
        skillspeed_archive: $scope.ui_color.neutral,
        tenacity_archive: $scope.ui_color.neutral,
        total_archive: $scope.ui_color.neutral
    }

    //selected materia object
    $scope.materia_selected = {
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
    $scope.stats_main = {
        //buffs
        fightduration: 660,
        buff_windows: [],
        autoattack_timing: [],
        gcd_timing: [],

        //job
        job: $scope.jobs[0],

        //food
        food_selected: $scope.food[0],
        food_stat1: "",
        food_value1: "",
        food_stat2: "",
        food_value2: "",

        //individual buffs
        stormseye: false,
        innerrelease: false,

        huton: false,
        trickattack: false,

        shifu: false,
        jinpu: false,

        //raid buffs
        magesballad: false,
        magesballadShort: false,
        magesballadPriority: 1,
        armyspaeon: false,
        armyspaeonShort: true,
        armyspaeonPriority: 2,
        wanderersminuet: false,
        wanderersminuetShort: false,
        wanderersminuetPriority: 0,
        battlevoice: false,

        disembowel: false,
        lancecharge: false,
        battlelittany: false,
        dragonsight: false,

        embolden: false,
        presenceofmind: false,
        chainstratagem: false,

        //input stats
        weapondamage: 1,
        weapondelay: 0,
        weaponattack: 1,
        primarystat: 390,

        determination: 390,
        directhit: 400,
        tenacity: 400,
        critical: 400,
        skillspeed: 400,

        //calculated stats
        determinationDPS: 0,
        determinationDelta: 0,
        determinationMultiplier: 0,

        fweapondamage: 0,
        attackdamage: 0,
        primarystatDelta: 0,
        baseDamage: 0,
        baseAA: 0,

        autoattackHits: 0,
        autoattackDamageTotal: 0,
        autoattackDPS: 0,
        
        baseDPS: 0,
        baseDamageTotal: 0,
        baseTotal: 0,

        tenacityDPS: 0,
        tenacityDelta: 0,
        tenacityMultiplier: 0,

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
        skillspeedHits: 0,

        buffDelay: 0,
        buffDPS: 0,
        totaldps: 0
    }

    //call the stats_change function to initialize the dps calculations for the base stats
    //for the base stats
    $scope.stats_calculate();

    //initialize the archive model
    $scope.archive_save();

    //charts
    dps_app.dps_charts("chart_mainBuffTimeline", $scope.stats_main);
}