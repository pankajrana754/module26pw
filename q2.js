function manipulateString(inputstr,callback){
    const manipulatedString=inputstr.toUpperCase();
    callback(manipulatedString);
}
function logString(manipulatedString){
    console.log(`The manipulated string is: ${manipulatedString}`);
}
manipulateString("hello world!",logString);