function printRange(startNum, endNum, countBy){
  if(countBy == null) countBy = 1;
  if(endNum == null) {
    endNum = startNum;
    startNum = 0;
  }
  for(var i=startNum; i<endNum; i+=countBy){
    console.log(i);
  }
}

printRange(2,10,2);
printRange(-10,10,2);
printRange(1,10);
printRange(5);
