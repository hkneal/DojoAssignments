function posOutput(inputArray)
{
  for(var i=0; i<inputArray.length; i++)
  {
    if(inputArray[i] < 0)
    {
      inputArray[i] = inputArray[i] - inputArray[i];
    }
  }
  return inputArray;
}

console.log(posOutput([1,-3,5,-12,5,6,-99]));
