'use strict'
const myPromise= new Promise((resolve, reject)=>{
//creating promise example 
//do something asynchronous which eventually call either:
resolve(someValue);//fulfilled
//or
reject(`failure reason`);//reject
});
waitPromise().then((result)=>{
    console.log("Success: ", result);

}).catch((error)=>{console.log("Error: ", error);});

//if a function returns a Promise ...
waitPromise(1000).then(()=>{
    console.log("Success!");
}).catcha((error)=>{
    console.log("Error: ", error);
});