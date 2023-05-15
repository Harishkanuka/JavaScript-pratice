//fill, map, filter,and forEach takes single argument

const arr = [1, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const mapOutput = arr.map((e) => {
	return e * 2;
});
console.log(mapOutput);

//Reduce Method
//reduce method takes two argument
//1.call back function
//2.initial value
// where the call back function expects two parameters
//1.accumulator
//2.current value
const reduceOutput = arr.reduce((acc, curr, index) => {
	acc[`keys${index + 1}`] = curr;
	return acc;
}, {});
console.log(reduceOutput);
// We can use  reduce method as Map metho
const mapOutput2 = arr.reduce((acc, curr, index) => {
	acc.push(curr);
	return acc;
}, []);
console.log(mapOutput2);

//for in and for of loops

const array = [2, 3, 4, 6, 7, 8];

const obj = {
	name: 'Harish',
	place: 'Mallapur',
};
//for of loop is used to  iterate over the array only not for objects

for (let i = 0; i < array.length; i++) {
	console.log(array[i]);
}

//for of loop is used to iterate over the array
for (let i of array) {
	console.log(i);
}

//for in loop is used to iterate over the objects as well as arrays
for (let i in obj) {
	console.log(obj[i]);
}
//using for in method to iterate over the arrayss also
for (let i in array) {
	console.log(array[i]);
	//here we used array[i] to iterate over but in for of loop we used (i) to iterate over array.
}

// Arrays and objects Destructuring

//Arrays Destructuring
const arr2 = ['Instagram', 'Twitter', 'Facebook', 'Google'];
//To get this elements from array
console.log(arr2[2]);
console.log(arr2[3]);
// by using array destructuring we can make it simple
const [first, second, third, fourth] = arr2;
//Now we can iterate over the array after array destructuring
console.log(first);
console.log(second);

//Object Destructuring
const obj2 = {
	firstName: 'Harish',
	lastName: 'Kanuka',
	Email: 'harish@gmail.com',
};
//before object destructuring we are iterating over the array
console.log(obj2.firstName);
console.log(obj2.lastName);
//Now we are destructuring objects
const { firstName, lastName, email } = obj2; //This should be same as keys in objects
console.log(firstName);
console.log(lastName);

// Nested objects destructuring
const obj3 = {
	Name: 'Harish',
	// lastName: 'Kanuka',
	Email: 'harish@gmail.com',
	phone: 1233543346,
	address: {
		street: 'Bustand Street',
		HNo: '123 Main Street',
	},
};
//before object destructuring
console.log(obj3.address.street);
//To destructure this
const {
	Name,
	phone,
	address: { street, HNo },
} = obj3;
//After object destructuring
console.log(HNo);
