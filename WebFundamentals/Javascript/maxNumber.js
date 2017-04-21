function maxNum(inputArray){
var max = inputArray[0];
for(var i=0;i<inputArray.length;i++)
{
  if(inputArray[i]>max) max=inputArray[i];
}
return max;
}

console.log(maxNum([3,7,1,0,9,3,2,11,355,3,2,9]));
