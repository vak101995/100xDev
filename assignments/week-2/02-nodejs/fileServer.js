/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
app.use(express.json());

const filePath = path.basename("C:\\100xDev\\assignments\\week-2\\02-nodejs\\files");

function readFilesInDirectory() {
  const arrFileName = [];
  return new Promise(function (resolve) {
    fs.readdir(filePath, function (err, files) {
      files.forEach(file => {
        arrFileName.push(file);
      })
      resolve(arrFileName);
    })
  })

}

function readFileContent(fileName) {
  return new Promise(function (resolve) {
    fs.readFile(path.resolve(filePath, "a.txt"),"utf-8", function (err, data) {
      console.log(path.resolve(filePath));
      resolve(data);
    })
  })
}

app.get("/files", async function (req, res) {
  let files = await readFilesInDirectory();

  res.send(files.join("\n"))
})

app.get("/files/*", async function (req, res) {
  let file = req.params.filename;
  console.log("requested filename is: "+file)
  let fileContent = await readFileContent(file);
  res.writeHead(200,  {'Content-Type': 'text/plain'})
  res.write(fileContent);
  res.end();
})



app.listen(3000);
module.exports = app;