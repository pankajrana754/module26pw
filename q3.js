const person={
    firstName:"pankaj ",
    lastName:"vishwakarma",
    age:20,
};
function ageInDay(personObject,callback){
    const fullname=personObject.firstName;
    const lastName2=personObject.lastName;
    const ageInDay=personObject.age*365;
    callback(fullname,ageInDay);
}
function logResult(fullname,ageInDay){
    console.log(`The person full name is ,${fullname}and their age in days is ${ageInDay}.`);
}
logResult();
