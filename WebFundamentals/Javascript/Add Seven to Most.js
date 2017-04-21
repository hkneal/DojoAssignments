function addSeven(inputArray)
{
  var outputArray = [];
  for(var i = 1; i<inputArray.length; i++)
  {
    outputArray[i-1] = inputArray[i] + 7;
  }
  return outputArray;
}

console.log(addSeven([2,5,1,4,8,9,23]));
