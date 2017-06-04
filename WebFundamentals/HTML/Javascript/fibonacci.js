function fibonacci(num){
  if(num <= 1){
    return num;
  } else {
  return fibonacci(num-1) + fibonacci(num-2);
  }
}

console.log(fibonacci(6));


/* without using recursion */
function fibonacci2(num){
  var x = 0;
  var y = z = 1;
  for(var i = 0; i < num; i++){
    x = y;
    y = z;
    z = x + y;
  }
  return x;
}

console.log(fibonacci2(6));
