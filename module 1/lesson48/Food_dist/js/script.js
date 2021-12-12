window.addEventListener('DOMContentLoaded', function () {

  // Tabs

  let tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items');

  function hideTabContent() {

    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });

    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabContent();

  // tabsParent.addEventListener('click', function (event) {
  //   const target = event.target;
  //   if (target && target.classList.contains('tabheader__item')) {
  //     tabs.forEach((item, i) => {
  //       if (target == item) {
  //         hideTabContent();
  //         showTabContent(i);
  //       }
  //     });
  //   }
  // });

  // Timer

  const deadline = '2021-12-10';

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor((t / (1000 * 60 * 60 * 24))),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60) % 24));

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return '0' + num;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {

    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', deadline);

  //modal

  const modalTriger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('[data-close]');


  modalTriger.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    clearInterval(modalTimerId);
  }

  function closeModel() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }


  modalCloseBtn.addEventListener('click', () => {
    closeModel();
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModel();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModel();
    }
  });

  // const modalTimerId = setTimeout(openModal, 5000);

  function showModealByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
      openModal();
    }
    window.removeEventListener('scroll', showModealByScroll);
  }
  window.addEventListener('scroll', showModealByScroll);


  // CLASS FOT CARDS

  Class MenuCard{
    constructor(src, alt, title, descr, price, parentSelector, ...classes){
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      // this.classes = classes || 'menu__item';
      this.price = price;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 27;
      this.changeToUAH();
    }

    changeToUAH(){
      this.price = this.price * this.trancfer;
    }

    render(){
      const element = docement.createElement('div');

      if (this.classes.list === 0) {
        element.classList.add(this.element);
      } else {
        this.classes.forEach(className = > element.classList.add(className));
      }

      element.innerHTML = `
        <img src=${this.src} alt=${this.src}>
        <h3 class="menu__item-subtitle">Меню "Фитнес"</h3>
        <div class="menu__item-descr">Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
        </div>
      `;
      this.parent.append(element);
    }

    new MenuCard(
      "img/tabs/vegy.jpg",
      "vegy",
      'Меню "Фитнес"',
      "это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
      9,
      ".menu .container",
      "menu__item",
      "big"
    ).render();
  }
});