# Question 1

Write a JavaScript function that takes two arguments as Width and Length of a rectangle, then return the Area of rectangle.\

# Answer 1

```
function findRectangleArea(width, length) {
    //write your logic here..
    let areaOfRectangle = width * length;
    console.log(areaOfRectangle);
}

findRectangleArea(5, 4);
```

```
Your answer:
```

# Question 2

Write a Javascript function that takes three arguments and return the value of the largest number.

# Answer 2

```
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

findLargestNumber(5, 4, 6);
```

```
<!-- another way -->
function findLargestNumber(number4, number5, number6) {
  console.log(Math.max(number4, number5, number6));
}

findLargestNumber(8, 9, 7);
```

```
Your answer:
```

# Question 3

Write a Javascript function that takes one argument and return;
odd number `7 is odd number` | even number: `8 is even number`

# Answer 3

```
function isEvenOrOdd(number) {
  //write your logic here..
  if (number % 2 == 0) {
    console.log(number + " is even number");
  } else {
    console.log(number + " is odd number");
  }
}

isEvenOrOdd(3);
```

```
Your answer:
```
