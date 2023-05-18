//How to create Objects
const product = {
	name: 'MAC Book',
	model: 'Air',
	description: 'Mac Book air 2020 ',
	price: 100000,
};
//Why do we need Objects?
//We need to store larger and meaningful Data
// How to retrieve data from Objects?
// Using dot operator
//syntax: objectName.objectPropertyName
console.log(product.price);

//Method 2
// Using square brackets notation
// Syntax:ObjectNam['propertyName']
console.log(product['description']);

//How many ways you can create an object
//01. Literal  Way
const product2 = {
	name: 'MAC Book',
	model: 'Air',
	description: 'Mac Book air 2020 ',
	price: 100000,
};
// 02. Constructor Way
function Cart() {
	console.log(this); //Here this points to Window object
	this.items = [
		{
			name: 'Iphone',
			model: '12Pro',
			description: 'Iphone 12Pro Description',
			price: 55000,
		},
		{
			name: 'Iphone',
			model: '13Pro',
			description: 'Iphone 13Pro Description',
			price: 65000,
		},
		{
			name: 'Iphone',
			model: '14Pro',
			description: 'Iphone 14Pro Description',
			price: 75000,
		},
	];
}

//Differences between Normal function and Constructor function
//Constructor function name Starts with Capital letter
//To retrieve data from constructor function We need to create a new instance

const cObj = new Cart();
console.log(cObj.items);

//Difference between object Literal and Object Constructor
//When you are creating a objects using object literal are called Singleton.(Each time a single object)
//Object literal Way for each object
let student1 = {
	name: 'Manish',
	age: 24,
	course: 'React',
};
//If We have create for other student (We need to repeat the same process again)
let student2 = {
	name: 'Virat',
	age: 25,
	course: 'Full stack',
};
let student3 = {
	name: 'Virat',
	age: 25,
	course: 'Full stack',
};
// If we have to  do same process with object Construtor way
// Firstly we need to create  construtor function for student

function Students(name, course, age) {
	this.name = name;
	this.course = course;
	this.age = age;
}
// Now create instance for Student constructor
const student4 = new Students('Dhoni', 'React', 33);
console.log(student4);
const student5 = new Students('Virat', 'Full stack', 29);
console.log(student5);
