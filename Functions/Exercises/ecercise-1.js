//Q1
function findRectangleArea(width, length) {
    let RectangleArea = width * length;
    return RectangleArea;
}

console.log(findRectangleArea(2, 3)); //6
console.log(findRectangleArea(10, 10)); //100

//Q2

function findLargestNumber(number1, number2, number3) {
    return Math.max(number1, number2, number3);
}

console.log(findLargestNumber(2,6,3)); //6
console.log(findLargestNumber(2,1,3)); //3

//Q3

function isEvenOrOdd(number) {
    if (number % 2 == 0) {
        return `8 is even number`;
    } else if ( number % 2 == 1) {
        return `7 is odd number`;
    } else {
        return `error`;
    };
}

console.log(isEvenOrOdd("4")); //even
console.log(isEvenOrOdd("7")); //odd
console.log(isEvenOrOdd("a")); //error