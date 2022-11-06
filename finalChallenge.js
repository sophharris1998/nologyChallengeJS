// 1. takes a mumber and returns true is a positive number and false if it is a negative number

function isNumberPositive (myNumber) {
    if (myNumber >0) {
        return true;               
    } else {
        return false; 
} } 

console.log(isNumberPositive(8))

// 2. write a function that takes a number of days and converts into age

function daysConvertedAge (days) {
    return (days/365)
}
    console.log("You are " + daysConvertedAge(9037) + " years old")


// 3. Write a function that takes three numbers and returns the largest of the three numbers

function largestNumber (number, number2, number3) {
    if (number > number2 && number > number3) {
        return number;
    } else if (number2 > number && number2 > number3) {
        return number2;
    } else {
        return number3;
    }
}
    

console.log(largestNumber(500, 10, 24))

// 4. Write a function that takes an array of names and returns the last name from the array of names


function getLastName (nameArray) {
    return nameArray [nameArray.length -1];
}

console.log(getLastName(["sophie", "daniel", "pedi", "yuri"]))

// 5. Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.

function positiveNumbers (numberArray) {
    for (let i=0; i < numberArray.length; i++) {
        if (isNumberPositive (numberArray [i])==false) {
            return false;
        } 
    }   
    return true;
}
console.log(positiveNumbers([23, 50, 39, 200]))

