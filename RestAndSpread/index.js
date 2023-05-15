// In JavaScript, the spread and rest operators are used to manipulate arrays and objects

const arr = [1, 2, 3, 4, 5, 6];
const [first, second, third, ...other] = arr; //Here we are using the rest operator
console.log(first);
console.log(second);
console.log(other);

// rest operator in functions
// The rest operator, also denoted by three dots (...),
// is used in function parameters to represent an indefinite number of arguments as an array.
// It allows you to pass multiple arguments to a function without explicitly defining them.

let myFun = function (institueName, location, ...rest) {
	console.log(institueName, location);
	console.log(rest);
};
myFun('10000 Coders', 'Hyderabad', '1000th batch', '124');

//Spread operator
//The spread operator (denoted by three dots: ...) allows you to expand an iterable (like an array)
//  into individual elements. It is primarily used to make copies of arrays, concatenate arrays,
//  or pass multiple elements as arguments to a function.
const details = ['10000 Coders', 'Hyderabad', '1000th batch', '124'];
let fun = function (institueName, location, ...rest) {
	// here ... is rest operator
	console.log(institueName, location);
	console.log(rest);
};
fun(...details); //This a spread operator

//You can combine multiple arrays into a single array using the spread operator.
const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9];
const array3 = [...array1, ...array2];
console.log(array3);
