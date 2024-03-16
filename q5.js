// Greeting promise
function greet(name){
    return new Promise((resolve)=>{
        const greeting='Hello ,${name}!';
        resolve(greeting);
    })
}
greet("Pankaj vishwakarma").then((message)=> 
console.log(message));