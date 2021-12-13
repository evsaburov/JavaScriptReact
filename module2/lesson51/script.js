'use script'

const person = {
  name: "alex",
  tel: "+000000000",
  parents:{
    mom: 'Olga',
    dad: 'Mike'
  }
};

console.log(JSON.stringify(person)); // объект в json
console.log(JSON.parse(person));     // json объект

console.log(JSON.parse(JSON.stringify(person)));
const clone = console.log(JSON.parse(JSON.stringify(person)));

clone.parents.mom = 'Ann';
console.log(person);
console.log(clone);
