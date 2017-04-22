function whatReallyHappensToday()
{
  var disaster = false;
  var result = Math.random();
  //console.log(result);
  if(result <= .30)
  {
    console.log("A Meteor Strike will happen today!");
    disaster = true;
  }
  result = Math.random();
  if (result <= .25)
  {
    console.log("A Blizzard will happen today!");
    disaster = true;
  }
  result = Math.random();
  if (result <= .20)
  {
    console.log("An Earthquake will happen today!");
    disaster = true;
  }
  result = Math.random();
  if (result <= .15)
  {
    console.log("A Tsunami will happen today!");
    disaster = true;
  }
  result = Math.random();
  if (result <= .10)
  {
    console.log("A Volcanic Erruption will happen today!");
    disaster = true;
  }
  if(!disaster) console.log("Nothing Happened Today, Yeah!")
}

whatReallyHappensToday();
