function fibonacci(num){
  if(num <= 1){
    return num;
  } else {
  return fibonacci(num-1) + fibonacci(num-2);
  }
}

// console.log(fibonacci(40));


/* without using recursion */
function fibonacci2(num){
  var x = 0;
  var y = z = 1;
  var sum = 0;
  for(var i = 0; i < num; i++){
    x = y;
    y = z;
    z = x + y;
    // console.log(x);
    // if(x % 2 == 0){
    //   sum += x;
    // }
  }
  return x;
}

console.log(fibonacci2(40));
