//  Basic variables, data types and print statements

console.log("Hello JS");

fname = "messi";
age = 24
x = null;
y = undefined;
$xyz = 100;
xyz = 200;

console.log(xyz);
console.log(age);
console.log(x);
console.log(y);
console.log(fname);

flag = true;
console.log(flag);

let price = 1000;
console.log(price);

var namee = "Ronaldo"; // not needed
var namee = "Ronaldo"; //  be redeclared and updatable
anme = "XYZ";

let nameeee  = "Ronaldo"; // cannot be redeclared and updatable
// namee = 96;
let a;
console.log(a); // undefined


const nameee = "Ronaldo"; // cannot be redeclared nor updated

typeof nameee; // string

// class
const student = {
    namee: "Messi",
    age: 36,
    roll: 10,
};

student.namee = "Ronaldo";
console.log(student);
student["namee"] = "Neymar";
console.log(student["age"]);
console.log(student.age);

console.log(123 + "123");
console.log(123 - "123");
console.log("123" - 123);
console.log(123 * "123");
console.log("123" * 123);

// arithmetic operators

/*
M,ulti line comment like CPP
+ - * / % ++ -- **

*/

a=2;
b=4;
console.log("a + b = ", a+b); // addition
console.log("a + b = "+ a+b); // string concatenation

a--;
++a;

// assignment operators

// = += -= *= /= %= **=
console.log(a**=2); // a = a**2;

// comaprison operators

// == === != !== > < >= <=
console.log(2 == "2"); // true
// ===  strict equality operator also checks data types
console.log(2 === "2"); // false

// logical operators
// && || !

// if else statements

let color;
mode = "dark-mode";
if(mode === "dark-mode"){
    color = "black";
}
else if(mode === "light-mode"){
    color = "white";
}
else{
    color = "blue";
}

// ternary operator
// condition ? true : false 

age >= 18 ? console.log("You are eligible"): console.log("You are not eligible");

switch (mode){
    case "dark-mode":
        color = "black";
        break;
    case "light-mode":
        color = "white";
        break;
    default:
        color = "blue";
}

// input from user
// prompt("Enter your name");

let n;
n = prompt("Enter size");

// loops
// same as cpp
for(let i=0; i<n; i++){ // let has block scope, while var has global scope
    console.log(i);
}

let i = 0;
while(i<n){
    console.log(i);
    i++;
}

i = 0;
do{
    console.log(i);
    i++;
}while(i<n);

//  for of loop

let arr = [1,2,3,4,5];
for(let i of arr){
    console.log(i);
}

// for in loop
for(let i in arr){
    console.log(i);
}

for(let key in student){
    console.log(key);
    console.log(student[key]);
}

// strings
let str = "Hello World";
str[0] = "J"; // does not work as strings are immutable
console.log(str.length);
console.log(str.indexOf("World"));
console.log(str.slice(0,5));
console.log(str.substr(0,5));
console.log(str.replace("World", "JS"));
console.log(str.toUpperCase());
console.log(str.trim());
console.log(str.concat("assas"));


// templates
let nam = `Messi`;
/*
they're used to inlcude variables in strings at places of ${variable}
nut are same as double quotes
*/

console.log(`Hello ${nam}`);

console.log(`Hello ${nam} ${2+3} \nHow are you?`);