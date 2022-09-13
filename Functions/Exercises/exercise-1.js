// 1
// Write a JavaScript function that takes two arguments as Width and Length of a rectangle, then return the Area of rectangle.

function findRectangleArea(width, length) {
  //write your logic here..
  let areaOfRectangle = width * length;
  console.log(areaOfRectangle);
}

findRectangleArea(5, 4);

// 2
// Write a Javascript function that takes three arguments and return the value of the largest number.

function findLargestNumber(number1, number2, number3) {
  //write your logic here..
  if (number1 > number2) {
    if (number1 > number3) {
      console.log(number1);
    } else {
      console.log(number3);
    }
  } else {
    if (number2 > number3) {
      console.log(number2);
    } else {
      console.log(number3);
    }
  }
}

findLargestNumber(4, 7, 9);

// 3
// Write a Javascript function that takes one argument and return;
// odd number `7 is odd number` | even number: `8 is even number`

function isEvenOrOdd(number) {
  //write your logic here..
  if (number % 2 == 0) {
    console.log(number + " is even number");
  } else {
    console.log(number + " is odd number");
  }
}

isEvenOrOdd(3);

