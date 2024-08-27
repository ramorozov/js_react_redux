'use strict';

//Получение элементов со страницы - старые способы

/* Получение элемента по уникальному идентификатору:
const имя_переменной = document.getElementById('идентификатор');
 */
const box = document.getElementById('box');
console.log(box);

/* Получение элемента по имени тега:
const имя_переменной = document.getElementsByTagName('имя_тега');
- получает все элементы с данным тегом,
- результат это псевдомассив,
- псевдомассив не обладает методами массива
 */
const btns = document.getElementsByTagName('button');
console.log(btns);
//Использование определееного элемента по номеру
console.log(btns[1]);

/* Получение элемента по имени класса:
const имя_переменной = document.getElementsByTagName('имя_класса');
- название класса пишется без точки,
- результат - псевдомассив*/
const circles = document.getElementsByClassName('circle');
console.log(circles);
//Использование определенного элемента по номеру
console.log(circles[1]);


//СОВРЕМЕННЫЕ способы получения элементов со страницы

/* Получение ВСЕХ элементов по селктору CSS (доступны все CSS селекторы):
const имя_переменной = document.querySelectorAll('.имя_класса');
- название силектора (может быть класс) пишется с точкой,
- результат - псевдомассив,
- доступен метод forEach()*/
const hearts = document.querySelectorAll('.heart');
console.log(hearts);
//Использование определенного элемента по номеру
console.log(hearts[1]);
//Перебор методом forEach
hearts.forEach(item => {
  console.log(item);
})

/* Получение ПЕРВОГО элемента по селктору CSS (доступны все CSS селекторы):
const имя_переменной = document.querySelectorAll('.имя_класса');
- название силектора (может быть класс) пишется с точкой,
- результат - псевдомассив*/
const oneHeart = document.querySelector('.heart');
console.log(oneHeart);