"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

function isANumber(a) {
    if ( typeof a == "number") {
        return true
    }else{
        return  false;
    }
}

//Cody's answer
// function isANumber(input){
//     return typeof input === "number";
}
// Define a function named increment that takes in an input and adds 1 to it if the input is numeric. If the input is not numeric, then return false.

function increment(a) {
    if (typeof a == "number") {
        return a + 1;
    } else{
        return  false;
    }
}
//cody's answer
function increment(input){
    let parsedInput = parseFloat(input);
    if (!isNaN (parsedInput))
    return parsedInput + 1
    else
        return false
}

// Define a function named decrement. If the provided input is numeric, the function should subtract 1 and return the result. If the input is not numeric, decrement should return false.

function decrement(a) {
    if  (typeof a == "number") {
        return a- 1;
    }else{
        return  false;
    }
}
//
// Write a function named getHighestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the highest number. If any of the 3 inputs is missing or non-numeric, then return false.
let highestNumber = Math.max()
function getHighestNumber(x, y, z) {
    if (typeof x === "number" && typeof y === "number" && typeof z === "number") {
        return getHighestNumber.max();
    }else{
        return  false;
    }
}

if(!isANumber(input1) || !isANumber(input2) || !isANumber(input3)){
    return false
} else if (input1 > input2 && input1 > input3){
    return input1;
    else if (input2 > input1 && input2 > input3){
        return input2;
        else if (input3 > input1 && input3 > input2)
            return input3;
    }
}

// Define a function named parseNumber that parses (converts) a numeric String and returns its value as a number, the function should be able to decide if it should be parsing an Integer or a Float value.

function parseNumber(x){
    return (parseFloat(x));
}

// Write a function named add that takes in two inputs. If both inputs provided are numeric, add will return the sum of both inputs. If one or both inputs is not numeric, add should return false.

// cody's answer'
// function add(a, b) {
//     parsedInput1 = parseNumber(Input1);
//     parsedInput2 = parseNumber(Input2);
//     if(!isNaN(parsedInput1) && !isNaN(parsedInput2))
//         return parsedInput1 + parsedInput2
//     else
//         return false

    if ( typeof a === "number" && typeof b === "number") {
        return a + b;
    }else{
        return  false;
    }
}
/// cody's answer
// Write a function named multiply that takes in two inputs. If both inputs provided are numeric, multiply returns the product of the first input multiplied by the second. If either or both inputs are not numeric, multiply should return false.

function multiply(a, b) {
    if ( typeof a === "number" && typeof b === "number") {
        return a * b;
    }else{
        return  false;
    }
}
/// cody's answer
// function add(a, b) {
//     parsedInput1 = parseNumber(Input1);
//     parsedInput2 = parseNumber(Input2);
//     if(!isNaN(parsedInput1) && !isNaN(parsedInput2))
//         return parsedInput1 * parsedInput2
//     else
//         return false

// Define a function named square. If the provided input is numeric, square should return the number multiplied by itself. If the input is not numeric, square, should return false.

function square(a) {
    if ( typeof a === "number") {
        return a * a;
    }else{
        return  false;
    }
}

// Write a function named sumOfSquares that takes in two inputs. If both inputs are numeric, sumOfSquares should square each input and return the sum of them added together. For example, if we pass a and b then we should square a and add it to the square of b. If either or both inputs are not numeric, sumOfSquares should return false.

function sumOfSquares(a, b) {
    if ( typeof a === "number" && typeof b === "number") {
        return (a * a) + (b * b);
    }else{
        return  false;
    }
}

// Write a function named isPalindrome that takes in a single input. If the input is a numeric string, then return false. If the input is a string, then return true if the string is the same forwards as it is backwards. Return false if the string is different forwards from backwards. Ignore capitalization.

function isPalindrome (input) {
    if (typeof input === "string"){
        let lowerInput = input.toLowerCase();
        let reverseInput = lowerInput.split("").reverse().join(""); {
        return lowerInput === reverseInput;
    } else {
        return false
    }}