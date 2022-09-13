# Question 1

Write a JavaScript function that takes two arguments as Width and Length of a rectangle, then return the Area of rectangle.\

# Answer 1

```
function findRectangleArea(width, length) {
  let result = width * length;
  return result;
}

```

# Question 2

Write a Javascript function that takes three arguments and return the value of the largest number.

# Answer 2

```
function findLargestNumber(number1, number2, number3) {
  let result = Math.max(number1, number2, number3);
  return result;
}

```

# Question 3

Write a Javascript function that takes one argument and return;
odd number `7 is odd number` | even number: `8 is even number`

# Answer 3

```
function isEvenOrOdd(number) {
  let result;
  if (number % 2 == 0) {
    result = number + " is even number";
  } else {
    result = number + " is odd number";
  }
  return result;
}

```
