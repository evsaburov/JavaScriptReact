'use script'

const person = {

  name: 'alex'
  age: 35,

  get userAge() {
    return this.age;
  }

  set UserAge(num) {
    this.age = num;
  }

};

console.log(person.userAge = 30);
console.log(person.userAge);