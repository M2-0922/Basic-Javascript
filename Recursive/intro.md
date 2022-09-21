# JavaScript Recursive Function
```
function recurse() {
    // function code
    recurse();
    // function code
}

recurse();
```

---
So, it generally looks like this.
```
function recurse() {
    if(condition) {
        recurse();
    }
    else {
        // stop calling recurse()
    }
}

recurse();
```
---

`Summary`: in this tutorial, you will learn how to use the recursion technique to develop a JavaScript recursive function, which is a function that calls itself.

### Introduction to the JavaScript recursive functions
A recursive function is a function that calls itself until it doesn’t. And this technique is called recursion.

Suppose that you have a function called recurse(). The recurse() is a recursive function if it calls itself inside its body, like this:

```
function recurse() {
    // ...
    recurse();
    // ...
}
```

A `recursive function` always has a condition to stop calling itself. Otherwise, it will call itself `indefinitely`. So a recursive function typically looks like the following:

```
function recurse() {
    if(condition) {
        // stop calling itself
        //...
    } else {
        recurse();
    }
}
```

Generally, you use recursive functions to` break down a big problem into smaller ones.` Typically, you will find the recursive functions in data structures like binary trees and graphs and algorithms such as binary search and quicksort.

##### Summary
- A recursive function is a function that calls itself until it doesn’t
- A recursive function always has a condition that stops the function from calling itself.

![](https://cdn.programiz.com/sites/tutorial2program/files/javascript-factorial-working.png)