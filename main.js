console.log('Hello, World!');
/*
commenting


*/
// 2 ways to comment
// way number 1 is with forwardSlash + star to open. And then star + forwardSlash at the end
/* */
// way number 2 is with double forward slash

/*
primitive data types

The building blocks. Are always here in JS

- string
- number
- null
- undefined
- boolean
*/

// strings
console.log('hello');
console.log("hello");
console.log('123456');

// numbers
console.log(123456);

// null && undefined
console.log(null); // like having a $0 bank account balance
console.log(undefined); // like having no bank account at all

// boolean - true | false
console.log(true);
console.log(false);

/*
declaring variables

- var => old. You don't generally want to use it
- const => CONSTANT. Meaning the variable won't be reassigned
- let => Used when you want the variable to be reassigned at some point
*/
var firstName = "Angel";
const secondName = "Juarez";
let age = 23;

console.log(firstName); // => Angel
console.log(secondName); // => Juarez
console.log(age); // => 23

console.log(firstName + secondName); // => AngelJuarez
console.log(firstName + ' ' + secondName); // => Angel Juarez

/*
string interpolation
You use the backticks -> `
You put a JS expression within the ${}
*/
console.log(`Hello, my name is ${firstName}. My favorite number is ${5 + 2}`);

/*
working with booleans

logical operators
&&
||

comparison operators
<
>
<=
>=
== - loosely equals
=== - strictly equals
!= - loosely unequal
!== - strictly unequal

only use strictly equal and strictly unequal (for class)
*/
console.log(23 < 24); // true. Because 23 is less than 24
console.log(23 > 24); // false

console.log(24 >= 25); // false
console.log(24 <= 24); // true

// loosely equals - compares value
console.log(24 == '24'); // true

// strictly equals - compares value and type
console.log(24 === '24'); // false
console.log(24 === 24); // true

console.log(24 != '24'); // false
console.log(24 !== 24); // false
const grade = 66;
// 90 - A
// 80 - B // 80 > 0 FDCBA
// 55 - F
// 65 - FD
if(grade >= 90) {
  console.log('A');
} else if(grade >= 80) {
  console.log('B');
} else if(grade >= 70) {
  console.log('C');
} else if(grade >= 55) {
  console.log('D');
} else {
  console.log('F');
}