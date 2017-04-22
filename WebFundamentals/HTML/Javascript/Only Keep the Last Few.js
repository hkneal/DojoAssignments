function keepLast(inputArray, num)
{
  var numOfPops = inputArray.length - num;
  for(i=0; i<num; i++)
  {
    inputArray[i] = inputArray[inputArray.length-num+i];
  }
  for(i=0; i<numOfPops; i++)
  {
    inputArray.pop();
  }
  return inputArray;
}

console.log(keepLast([2,3,6,8,10], 3));
