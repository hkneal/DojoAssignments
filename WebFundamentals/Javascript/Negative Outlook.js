function negativeOutput(inputArray)
{
  var outputArray = [];
  for(var i=0; i<inputArray.length; i++)
  {
    if(inputArray[i] > 0)
    {
      outputArray[i] = inputArray[i] - inputArray[i] - inputArray[i];
    }
    else outputArray[i] = inputArray[i];
  }
  return outputArray;
}

console.log(negativeOutput([1,-3,5]));
