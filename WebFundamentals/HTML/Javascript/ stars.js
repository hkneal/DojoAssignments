function drawStars(num){
  var str = "";
  for(var i=0; i<num; i++){
    str += '*';
  }
  return str;
}

function padNum(num){
  var padding = "";
  for(var i=0; i<num; i++){
    padding += " ";
  }
  return padding;
}

function drawLeftStars(num){
  var str = "";
  str = drawStars(num)
  return str;
}

function drawRightStars(num){
  var str = "";
  var padding = "";
  var padLength = 75 - num;
  str = drawStars(num);
  if(padLength > 0){
    padding = padNum(padLength);
  }
  str = padding + str;
  return str;
}

function drawCenterStars(num){
  var str = "";
  var padding = "";
  var padLength = 75 - num;
  var padsides = Math.round(padLength / 2);
  str = drawStars(num);
  if(padLength > 0){
    padding = padNum(padsides);
  }
  str = padding + str + padding;
  return str;
}

str = drawLeftStars(55);
console.log(str);

str = drawRightStars(55);
console.log(str);

str = drawCenterStars(55);
console.log(str);

for(var j=0; j<50; j++){
  for(var i=1; i<75; i++){
    str = drawLeftStars(i);
    console.log(str);
  }

  for(var i=75; i>0; i--){
    str = drawLeftStars(i);
    console.log(str);
  }
}
