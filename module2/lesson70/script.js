

const number = 1;

// анонимная самовызывающаяся функция, со совей областью видимости
(function(){
  let number = 2;
  console.log(number);
  console.log(number +3);
}());

console.log(number);

const user = (function(){
  const privet = function(){
    console.log('privat');
  };
  return {sayHallo: privat};
}());

user.sayHallo();