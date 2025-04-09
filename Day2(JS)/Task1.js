//Write a function getPositiveNumbers(arr) that returns only positive numbers.

const numbersArr = [0,-1,5,7,-2];

const getPositiveNumbers = arr =>
    arr.filter(num => num > 0);

const positiveNumbers = getPositiveNumbers(numbersArr);

console.log("Positive Numbers:", positiveNumbers);

// Write a function getSquaredEvens(arr) that: Filters even numbers and returns an array with their squares.
const numsArr = [2,4,6,7,5];

const getSquaredEvens = arr => 
    arr.filter(num=> num % 2 === 0).map(num => num * num);

const SquaredEvens = getSquaredEvens(numsArr);
console.log("SquaredEvens:", SquaredEvens);