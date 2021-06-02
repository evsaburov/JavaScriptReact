// Однострочные выражения if-else 

const age = 12;
let ageGroup;

// Длинный способ
if (age > 18) {
  ageGroup = "An adult";
} else {
  ageGroup = "A child";
}

// Короткий способ
ageGroup = age > 18 ? "An adult" : "A child";


// 2. Оператор нулевого слияния
// Оператор нулевого слияния ?? возвращает правую сторону, 
// если левая сторона не определена. В противном случае он возвращает левую: 

let maybeSomething;

// Длинный способ
if(maybeSomething){
  console.log(maybeSomething)
} else {
  console.log("Nothing found")
}

// Короткий способ
console.log(maybeSomething ?? "Nothing found")

// 3. Оператор опциональной последовательности
// Если вы используете оператор опциональной последовательности ?., 
// а свойство не определено, то вместо ошибки возвращается undefined:

const student = {
    name: "Matt",
    age: 27,
    address: {
      state: "New York"
    },
  };
  
  // Длинный способ
  console.log(student && student.address && student.address.ZIPCode); 
  // Не существует, возвращается undefined
  
  // Короткий способ
  console.log(student?.address?.ZIPCode); // Doesn't exist - Returns undefined

//   4. Преобразование любого значения в Boolean
!!true    // true
!!2       // true
!![]      // true
!!"Test"  // true

!!false   // false
!!0       // false
!!""      // false

// 5. Оператор spread
// Оператор spread (…) используется для добавления элементов одного массива в другой.
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

// Длинный способ
let newArray = nums1.concat(nums2);

// Короткий способ
newArray = [...nums1, ...nums2];

let numbers = [1, 2, 3];

// Длинный способ
numbers.push(4);
numbers.push(5);

numbers = [...numbers, 4, 5];

// 6. Деструктуризация с помощью оператора spread
// Оператор spread с деструктуризацией можно применять для присвоения 
// оставшихся элементов новой переменной:

  const student = {
    name: "Matt",
    age: 23,
    city: "Helsinki",
    state: "Finland",
  };
  
  // Длинный способ
  const name = student.name;
  const age = student.age;
  const address = { city: student.city, state: student.state };
  
  // Короткий способ
  const { name, age, ...address } = student;

//   7. Удаление повторяющихся элементов из массива
const numbers = [1, 1, 20, 3, 3, 3, 9, 9];
const uniqueNumbers = [...new Set(numbers)]; // -> [1, 20, 3, 9]

// 8. Краткое вычисление с использованием &&

var isReady = true;

function doSomething(){
  console.log("Yay!");
}

// Длинный способ
if(isReady){
  doSomething();
}

// Короткий способ
isReady && doSomething();

// 9. String на стероидах
const age = 41;
const sentence = `I'm ${age} years old`;
// Результат: I'm 41 years old


// 10. Краткая альтернатива switch-case

const num = 3

// Длинный способ
switch (num) {
  case 1:
    someFunction();
    break;
  case 2:
    someOtherFunction();
    break;
  case 3:
    yetAnotherFunction();
    break;
}

// Короткий способ
var cases = {
  1: someFunction,
  2: someOtherFunction,
  3: yetAnotherFunction,
};

cases[num](); //Обратите внимание на круглые скобки вызова функции в объекте cases.

// 11. Назначение свойств объекта
const name = "Luis", city = "Paris", age = 43, favoriteFood = "Spaghetti";

// Длинный способ
const person = {
  name: name,
  city: city,
  age: age,
  favoriteFood: favoriteFood
};

// Короткий способ
const person = { name, city, age, favoriteFood }

// 12. Стрелочные функции
// Вместо того, чтобы объявлять функцию с помощью ключевого слова function, 
// лучше использовать синтаксис стрелочных функций:

// Длинный способ
function greetLong(name) {
    console.log(`Hi, ${name}`);
  }
  
  // Короткий способ
  const greetShort = name => console.log(`Hi, ${name}`);
  const greetShort = name => ({ console.log(`Hi, ${name}`); })
//   Примечание. Так как в этом примере в функции есть только одно выражение, 
//   вы можете опустить фигурные скобки ({}). 
//   Но если выражение занимает больше одной строки, 
//   использовать их все-таки необходимо.

// 13. Возврат без ключевого слова Return
// Работая со стрелочными функциями, вы можете опустить 
// ключевое слово return и фигурные скобки, если функция состоит из одного выражения:

