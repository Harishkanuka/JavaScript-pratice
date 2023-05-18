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

/* 
What are the predefined Objects?
1.Document --> Object literal
2.Math --> Object literal
3.Date --> Object Constructor
4.Event --> Object literal
5.Window --> Object literal
6.Promise --> Object constructor
 */

//How to add behavior to data in the objects
let product3 = {
	name: 'MAC Book',
	model: 'Air',
	description: 'Mac Book air 2020 ',
	price: 100000,
	details: function () {
		// If you use arrow functions here it will points to Window object
		//Normal function points to function object
		return `
		<h1>${this.name}</h1>
		<p>${this.description}</p>
		<p>${this.price}</p>
		<button>Add To Cart</button>
		`;
	},
	gstCalc: function (gstPercent) {
		return this.price + (this.price * gstPercent) / 100;
	},
};
document.body.innerHTML = product3.details();
console.log(product3.gstCalc(10));

/* 
1. Procedure Oriented Programming(POP)
This is entirely dependent on functions to do any specific tasks
2. Object Oriented Programming(OOP)
This is dependent on Objects

Object Oriented Programming principles
1. Data Encapsulation
2.Data Abstraction
3.Polymorphism
4.Inheritance
--------->1. What is Data Encapsulation
Data encapsulation in JavaScript refers to the concept of bundling data and related functions into 
a single unit, called an object. It allows you to control the access to the data, ensuring that it
is accessed and modified only through predefined methods.

In simpler terms, think of a data capsule. It contains the data you want to keep private,
like a secret message. You can only interact with this message through a small opening (methods)
provided by the capsule. This way, the data stays protected, and you can control how it is used 
or changed.

Encapsulation helps in organizing and managing code by keeping related data and functions together,
reducing complexity and increasing reusability.

--------->02.What is Data Abstraction
Data abstraction in JavaScript refers to the concept of hiding complex implementation details and exposing only the essential features or
functionalities of an object. It allows you to focus on what an object does rather than how it does it.

To put it simply, imagine a vending machine. You don't need to know the intricate mechanisms inside the
machine or how it dispenses snacks. All you care about is selecting an item and getting it. The vending 
machine abstracts away the complicated inner workings and presents a simple interface for interaction.

Similarly, data abstraction in JavaScript involves creating objects that provide a clear and simplified
interface for working with them. It allows you to hide unnecessary details and present only the essential
methods and properties that users need to interact with.

By abstracting away complex implementation details, data abstraction promotes code simplicity, 
modularity, and ease of use. It also helps in reducing code dependencies and makes it easier to modify 
or replace the underlying implementation without affecting the code that uses the object.

In essence, data abstraction allows you to focus on what an object does rather than how it does it,
making your code more intuitive and maintainable.

----------->03.Polymorphism
Polymorphism in JavaScript refers to the ability of objects to exhibit different behaviors or
 have different forms based on the context in which they are used.

Think of a shape—like a square, circle, or triangle. Each shape has its own unique properties and 
methods, such as calculating its area or perimeter. Now, imagine a function that takes a shape as 
an input and performs some action, like displaying its area. Polymorphism allows you to pass different
shapes to this function, and it will automatically know how to calculate and display the area based on
the specific shape passed to it.

In simpler terms, polymorphism is like having multiple objects with different shapes but similar
actions. They can be used interchangeably in a context that expects a certain behavior or method.
Each object may implement the behavior differently, but they can all be treated uniformly by the 
code that uses them.

Polymorphism enables code reusability, flexibility, and modularity. It allows you to write generic 
code that can work with different types of objects without needing to know their specific implementation 
details. This simplifies code maintenance and promotes scalability.

-------------->04.Inheritance
Inheritance in JavaScript refers to the ability of an object (child) to inherit properties and 
methods from another object (parent). It allows you to create a hierarchy of objects, where the 
child object can access and use the functionalities defined in the parent object.

Inheritance helps in code reuse and promotes the principle of "don't repeat yourself." Instead of 
duplicating code in multiple objects, you can define common properties and methods in a parent object,
 and the child objects automatically inherit them.

The child object can then extend or modify the inherited properties and methods, adding its own
unique characteristics or behaviors. This allows you to create specialized objects that inherit 
and build upon the functionalities provided by the parent object.

Inheritance provides a way to create more modular and maintainable code by organizing objects into a
hierarchy and reusing common functionalities. It allows you to define a base set of behaviors in the 
parent object and build upon it in the child objects, resulting in more efficient and structured 
JavaScript applications.

---------------> Different types of Inheritance --------------------------------
1. Single Inheritance
2. Multi level Inheritance
3. Multiple Inheritance
4. Hybrid Inheritance
5. Heirachical Inheritance
*** But In JavaScript only Single Inheritance is supported or used
*/
