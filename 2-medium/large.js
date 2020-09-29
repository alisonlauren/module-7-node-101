const fs = require("fs");
// setting variable to require the readline method on the interface
const readline = require("readline").createInterface({
input: process.stdin,
//input property of stdnin,
output: process.stdout,
//output property of stdout
});

//readline, question method, stinrg of input file and calling function of inputfile
readline.question("Input file: ", function (inputFile) {
    //readfile method of fs, inputFile, and append error message
fs.readFile(inputFile, function (error, buffer) {
if (error) {
    console.log(error.message);
    //close out the code
    readline.close();
    return;
}
//readline function, string output file, function, parameter of outputfile
readline.question("Output file: ", function (outputFile) {
    //close the code when complete
    readline.close();
    //create variable content to append and convert to string
    const content = buffer.toString();
    //create variable of upperCased to append the content and convert to upper case
    const upperCased = content.toUpperCase();
    //write file module, of fs- using the output file, uppercased, with the function
    //parameter of error
    fs.writeFile(outputFile, upperCased, function (error) {
    if (error) {
        //return error message
        console.log(error.message);
        return;
    }
    //print string wrote to file, and the output file the user inputed
    console.log("Wrote to file ", outputFile);
    });
});
});
});