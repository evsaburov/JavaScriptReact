'use strict'

console.log('Запрос данных');

const req = new Promise((resolve, reejct) => {
  setTimeout(() => {
    console.log('Подготовка данных');
    const product = {
      name: 'TV',
      price: 2000
    };
    resolve(product);
  }, 2000);
});

req.then((product) => {
  return new Promise((resolve, reejct) => {
    setTimeout(() => {
      product.status = 'order';
      // reejct();
      resolve(product);
    }, 2000);
  });
}).then(data => {
  data.modify = true;
  return data;
}).then((data) => {
  console.log(data);
}).catch(() => {
  console.error('Произошла ошибка');
}).finally(() => {
  console.log('finaly');
});



const test = time => {
  return new Promise(resolve => {
    setTimeout(() => { resolve(), time });
  });
};

test(100).then(() => console.log('1000ms'));
test(200).then(() => console.log('2000ms'));

Promise.all([test(100), test(100)]).then(() => {
  console.log('All');
});

Promise.race([test(100), test(100)]).then(() => {
  console.log('All');
});