// Длинный способ

function toPoundsLong(kilos) {
    return kilos * 2.205;
  }
  
  // Короткий способ
  const toPoundsShort = kilos => kilos * 2.205;


//   14. Краткое написание циклов
// Вместо циклов for иногда можно применять встроенный алгоритм forEach(), 
// чтобы более лаконично задать цикл:

const numbers = [1, 2, 3, 4, 5];

// Длинный способ
for(let i = 0; i < numbers.length; i++){
  console.log(numbers[i]);
}

// Короткий способ
numbers.forEach(number => console.log(number));


// 15. Значения по умолчанию для параметров функции
// В JavaScript можно задать значение по умолчанию параметру функции, 
// чтобы ее можно было вызывать как с, так и без параметров:

// Длинный способ
function pickUp(fruit) {
  if(fruit === undefined){
    console.log("I picked up a Banana");
  } else {
    console.log(`I picked up a ${fruit}`);
  }
}

// Короткий способ
function pickUp(fruit = "Banana") {
  console.log(`I picked up a ${fruit}`)
}

pickUp("Mango"); // -> I picked up a Mango
pickUp();        // -> I picked up a Banana

// К слову, вы можете сделать функцию короче, используя стрелочные функции.
const pick = (fruit = "Banana") => console.log(`I picked up a ${fruit}`)


// 16. Объявление переменных
// Вы можете объединять объявление разных переменных в одну строку, например:

// Длинный способ
let name;
let age;
let favoriteFood = "Pizza";

// Короткий способ
let name, age, favoriteFood = "Pizza";

// 17. Внесение значения в массив
// Вы можете использовать Object.values() вместо зацикливания, 
// чтобы получить значения объекта и внести их в массив:

const info = { name: "Matt", country: "Finland", age: 35 };

// Длинный способ
let data = [];
for (let key in info) {
  data.push(info[key]);
}

// Короткий способ
const data = Object.values(info);


// 18. Нахождение элемента в массиве
// Вместо длинных циклов используйте встроенную функцию массива find(), 
// чтобы найти элемент, подходящий под определенный критерий:

const fruits = [
  { type: "Banana", color: "Yellow" },
  { type: "Apple", color: "Green" }
];

// Длинный способ
let yellowFruit;
for (let i = 0; i < fruits.length; ++i) {
  if (fruits[i].color === "Yellow") {
    yellowFruit = fruits[i];
  }
}


// Короткий способ
yellowFruit = fruits.find((fruit) => fruit.color === "Yellow");


// 19. Проверка наличия элемента в массиве
// Это не совсем способ сокращения, как как сэкономить можно лишь пару символов. 
// Однако это более ясный подход.

// Вместо использования алгоритма indexOf() для проверки наличия элемента в массиве, 
// вы можете применять оператор includes(). Он сделает код понятнее:

let numbers = [1, 2, 3];

// Длинный способ
const hasNumber1 = numbers.indexOf(1) > -1 // -> True

// Короткий и более чистый способ
const hasNumber1 = numbers.includes(1)     // -> True


// 20. Проверка множественный условий
// Во избежание длинных цепочек || при проверке множественных условий можно применять то, 
// что было показано в предыдущем пункте,  —  алгоритм includes():

const num = 1;

// Длинный способ
if(num == 1 || num == 2 || num == 3){
  console.log("Yay");
}

// Короткий способ
if([1,2,3].includes(num)){
  console.log("Yay");
}


// 21. Присвоение множественных значений одной строкой
// Вы можете использовать деструктуризацию для присвоения множественных значений за один раз:

let num1, num2;

// Длинный способ
num1 = 10;
num2 = 100;

// Короткий способ
[num1, num2] = [10, 100];

// Этот метод пригодится и при работе с объектами:

student = {
  name: "Matt",
  age: 29,
};

// Длинный способ
let name = student.name;
let age = student.age;

// Короткий способ
let { name, age } = student;


// 24. Сокращенный вариант для Math.floor при округлении чисел
// Вместо функции Math.floor() для округления числа вы можете использовать оператор ~~:

// Длинный способ
Math.floor(5.25) // -> 5.0

// Короткий способ
~~5.25 // -> 5.0


// 25. Преобразование String в Number
// Вы можете применять унарный оператор (+) для преобразования string в number:

// Длинный способ
const num = parseInt("1000");

// Короткий способ
const num = +"1000";