// Challenge #1 **********************
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
for(let i=0; i<students.length; i++){
  let student = ""
  for(let key in students[i]){
    student += key[0].toUpperCase() + key.substring(1) + ': ' + students[i][key] + " ";
  }
  console.log(student);
}

// Challenge #2 ***************************
console.log("*******************************");
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 for(let group in users){
   let count = 1;
   console.log(group.toUpperCase());
   for(let i=0; i<users[group].length; i++){
    let person =  count + " - ";
    let nameLen = 0;
    let myArray = [];
    for(let obj in users[group][i]){
        myArray.push(users[group][i][obj]);
        nameLen += users[group][i][obj].length;
    }
    person += myArray[1].toUpperCase() + ", " + myArray[0].toUpperCase() + " - " + nameLen;
    count++;
    console.log(person);
   }
 }
