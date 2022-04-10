dps_app.dps_calculator = function ($scope) {
    $scope.fPTC = function(potency) {
        return (potency / 100);
    }

    $scope.fD = function (potency, determinationDelta, atk, primaryStatDelta) {
        return Math.floor(Math.floor(Math.floor(potency * $scope.fDET(determinationDelta) * $scope.fAP(atk, primaryStatDelta)) / 100) / 1000);
    }

    $scope.fWD = function (weaponDamage, primaryStatDelta) {
        return Math.floor(($scope.base_stats.levelPrimary * primaryStatDelta / 1000) + weaponDamage);
    }

    //modifier = 115 for tanks, 165 other
    $scope.fAP = function(atk, primaryStatDelta) {
        return Math.floor((atk * primaryStatDelta / $scope.base_stats.levelPrimary) + 100) / 1000;
    }

    $scope.fDET = function(determinationDelta) {
        return Math.floor(140 * determinationDelta / $scope.base_stats.levelDiv + 1000) / 1000;
    }

    $scope.fTNC = function(tenacityDelta) {
        return Math.floor(100 * tenacityDelta / $scope.base_stats.levelDiv + 1000) / 1000;
    }

    $scope.fSPD = function(skillspeedDelta) {
        return Math.floor(130 * skillspeedDelta / $scope.base_stats.levelDiv + 1000) / 1000;
    }

    $scope.fCHR = function(criticalhitrateDelta) {
        return Math.floor(200 * criticalhitrateDelta / $scope.base_stats.levelDiv + 1400) / 1000;
    }

    $scope.fDEF = function(defense) {
        return Math.floor(15 * defense / $scope.base_stats.levelDiv) / 100;
    }

    $scope.fBLK = function(block) {
        return Math.floor(30 * block / $scope.base_stats.levelDiv + 10) / 100;
    }

    $scope.fAUTO = function(weaponDamage, weaponDelay, primaryStatDelta) {
        return Math.floor($scope.fWD(weaponDamage, primaryStatDelta) * (weaponDelay / 3));
    }

    $scope.fAA = function (stats) {
        var aa = Math.floor(stats.job.aaModifier * $scope.fAP(stats.job.apModifier, stats.primarystatDelta) * $scope.fDET(stats.determinationDelta));
        //aa = Math.floor(aa / 100);
        //aa = Math.floor(aa / 1000);

        aa = Math.floor(aa * $scope.fTNC(stats.tenacityDelta));
        //aa = Math.floor(aa / 1000);

        aa = Math.floor(aa * $scope.fSPD(stats.skillspeedDelta));
        aa = Math.floor(aa * $scope.fAUTO(stats.weapondamage, stats.weapondelay, stats.primarystatDelta));
        aa = Math.floor(aa / 100);
        aa = Math.floor(aa * 1); // no idea what trait is? probably job traits
        
        return aa;
    }

    $scope.fBD = function (stats) {
        var bd = Math.floor(100 * $scope.fAP(stats.job.apModifier, stats.primarystatDelta) * $scope.fDET(stats.determinationDelta));

        bd = Math.floor(bd * $scope.fTNC(stats.tenacityDelta));

        bd = Math.floor(bd * $scope.fWD(stats.weapondamage, stats.primarystatDelta));
        bd = Math.floor(bd / 100);
        bd = Math.floor(bd * 1); // no idea what trait is? probably job traits

        return bd;
    }

    $scope.fHMP = function(healingmagicpotency) {
        return Math.floor(100 * (healingmagicpotency - $scope.base_stats.levelPrimary) / $scope.base_stats.levelSecondary + 100) / 100;
    }
}