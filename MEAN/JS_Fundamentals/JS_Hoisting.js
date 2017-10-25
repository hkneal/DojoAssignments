//************* Number 1 ****************
console.log(hello);
var hello = ‘world’;

//Prediction :
//Syntax error on '' change to  ""

//***********  Number 2 ****************
var needle = ‘haystack’;
test();

function test(){
	var needle = ‘magnet’;
	console.log(needle);
}

//Prediction:
//Syntax error on '' change to  ""

//***********  Number 3 ****************
var brendan = ‘super cool’;
function print(){
	brendan = ‘only okay’;
	console.log(brendan);
}
console.log(brendan);
//Prediction:
//Syntax error on '' change to  ""

//***********  Number 4 ****************
var food = ‘chicken’;
console.log(food);
eat();
function eat(){
	food = ‘half-chicken’;
	console.log(food);
	var food = ‘gone’;
}
//Prediction:
//Syntax error on '' change to  ""

//***********  Number 5 ****************
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);

//Prediction:
//undefined

//***********  Number 6 ****************
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
//Prediction:
//undefined

//***********  Number 7 ****************
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);

//Prediction:
//"san jose"
//"seattle"
//"burbank"
//"san jose"
