function minMaxAvg(inputArray)
{
  var lowestNum = inputArray[0];
  var highestNum = inputArray[0];
  var sum = avg = 0;
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
    sum = sum + inputArray[i];
  }
  avg = sum / inputArray.length;
  console.log("max num =" + highestNum + " min num =" + lowestNum + " avg =" + avg);
}

var highest = minMaxAvg([3,2,6,7,1,0,-3]);
