// function square(n){
//     return n*n;
// }

// function cube(n){
//     return n*n*n;
// }

// function sumOfSomething(a,b,fn){
//     let varA = fn(a);
//     let varB = fn(b);
//     return varA + varB;
// }
// console.log("Declaring promise")

// function promisifiedFn(duration){
//     const p = new Promise(function(resolve){
//         setTimeout(resolve,duration);
//     });
//     console.log("Printing p: "+ p);
//     return p;
// }

// const ans = promisifiedFn(1000);
// ans.then(()=>{
//     console.log("Promise fulfilled");
//     //console.log("Printing p : "+p);
// });

// console.log("Printing ans: "+ ans);

const fs = require("fs");

/*fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data);
})*/

function readFileUsingPromise() {
    return new Promise(function(resolve) {
        fs.readFile("a.txt", "utf-8", function(err,data) {
            resolve(data);
        });
    });
}

function onDone(data){
    console.log(data);
}

readFileUsingPromise().then(onDone);