function printLow(inputArray)
{
  var lowestNum = inputArray[0];
  var highestNum = inputArray[0];
  for(var i=1; i<inputArray.length; i++)
  {
    if(inputArray[i] < lowestNum)
    {
      lowestNum = inputArray[i];
    }
    else if (inputArray[i] > highestNum)
    {
        highestNum = inputArray[i];
    }
  }
  console.log(lowestNum);
  return highestNum;
}

var highest = printLow([3,2,6,7,1,0]);
