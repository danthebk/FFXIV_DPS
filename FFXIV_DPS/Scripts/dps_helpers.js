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

//one of the bard buffs should be cut off at 30 seconds
function bardSongDuration(duration, shortBool) {
    var d = duration;

    if (shortBool) {
        d = d - 15;
    }

    return d;
}

//-------------------------------------------------------------------------------------------------
//buff/chart global helper functions
//-------------------------------------------------------------------------------------------------

//durations can't extend outside the maximum fight duration
function maxDuration(duration, fightduration) {
    var end = duration;

    if (end > fightduration) {
        end = fightduration;
    }

    return end;
}

//easier to handle it in just seconds, so i'll create a function to convert it
function getDateObject(seconds) {
    var milliseconds = (seconds % 1) * 1000;
    var minutes = Math.floor(Math.floor(seconds) / 60);
    var seconds = Math.floor(seconds) % 60;

    return new Date(0, 0, 0, 0, minutes, seconds, milliseconds);
}