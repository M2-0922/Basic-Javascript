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
function findRectangleArea(width, length){
    
    let areaRectangle = width * length ;
    return areaRectangle
}

console.log ("The area of the rectangle is: " + findRectangleArea(6, 9));

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
function findLargestNumber(number1, number2, number3){
let result;
if(number1 > number2 && number1 > number3 ){
    result = number1;
    console.log ("The largest number is: " + result);
} 

if(number2 > number3 && number2 > number1){
    result = number2;
    console.log ("The largest number is: " + result);
}

if(number3 > number1 && number3 > number2){
    result = number3;
    console.log ("The largest number is: " + result);
}    

} 
findLargestNumber (3, 10, 1);

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
function isEvenOrOdd(number) {
    
    if(number % 2 == 0){
       
        console.log (number + " is a even number"); 
    }
    else{
        
        console.log (number + " is a odd number"); 
    }
}
 isEvenOrOdd(90);
