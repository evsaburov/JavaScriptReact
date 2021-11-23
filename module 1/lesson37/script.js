const btns = document.querySelectorAll('button');

console.log(btns[0].classList.length);
console.log(btns[0].classList.item(1));
console.log(btns[0].classList.add("red"));
console.log(btns[0].classList.remove("blue"));
console.log(btns[0].classList.toggle("blue"));

if (btns[1].classList.contains('red')) {
  console.log('red')
}

btns.[1].addEventListener('click', () => {

  if (!btns[1].classList.contains("red")) {
    btns[1].classList.add("red");
  } else {
    btns[1].classList.remove("red");
  }

  //or

  btns[1].classList.toggle('red')

});

//делегирование

wrapper = document.querySelector(".btn-block");
wrapper.addEventListener('click', (event) => {
  // if (event.target && event.target.tagName == "BUTTON"){
  if (event.target && event.target.classList.contains("blue")) {
    console.log('hellow');
  }
});
wrapper.addEventListener('click', (event) => {
  if (event.target && event.target.matches("button.red")){
    console.log('hellow');
  }
});

const btn = document.querySelectorAll('button');
btn.classList.add('red');
wrapper.append();

