//

function multiply() {
  console.log(2 * 10);
}

// multiply();

function sum(num1, num2) {
  console.log(num1); // 10
  console.log(num2); // 50
}

// sum(10, 50);

function sayYourName(name) {
  console.log("Hello " + name);
}

// sayYourName("Mari");
// sayYourName("Mustafa");

// static value 5, 10, 20, "Kubilay", false, true
// dynamic mean we can change the variable when we call function. (using parameter)

// Function Return

function multiplyTwoNumber(num1, num2) {
  let result = num1 * num2;
  return result;
}
// multiplyTwoNumber(2, 4); // 8

let finalResult = multiplyTwoNumber(2, 4);

// console.log(finalResult); // 8

//

function greeting(name, lastname) {
  return "Hello " + name + " " + lastname;
}

let result = greeting("Joe", "Doe"); // Hello Joe Doe
console.log(result);
