function getOddArray(){
  var oddArray = [];
  var j = 0;
  for(var i=1;i<=255;i=i+2){
      oddArray[j] = i;
      j++;
    }
  return oddArray;
}

console.log(getOddArray());
