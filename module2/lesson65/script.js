'use strict'

// new RegExp('pattern', 'flags');
// /pattern/f

//searh
const ans = prompt('введите ваше имя');
const reg =/n/;
console.log(ans.search(reg));

// i - регистронезавизимый
// g - несколько вхождений, не работает для search
// m - многострочный поиск

// match
console.log(ans.match(reg));

//replace
const pass = promt('Password');
console.log(pass.replace(/./g,"*")); // замена пароля на звездочки
//  . точка это все элементы
// \ экранирование

console.log('12-11-34'.replace(/-/g, ":"));
console.log(reg.test('ans')); //true or false

// \d
// \w
// \s

// \D
// \W
// \S


str.match(/\w\d\w\d/i);
