function greaterThan(inputArray)
{
  var secondValue = inputArray[1];
  var counter = 0;
  for(var i=0; i<inputArray.length; i++)
  {
      if(inputArray[i] > secondValue)
      {
        console.log(inputArray[i]);
        counter++;
      }
  }
  return counter;
}

console.log("There are " + greaterThan([1,3,5,7,9,13]) +" numbers greater than the second value.")
