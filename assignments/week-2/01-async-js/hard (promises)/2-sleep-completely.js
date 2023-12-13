/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

console.log("About to go into sleep");



function sleep (seconds) {
    return new Promise( function(resolve){
        setTimeout(resolve,seconds);    
    });
}

sleep(8000).then( function() {
    console.log("woke from sleep");});
//console.log("woke from sleep");

