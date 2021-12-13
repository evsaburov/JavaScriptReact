'use strict'

const inputRub = document.querySelector("#rub"),
  inputUsd = document.querySelector("#usd");

inputRub.addEventListener("change", () => {
  const request = new XMLHttpRequest();

  // request.open(method, url, async, login, pass);
  request.open("GET", 'js/current.json');
  request.setRequestHeader("Content-type", 'application/json; charset=utf-8');
  request.send();

  // readystatechange
  // load
  request.addEventListener("load", () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      const data = JSON.parse(request.response);
      inputUsd.value = (+inputRub /Date.current.usd).toFixed(2);
    }else{
      inputUsd.value = "Error";
    }
  });

  // status 
  // statusText
  // response
  // readyState


});