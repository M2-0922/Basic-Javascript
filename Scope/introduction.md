# Scope

- Global scope
- Local scope


## Global Scope, Local scope

Global scope variable is accessible anywhere.
but Local scope variable is accessible inside of block. (function, or etc.)

```
let firstName = "Kubilay"

function testFunction () {
  let lastName = "Cakmak";

  console.log(firstName); // Kubilay
  console.log(lastName); // Cakmak

  {
    let count = 0;

    console.log(count); // 0
  }

  console.log(count);
}

console.log(lastName) // undefined

```







# Hoisting

Hoisting means that a variable or function is moved to the top of their scope of where we defined the variable or function.

JavaScripts moves function declarations to the top of their scope of we can reference them later and gets all variable declarations and give them the value of undefined .

During execution, the variables that were hoisted are assigned a value or runs functions.

Only function declarations and variables declared with the var keyword are hoisted.

Variables declared with let and const constants aren’t hoisted. Also, arrow functions and function expressions aren’t hoisted.

<!-- "use strict"; -->

For example, the following code has a function that’s hoisted:

```
foo();
function foo(){
 console.log('foo')
}
```

`foo` is hoisted, so it can be called before it’s defined since it’s a function declaration.

# Scope

JavaScript’s scope is the area where we have valid access to a variable or function.

There’re 3 kinds of scopes in JavaScript — global, function, and block scope.

Variables and functions that have global scope are accessible everywhere in the script or module file.

For example, we can declare a variable with global scope as follows:

```
var global = 'global';
const foo = () => {
  console.log(global);
  const bar = () => {
    console.log(global);
  }
  bar();
}
foo();
```

Since we declared a variable with `var` on top of the code, it’s accessible everywhere. So both `console.log` s will output `'global'` .

Function scoped variables are only available inside a function.
