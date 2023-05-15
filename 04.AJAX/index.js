/* AJAX = Asynchronous JavaScript And XML.
AJAX is not a programming language.
AJAX just uses a combination of:
A browser built-in XMLHttpRequest object (to request data from a web server)
JavaScript and HTML DOM (to display or use the data) */

/* AJAX allows web pages to be updated asynchronously by exchanging data with a web server
 behind the scenes. This means that it is possible to update parts of a web page, 
 without reloading the whole page. */

/* ----------------------------Http Methods---------------------------------
1. Get Method
GET is used to request data from a specified resource.
2.Post Method
POST is used to send data to a server to create/update a resource.
3.Put Method
PUT is used to send data to a server to create/update a resource.
4. Delete Method
The DELETE method deletes the specified resource.
*/
/* ------------------------------HTTP Status Codes--------------------------
1.200+ Network call is successful
2.300+ Network call is redirected to the server
3.400+ client side error
4.500+ server side error
*/
/* In How many ways  we can get data from backend
1.XMLHttpRequest(xhr)// This method is outdated
2.Promises
3.fetch
4.async and await
*/

const xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
xhr.onload = () => {
	if (xhr.status === 200) {
		console.log(xhr.responseText);
	}
};
xhr.send();
