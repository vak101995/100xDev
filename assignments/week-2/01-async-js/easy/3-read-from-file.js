/*
## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 
*/

// let writeData = readData.trim().split(/[\s,\t,\n]+/).join(' ');
// fs.writeFile("test.txt",writeData, function(err){
//     if (err) throw err;
//     console.log("Written Successfully!"+ writeData);
// } );

const fs = require("fs");
//const readData = fs.readFileSync("test.txt","utf-8");

function readFilePromise() {
    return new Promise(function (resolve) {
        fs.readFile("test.txt", "utf-8", function (err, data) {
            if (err) throw err;
            console.log("I've read the following data: " + data);
            resolve(data);
        });
        //let writeData = readData.trim().split(/[\s,\t,\n]+/).join(' ');

    });
}

function onPromiseDone(data) {
    console.log("Read data is: " + data);
}

function writeFilePromise(writeData) {
    return new Promise(function (resolve) {
        fs.writeFile("test.txt", writeData, function (err) {
            if (err) throw err;
            console.log("I've written the following data successfully!: " + writeData);
            resolve(writeData);
        });
    });
}

//readFilePromise().then(onPromiseDone);

async function writeFormattedData() {

    let readData = await readFilePromise();
    let writeData = readData.trim().split(/[\s,\t,\n]+/).join(' ');
    await writeFilePromise(writeData);
}

writeFormattedData();









