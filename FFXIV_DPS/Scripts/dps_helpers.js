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