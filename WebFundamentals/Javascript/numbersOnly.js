function numbersOnly(inputArray){
  var outputArray = [];
  var space = 0;
  for(var i=0; i<inputArray.length; i++){
    if(typeof inputArray[i] === "number"){
      outputArray[space] = inputArray[i];
      space++;
    }
  }
  return outputArray;
}
function numbersOnlyC(inputArray){
  var numRemaining = inputArray.length-1;
  var lastValue = inputArray.length-1;
  for(var i=0; i<inputArray.length; i++){
    if(typeof inputArray[i] != "number"){
      numRemaining--;
      if(i === lastValue) {
        inputArray.pop();
      }
      else {
        //Shift then array to the left the pop the last value (non number)
        for(var j=i; j<inputArray.length-1; j++){
          inputArray[j] = inputArray[j+1];
          }
        inputArray.pop();
        lastValue--;
        i--;
      }
    }
  }
  //If there are numbers still in the array then return it.
  if(numRemaining > 0){
    return inputArray;
  }
  return "No values were Numbers";
}

console.log(numbersOnly(["Hello", 5,-6,.34,"Two",0,"one"]));
console.log(numbersOnlyC(["Hello", 5,-6,.34,"Two",0,"one"]));
console.log(numbersOnlyC(["Mu", "Hello", 4, 3, "one", "two", 0]));
console.log(numbersOnlyC([1, 1000, 4, 3, -8, 99, 0]));
console.log(numbersOnlyC(["Mu", "Hello", "4", "uu", "one", "two", "none"]));
