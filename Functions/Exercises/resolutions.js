function findRectangleArea(width, length) {
}

function multiply (width,length){
    let result = width * length;
    return result
}

console.log(multiply(4, 3)); //12

//end of the first resolution

function findLargestNumber(number1,number2,number3) {

    let arr = [number1, number2, number3]
    arr.sort(function(a, b){return b-a})
    console.log(arr[0]);
}

 findLargestNumber(5,38,4)




console.log(Math.max(3,5,6));

//end of exercise 2


function isEvenOrOdd(number) {
  
    if(number%2 == 0){
return "Even" }
  else {
    return "Odd" }
  }
    
isEvenOrOdd(5)