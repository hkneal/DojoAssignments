function getAvg(inArray){
var avg = sum = 0;
for(var i=0;i<inArray.length; i++)
  {
    sum = sum + inArray[i];
  }
  avg = sum / inArray.length;
  return avg;
}

console.log(getAvg([4,3,65,2,12,4,0]));
