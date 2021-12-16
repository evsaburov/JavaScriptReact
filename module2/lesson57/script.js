'use strict';

//filter

const names = ['ivan', 'ann', 'ksenia', 'voldemart'];

const shortNames = names.filter(function (name) {
  return name.length < 5;
});

console.log(shortNames);

//map

len answers = ["ivAbn", "aNNa", 'Hello'];
result = answers.map(item => item.toLowerCase());
console.log(result);

// every/some

const some = [4, 'qwe', 'rty'];
console.log(some.some(item => typeof (item) === 'number'));
console.log(some.every(item => typeof (item) === 'number'));

// reduce

const arr = [4, 5, 6, 7, 8, 9];

const result = arr.reduce((sum, current) => sum + current);

const arr = ['4', '5', '6', '7', '8', '9'];
const result = arr.reduce((sum, current) => sum + current);
const result = arr.reduce((sum, current) => sum + current, 3);



const obj = {
  ivan: "person",
  anna: "person",
  doc: "animal",
  cat: "animal",
};

const newArray = Object.entries(obj)
  .filter(item => item[1] === 'persone')
  .map(item => item[0]);

console.log(newArray);
