/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function promiseToReturn() {
    console.log("Promise return")
}

console.log("About to go into wait");

function wait(n) {
    return new Promise( function(resolve) {
        resolve (setTimeout(promiseToReturn,n));
    });
}

wait(5000).then();

console.log("out of the promise block");