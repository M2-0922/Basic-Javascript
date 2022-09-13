
// Question 1
function findRectangleArea(width, length) {
    //write your logic here..

    const area = width * length;
    return area;
}

console.log("Question 1 : 10,10");
console.log(findRectangleArea(10,10));
console.log("Question 1 : 100,150");
console.log(findRectangleArea(100,150));

//Question 2
function findLargestNumber(number1, number2, number3) {
    //write your logic here..

    let tempLargestNum = number1 >= number2 ? number1 : number2;
    return tempLargestNum >= number3 ? tempLargestNum : number3;
}

console.log("Question 2 : 1,2,3");
console.log(findLargestNumber(1,2,3));

console.log("Question 2 : 4,5,6");
console.log(findLargestNumber(4,5,6));

//Question 3
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

console.log("Question 3 : 10");
console.log(isEvenOrOdd(10));
console.log("Question 3 : 11");
console.log(isEvenOrOdd(11));