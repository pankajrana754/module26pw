// create an asynchronous function that retrieve data from two different API endpoint 
async function getData(){
    const [first1,first2]=await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response)=> response.json())
    ,fetch("https://jsonplaceholder.typicode.com/todos/1").then((response)=>
    response.json()),

    ]);
    const AddData={
        todo:first1,
        post:first2,
    };
    return AddData;
}
getData().then((data)=>
console.log(data));