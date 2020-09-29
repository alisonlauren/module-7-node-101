const dns = require('fs')
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter Filename ", function (fileName) {
    readline.close();
    //callback function, for fileName the path, the functions two parameters, and error and appending data ability?
    fs.readFile(fileName, function(error, buffer) {
        //if theres an error, return the error message
        if (error) {
            console.log(error.message);
            return;
        }
        //buffer appends data, tostring turns it to a string
        const content = buffer.toString();
        //converts to upper case
        const upperCased = content.toUpperCase();
        console.log(upperCased);
    })
});