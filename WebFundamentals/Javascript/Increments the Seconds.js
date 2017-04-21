function increment(inputArray)
{
  for(var i=0; i<inputArray.length; i++)
  {
    if(i % 2 != 0)
    {
      inputArray[i] = inputArray[i] + 1;
    }
  }
  for(var i=0; i<inputArray.length; i++)
  {
    console.log(inputArray[i]);
  }
  return inputArray;
}

console.log(increment([1,4,2,6,9,3]));
