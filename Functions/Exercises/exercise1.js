function findRectangleArea(width, length) {
    return width * length;
}

console.log(findRectangleArea(4, 5));


function findLargestNumber(number1, number2, number3) {
    return Math.max(number1, number2, number3)
}

console.log(findLargestNumber(1, 4, 2));

function isEvenOrOdd(number) {
    if (number % 2 === 0) return `${number} is even number`;
    return `${number} is odd number`;
}

console.log(isEvenOrOdd(3));

