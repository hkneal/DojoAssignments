var students = [
  {first_name: 'Michael', last_name: 'Jordan'},
  {first_name: 'John', last_name: 'Rosales'},
  {first_name: 'Mark', last_name: 'Guillen'},
  {first_name: 'KB', last_name: 'Tonel'}
]

for(var i=0; i<students.length; i++){
  console.log(students[i].first_name + " " + students[i].last_name);
}
// for(var student in students){
//   console.log(student.first_name);
// }
console.log("++++++++++++++");
var users = {
 'Students': [
  {first_name: 'Michael', last_name: 'Jordan'},
  {first_name: 'John', last_name: 'Rosales'},
  {first_name: 'Mark', last_name: 'Guillen'},
  {first_name: 'KB', last_name: 'Tonel'}
  ],
  'Instructors': [
    {first_name: 'Michael', last_name: 'Choi'},
    {first_name: 'Martin', last_name: 'Puryear'}
  ]
}

console.log("Students");
for(var i=0; i<users.Students.length; i++){
  var name = users.Students[i].first_name + users.Students[i].last_name;
  var length = name.length;
  console.log(i+1 + " - " +users.Students[i].first_name + " " + users.Students[i].last_name + " " + length);
}
console.log("Instructors");
for(var i=0; i<users.Instructors.length; i++){
  var name = users.Instructors[i].first_name + users.Instructors[i].last_name;
  var length = name.length;
  console.log(i+1 + " - " +users.Instructors[i].first_name + " " + users.Instructors[i].last_name + " " + length);
}
// for(var user in users){
//   console.log(user);
// }
