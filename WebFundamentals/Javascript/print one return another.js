function printReturn(inputArray)
{
  var firstOdd = 0;
  console.log(inputArray[inputArray.length-2]);
  for(var i=0; i<inputArray.length; i++)
  {
    if((inputArray[i] % 3 == 0 && inputArray[i] %2 != 0) || inputArray[i] == 1)
    {
      firstOdd = inputArray[i];
      break;
    }
  }
  return firstOdd;
}

var oddNum = printReturn([2,4,6,3,5,7,8]);
console.log(oddNum);
