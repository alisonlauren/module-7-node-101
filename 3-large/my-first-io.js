//bringing in fs as a required method
const fs = require('fs')
    //create contents variable, this will read the contents of the filesystem, starting after arguement value 2
    const contents = fs.readFileSync(process.argv[2])
    //create lines variable, to string, split with a line break and ensuring there's not a a link break at the end
    const lines = contents.toString().split('\n').length - 1
    //print the lines!
    console.log(lines)