const BASE_URL =
  "https://dogapi.dog/api/v2/";
const fact1p = document.getElementById("fact1");
const btn = document.querySelector("#btn");


let promise = fetch(BASE_URL+"breeds");
console.log(promise);
promise.then((response) => {
    console.log(response);
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});

// the response we get here isnt the data we want, its the response object, we need to convert it to json
const getFacts = async () => {
    let response = await fetch(BASE_URL+"breeds");
    console.log(response);
    let data = await response.json();
    // json() is a method that is used to convert the response object to json
    console.log(data);
    let random = Math.floor(Math.random() * data['data'].length);
    console.log(data['data'][random]);
    fact1p.innerText = data['data'][random]['attributes']['description'];
    
};

// getFacts();

btn.addEventListener("click", getFacts);
// before JSON, we had AJAX(Asynchronous Javascript & XML) which was a way to make requests to the server without refreshing the page

// XML was used to send data back and forth between the server and the client, but it wasnt very readable

// JSON is a way to store and transfer data, it is a text format that is completely language independent but uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others. These properties make JSON an ideal data-interchange language. 

// HTTP Verbs - GET, POST, PUT, DELETE

// GET - Retrieve data from the server
// POST - Send data to the server
// PUT - Update data on the server
// PATCH - Update partial resources
// DELETE - Delete data from the server
// CONNECT - Establish a connection to the server
// OPTIONS - Get information about the communication options available

// Response Status Codes - 200, 201, 204, 400, 401, 403, 404, 405, 500

// 100-199 - Informational Responses - The request was received, continuing process

// 200-299 - Success
// 200 - OK
// 201 - Created
// 204 - No Content

// 300-399 - Redirection - Further action must be taken in order to complete the request 

// 400-499 - Client Error
// 400 - Bad Request
// 401 - Unauthorized
// 403 - Forbidden
// 404 - Not Found
// 405 - Method Not Allowed

// 500-599 - Server Error
// 500 - Internal Server Error


