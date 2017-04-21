function shiftArray(inputArray)
{
  var outputArray = [];
  for(var i=1; i<inputArray.length; i++)
  {
    if(i == inputArray.length-1) {
      outputArray[i] = 0;
    }
    else {
      outputArray[i] = inputArray[i-1];
    }
  }
  console.log(outputArray);
}

shiftArray([3,2,6,7,1,0,-3]);
