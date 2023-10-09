// 1. Write a JavaScript program that demonstrates explicit type conversion to a number.

let numberStr = "42";
numberStr = Number(numberStr);
console.log(numberStr);
// The Number() method converts a value to a number. If the value cannot be converted, NaN is returned.



// 2. Create a JavaScript program that showcases explicit type conversion to a string.
let num = 2023;
num = String(num);
console.log(num);
// The String() method converts a value to a string. You put the value you want to convert in the parentheses after the name String


// 3. Write a JavaScript program that illustrates explicit type conversion to a boolean.
let truthyValue = "Hello";
let falsyValue = 0;
truthyValue = Boolean(truthyValue);
falsyValue = Boolean(falsyValue);
console.log(truthyValue);
console.log(falsyValue);



// 4. Write a JavaScript program that demonstrates how to convert JavaScript dates to numbers.
// create date
let currentDate = new Date();
// converting to number
currentDateNumber = currentDate.getTime();
console.log(currentDateNumber);


// 5. Create a JavaScript program that shows how to convert JavaScript dates to strings.
// create date
let eventDate = new Date();
// converting to string
eventDateString = eventDate.toLocaleString();
console.log(eventDateString);