
function ThreesFives(){
  var sum = 0;
  for(var i=100;i<=4000000; i++){
    if((i % 3 == 0) && (i % 5 == 0)) continue;
    else if((i % 3 == 0) || (i % 5 == 0)) {
    sum = sum + i;
    }
  }
  console.log("The Sum is: " + sum);
}

function betterThreesFives(start, end){
  var sum = 0;
  for(var i=start;i<=end; i++){
    if((i % 3 == 0) && (i % 5 == 0)) continue;
    else if((i % 3 == 0) || (i % 5 == 0)) {
    sum = sum + i;
    }
  }
  console.log("The Sum is: " + sum);
}


ThreesFives();
betterThreesFives(100,4000000);
