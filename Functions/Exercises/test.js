function findRectangleArea(width, length) {
  rectangle = width * length;
  return rectangle;
}

//result = findRectangleArea(5, 10);
//console.log(result);
console.log(findRectangleArea(5, 10));

function findLargestNumber(number1, number2, number3) {
  result = Math.max(number1, number2, number3);
  return result;
}
console.log(findLargestNumber(5, 8, 10));

function isEvenOrOdd(number) {
  let result;
  if (number % 2 == 0) {
    result = number + " is Even number";
  } else {
    result = number + " is Odd number";
  }
  return result;
}

let num = 10;
//console.log(isEvenOrOdd(8));
console.log(isEvenOrOdd(num));

//console.log(isEvenOrOdd(num));
