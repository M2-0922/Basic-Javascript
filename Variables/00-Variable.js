var count = 2; // Global variable

function calculate() {
  //   console.log("Count " + count); // 0
  const array = [1, 2, 3];

  if (array.length > 0) {
    // console.log("Count " + count); // 0
    let isEmpty = false;
    // console.log(array);
  }
  //   console.log(isEmpty);
}
calculate();

// Operators
// addition `+`
let number1 = 5;
let number2 = 10;

let result;

// result = number1 + number2; // 15
result = "Hello" + " World";
console.log(result);
// console.log(result); // 15

result = 10 + 20;
// console.log(result); // 30

//subtract `-`

let subtResult = 5 - 10;
let nameAndNumber = "Hello " - 5;
console.log(nameAndNumber); // NaN is a number which we cannot read.
// console.log(subtResult); //5

// multiple `*`

let multResult = 5 * 2;
// console.log(multResult); // 10

// divide `/`
let divideResult = 10 / 2;
console.log(divideResult); // 5
let divideResult1 = 2 / 10;
console.log(divideResult1);

// reminder `%`

let reminderResult = 10 % 2;
console.log(reminderResult); // 0

// expo `**`

let expoResult = 2 ** 3;
console.log(expoResult); // 8
