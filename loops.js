console.log('This is the loops file');
/*
loops
for loops
while loops
for each
for in
do while
*/
/*
for loop structure

for(let i = 0; i < 10; i++) {
  console.log(i);
}
for(variable creation; conditional; incrementer/decrement) {
  code block
  body of the for loop
}
*/
// for(let i = 0; i < 10; i++) {
//   console.log(i);
// }

// start at 10. Stop at 1
// for(let i = 10; i > 0; i--) {
//   console.log(i);
// }
/*
write 2 for loops
1. for odd numbers up to 9
  1
  3
  5
  7
  9
2. for even numbers up to 10
  2
  4
  6
  8
  10
*/
// for(let i = 1; i < 10; i++) {
//   // % - (modulo) gives the remainder
//   const isOdd = i % 2 === 1;
//   if(isOdd) {
//     console.log(i);
//   }
// }

// for(let i = 1; i < 10; i += 2) {
//   console.log(i);
// }

// 2, 4, 6, 8, 10
// for(let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }
for(let i = 1; i <= 10; i++) {
  const isEven = i % 2 === 0;
  if(isEven) {
    console.log(i);
  }
}

for(let i = 3; i <= 60; i++) {
  const multipleOf3 = i % 3 === 0;
  if(multipleOf3) {
    console.log(i);
  }
}




const array = [1, 2, 3, 4, 5, 6];
const names = ['angel', 'bruce', 'leo']; // => names.length = 3
              // 0         1       2     <- these are indixes
const randomStuff = [1, 'angel', null, 'something else'];

console.log(names); // => ['angel', 'bruce', 'leo']
// if you want to use an index you use the name of the array and square brackets with the index number in it

// you could use a for loop to loop over an array
for(let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

console.log('This is the loops file');
/*
loops
for loops
while loops
for each
for in
do while
*/
/*
for loop structure

for(let i = 0; i < 10; i++) {
  console.log(i);
}
for(variable creation; conditional; incrementer/decrement) {
  code block
  body of the for loop
}
*/
// for(let i = 0; i < 10; i++) {
//   console.log(i);
// }

// start at 10. Stop at 1
// for(let i = 10; i > 0; i--) {
//   console.log(i);
// }
/*
write 2 for loops
1. for odd numbers up to 9
  1
  3
  5
  7
  9
2. for even numbers up to 10
  2
  4
  6
  8
  10
*/
// for(let i = 1; i < 10; i++) {
//   // % - (modulo) gives the remainder
//   const isOdd = i % 2 === 1;
//   if(isOdd) {
//     console.log(i);
//   }
// }

// for(let i = 1; i < 10; i += 2) {
//   console.log(i);
// }

// 2, 4, 6, 8, 10
// for(let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }
for(let i = 1; i <= 10; i++) {
  const isEven = i % 2 === 0;
  if(isEven) {
    console.log(i);
  }
}

for(let i = 3; i <= 60; i++) {
  const multipleOf3 = i % 3 === 0;
  if(multipleOf3) {
    console.log(i)};
}


let num =0;
while(num <=35 ){
    console.log(num);
    num +-3}

    


