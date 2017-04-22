function countDown(lowNum, highNum, mult)
{
  for(var i = highNum; i >= lowNum; i--)
  {
    if(i%mult == 0) {
      console.log(i);
    }
  }
}

countDown(2,9,3);
