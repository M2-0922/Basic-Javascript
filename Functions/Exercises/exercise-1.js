/*
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
```
*/
function findRectangleArea(width, length) {
    let area = width * length;
    return area;
}

//let area = findRectangleArea(2, 3);
//console.log(area);

/*
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
```
*/
function findLargestNumber(number1, number2, number3) {
    //let arr = [number1, number2, number3];
    //let maxnum = Math.max(...arr);
    //let maxnum = Math.max.apply(null,arr);
    let maxnum = Math.max(number1, number2, number3);
    return maxnum;
}

//let maxnum = findLargestNumber(1,2,3) 
//console.log(maxnum);

/*
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
```
*/
function isEvenOrOdd(number) {
    if(number % 2 == 1){
        return number + ' is odd number';
    }else if(number & 2 ==0){
        return number + ' is even number';
    }
}

//let ans = isEvenOrOdd(9);
//console.log(ans);