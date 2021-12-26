'use strict'

function showTith() {
  console.log(this);
}

showTith();

const obj = {
  a: 20,
  b: 15,
  sum: function () {
    console.log(this);
    function shout() {
      console.log(this);
    }
    shout();
  }
}

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
}

let ivan = User('ivan', 23);


function sayName() {
  console.log(this);
  console.log(this);
}

const user = {
  name: 'John'
};

// Передача контекста из User в функцию sayName
sayName.call(User);
sayName.apply(User);

// контекст с аргументами
sayName.call(User, "Smith");
sayName.apply(User, ["Smith", "Smith"]);

// bind создает новую функцию и к ней подвязывает контекст 
function count(num) {
  return this * num;
}

const double = count.bind(2);
console.log(double(3));
console.log(double(13));

// 1. Обычная функция: this = window, но если 'use strict' - undefined.
// 2. Контекст у методов объекта будет - сам объект.
// 3. this в конструкторах и классах - это новый экземпляр объекта.
// 4. Ручная привязка this: call, aply, bind/


const document.querySelector('button');
btn.addEventListener("click", function () {
  console.log(this);
});
//контекстом вызова будет сам элемент на котором произошло событие.
 

const obj = {
  num:5,
  sayNumber: function(){
    const say = () => {
      console.log(this);
    };

    say();
  }
}

obj.sayNumber();



const double = (a) => {
  return a*2;
}
// упрощенный вариант.
const double = a =>  a*2;

btn.addEventListener('click', (e) =>{
  e.target.style.background-color = 'red';
});

btn.addEventListener('click', (e) => { e.target.style.background-color = 'red';} );
