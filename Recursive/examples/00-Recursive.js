/*

A simple JavaScript recursive function example
Suppose that you need to develop a function that counts down from a specified number to 1. 
For example, to count down from 3 to 1:
*/
// The following shows the countDown() function:

// function countDown(val) {
//     // console.log(val);
//     for(let i = 1; i <= val; i++){
//         console.log(i);
//     }
// }
// This countDown(3) shows only the number 3.
// countDown(3)

/*
To count down from the number 3 to 1, you can:

- show the number 3.
- and call the countDown(2) that shows the number 2.
- and call the countDown(1) that shows the number 1.
The following changes the countDown() to a recursive function:

*/

//This countDown(3) will run until the call stack size is exceeded, like this:
// Uncaught RangeError: Maximum call stack size exceeded.
// … because it doesn’t have the condition to stop calling itself.

// The count down will stop when the next number is zero. Therefore, you add an if condition as follows:

// function countDownRecursive(val) {
//     console.log(val);
//     let next = val - 1;

//     if(next > 0){
//         countDownRecursive(val-1)
//     }
// }
// countDownRecursive(3)

// function sum(number) {
//     let total = 0;
//     for(let i = 1; i <= number; i++){
//         total += i;
//     }
//     return total
// }
// console.log(sum(20));

// function sum(number) {
//     if(number <= 1){
//         return number;
//     }
//     return number + sum(number-1)
// }
// console.log(sum(20));

// 