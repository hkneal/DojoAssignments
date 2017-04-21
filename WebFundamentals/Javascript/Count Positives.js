var counter = 0;
function countPositives(inputArray)
{
  for(var i=0; i<inputArray.length; i++)
  {
    if(inputArray[i] >= 0 )
    {
      counter++;
    }
  }
  inputArray[inputArray.length-1] = counter;
  return inputArray;
}

console.log(countPositives([-1,1,1,1]));
