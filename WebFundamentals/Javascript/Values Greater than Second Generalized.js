var counter = 0;
function valuesGreaterThan(inputArray)
{
  var outputArray = [];
  var secondValue = inputArray[1];
  for(var i=0; i<inputArray.length; i++)
  {
    if(inputArray[i] > secondValue)
    {
      outputArray.push(inputArray[i]);
    }
  }
  return outputArray;
}

var greaterArray = valuesGreaterThan([3,4,7,2,1,11])
console.log(greaterArray.length);
