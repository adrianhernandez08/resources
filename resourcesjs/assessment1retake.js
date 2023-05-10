// Define a function named lowerCase that takes in an input and returns that input as a string in all lower case letters. Returns false if the input passed is not a string.// Your solutions will go here :)
function lowerCase(input) {
    if (typeof input === 'string') {
        return (input.toLowerCase())
    }else{
        return false
    }
}
// Define a function named isAllLowerCase that takes in a string and returns true if all characters in the string are lowercase otherwise it should return false.
function isAllLowerCase (input) {
    if (typeof input === "string" && input === input.toLowerCase()){
        return Object.prototype.toString.call(input) === "[object String]"
    } else {
        return false
    }
}

// Define a function named isAllUpperCase that takes in a string and returns true if all characters in the string are uppercase otherwise it should return false.

function isAllUpperCase (input){
    if (typeof input === "string" && input === input.toUpperCase()){
        return Object.prototype.toString.call(input) === "[object String]"
    } else {
        return false
    }
}

// Define a function named isNotPalindrome that takes in a string and returns true if that string is not palindrome, if the string is palindrome should return false.
let lowerInput = input.toLowerCase();
let reverseInput = lowerInput.split("").reverse().join("");
function isNotPalindrome (input) {
    if (typeof input === "string") {
        return Object.prototype.toString.call(input) !== "[object String]"
    } else {
        return true
    }
}

// Define a function named multiplyBy2 that takes in an input and multiplies it by 2 if the input is numeric. If the input is Not A Number, then return false.
let output = parseFloat("input") * 2
function multiplyBy2(input) {
    if (typeof input === "number") {
        return  typeof (output)
    } else {
        return false;
    }
}
// Define a function named convertHourToSec that takes in one input Hours. Return the conversation of the number of hours into total seconds. If the input is not numeric or a numeric string, convertHourToSec, should return false.

function convertHourToSec(hours) {
    if (typeof hours === "number" || typeof hours === !NaN) {
        return (parseFloat(hours) * 3600);
    } else {
        return false;
    }
}

// Write a function named getLowestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the lowest number. If any of the 3 inputs is missing or non-numeric, then return false.

function getLowestNumber(x, y, z) {
    if (typeof x === "number" && typeof y === "number" && typeof z === "number") {
        return math.min(getLowestNumber);
    } else {
        return false;
    }
}

// Write a function named addStringLengths that takes in two inputs. If both inputs provided are strings, addStringLengths returns the sum after adding the length (number of characters) of both strings. If either or both inputs are not strings, return false.

function addStringLengths(input1, input2) {
    if (typeof input1 === 'string' && typeof input2 === 'string') {
        return (input1.length + input2.length)
    } else {
        return false
    }
}

// Write a function named subtract that takes in two inputs. If both inputs provided are numeric or numeric strings, subtract will return the difference when the second input is subtracted from the first input. If one or both inputs is not numeric or numeric strings, subtract should return false.

function subtract(input1, input2) {
    if (typeof input1 == Object.prototype.toString.call(input1) === "[object String]" && typeof input2 == Object.prototype.toString.call(input2) === "[object String]") {
        return (input1) - (input2);
    } else {
        return false
    }
}

// Write a function named calculateChange that takes in two inputs, totalPaid and totalCost. If both inputs are numeric or numeric strings, calculateChange should return the change after subtracting the cost from the amount paid. The return should be in $x.xx format as a string Note: it should return with two decimal places. If either or both inputs are not numeric or numeric strings, calculateChange should return false.\
let total = parseFloat(totalPaid - totalCost);
function calculateChange(totalPaid, totalCost) {
    if (typeof (totalPaid) === 'number' && typeof (totalCost) === 'number') {
        return parseFloat("$" + total.toFixed(2))
    } else {
        return false;
    }
}