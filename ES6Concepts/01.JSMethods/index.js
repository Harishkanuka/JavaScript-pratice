//fill Method
const arr = new Array(10);
const fillOutput = arr.fill('Hey Im fill Method');
console.log(fillOutput);

//forEach Method
const arr1 = [1, 3, 5, 8, 6, 9];
arr1.forEach(function (e) {
	console.log(e);
});
//Difference between forEach and Map Method is we can return from Map method but when we return from
//forEach method it will return 'undefined'

//Map Method
const arr2 = [1, 2, 3, 4, 5, 6, 7];
const mapOutput = arr2.map(function (e) {
	return e * 2;
});
console.log(mapOutput);
//Map Method return in a new Array AND previous array will be remain same as previous array
//Map return in a array format

//filter Method
const arr3 = [1, 2, 3, 4, 5, 6];
const filterOutput = arr3.filter(function (e) {
	return e > 3;
});
console.log(filterOutput);
