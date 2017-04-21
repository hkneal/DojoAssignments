var reward = 0;
var days = 0;
var multiple = .01;
for(var i=0; i<30; i++){
  days++;
  reward = reward + multiple;
  // console.log("days=" + days);
  // console.log("reward=" + reward);
  // console.log("multiple=" + multiple);
  multiple *=2;
}
console.log("In " + days + " days the reward is $" + reward);

function howMany(stopValue){
var reward = 0;
var days = 0;
var multiple = .01;
for(var i=0; i<Infinity; i++){
  days++;
  reward = reward + multiple;
  multiple *=2;
  if(reward >= stopValue){
    break;
    }
  }
  return days;
}

console.log("It will take " + howMany(10000) + " days to reach $10,000.");
console.log("It will take " + howMany(100000) + " days to reach $100,000.");
console.log("It will take " + howMany(1000000) + " days to reach $1,000,000.");
console.log("It will take " + howMany(10000000) + " days to reach $10,000,000.");
console.log("It will take " + howMany(100000000) + " days to reach $100,000,000.");
console.log("It will take " + howMany(1000000000) + " days to reach $1,000,000,000.");
console.log("It will take " + howMany(Infinity) + " days to reach an Infinite Amount!");
