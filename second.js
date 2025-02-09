let arr = [1,2,3];
console.log(arr);
console.log(arr.length);

// can store different types of data
objj = [1,"hi", true, 1.2];

// arrays are mutable
arr[0] = 5;
console.log(arr); // changes the first element to 5

// loop through an array
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for(let element of arr) {
    console.log(element);
}

// arrays can be nested
arr2 = [[1,2],[3,4],[5,6]];
console.log(arr2[0][1]); // 2

// push() adds an element to the end of the array
arr.push(7);
console.log(arr); // [5,2,3,7]
arr.push(8,9);

// pop() removes the last element of the array
arr.pop();

// shift() removes the first element of the array
arr.shift();
console.log(arr); // [2,3]

// unshift() adds an element to the beginning of the array
arr.unshift(1);
console.log(arr); // [1,2,3] 

// toString() converts an array to a string
console.log(arr.toString()); // 1,2,3

// concat() joins two arrays
arr3 = arr.concat(arr2);
console.log(arr3); // [1,2,3,1,2,3,5,6]

// slice() extracts a part of an array
console.log(arr3.slice(1,3)); // [2,3]

// splice() adds/removes elements to the original  array
console.log(arr3.splice(1,3)); 
//also acts as a insert
console.log(arr3.splice(1,2, 10, 20)); // [1,1,2,3,5,6]

// sort() sorts an array
console.log(arr3.sort()); // [1,1,2,3,5,6]

// reverse() reverses an array
console.log(arr3.reverse()); // [6,5,3,2,1,1]

