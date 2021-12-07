'use strict';

const box = document.querySelector('.box');

// const width  = box.clientWidth;
// const height = box.clientWidth;

// const width  = box.offsetWidth;
// const height = box.offsetWidth;

// const width  = box.scrollWidth;
// const height = box.scrollWidth;

// console.log(width, height);


btn = document.querySelector('button');

btn.addEventListener('click', () => {
  // box.style.height = box.scrollHeight + 'px';
  console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect());
console.log(box.getBoundingClientRect().top);


const style = window.getComputedStyle(box);
// можно получить стили псевдоэлементов.
console.log(style.display);


console.log(document.documentElement.scrollTop);
//страницу в начало.
document.documentElement.scrollTop = 0;

// вниз на 400 пикселей
window.scrollBy(0, 400);
// вниз относительно текущего элемента
window.scrollTo(0, 400);
