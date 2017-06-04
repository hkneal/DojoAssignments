function messyMath(num){
  var sum = 0;
  for(var i=0; i<num+1; i++){
    if(i * 3 == num){
      return -1;
    }
    if(i % 3 == 0){
      continue;
    } else if (i % 7 == 0) {
      sum += i*2;
      continue;
    } else {
        sum += i;
    }
  }
  return sum;
}

console.log(messyMath(8));
