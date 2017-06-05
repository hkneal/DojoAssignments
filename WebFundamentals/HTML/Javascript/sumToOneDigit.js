function sumToOne(num){
  var numStr = String(num);
  var numlen = numStr.length;
  if(numlen == 1){
    return Number(numStr);
  } else {
    var sum = 0;
    for(var i=0; i<numlen; i++){
      sum += Number(numStr.charAt(i));
    }
    return sumToOne(sum)
  }
}

console.log(sumToOne(1928));
