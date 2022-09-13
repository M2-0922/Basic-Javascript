// function findRectangleArea(width, length) {
//   let result = width * length;
//   return result;
// }

// let finalResult = findRectangleArea(2, 4);
// console.log(finalResult);

// function findLargestNumber(number1, number2, number3) {
//   let result = Math.max(number1, number2, number3);
//   return result;
// }
// let finalResult = findLargestNumber(2, 4, 6);
// console.log(finalResult);

function isEvenOrOdd(number) {
  let result;
  if (number % 2 == 0) {
    result = number + " is even number";
  } else {
    result = number + " is odd number";
  }
  return result;
}

console.log(isEvenOrOdd(5));
