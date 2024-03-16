/*write a function that take in an array of integers and a callback function,
and returns a new arrays where each elemenct 
is double using the callback .*/

const Array1=[1,2,3,4,6,7,8,9,10,12,13,14];
function callback(num){
    return num*2;

}

 function Array2(arr,callback){
    const doubleArr=arr.map((num)=>{
        return callback(num);
      });
      return doubleArr;
 }

const doubleArray1=Array2(Array1,callback);
console.log(doubleArray1);