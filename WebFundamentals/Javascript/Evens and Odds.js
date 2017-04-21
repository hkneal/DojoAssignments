function evensAndOdds(inputArray)
{
  var evenCount = 0;
  var oddCount = 0;
  for(var i=0; i<inputArray.length; i++)
  {
    if(inputArray[i] % 2 == 0)
    {
      evenCount++;
      oddCount = 0;
      if(evenCount >= 3)
      {
        console.log("Even more so!");
      }
    }
    else
    {
      oddCount++;
      evenCount = 0;
      if(oddCount >= 3)
      {
        console.log("That's odd!");
      }
    }
  }
}

evensAndOdds([1,1,1,1,2,2,2,2,1,1,1,2,2,1,4,5,7,3,2,5,6,77,8,10,2])
