function clockHandAngles(numSec){
  var hourAngle = minAngle = secAngle = weekAngle = weekDegree = 0;
  var numWeeks = numDays = numHours = numMins = 0;
  numDays = numSec / 86400;
  // determine number of hours and mins
  numHours = numSec / 3600;
  // determine the number of days & reduce hours to 24hours or less
  while(numHours >= 24){
    numHours = numHours - 24;
  }
  numMins = (numHours%1)*60;
  numSec = (numMins%1)*60;
  // 30 degrees per hour; 6 degrees per min & second;
  hourAngle = numHours * 30;
  minAngle = numMins * 6;
  secAngle = numSec * 6;
  console.log("Hour hand: " + hourAngle + " degs." + " Minute hand: " +
   minAngle + " degs." + " Second hand: " + secAngle + " degs.");

   while(numDays >= 7){
     numDays = numDays - 7;
   }
  weekDayDegree = 360 / 7;
  weekAngle = numDays * weekDayDegree;
  console.log("Week hand: " + weekAngle + " degs.");
}

clockHandAngles(119730);
