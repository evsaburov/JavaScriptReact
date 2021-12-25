'use strict'

class User {


  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  // свойстово создано без конструктора. Нужно когда класс не будет меняться.
  // ----
  surname = '........';
  // ----
  // сделаем свойстов приватным через #
  #surname2 = '........';
  // ----

  say() {
    console.log(`User name is ${this.name}, is ${this.surname}, age ${this.userAge}`);
  }

  get age() {
    return this._age;
  }

  set age(age) {
    if (typeof age === 'number' && age > 0 && age < 110) {
      this._age = age;
    } else {
      console.log('Недопустимое значение');
    }
  }


}


const ivan = new User('Ivan', 27);
console.log(Ivan.name); //undefined
// console.log(Ivan.userAge);
console.log(Ivan.getAge());


// Произошла смена свойст со стороны, это может вызвать нарушение работы объекта.
ivan.age = 30;
ivan.name = 'Alex';



ivan.say();
// Создаем инкапсуляцию

ivan.age = 300;
ivan.age;


