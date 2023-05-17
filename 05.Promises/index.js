//-------------------Method 1 to fetch data -------------------------------------

const myPromises = new Promise((reslove, reject) => {
	const alpha = 13;
	if (alpha === 13) {
		reslove('Mission Accomplished');
	} else {
		reject('Mission Failed');
	}
});
console.log(myPromises);

// then and Catch methods are used for error handling
// then is for success & catch is for error

myPromises
	.then((message) => {
		console.log(message);
	})
	.catch((message) => {
		console.log(message);
	});
// Attaching handlers to promises is known as promise chaning

//--------------------------Fetch Method------------------------
//it is a browser method which is used to make network call for GET, POST,PUT and Delete the data
// return type of fetch is Promise

//------------------------------Method 2 to fetch data------------------------
let output = fetch('https://fakestoreapi.com/products', {
	method: 'GET',
});
output
	.then((res) => {
		console.log(res);
		const output = res.json();
		return output;
	})
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});
//---------------------------Method 3  to fetch data-------------------------------
// Async and Await
const myResponse = async function () {
	try {
		const response = await fetch('https://fakestoreapi.com/products', {
			method: 'GET',
		});
		const data = await response.json();
		console.log(data);
	} catch (err) {
		console.log('Error fetching');
	}
};
myResponse();
