function pullSlot(numQuarters, numGames, thatsEnough){
  var pullResult = pullCount = 0;
  if(numQuarters == 0) {
    console.log("It takes 1 quarter to play!");
    return numQuarters;
  }
  for(var i=0; i<numGames; i++){
    pullCount++;
    numQuarters--;
    pullResult = Math.floor(Math.random()*100);
    if(pullResult == 99) {
      var winnings = Math.floor(Math.random()*100);
      if(winnings < 50) winnings = 50;
      numQuarters = numQuarters + winnings;
      console.log("We have a Winner, you have won " + winnings + " Quarters!!");
    }
    if(numQuarters >= thatsEnough) {
      console.log("I'm going home now, I've won enough!");
      break;
    }
    // console.log(pullResult);
    if(numQuarters == 0) {
      console.log("It takes 1 quarter to play!");
      break;
    }
  }
  console.log("You played " + pullCount + " Times!");
  return numQuarters;
}
var remaining = 0;
console.log("I have " + pullSlot(190,190,200) + " quarters now!");
