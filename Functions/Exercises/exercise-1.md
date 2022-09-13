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
    return width * length / 2
};

findRectangleArea(2, 3)


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
    if (number1 >= number2 && number1 >= number3 ){
        return number1  
    } else if (number2 >= number3){
        return number2
    } else {
        return number3
    }
};

console.log(findLargestNumber(4,3,2));

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
    if (number%2 == 0){
        return number + " is even number"
      } else {
        return number + " is odd number"
      }    
}

isEvenOrOdd(3);

```
