function double(inputArray)
{
  var outputArray = [];
  for(var i=0; i<inputArray.length; i++)
  {
    outputArray[i] = inputArray[i] * 2;
  }
  return outputArray;
}

console.log(double([2,4,6]));
