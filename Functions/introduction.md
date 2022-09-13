# Functions.

# Closures

Closures are functions that remember the variables and parameters on its current scope and all the way up to the global scope.

In JavaScript, when an inner function has made available to any scope outside the outer function.

We can use it to expose private functions or data in a restricted way.

For example, we can write the following function that is a closure:

```
const foo = (() => {
  let x = 'Joe';
  const privateFn = () => {
    alert(`hello ${x}`);
  }
  return {
    publicFn() {
      privateFn();
    }
  }
})();
foo.publicFn();
```
