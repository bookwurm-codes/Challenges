// Given a time in the format of hour and minute,
//  calculate the angle of the hour and minute hand on a clock.

// Inputs
//  hour: 12-hour format
//  minute: minute [0, 60)
function calcHandsAngle(hour, minute) {

    // find hour hand in between numbers;
    hourPos = hour + minute/60;

    hourAngle = 360*hourPos/12;
    minuteAngle = 360*minute/60;

    // Angle between - handle negatives and 
    diff = Math.abs(hourAngle - minuteAngle);
    if (diff > 180) {
        diff = 360 - diff;
    }
    return diff;

}

console.log(`3:30\t${calcHandsAngle(3, 30)} degrees`);
console.log(`9:45\t${calcHandsAngle(9, 45)} degrees`);
console.log(`12:30\t${calcHandsAngle(12, 30)} degrees`);
console.log(`12:00\t${calcHandsAngle(12, 0)} degrees`);