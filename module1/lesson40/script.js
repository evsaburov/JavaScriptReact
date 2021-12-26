'use strict';

const now = new Date();
new Date.parse('2020-10-10');
// const now = new Date('2015-01-01');
// const now = new Date(2015, 1, 1);
// const now = new Date(0);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());


// console.log(now.getTimezoneOffset());
console.log(now.setHours(18, 40));
console.log(now);

let start = new Date();
for (let i = 0; i < 10000; i++) {
  let some = i ** 3;
}
let end = new Date();

alert(`цикл отработал за ${end - start} миллисекунд`);