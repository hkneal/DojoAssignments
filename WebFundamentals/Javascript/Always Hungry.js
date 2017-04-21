function alwaysHungry(inputArray)
{
  var flag = true;
  for(var i=0; i<inputArray.length; i++)
  {
    if(inputArray[i] == "food")
    {
      flag = false;
      console.log("yummy");
    }
  }
  if(Boolean(flag))
  {
    console.log("I'm hungry");
  }
}

alwaysHungry(["books","pencils","paper","pens"]);
