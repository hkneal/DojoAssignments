var hour = 9;
var min = 5;
var period = "PM";
var mornOrEve = "";
var mornOrAfterN = "";
var beforeLunch = false;

if(period == "AM"){
  if(hour < 12){
    mornOrEve = "in the morning";
  } else if(hour == 12)
    mornOrEve = "noon";
} else if(period == "PM") {
  if(hour < 5){
    mornOrEve = "in the afternoon";
  } else if(hour >=5 && hour < 12){
    mornOrEve = "in the evening";
  } else {
    mornOrEve = "midnight";
  }
}
if(min < 45){
  if(min < 5){
    console.log("It's just after " + hour + " " + mornOrEve);
  } else if(min == 5) {
    console.log("It's 5 after " + hour + " " + mornOrEve);
  } else if(min < 15 || min < 30 && min != 15) {
    console.log("It's " + min + " minutes after + " + hour + " " + mornOrEve);
  } else if(min == 15) {
    console.log("It's a quarter past " + hour + " " + mornOrEve);
  } else if(min == 30) {
    console.log("It's half past " + hour + " " + mornOrEve);
  }
} else if (min > 45) {
  if(hour == 11){
    if(mornOrEve == "in the morning"){
      mornOrEve = "noon";
    } else if (mornOrEve == "in the evening") {
      mornOrEve = "midnight";
    }
  } else if(mornOrEve == "noon") {
    mornOrEve = "in the evening";
  } else if (mornOrEve == "midnight") {
    mornOrEve = "in the morning";
  }
  console.log("It's almost " + (hour+1) + "  " + mornOrEve);
} else {
  console.log("It's a quarter till " + (hour+1) + "  " + mornOrEve);
}
