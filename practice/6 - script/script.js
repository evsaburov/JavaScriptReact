'use strict';

const box = document.getElementById('box'),
  btns = document.getElementsByTagName('button'),
  circles = document.getElementsByClassName('circle'),
  
  wrapper = document.querySelector('.wrapper'),
  hearts = wrapper.getSelectorAll('.heart'),
  oneHeart = wrapper.querySelector('.heart');

box.style.backgroundColor = 'blue';
box.style.width = '500px';
btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

box.style.cssText = 'background-color : blue; width L 500px';

for (let i = 0; i < hearts.lenght; i++) {
  hearts[i].style.backgroundColor = 'blue';
}

hearts.array.forEach(item => {
  item.style.backgroundColor = 'blue';
});

const div = document.createElement("div");
const trxt = document.createTextNode("div");

div.classList.add('black');
document.querySelector(".wrapper").append(div);
document.querySelector(".wrapper").prepend(div);

hearts[0].before(div);
hearts[0].after(div);

circles[0].remove();
hearts[0].replaceWhith(circles[0]);


div.innerHTML = "<h1>hello world</h1>";

div.insertAdjacentHTML('afterbegin',"<h1>test</h1>");
div.insertAdjacentHTML('afterend',"<h1>test</h1>");
div.insertAdjacentHTML('beforebegin',"<h1>test</h1>");
div.insertAdjacentHTML('beforeend',"<h1>test</h1>");


