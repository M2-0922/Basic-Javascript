# Question 1

Write a JavaScript function that takes two arguments as Width and Length of a rectangle, then return the Area of rectangle.\

# Answer 1

```
function findRectangleArea(width, length) {
    //write your logic here..

    const area = width * length;
    return area;
}
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

    let tempLargestNum = number1 >= number2 ? number1 : nubmer2;
    return tempLaegestNum >= number3 ? tempLargestNum : number3;
}
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

    let oddOrEven = "";

    if (number % 2 == 1) {
        oddOrEven = "odd";
    } else {
        oddOrEven = "even";
    }

    return number + " is " + oddOrEven + " number";
}
```

```
Your answer:
```
