# Question 1

Write a JavaScript function that takes two arguments as Width and Length of a rectangle, then return the Area of rectangle.\

# Answer 1

```
function findRectangleArea(width, length) {
    //write your logic here..
}
```

```
Your answer:

function findRectangleArea(width, length) {
let rectangle = width \* length;
return rectangle;
}

//result = findRectangleArea(5, 10);
//console.log(result);
console.log(findRectangleArea(5, 10));
```

# Question 2

Write a Javascript function that takes three arguments and return the value of the largest number.

# Answer 2

```
function findLargestNumber(number1, number2, number3) {
    //write your logic here..
}
```

```
Your answer:

function findLargestNumber(number1, number2, number3) {
let result = Math.max(number1, number2, number3);
return result;
}
console.log(findLargestNumber(5, 8, 10));
```

# Question 3

Write a Javascript function that takes one argument and return;
odd number `7 is odd number` | even number: `8 is even number`

# Answer 3

```
function isEvenOrOdd(number) {
    //write your logic here..
}
```

```
Your answer:

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
console.log(isEvenOrOdd(num));
```
