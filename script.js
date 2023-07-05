const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu__body');
const ul = document.querySelector('.menu__body ul');
const e1 = document.getElementById('e1');
const e2 = document.getElementById('e2');
const e3 = document.getElementById('e3');

burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    menu.classList.toggle('active__menu');
    ul.classList.toggle('active__ul');
    e1.classList.toggle('active__item');
    e2.classList.toggle('active__item');
    e3.classList.toggle('active__item');
})