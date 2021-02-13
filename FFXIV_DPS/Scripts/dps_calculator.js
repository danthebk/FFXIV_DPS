dps_app.dps_calculator = function ($scope) {
    $scope.fPTC = function(potency) {
        return (potency / 100);
    }

    $scope.fWD = function (weaponDamage, primaryStatDelta) {
        return Math.floor(($scope.base_stats.levelPrimary * primaryStatDelta / 1000) + weaponDamage);
    }

    $scope.fAP = function(weaponAttack, primaryStatDelta) {
        return Math.floor((125 * primaryStatDelta / $scope.base_stats.levelPrimary) + 100) / 1000;
    }

    $scope.fDET = function(determinationDelta) {
        return Math.floor(130 * determinationDelta / $scope.base_stats.levelDiv + 1000) / 1000;
    }

    $scope.fTNC = function(tenacityDelta) {
        return Math.floor(100 * tenacityDelta / $scope.base_stats.levelDiv + 1000) / 1000;
    }

    $scope.fSS = function(skillspeedDelta) {
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

    $scope.fAA = function(weaponDamage, weaponDelay, primaryStatDelta) {
        return Math.floor($scope.fWD(weaponDamage, primaryStatDelta) * (weaponDelay / 3));
    }

    $scope.fHMP = function(healingmagicpotency) {
        return Math.floor(100 * (healingmagicpotency - $scope.base_stats.levelPrimary) / $scope.base_stats.levelSecondary + 100) / 100;
    }
}