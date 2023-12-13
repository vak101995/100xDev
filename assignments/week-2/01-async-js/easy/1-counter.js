// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

//const timeElement = document.getElementById("clock");

function countTill() {
    // return new Promise( function(resolve) {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    console.log(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    //timeElement.innerText = clockStr;
    }
    // });



// function interval(n) {
//     setInterval(countTill(n), 1000)
// }

//countTill();

//setInterval(countTill,1000);

setInterval(() => console.log(new Date().toLocaleTimeString()),1000);