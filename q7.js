// write a js program that uses the fetch method to retrieve data from an api,
// and then logs the data to the console.
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((Response)=>Response.json())
.then((data)=>console.log(data))
.catch((error)=> console.error(error));
