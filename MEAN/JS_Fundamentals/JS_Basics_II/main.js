

function magic_multiply(x, y){
    if(x == 0 && y == 0){
      x = "All inputs 0"
    }
    else if Array.isArray(x) {
      for(var i=0; i<x.length; i++){
        x[i] = x[i] * y;
      }
    }
    else{
      x = x * y;
    }
    return x;
}


let test1 = magic_multiply(5, 2);
console.log(test1);
// => 10

let test2 = magic_multiply(0, 0);
console.log(test2);
// => "All inputs 0"

let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);
// => [2, 4, 6]
