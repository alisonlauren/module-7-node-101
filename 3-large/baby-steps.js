//write a program that accepts one or more numbers as cmd line arguments
//set variable of sum of numbers = 0
sumNumbers = 0 ;
//starting at the third index, index is less than length of argument values, moves up once everytime
    for (let index = 2; index < process.argv.length; index++) {
        //variable for element = the index of the the arguement values
        const element = process.argv[index];
        // console.log(element)
        //parse int ensures a whole number to the decimal of 10
        sum = parseInt(element,10)
        //sumNumbers is equal to sumNumbers + sum
        sumNumbers += sum
    }
    
console.log(sumNumbers)
//print the sum of the numbers to the console
// console.log(sumNum())