function fn1() {
  console.log('fn1');
};
fn1();

function fn2(msg, n){
    console.log(msg);
    console.log(n);

    return ++n + ++n;
};
console.log(fn2('hello', 5));

const sum = (a, b) => {
    return a + b;
};

sum;

// for each element in the array is a callback function and comes under higher order function
const arr = [1,2,3];
arr.forEach((element) => {
    console.log(element );
});

//or

arr.forEach(function vall(element){
    console.log(element);
});

//prams are element, index, array
arr.forEach(function vall(element, idx, arr){
    console.log(element, idx, arr);
});

arr.forEach(fn1);

// map() returns a new array with some operation ovewr each element
//prams are element, index, array
const arr2 = arr.map((element) => {
    return element ** 2;
});

//filter() returns a new array with elements that satisfy the condition
let arr3 = arr.filter((element) => {
    return element >= 1;
});

//reduce() returns a single value after performing an operation on all elements
let summ = arr.reduce((res, element) => {
    return res + element;
}, 0);
summ;

let maxi = arr.reduce((maxi, curr)=>{
    return maxi > curr ? maxi : curr;
});

//find() returns the first element that satisfies the condition
let found = arr.find((element) => {
    return element > 1;
});

//findIndex() returns the index of the first element that satisfies the condition
let foundIdx = arr.findIndex((element) => {
    return element > 1;
});