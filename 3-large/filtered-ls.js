const fs = require('fs')
//sets single path 
const path = require('path')

var directory = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(directory, function(err, files) {
    if (err) {
    return console.log(err)
    }
    files.forEach(function(file) {
        //extracting which path its using
        if (path.extname(file) === ext) {
            console.log(file);
        };
    });
});
